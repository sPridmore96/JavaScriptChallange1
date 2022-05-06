
//function now shows the pos and neg result in a <p> under the <input>

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

//function for checking the largest value. can only complete this with number 0-9 

// function handleValueCheck() {
//     const userNumber1 = parseFloat(document.getElementById('userNumber1').value)
//     const userNumber2 = parseFloat(document.getElementById('userNumber2').value)
//     const userNumber3 = parseFloat(document.getElementById('userNumber3').value)
 

//          if ( userNumber1.value > userNumber2.value && userNumber1.value > userNumber3.value ){
//             return userNumber1.value;
//         } else if (userNumber2.value > userNumber1.value && userNumber2.value > userNumber3.value) {
//             return userNumber2.value;
//         } else if (userNumber3.value > userNumber2.value && userNumber3.value > userNumber1.value){
//             return userNumber3.value;
//         } else {
//             return ("Enter different numbers")
//         }   
// }



//function to show how many days are to the weekend using real date

function daysTillWeekend(){
    
    switch (new Date().getDay()) {
        
    case 0 :
        return  "it's already the weekend"
        break;
    case 1:
        return "5 days to go!"
        break;
    case 2:
        return "4 days to go!"  
        break;
    case 3:
        return "3 days to go!"
        break;
    case 4:
        return "2 days to go!"
        break;
    case 5:
        return "1 days to go!"
        break;
    case 6:
        return "it's already the weekend"
        break;
    }
}
console.log(new Date().getDate())
//function for when the user selects an item of food it will display the price

function handleFoodPrices (event) {

    let foodChoice = event.target.value

    switch (foodChoice) {
        case "Select your food here":
            return "Items price"
        case "potatoes":
        case "carrots":
             return "£1.50 per Kg ";
        case "brocolli":
            return "£1"
        case "cabbage":
            return "£0.90"
        case "asparagus":
            return "£2.50 per Kg";
    }
}
