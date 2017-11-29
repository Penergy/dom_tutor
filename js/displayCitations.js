addLoadEvent(displayCitations);

function displayCitations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) {
        return false;
    }
    // get all citations
    var quotes = document.getElementsByTagName("blockquote");
    // iterate all citations
    for (var i = 0; i < quotes.length; i++) {
        // if no cite than continue
        if (!quotes[i].getAttribute("cite")) continue;
        // save citation
        var url = quotes[i].getAttribute("cite");
        //
        var quoteChildren = quotes[i].getElementsByTagName("*");
        //
        if (quoteChildren.length < 1) continue;
        //
        var elem = quoteChildren[quoteChildren.length -1];
        // 
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        //
        elem.appendChild(superscript);
    }
}