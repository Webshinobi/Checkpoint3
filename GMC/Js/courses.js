function Bold() {
 document.getElementById('textarea').style.fontWeight='900';
}

function Underline() {
 document.getElementById('textarea').style.textDecoration='underline';
}

function Italic() {
document.getElementById('textarea').style.fontStyle='italic';
}

function changesize(){
    document.getElementById('textarea').style.fontSize=document.getElementById('selectSize').value;
}

function changefont(){
    document.getElementById('textarea').style.fontFamily=document.getElementById('selectFont').value;
}