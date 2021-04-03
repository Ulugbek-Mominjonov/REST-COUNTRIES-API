var a=0;
function dark(){
  if(a==0){
    if(!document.getElementById('id2')) {
      var link = document.createElement('link');
      link.id = 'id2';
      link.rel = 'stylesheet';
      link.href = 'style/dark.css';
      document.head.appendChild(link);
      a=1;
  }
}
  else{
    var element = document.getElementById("id2");
	  element.parentNode.removeChild(element);
    a=0;
}
}