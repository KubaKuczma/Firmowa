 document.getElementsByClassName("menu")[0].onclick = function(){
    if (document.getElementsByClassName("toggler")[0].checked == true) {
        document.getElementsByClassName("toggler")[0].checked = false
    } else {
        document.getElementsByClassName("toggler")[0].checked = true
        
    }
}
