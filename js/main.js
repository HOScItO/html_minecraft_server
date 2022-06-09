window.onscroll = function() {
    if (document.body.scrollTop > 220 || document.documentElement.scrollTop > 220) {
      	document.getElementById("hds").classList.add("hdBackground");
    } else {
    	document.getElementById("hds").classList.remove("hdBackground");
    }
}