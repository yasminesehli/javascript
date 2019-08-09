function bold()
{
   
    var getText= document.getElementById("textarea");
    getText.style.fontWeight="Bolder";
   
}
function Italic()
{
   
    var getText= document.getElementById("textarea");
    getText.style.fontStyle="italic";
}

function under()
{
    var getText= document.getElementById("textarea");
    getText.style.textDecoration="Underline"; 
}


var fontSize = document.getElementById('list');
fontSize.onchange = function () {
    var txtBox = document.getElementById("textarea")
    txtBox.style.fontSize = this.value +"px";
};

function Font() {
    var myselect = document.getElementById("list2");   
    var font = myselect.options[myselect.selectedIndex].value;   
    document.getElementById("textarea").style.fontFamily = font;  
}



