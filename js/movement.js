function start(){
  document.getElementById("cutmenu").style.display = "none";
  document.getElementById("Brightness").style.display = "none";
  document.getElementById('textforothers').disabled = true;
}

function onButtonClick(){
if (document.form1.cut.checked == true && document.form1.color.checked == true){
    document.getElementById("cutmenu").style.display = 'inline';
    document.getElementById("Brightness").style.display = "inline";
}else if(document.form1.color.checked == true){
    document.getElementById("Brightness").style.display = "inline";
    document.getElementById("cutmenu").style.display = 'none';
}else{
    document.getElementById("cutmenu").style.display = 'none';
    document.getElementById("Brightness").style.display = "none";
}
}

function connecttext(textid, ischecked){
  document.getElementById(textid).disabled = !ischecked;
}

start();