let userInput = document.getElementById("userInput");
let fact = document.getElementById("fact");


function getTheFact(event){
    let requestUrl = `https://apis.ccbp.in/numbers-fact?number=${event.target.value}`;
    let options = {
        method : "GET"
    };

    fetch(requestUrl, options)
    .then(function(response){
        return response.json();
    })
    .then(function(factAboutNumber){
        fact.textContent = factAboutNumber.fact;
        console.log(factAboutNumber);
    });
}

userInput.addEventListener("keyup", getTheFact);

