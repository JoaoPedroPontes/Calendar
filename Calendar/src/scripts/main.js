
// References: select, p elements and ID #days and 
const selectMonth = document.querySelector("select");
const daysLocal  = document.querySelector("#days");
const showNameMonth = document.querySelector("p");



//Variable month to get the value of the select and variable daysNumber to say how many days the month has
let month = selectMonth.value = "January";
var daysNumbers=31;


//
function showDays() {
    showNameMonth.textContent=month;

    //Show days
    for (var i=1;i<= daysNumbers;i++) {
        var days = document.createElement("span");
        days.textContent=i+" ";
        daysLocal.appendChild(days);
    
    };

}

showDays();

//Check which month was selected

function verficationMonth() {

    month = selectMonth.value;

    // Month 31 days
    if(month == "January" || month == "March" || month == "May" || month == "July" || month == "August" || month == "October" || month == "December") {
        daysLocal.textContent="";
        showNameMonth.textContent=month;
        daysNumbers=31;
        showDays();

    }
    // Month 30 days
    else if(month == "April" || month ==  "June" || month == "September" || month == "November" ) {
        daysLocal.textContent="";
        daysNumbers=30;
        showDays();
    }


    //Month 28 days
    else if(month == "February") {
        daysLocal.textContent="";
        daysNumbers=28;
        showDays();    
    };

}


//Event

selectMonth.addEventListener("change", verficationMonth);