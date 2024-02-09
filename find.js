function tell(){
    console.log("Barun");
    var text1 = document.getElementById("text1").value; 
    var text2 = document.getElementsByName("text2")[0].value;
    document.getElementById("diff").value = text1+text2; 
    console.log(text1+text2);
    //console.log(text2);
}