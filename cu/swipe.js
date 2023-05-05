

class swipe{
    constructor(movedElement,option) {
        var thisClass=this
        this.movedElement=movedElement
        this.movedElementInterval=movedElement.children[0].clientWidth
        this.option=option

        if(option.swipeableElement==undefined){
            this.swipeableElement=movedElement
        }else{
            this.swipeableElement=option.swipeableElement
        }

        //スワイプ判定に必要な情報を置いておくとこ
        var touchStart={
            i:0,
            swiping:false
        }
        let movedElementInterval=movedElement.children[0].clientWidth
    
        //ページ変更したときに呼び出す関数を最初に呼び出すことで、工夫する必要なし!
        option.pageChanged({
            page:Math.abs(Number(movedElement.style.left.replace('px','')))/movedElementInterval
        })
        //一応バグ対策でスクロール位置リセット。たぶん意味ない
        window.scrollTo(0, 0);

        //ウィンドウサイズが変わった時
        window.addEventListener('resize', function(){
            console.log("resize")
            thisClass.movedElementInterval=movedElement.children[0].clientWidth
            movedElementInterval=movedElement.children[0].clientWidth
            console.log(`
            ${movedElement.children.length*movedElementInterval}
            :
            ${Math.round(Math.abs(Number(document.getElementsByClassName("selectAreaLists")[0].style.left.replace('px','')))/movedElementInterval)*movedElementInterval}
            `)
            document.getElementsByClassName("selectAreaLists")[0].style.left=(

                (Math.min(movedElement.children.length*movedElementInterval,Math.round(Math.abs(Number(document.getElementsByClassName("selectAreaLists")[0].style.left.replace('px','')))/movedElementInterval)*movedElementInterval))*-1)
                +"px"

        });


        this.swipeableElement.addEventListener("touchstart", function(){
            for ( const touch of event.changedTouches ){
                //タッチ開始地点を記録
                touchStart.x=touch.screenX
                touchStart.y=touch.screenY
                touchStart.elementX=Number(movedElement.style.left.replace('px',''))
            }
        })
        this.swipeableElement.addEventListener("touchmove", () => {
                if(((Math.abs(touchStart.x-event.changedTouches[0].screenX)>10)&&(Math.abs(touchStart.y-event.changedTouches[0].screenY)<20))&&touchStart.i<5){
                    //スワイプ判定オン
                    touchStart.swiping=true
                }else{
                    touchStart.i++
                }

                if(touchStart.swiping){
                    //開始地点からある程度指を動かしたらスワイプしていると判定、selectAreaListsを動かす
                    movedElement.style.left=(-(touchStart.x-event.changedTouches[0].screenX-touchStart.elementX))+"px"
                }
            console.log(event.changedTouches)
        })
        this.swipeableElement.addEventListener("touchend", function(){
            //スワイプ終わったから、スワイプ判定を消す
            touchStart.swiping=false
            touchStart.i=0

            //タッチ終了時、中途半端な位置にあるselectAreaListsをピッタリの位置にもって行く
            if((Math.abs(touchStart.elementX-Number(movedElement.style.left.replace('px','')))>30)){
                if(Math.sign(touchStart.elementX-Number(movedElement.style.left.replace('px','')))==-1){
                    if(Number(movedElement.style.left.replace('px',''))<0){
                        thisClass.moveElement(movedElement,touchStart.elementX+movedElementInterval)
                        option.pageChanged({
                            page:Math.round(Math.abs(touchStart.elementX+movedElementInterval)/movedElementInterval)
                        })
                    }else{
                        //前へ行き過ぎてバグらないようにする
                        thisClass.moveElement(movedElement,touchStart.elementX)
                        option.pageChanged({
                            page:Math.round(Math.abs(touchStart.elementX)/movedElementInterval)
                        })
                    }
                }else{
                    if(!((Math.abs(touchStart.elementX-movedElementInterval)/(movedElementInterval))>(movedElement.children.length-1))){
                        thisClass.moveElement(movedElement,touchStart.elementX-movedElementInterval)
                        option.pageChanged({
                            page:Math.round(Math.abs(touchStart.elementX-movedElementInterval)/movedElementInterval)
                        })
                    }else{
                        //次へ行き過ぎてバグらないようにする
                        thisClass.moveElement(movedElement,touchStart.elementX)
                        option.pageChanged({
                            page:Math.round(Math.abs(touchStart.elementX)/movedElementInterval)
                        })
                    }
                }
            }else{
                thisClass.moveElement(movedElement,touchStart.elementX)
                option.pageChanged({
                    page:Math.round(Math.abs(touchStart.elementX)/movedElementInterval)
                })
            }
        })    
    }
    to(inputNumber){
        console.log(this.movedElementInterval)
        this.moveElement(this.movedElement,inputNumber*this.movedElementInterval*-1)
        this.option.pageChanged({
            page:inputNumber
        })
    }
    moveElement(movedElement,to){
        var movedElementAnimation=movedElement.animate(
            {
              left: [movedElement.style.left,to+"px"],
            },
            {
              // 終了時の状態で止める
              fill: "forwards",
              // 3000ミリ秒（＝3秒）かけてアニメーション
              duration: 100
            }
        );
        //animationが終わったら、animationを消して、leftプロパティで動かせるようにする
        movedElementAnimation.addEventListener("finish",function(){
            movedElementAnimation.commitStyles()
            movedElementAnimation.cancel()
        })
    }
}

//ブラウザでスクロール位置を記憶するとバグるので、禁止
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}


var selectAreaListsSwipe
document.addEventListener("DOMContentLoaded", function() {

    //selectAreaListsをスワイプできるようにする
    selectAreaListsSwipe = new swipe(document.getElementsByClassName("selectAreaLists")[0],{
        pageChanged:function(result){
            console.log("ページ"+result.page)
            for (const element of document.getElementsByClassName("selectAreaCategoryButton")) {
                element.classList.remove("selected")
            }
            document.getElementsByClassName("selectAreaCategoryButton")[result.page].classList.add("selected")
        }
    })

});


