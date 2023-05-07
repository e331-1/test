function showChannel(){
    console.log(event.target.className )
    if(event.target.className=="selectAreaListButton"){
        event.target.classList.add("selected")
    }else{
        event.target.parentNode.classList.add("selected")
    }
    mainAreaSwipe.to(1)
}