//animations for menubar and menubar items

function frame() {
    document.getElementById("navbaricon").src = "/pictures/frame2.png"
}

function frame2() {
    document.getElementById("navbaricon").src = "/pictures/frame3.png"
}

function frame3() {
    document.getElementById("navbaricon").src = "/pictures/frame4.png"
}

function finalframe() {
    document.getElementById("navbaricon").src = "/pictures/finalframe.png"
}


//menubar
function navbarcontactpage() {
    document.getElementById("body").style.background = "lightseagreen";
    document.getElementById("homepage").innerHTML = "Home";
    document.getElementById("about").innerHTML = "About me ";
    document.getElementById("section").innerHTML = ""
    document.getElementById("return").innerHTML = "back to page"
    document.getElementById("navbaricon").style.cursor = "auto"
    document.getElementById("port").innerHTML = "resume"
    document.getElementById("return").style.fontSize = "170%"
    document.getElementById("homepage").style.fontSize = "170%"
    document.getElementById("port").style.fontSize = "170%"
    document.getElementById("about").style.fontSize = "170%"
    
    setTimeout(frame, 35)
    setTimeout(frame2, 70)
    setTimeout(frame3, 105)
    setTimeout(finalframe, 140)
    
}

function navbarhomepage() {
    document.getElementById("body").style.backgroundColor = "lightseagreen"
    document.getElementById("about").innerHTML = "About me"
    document.getElementById("section").innerHTML = ""
    document.getElementById("return").innerHTML = "back to page"
    document.getElementById("contacts").innerHTML = "contacts and socials"
    document.getElementById("navbaricon").style.cursor = "auto"
    document.getElementById("port").innerHTML = "resume"
    document.getElementById("return").style.fontSize = "170%"
    document.getElementById("contacts").style.fontSize = "170%"
    document.getElementById("port").style.fontSize = "170%"
    document.getElementById("about").style.fontSize = "170%"
    setTimeout(frame, 35)
    setTimeout(frame2, 70)
    setTimeout(frame3, 105)
    setTimeout(finalframe, 140)

    
}

function navbaraboutme() {
    document.getElementById("body").style.backgroundColor = "lightseagreen"
    document.getElementById("contacts").innerHTML = "contacts and socials"
    document.getElementById("homepage").innerHTML = "Home"
    document.getElementById("about").innerHTML = "back to page"
    document.getElementById("section").innerHTML = ""
    document.getElementById("port").innerHTML = "resume"
    document.getElementById("navbaricon").style.cursor = "auto"
    document.getElementById("return").style.fontSize = "170%"
    document.getElementById("homepage").style.fontSize = "170%"
    document.getElementById("port").style.fontSize = "170%"
    document.getElementById("contacts").style.fontSize = "170%"
    setTimeout(frame, 35)
    setTimeout(frame2, 70)
    setTimeout(frame3, 105)
    setTimeout(finalframe, 140)
}

function navbarport() {
    document.getElementById("body").style.backgroundColor = "lightseagreen"
    document.getElementById("contacts").innerHTML = "contacts and socials"
    document.getElementById("homepage").innerHTML = "Home"
    document.getElementById("return").innerHTML = "back to page"
    document.getElementById("section").innerHTML = ""
    document.getElementById("about").innerHTML = "about me"
    document.getElementById("navbaricon").style.cursor = "auto"
    document.getElementById("return").style.fontSize = "170%"
    document.getElementById("homepage").style.fontSize = "170%"
    document.getElementById("contacts").style.fontSize = "170%"
    document.getElementById("about").style.fontSize = "170%"
    setTimeout(frame, 35)
    setTimeout(frame2, 70)
    setTimeout(frame3, 105)
    setTimeout(finalframe, 140)

}

