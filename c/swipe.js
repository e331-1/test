

class swipe{
    constructor(swipeableElement,option) {
        var thisClass=this
        this.swipeableElement=swipeableElement
        this.swipeableElementInterval=swipeableElement.children[0].clientWidth
        this.option=option

        //スワイプ判定に必要な情報を置いておくとこ
        var touchStart={
            i:0,
            swiping:false
        }
        let swipeableElementInterval=swipeableElement.children[0].clientWidth
    
        //ページ変更したときに呼び出す関数を最初に呼び出すことで、工夫する必要なし!
        option.pageChanged({
            page:Math.abs(Number(swipeableElement.style.left.replace('px','')))/swipeableElementInterval
        })
        //一応バグ対策でスクロール位置リセット。たぶん意味ない
        window.scrollTo(0, 0);

        //ウィンドウサイズが変わった時
        window.addEventListener('resize', function(){
            this.swipeableElementInterval=swipeableElement.children[0].clientWidth
            swipeableElementInterval=swipeableElement.children[0].clientWidth

        });


        swipeableElement.addEventListener("touchstart", function(){
            for ( const touch of event.changedTouches ){
                //タッチ開始地点を記録
                touchStart.x=touch.screenX
                touchStart.y=touch.screenY
                touchStart.elementX=Number(swipeableElement.style.left.replace('px',''))
            }
        })
        swipeableElement.addEventListener("touchmove", () => {
                if(((Math.abs(touchStart.x-event.changedTouches[0].screenX)>10)&&(Math.abs(touchStart.y-event.changedTouches[0].screenY)<50))&&touchStart.i<5){
                    //スワイプ判定オン
                    touchStart.swiping=true
                }else{
                    touchStart.i++
                }

                if(touchStart.swiping){
                    //開始地点からある程度指を動かしたらスワイプしていると判定、selectAreaListsを動かす
                    swipeableElement.style.left=(-(touchStart.x-event.changedTouches[0].screenX-touchStart.elementX))+"px"
                }
            console.log(event.changedTouches)
        })
        swipeableElement.addEventListener("touchend", function(){
            //スワイプ終わったから、スワイプ判定を消す
            touchStart.swiping=false
            touchStart.i=0

            //タッチ終了時、中途半端な位置にあるselectAreaListsをピッタリの位置にもって行く
            if((Math.abs(touchStart.elementX-Number(swipeableElement.style.left.replace('px','')))>30)){
                if(Math.sign(touchStart.elementX-Number(swipeableElement.style.left.replace('px','')))==-1){
                    if(Number(swipeableElement.style.left.replace('px',''))<0){
                        thisClass.moveElement(swipeableElement,touchStart.elementX+swipeableElementInterval)
                        option.pageChanged({
                            page:Math.abs(touchStart.elementX+swipeableElementInterval)/swipeableElementInterval
                        })
                    }else{
                        //前へ行き過ぎてバグらないようにする
                        thisClass.moveElement(swipeableElement,touchStart.elementX)
                        option.pageChanged({
                            page:Math.abs(touchStart.elementX)/swipeableElementInterval
                        })
                    }
                }else{
                    if(!((Math.abs(touchStart.elementX-swipeableElementInterval)/(swipeableElementInterval))>(swipeableElement.children.length-1))){
                        thisClass.moveElement(swipeableElement,touchStart.elementX-swipeableElementInterval)
                        option.pageChanged({
                            page:Math.abs(touchStart.elementX-swipeableElementInterval)/swipeableElementInterval
                        })
                    }else{
                        //次へ行き過ぎてバグらないようにする
                        thisClass.moveElement(swipeableElement,touchStart.elementX)
                        option.pageChanged({
                            page:Math.abs(touchStart.elementX)/swipeableElementInterval
                        })
                    }
                }
            }else{
                thisClass.moveElement(swipeableElement,touchStart.elementX)
                option.pageChanged({
                    page:Math.abs(touchStart.elementX)/swipeableElementInterval
                })
            }
        })    
    }
    to(inputNumber){
        this.moveElement(this.swipeableElement,inputNumber*this.swipeableElementInterval*-1)
        this.option.pageChanged({
            page:inputNumber
        })
    }
    moveElement(swipeableElement,to){
        var swipeableElementAnimation=swipeableElement.animate(
            {
              left: [swipeableElement.style.left,to+"px"],
            },
            {
              // 終了時の状態で止める
              fill: "forwards",
              // 3000ミリ秒（＝3秒）かけてアニメーション
              duration: 100
            }
        );
        //animationが終わったら、animationを消して、leftプロパティで動かせるようにする
        swipeableElementAnimation.addEventListener("finish",function(){
            swipeableElementAnimation.commitStyles()
            swipeableElementAnimation.cancel()
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


