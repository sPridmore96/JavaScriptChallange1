
//function now get the pos and neg result in console.log ||| Can't display result ATM


function handleTestNumber() {
    const testNumber = document.getElementById("numberCheck");
    
    if (testNumber.value < 0){
    return  ("negative");
    } else if (testNumber.value >= 0) {
        return ("positive");
    } else {
        console.log("Value")
        return ("Enter a valid Value")
    }

}






