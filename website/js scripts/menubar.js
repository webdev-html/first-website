let imglink = 0
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
    document.getElementById("navbaricon").src = "/pictures/x.png"
    
}
//menubar
function navbarcontactpage() {
    document.getElementById("body").style.background = "lightseagreen";
    document.getElementById("homepage").innerHTML = "Home";
    document.getElementById("about").innerHTML = "About me ";
    document.getElementById("section").innerHTML = ""
    document.getElementById("port").innerHTML = "resume"
   
    if (imglink === 1) {
        document.getElementById("imglink").href = ""
        imglink = 0
    }

    if (imglink === 0) {
        imglink = 1
    }
    setTimeout(frame, 35)
    setTimeout(frame2, 70)
    setTimeout(frame3, 105)
    setTimeout(finalframe, 140)
    
}

function navbarhomepage() {
    document.getElementById("body").style.backgroundColor = "lightseagreen"
    document.getElementById("about").innerHTML = "About me"
    document.getElementById("section").innerHTML = ""
    document.getElementById("contacts").innerHTML = "contacts and socials"
    document.getElementById("port").innerHTML = "resume"
   
    if (imglink === 1) {
        document.getElementById("imglink").href = ""
        imglink = 0
    }

    if (imglink === 0) {
        imglink = 1
    }
    setTimeout(frame, 35)
    setTimeout(frame2, 70)
    setTimeout(frame3, 105)
    setTimeout(finalframe, 140)

    
}

function navbaraboutme() {
    document.getElementById("body").style.backgroundColor = "lightseagreen"
    document.getElementById("contacts").innerHTML = "contacts and socials"
    document.getElementById("section").innerHTML = ""
    document.getElementById("port").innerHTML = "resume"
    document.getElementById("homepage").innerHTML = "home"
    
   
    if (imglink === 1) {
        document.getElementById("imglink").href = ""
        imglink = 0
    }

    if (imglink === 0) {
        imglink = 1
    }
    setTimeout(frame, 35)
    setTimeout(frame2, 70)
    setTimeout(frame3, 105)
    setTimeout(finalframe, 140)
}

function navbarport() {
    icon = true
    document.getElementById("body").style.backgroundColor = "lightseagreen"
    document.getElementById("contacts").innerHTML = "contacts and socials"
    document.getElementById("homepage").innerHTML = "Home"
    document.getElementById("section").innerHTML = ""
    document.getElementById("about").innerHTML = "about me"
    
  
    if (imglink === 1) {
        document.getElementById("imglink").href = ""
        imglink = 0
    }

    if (imglink === 0) {
        imglink = 1
    }

    
    setTimeout(frame, 35)
    setTimeout(frame2, 70)
    setTimeout(frame3, 105)
    setTimeout(finalframe, 140)

   
   
    
   
}




