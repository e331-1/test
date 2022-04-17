if(location.protocol=="http:"){
    if(location.hostname!=="192.168.0.40"){
        location.href="https"+location.href.substr(4);
    }
}
document.getElementById("menu_button").onclick = function() {
    menu.close()
};
document.getElementById("menu_open").onclick = function() {
    menu.open()
};
document.getElementById("menu_outside").onclick = function() {
    menu.close()
};
