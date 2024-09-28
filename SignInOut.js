const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// this code try to open local web page


function verify() {
    // Define valid email and password
    const validEmail = "pratikkotwale2006@gmail.com";
    const validPassword = "pratik2006";

    // Get the entered email and password values
    const emailInput = document.querySelector('.sign-in input[type="email"]').value;
    const passwordInput = document.querySelector('.sign-in input[type="password"]').value;

    // Check if the entered credentials match the valid credentials 
    if (emailInput === validEmail && passwordInput === validPassword) {
      // Redirect to the target page if credentials are valid
      // window.location.href = "P:/Projects 5th Sem/CSS/Main/Core/index.html";
      console.log("Redirecting to:", "https://2006pratik0301.github.io/Capstone-Project/");
      window.location.href = "https://fonts.google.com/icons";
  }  
    else {
        // Display an alert if credentials are incorrect
        alert("Invalid email or password. Please try again.");
    }
}


// this code is opening a given link (which is not local) 


// function verify() {
//   const validEmail = "pratikkotwale2006@gmail.com";
//   const validPassword = "pratik2006";

//   const emailInput = document.getElementById("SignInEmail").value; //querySelector('.sign-in input[type="email"]').value;
//   const passwordInput = document.getElementById("SignInPWD").value; //querySelector('.sign-in input[type="password"]').value;

//   if (emailInput === validEmail && passwordInput === validPassword) {
//     window.open("https://github.com/");
//   } else {
//     // Display an alert if credentials are incorrect
//     alert("Invalid email or password. Please try again.");
//   }
// }
