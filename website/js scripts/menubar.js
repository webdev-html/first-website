function navbarcontactpage() {
    document.getElementById("body").style.background = "blue";
    document.getElementById("homepage").innerHTML = "Home";
    document.getElementById("about").innerHTML = "About me ";
    document.getElementById("section").innerHTML = ""
    document.getElementById("navbaricon").src = "/pictures/navbarx.jpg"
    document.getElementById("return").innerHTML = "back to page"
}

function navbarhomepage() {
    document.getElementById("body").style.backgroundColor = "blue"
    document.getElementById("about").innerHTML = "About me"
    document.getElementById("section").innerHTML = ""
    document.getElementById("navbaricon").src = "/pictures/navbarx.jpg"
    document.getElementById("return").innerHTML = "back to page"
    document.getElementById("contacts").innerHTML = "contacts and socials"
}

function navbaraboutme() {
    document.getElementById("body").style.backgroundColor = "blue"
    document.getElementById("contacts").innerHTML = "contacts and socials"
    document.getElementById("homepage").innerHTML = "Home"
    document.getElementById("about").innerHTML = "back to page"
    document.getElementById("navbaricon").src = "/pictures/navbarx.jpg"
    document.getElementById("section").innerHTML = ""

}