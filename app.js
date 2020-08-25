// select switch button

const btn = document.querySelector(".switch-btn");
const cardBackground = document.querySelectorAll(".card");
const mode = document.querySelector(".mode-text");
const numbers = document.querySelectorAll(".number");
const header = document.querySelector(".header");
const h2 = document.querySelector(".header h2");
const h4All = document.querySelectorAll(".card h4");
const followers = document.querySelectorAll(".followers p")
const h3 = document.querySelector ("body h3");

btn.addEventListener("click", function() {
    if (!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        btn.style.backgroundColor = "hsl(228, 38%, 84%)";
        document.body.style.backgroundColor = "white";
        mode.innerHTML = "Light Mode";
        mode.style.color = "hsl(228, 12%, 44%)";
        header.style.backgroundColor = "hsl(225, 100%, 98%)";
        h2.style.color = "hsl(230, 17%, 14%)"
        h3.style.color = "hsl(228, 12%, 44%)";
        cardBackground.forEach(function(background){
            background.style.backgroundColor = " hsl(226, 32%, 92%)";
            
        });
        numbers.forEach(function(number){
            number.style.color = " hsl(230, 17%, 14%)";
        })
        h4All.forEach(function (h4) {
            h4.style.color = "hsl(228, 12%, 44%)"
        })
        followers.forEach(function(follower){
            follower.style.color = "hsl(228, 12%, 44%)"
        })
       
    } else{
        btn.classList.remove("slide");
        btn.style.backgroundColor = "hsl(210, 78%, 56%)";
        document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
        mode.innerHTML = "Dark Mode";  
        mode.style.color = "white";
        header.style.backgroundColor = "hsl(232, 16%, 26%)";
        h2.style.color = "white";
        h3.style.color = "white";
        cardBackground.forEach(function(background){
            background.style.backgroundColor = "hsl(228, 28%, 20%)";
        });
        numbers.forEach(function(number){
            number.style.color = "hsl(228, 38%, 84%)";
        })
        h4All.forEach(function (h4) {
            h4.style.color = "hsl(228, 38%, 84%)"
        })
        followers.forEach(function(follower){
            follower.style.color = "hsl(228, 38%, 84%)"
        })
    }
})

