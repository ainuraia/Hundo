

// get the values from the Page
//starts or controls function
function getValues(){
    //we get the values from the Page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue)

    if(Number.isInteger(startValue) && Number.isInteger(endValue)) {
        
    }

    alert("The Start value:" + startValue);
    //we call generateNumbers

    let numbers = generateNumbers(startValue, endValue);
    //we call displayNumbers

}

//generate numbers from the startValue to the endValue
// logic functions
function generateNumbers(sValue, eValue){
    let numbers = [];

    // we want to get all numbers from start to end
    for (let index = sValue; index <= eValue; index++) {
        ;
        
        //this will execute in a loop until index = eValue
        numbers.push(index)
    }    
    return numbers ;
}

//display the numbers and mark the even ones bold
// display or view functions
function displayNumbers(){
    
}