
// reception box

let welcome = alert("Bienvenue, détendez vous. Vous allez jouer au Chifoumi !");

// asking player's name and firstname only

// let test = 455;
// console.log(+test);

// let userName = prompt("Veuillez entrer votre nom.");
// let userFirstname = prompt("Veuillez entrez votre prénom.");
// if (/^[a-zA-Z]+$/.test(userName) && /^[a-zA-Z]+$/.test(userFirstname)){
//     console.log("test réussi");
// } else { console.log("Recommencez");}

let userName = null;
let userFirstname = null;
let error = null;

if (/^[a-zA-Z]+$/.test(userName = prompt("Veuillez entrer votre nom."))
    && (/^[a-zA-Z]+$/.test(userFirstname = prompt("Veuillez entrer votre prénom")))){
    console.log("test réussi");
} else { error = alert("Recommencez");}



// if (/^[a-zA-Z]+$/.test(userName) && /^[a-zA-Z]+$/.test(userFirstname)){
//     let userFirstname = prompt("Veuillez entrez votre prénom.");
// } else if (/^[a-zA-Z]+$/.test(userFirstname)) 
//     {
//         console.log("test réussi");
//     } else { let error = alert("Recommencez :)");}
// else { let error = alert("Recommencez :p"); }



// switch (userName) {
//     case userName.length[0] = "":
//         console.log("Veuillez rentrer quelque chose :p");
//         break;

// }

// if (userName.length === 0 && userName != ""){
//     console.log("c'est faux");
//     }
//     else { console.log("correct"); }

// let userFirstname = prompt("Veuillez entrer votre prénom.");

// let userText = userName + " " + userFirstname;


// let userText = prompt("Veuillez entrer votre nom et votre prénom.");

// && userText.length === 0
// userText != ""
//  if (userText.length === 0 && userText != "") {
//     console.log("c'est faux");
// }
// else { console.log("correct"); }

//if (userText.length === 0 &

// if (userText != "") {
//    console.log("faux");
// }
// else { console.log("correct"); }


// function userName(firstname, lastName){
//     if (userText != null && +userText === true){
//         let answer = alert("Bonjour " + userText + ", vous allez commencer la partie.");
//     }
//     else {
//         let elseUserText = prompt("Veuillez entrer votre prénom correctement :p");
//     }

//     return elseUserText ;
// }


