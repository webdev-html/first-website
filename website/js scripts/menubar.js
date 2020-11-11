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
function navbarcontactpage() {
    document.getElementById("body").style.background = "lightseagreen";
    document.getElementById("homepage").innerHTML = "Home";
    document.getElementById("about").innerHTML = "About me ";
    document.getElementById("section").innerHTML = ""
    document.getElementById("return").innerHTML = "back to page"
    document.getElementById("navbaricon").style.cursor = "auto"
    document.getElementById("port").innerHTML = "portfolio"

    setTimeout(frame, 50)
    setTimeout(frame2, 100)
    setTimeout(frame3, 150)
    setTimeout(finalframe, 200)
    
    
}

function navbarhomepage() {
    document.getElementById("body").style.backgroundColor = "lightseagreen"
    document.getElementById("about").innerHTML = "About me"
    document.getElementById("section").innerHTML = ""
    document.getElementById("return").innerHTML = "back to page"
    document.getElementById("contacts").innerHTML = "contacts and socials"
    document.getElementById("navbaricon").style.cursor = "auto"
    document.getElementById("port").innerHTML = "portfolio"
    setTimeout(frame, 50)
    setTimeout(frame2, 100)
    setTimeout(frame3, 150)
    setTimeout(finalframe, 200)

    
}

function navbaraboutme() {
    document.getElementById("body").style.backgroundColor = "lightseagreen"
    document.getElementById("contacts").innerHTML = "contacts and socials"
    document.getElementById("homepage").innerHTML = "Home"
    document.getElementById("about").innerHTML = "back to page"
    document.getElementById("section").innerHTML = ""
    document.getElementById("port").innerHTML = "portfolio"
    document.getElementById("navbaricon").style.cursor = "auto"
    setTimeout(frame, 50)
    setTimeout(frame2, 100)
    setTimeout(frame3, 150)
    setTimeout(finalframe, 200)
}

function navbarport() {
    document.getElementById("body").style.backgroundColor = "lightseagreen"
    document.getElementById("contacts").innerHTML = "contacts and socials"
    document.getElementById("homepage").innerHTML = "Home"
    document.getElementById("return").innerHTML = "back to page"
    document.getElementById("section").innerHTML = ""
    document.getElementById("about").innerHTML = "about me"
    document.getElementById("navbaricon").style.cursor = "auto"
    setTimeout(frame, 50)
    setTimeout(frame2, 100)
    setTimeout(frame3, 150)
    setTimeout(finalframe, 200)

}
