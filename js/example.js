window.onload = function (){
    var testdiv = document.getElementById("testdiv")
    var para = document.createElement("p")
    var firstTxt = document.createTextNode("This is ")
    var em = document.createElement("em")
    var secondTxt = document.createTextNode("my")
    em.appendChild(secondTxt)
    var thirdTxt = document.createTextNode(" content.")
    para.appendChild(firstTxt)
    para.appendChild(em)
    para.appendChild(thirdTxt)
    testdiv.appendChild(para)
}
