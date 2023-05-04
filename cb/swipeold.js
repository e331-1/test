

class swipe{
    constructor(swipeableElement) {
        var thisClass=this
        var touchStart={
            i:0,
            swiping:false
        }
        const swipeableElementInterval=swipeableElement.children[0].clientWidth
    
        //スクロール位置がおかしくなっても再読み込みで治せるように、スクロール位置をリセット
        window.scrollTo(0, 0);
    
        swipeableElement.addEventListener("touchstart", function(){
            for ( const touch of event.changedTouches ){
                //タッチ開始地点を記録
                touchStart.x=touch.screenX
                touchStart.y=touch.screenY
                touchStart.elementX=Number(swipeableElement.style.left.replace('px',''))
            }
        })
        swipeableElement.addEventListener("touchmove", () => {
            for ( const touch of event.changedTouches ){

                console.log(`
                X:${touchStart.x-touch.screenX}
                Y:${touchStart.y-touch.screenY}
                `)

                    //開始地点からある程度指を動かしたらスワイプしていると判定、selectAreaListsを動かす
                    swipeableElement.style.left=(-(touchStart.x-touch.screenX-touchStart.elementX))+"px"
                    console.log(touchStart.x-touch.screenX-touchStart.elementX)
                //console.log(`X:${touchStart.x-touch.screenX}/Y:${touchStart.y-touch.screenY}`)
            }
            console.log(event.changedTouches)
        })
        swipeableElement.addEventListener("touchend", function(){
            console.log(Number(swipeableElement.style.left.replace('px','')))
            console.log(Number(swipeableElement.style.left.replace('px',''))/(swipeableElementInterval/2))
            console.log(Math.round( Number(swipeableElement.style.left.replace('px',''))/(swipeableElementInterval)))
    
            //これだ!!
            console.log("移動距離:"+(touchStart.elementX-Number(swipeableElement.style.left.replace('px',''))))

            //スワイプ終わったから、スワイプ判定を消す
            //タッチ終了時、中途半端な位置にあるselectAreaListsをピッタリの位置にもって行く
            if(Math.abs(touchStart.elementX-Number(swipeableElement.style.left.replace('px','')))>30){
                if(Math.sign(touchStart.elementX-Number(swipeableElement.style.left.replace('px','')))==-1){
                    console.log("前へ")
                    thisClass.moveElement(swipeableElement,touchStart.elementX+swipeableElementInterval)
                }else{
                    console.log("次へ")
                    thisClass.moveElement(swipeableElement,touchStart.elementX-swipeableElementInterval)
                }
            }else{
                console.log("戻す")
                thisClass.moveElement(swipeableElement,touchStart.elementX)
            }
        })    
    }
    to(inputNumber){
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
            console.log("finish")
            swipeableElementAnimation.commitStyles()
            swipeableElementAnimation.cancel()
        })
    }
}

//ブラウザでスクロール位置を記憶するとバグるので、禁止
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
//一応バグ対策でスクロール位置リセット。たぶん意味ない
document.addEventListener("DOMContentLoaded", function() {
    window.scrollTo(0, 0);
    var swipepp = new swipe(document.getElementsByClassName("selectAreaLists")[0])
});



