for(const element of document.getElementsByTagName('a')){
    if(element.href.indexOf('https://www.youtube.com/watch?v=')!=-1){
        element.href=element.href.replace('www.youtube.com/watch?v=','e331.f5.si/y/play.php?v=')
    }
}
