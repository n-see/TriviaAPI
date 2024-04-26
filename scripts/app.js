let displayArea = document.getElementById("displayArea");
let bodyBack = document.getElementById("bodyBack");

let gkBtn = document.getElementById("gkBtn").addEventListener("click", function(){
    getGk();
});

let historyBtn = document.getElementById("historyBtn").addEventListener("click", function(){
    getHistory();
});
let gameBtn = document.getElementById("gameBtn").addEventListener("click", function(){
    getGame();
});

async function getGk(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=boolean").then((Response) => Response.json());
    console.log(apiResponse);
    displayArea.innerText = apiResponse.results["0"].question;
    bodyBack.classList = "bg1";
}

async function getHistory(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=1&category=23&difficulty=medium&type=boolean").then((Response) => Response.json());
    console.log(apiResponse);
    displayArea.innerText = apiResponse.results["0"].question;
    bodyBack.classList = "bg2";
}
async function getGame(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=1&category=15&difficulty=medium&type=boolean").then((Response) => Response.json());
    console.log(apiResponse);
    displayArea.innerText = apiResponse.results["0"].question;
    bodyBack.classList = "bg3";
}

