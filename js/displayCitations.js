function displayCitations() {
    var quotes = document.getElementsByTagName("blockquote");
    var cites = new Array();
    if (quotes.length < 1) return false;
    // 获取引用
    for (var i = 0; i < quotes.length; i++) {
        cites[i] = quotes[i].getAttribute("cite");
    }
    // 

}