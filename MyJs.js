

window.onload = function(){

    alert("Welcome to FreshHarvest.sa 🌿");
};


let buttons = document.querySelectorAll("button");

for(let i = 0; i < buttons.length; i++){

    buttons[i].addEventListener("click", function(){

        if(buttons[i].innerHTML == "Buy Now"){

            alert("Product added successfully 🛒");
        }
    });
}


let form = document.querySelector("form");

if(form){

    form.addEventListener("submit", function(event){

        let name = document.querySelector('input[type="text"]').value;

        let email = document.querySelector('input[type="email"]').value;

        let message = document.querySelector("textarea").value;


        if(name == "" || email == "" || message == ""){

            event.preventDefault();

            alert("Please fill all fields.");
        }

        else{

            alert("Message sent successfully ✉️");
        }

    });
}

function darkMode(){

    document.body.style.backgroundColor = "#222";

    document.body.style.color = "white";
}

function lightMode(){

    document.body.style.backgroundColor = "#f8f5ef";

    document.body.style.color = "#333";
}