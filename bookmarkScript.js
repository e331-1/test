for(const element of document.getElementsByTagName('a')){
    if(element.href.indexOf('https://www.youtube.com/watch?v=')!=-1){
        element.href=element.href.replace('www.youtube.com/watch?v=','192.168.0.40/y/play.php?v=');
        element.style.color='green'
    }
}
