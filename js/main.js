window.onscroll = function() {
    if (document.body.scrollTop > 220 || document.documentElement.scrollTop > 220) {
      	document.getElementById("hds").classList.add("hdBackground");
    } else {
    	document.getElementById("hds").classList.remove("hdBackground");
    }
}

function scrollBottom() {
    window.scrollTo(0, document.querySelector("#donate").scrollHeight+8);
}

function showIP(){
    document.getElementById("copyIP").style.display = "block";
}

function hideIP(){
    document.getElementById("copyIP").style.display = "none";
}

let server_name = "inecraft Server Name"
let temp = 0;
function typeWriter() {
  if (temp < server_name.length) {
    document.getElementById("servername").innerHTML += server_name.charAt(temp);
    temp++;
  }
}

setInterval(typeWriter, 50);