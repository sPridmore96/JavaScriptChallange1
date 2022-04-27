
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

//function for checking the largest value. 

function handleValueCheck() {
    const userNumber1 = document.getElementById('userNumber1')
    const userNumber2 = document.getElementById('userNumber2')
    const userNumber3 = document.getElementById('userNumber3')
 
         if ( userNumber1.value > userNumber2.value && userNumber1.value > userNumber3.value ){
            return userNumber1.value;
        } else if (userNumber2.value > userNumber1.value && userNumber2.value > userNumber3.value) {
            return userNumber2.value;
        } else if (userNumber3.value > userNumber2.value && userNumber3.value > userNumber1.value){
            return userNumber3.value;
        } else {
            return ("Enter different numbers")
    }
}

//     switch (userNumber1.value, userNumber2.value, userNumber3.value) {
//         case userNumber1.value:
//             userNumber1.value > userNumber2.value
//             userNumber1.value >userNumber3.value
//             console.log(userNumber1.value)
//             return userNumber1.value
//             break;
//         case userNumber2.value :
//             userNumber2.value > userNumber1.value
//             userNumber2.value > userNumber3.value
//             console.log(userNumber2.value)
//             return userNumber2.value
//             break;
//         case userNumber3.value :
//             userNumber3.value > userNumber1.value
//             userNumber3.value > userNumber2.value
//             console.log(userNumber3.value)
//             return userNumber3.value
//             break;
//     }
// }
function daysTillWeekend(){
    switch (new Date().getDay()) {
    case 0 :
        return  "it's already the weekend"
        break;
    case 1:
        return "1 days to go!"
        break;
    case 2:
        return "2 days to go!"  
        break;
    case 3:
        return "3 days to go!"
        break;
    case 4:
        return "4 days to go!"
        break;
    case 5:
        return "5 days to go!"
        break;
    case 6:
        return "6 days to go!"
        break
    case 7:
        return "it's already the weekend"
        break;
    }
}

function foodPrices (event) {

    let foodChoice = event.target.value

    switch (foodChoice) {
        case "Select your food here":
            return "Items price"
            break;
        case "potatoes":
        case "carrots":
             return "£1.50 per Kg "
             break;
        case "brocolli":
            return "£1"
        case "cabbage":
            return "£0.90"
        case "asparagus":
            return "£2.50 per Kg"
            break;
    }
}


// function changeItems(event){

// let foodSelection = event.target.value 

//     switch (foodSelection){
//         case "potatoes":
//         case "carrots":
//             console.log("£1.50 per Kg")
//             break;
//         case "brocolli":
//         case "cabbage":
//         case "aspargus":
//             console.log("£2.50 per Kg")
//             break;
//     }
// }

//testsAgain

