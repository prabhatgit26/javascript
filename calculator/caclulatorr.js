function add(){
    var firstValue=parseInt(document.getElementById("firstValue").value);
    var secondValue=parseInt(document.getElementById("secondValue").value);
    
    var result=firstValue+secondValue;
    var res = confirm("Do you want display result?");
    // if (res == true){  
    //     result = "You have selected OK!";  
    // } else {  
    //     result = "You have selected Cancelled!";  
    // }  
    document.getElementById('result').innerHTML=result;  
  
}
function sub(){
    var firstValue=parseInt(document.getElementById("firstValue").value);
    var secondValue=parseInt(document.getElementById("secondValue").value);
    
    var result=firstValue-secondValue;
    var res = confirm("Do you want display result?");  

    document.getElementById('result').innerHTML=result;
}
function mult(){
    var firstValue=parseInt(document.getElementById("firstValue").value);
    var secondValue=parseInt(document.getElementById("secondValue").value);
    
    var result=firstValue*secondValue;
    var res = confirm("Do you want display result?");  

    document.getElementById('result').innerHTML=result;
}
function div(){
    var firstValue=parseInt(document.getElementById("firstValue").value);
    var secondValue=parseInt(document.getElementById("secondValue").value);
    
    var result=firstValue/secondValue;
    var res = confirm("Do you want display result?");  

    document.getElementById('result').innerHTML=result;
}
function mod(){
    var firstValue=parseInt(document.getElementById("firstValue").value);
    var secondValue=parseInt(document.getElementById("secondValue").value);
    
    var result=firstValue%secondValue;
    var res = confirm("Do you want display result?");  

    document.getElementById('result').innerHTML=result;
}


