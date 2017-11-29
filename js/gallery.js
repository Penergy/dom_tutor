// window.onload = prepareGallery;
addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder)

function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return !showPic(this);
        }
    }
}

function preparePlaceholder() {
    if (!document.createElement) return false
    if (!document.createTextNode) return false
    if (!document.getElementById) return false
    if (!document.getElementById("imagegallery")) return false
    var placeholder = document.createElement("img")
    placeholder.setAttribute("id", "placeholder")
    placeholder.setAttribute("src", "images/placeholder.png")
    placeholder.setAttribute("alt", "my image gallery")
    var para = document.createElement("p")
    para.setAttribute("id", "description")
    var txt = document.createTextNode("Choose an image.")
    para.appendChild(txt)
    var gallery = document.getElementById("imagegallery")
    insertAfter(placeholder,gallery)
    insertAfter(para, placeholder)
}

function insertAfter(newElement, targetElement){
    var parent = targetElement.parentNode
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement)
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling)
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute('src', source);
    if (document.getElementById("description")) {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        var description = document.getElementById("description");
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
}

function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            showPic(this);
            return false;
        }
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

