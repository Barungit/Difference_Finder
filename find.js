function tell(){
    var text1 = document.getElementById("text1").value; 
    var text2 = document.getElementsByName("text2")[0].value;
    if(text1===text2){
        document.getElementById("diff").value = "No Diff";     
    } else {
        //document.getElementById("diff").value = text1+text2; 
        printDiff(text1,text2);
    }
}

function printDiff(t1,t2) {
    document.getElementById("diff").value = "";
    var countLine1 = 0;
    var countLine2 = 0;
    //console.log("In Print Difference");
    var input = document.getElementById("input").value;
    const inputs= input.split('\n');
    const textL = t1.split('\n');
    const textR = t2.split('\n');
    console.log(textL.length);
    console.log(textR.length);

    for(i= 0,j=0; i<textL.length &&j<textR.length;i++,j++){
        if(textL[i]!==textR[j]){
            console.log("Input: "+inputs[i] +"  "+textL[i]+" --> "+textR[j] + "  (Line: " + (i+1) + " )\n");
            document.getElementById("diff").value += "Input: "+inputs[i] +" || Output: "+textL[i]+" --> "+textR[j] + "  (Line: " + (i+1) + " )\n"; 
        }
    }
}