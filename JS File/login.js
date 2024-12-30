//
// function saveData(){
//     let Email = document.getElementById("email").value;
//     let Password = document.getElementById("password").value;
//     let User_Records = new Array();
//     User_Records = JSON.parse(localStorage.getItem("User"))?JSON.parse(localStorage.getItem("User")):[]
//     if(User_Records.some((v)=>{
//         return v.Email === Email && v.Password === Password 
//     })){
//         alert("Login Successfull")
//         let Current_User = User_Records.filter((v)=>{
//             return v.Email == Email && v.Password == Password
//         })[0]
//         localStorage.setItem("Email",Current_User.Email);
//         localStorage.setItem("Password",Current_User.Password);
//         window.location.href = "index.html";
//     }
//     else{
//         alert("Login Fail");
//     }
// }




// function saveData() {
//     let Email = document.getElementById("email").value;
//     let Password = document.getElementById("password").value;

//     // Retrieve and parse user records from localStorage
//     let storedData = localStorage.getItem("User");
//     let User_Records;
//     try {
//         User_Records = storedData ? JSON.parse(storedData) : [];
//     } catch (e) {
//         User_Records = [];
//     }

//     // Check if the email and password match any existing user
//     if (User_Records.some((v) => v.Email === Email && v.Password === Password)) {
//         alert("Login Successful");

//         // Find and store the current user in localStorage
//         let Current_User = User_Records.find((v) => v.Email === Email && v.Password === Password);
//         localStorage.setItem("CurrentUser", JSON.stringify({ Email: Current_User.Email }));

//         // Redirect to another page
//         window.location.href = "file:///Users/sahilkriplani/Desktop/Html,Css,Js/portfolio/index.html";
//     } else {
//         alert("Login Failed");
//     }
// }
function signup(e) {
    event.preventDefault();

    var Username = document.getElementById("username").value;
    var Email = document.getElementById("email").value;
    var Pass = document.getElementById("password").value;

    var User = {
        username: Username,
        email: Email,
        password: Pass,
    };
    var json = JSON.stringify(User);
    localStorage.setItem(Username , json);
    alert("Registration Successful");
    window.location.href = "logout.html";
}


// function login(e) {
//     e.preventDefault(); // Prevent default form submission

//     let Username = document.getElementById("username").value;
//     let Pass = document.getElementById("password").value;

//     // Retrieve user data from localStorage
//     let user = localStorage.getItem(Username);

//     if (user) {
//         // Parse the user data
//         let data = JSON.parse(user);

//         // Check if the password matches
//         if (data.password === Pass) {
//             alert("Login Successful!");
            
//             // Store current user details in localStorage
//             localStorage.setItem("CurrentUser", JSON.stringify(data));
            
//             // Redirect to the index page
//             window.location.href = "index.html";
//         } else {
//             alert("Invalid Password. Please try again.");
//         }
//     } else {
//         alert("User not found. Please sign up first.");
//     }
// }




// function loginFunc(e) {
//     event.preventDefault();


//     let Username = document.getElementById("username").value;
//     console.log("Username: ",Username);
    
//     let Pass = document.getElementById("password").value;
//     console.log("Password:",Pass);
    

//     var user = localStorage.getItem(Username);
//     var data = JSON.parse(user);
//     console.log(data);

//     if (user == null){
//         alert("Wrong Username Please Check!!");
//     }else if (Username == data.Username && Pass == data.Pass) {
//         alert("You Have Successfully Logged In!!");
//         window.location.href = "index.html";
//     }else{
//         alert("Wrong Password Please Check!!");
//     }
// }





// function loginFunc(e) {
//     e.preventDefault(); // Use the passed event parameter

//     // Ensure the elements exist
//     let usernameField = document.getElementById("username");
//     let passwordField = document.getElementById("password");

//     if (!usernameField || !passwordField) {
//         console.error("Input fields are missing.");
//         return;
//     }

//     let Username = usernameField.value;
//     console.log("Username:", Username);

//     let Pass = passwordField.value;
//     console.log("Password:", Pass);

//     // Retrieve the user data from localStorage
//     let user = localStorage.getItem(Username);
//     let data = user ? JSON.parse(user) : null;

//     console.log(data);

//     // Validate login credentials
//     if (!data) {
//         alert("Wrong Username! Please check.");
//     } else if (Username === data.username && Pass === data.password) {
//         alert("You Have Successfully Logged In!!");
//         window.location.href = "index.html";
//     } else {
//         alert("Wrong Password! Please check.");
//     }
// }



// function loginFunc(e) {
//     e.preventDefault(); // Correctly use the event object

//     let Username = document.getElementById("username").value;
//     console.log("Username: ", Username);

//     let Pass = document.getElementById("password").value;
//     console.log("Password:", Pass);

//     // Retrieve user data from localStorage
//     var user = localStorage.getItem(Username);

//     if (user == null) {
//         alert("Wrong Username. Please Check!!");
//     } else {
//         var data = JSON.parse(user);
//         console.log(data);

//         // Compare input with retrieved user data
//         if (Username === data.username && Pass === data.password) {
//             alert("You Have Successfully Logged In!!");
//             window.location.href = "index.html";
//         } else {
//             alert("Wrong Password. Please Check!!");
//         }
//     }
// }






async function loginFunc(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
        // Fetch the username and password values
        let Username = document.getElementById("username")?.value;
        console.log("Username: ", Username);

        let Pass = document.getElementById("password ")?.value;
        console.log("Password:", Pass);

        // if (!Username || !Pass) {
        //     throw new Error("Both Username and Password fields are required.");
        // }

        // Simulate an asynchronous operation (if needed, e.g., API call)
        let user = localStorage.getItem(Username);

        // if (!user) {
        //     throw new Error("Wrong Username. Please Check!!");
        // }

        // Parse the user data from localStorage
        let data = JSON.parse(user);
        console.log(data);

        // Check username and password
        if (Username === data.username && Pass !== data.password) {
            alert("Wrong Password Please Check!!");

           
        } else {
             // Redirect to index.html
             await new Promise((resolve) => setTimeout(resolve, 100)); // Simulate async operation
             window.location.href = "logout.html";
            // throw new Error("Wrong Password. Please Check!!");
        }
    } catch (err) {
        // Handle errors
        alert(err.message);
        console.error(err);
    }
}
