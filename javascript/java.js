//*javascript for feedback box
//* assigning values after declaration and using querySelector to find the element matching to css selectors
const ratingE1 = document.querySelectorAll(".rating")
const sendBtn = document.querySelector(".button");
const panel=document.querySelector("#panel")
//*calling function once for element
ratingE1.forEach((el) => {
  //*to attach event handler to the element
    el.addEventListener("click", ()=>{
        ratingE1.forEach((innerEl)=>{
          //*to remove event handler attached to addEventlistner
            innerEl.classList.remove("active");

        });

        el.classList.add("active");

    });
    
});
//*to attach event handler to sendbtn
sendBtn.addEventListener("click", ()=>{
    panel.innerHTML= '<strong>Thank you!</strong>'; 
                 


});
//*javascript for form validation
function validate(){
  //*getting element with specified ID
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
  //*styling the error message
    error_message.style.padding = "10px";
  
    //*if the person name is less than 5 characters it will give a invalid message as"please enter Valid name"
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    
    //*if the phone number has no 10 numbers than it will give an invalid message"please enter valid phone Number"
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    //*if the emaill doesnt contain @ and email length is less than 6 it will give an invalid message "please enter valid Email"
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
   //*for displaying the message to notify that form is submitted successfully if all of the above the needs are fulfilled
    alert("Thank you form submitted successfully!");
    return true;
}