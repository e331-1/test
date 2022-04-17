const menu = (function(){
    const menu_open = document.getElementById("menu_open")
    const menu_outside = document.getElementById("menu_outside")
    const menu = document.getElementById("menu")
    return{
        open:function(){
            menu_open.style.display="none"
            menu_outside.style.display="block"
            menu.style.display="block"
        },
        close:function(){
            menu_open.style.display="block"
            menu_outside.style.display="none"
            menu.style.display="none"
        }
    }
}())

const howToInstall = function(){
    /*display.innerHTML=`
        <p style="border-bottom: blue solid 1px;width: 100%;margin: 0px;">インストール方法</p>
        <p>1.右上の「︙」を押し、「アプリをインストール」を押す</p>
        <p>2:「インストール」を押す</p>
        <p>インストール完了!</p>
    `*/
    var display = document.getElementById("how_to_install")

    var userAgent = window.navigator.userAgent.toLowerCase();

    if(userAgent.indexOf('iphone') != -1) {
        console.log('iPhoneをお使いですね');
    } else if(userAgent.indexOf('ipad') != -1) {
        console.log('iPadをお使いですね');
    } else if(userAgent.indexOf('android') != -1) {
        if(userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1) {
            display.innerHTML='AndroidのInternet Explorerをお使いですね';
        } else if(userAgent.indexOf('edge') != -1) {
            display.innerHTML='AndroidのEdgeをお使いですね';
        } else if(userAgent.indexOf('chrome') != -1) {
            display.innerHTML='AndroidのGoogle Chromeをお使いですね';
        } else if(userAgent.indexOf('safari') != -1) {
            display.innerHTML='AndroidのSafariをお使いですね';
        } else if(userAgent.indexOf('firefox') != -1) {
            display.innerHTML=`
                <p style="border-bottom: blue solid 1px;width: 100%;margin: 0px;">インストール方法(android向けfirefox)</p>
                <p>1.右上の「︙」を押し、「アプリをインストール」を押す</p>
                <p>2:「インストール」を押す</p>
                <p>インストール完了!</p>
            `
        } else if(userAgent.indexOf('opera') != -1) {
            display.innerHTML='AndroidのOperaをお使いですね';
        } else {
            display.innerHTML='そんなブラウザは知らん';
        }  
    } 
}

