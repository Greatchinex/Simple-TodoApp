// Variable Declarations

var text, date, submit, sec3;
text = document.getElementById("text");
date = document.getElementById("date");
submit = document.getElementById("submit");
sec3 = document.getElementById("section3");

// Get the input 
var newItem = document.getElementById("text");
var newDate = document.getElementById("date");

// Submit Event
submit.addEventListener("click", addItem);

// Delete Event
sec3.addEventListener("click", removeItem); 

// Function for Messages
function showAlert(message, className){
    // create an element
    var alerts = document.createElement("div");

    // add class to the Div
    alerts.className = className ; 

    // Add message inside div
    alerts.innerHTML = message;

    // insert Created Div in the U.I. 
    /* i want to insert the div inside a div with the class of container and section2 and just
    before a label tag*/
    var container = document.getElementById("section2");
    var label = document.getElementById("label-1");

    // insert the div in the container before the label tag
    container.insertBefore(alerts, label);

    // vanish after Some Seconds  (I Used Arrow Functions)
    // setTimeout(() => {
    //     document.querySelector(".notification").remove()
    // }, 1000);

    setTimeout(function(){
        document.querySelector(".notification").remove()
    }, 1000);
}


function addItem(e){
    if(newItem.value === "" && newDate.value === ""){
        showAlert("Fields Cannot Be Empty", "notification is-danger");
    } else if(newItem.value === ""){
        showAlert("Pls Enter a Task", "notification is-danger");
    } else if(newDate.value === ""){
        showAlert("Pls enter a date", "notification is-danger");
    } else {
            // create new item
    var notify = document.createElement("div");

    // add class to div
    notify.className = "notification is-primary"
    
    // add text node
    var text1 = document.createTextNode(newItem);
    var text2 = document.createTextNode(newDate);

    var all = newDate.value + ":    " + newItem.value;

    // apend node into div
    // notify.appendChild(all);
    notify.innerHTML = all;
    
    // create delete button
    var del = document.createElement("button");

    // add class to button
    del.className = "delete";
    
    // append delete into Created Div
    notify.appendChild(del);

    // pass new div into div with id="section3"
    sec3.appendChild(notify);

    showAlert("Task Created", "notification is-success");    

    // Function  to clear all the fields after clicking the submit button
    function clearfields(){
        document.getElementById("text").value = "";
        document.getElementById("date").value = "";
    }

    clearfields();
    }


}

function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are You Sure")){
            var notify = e.target.parentElement;
            sec3.removeChild(notify);
            showAlert("Task Deleted", "notification is-danger");
        }  
    }
}
