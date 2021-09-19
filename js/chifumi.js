// reception box

let userName = prompt("Veuillez entrer votre nom.");
let userFirstname = null;
let proposal = null;
let toContinue = false;
let robotChoice = Math.floor(Math.random() * 3);


// check if user's entry is correct
if ((/^[a-zA-Z]+$/.test(userName)) && ((userName >= 2) || (userName <= 20))){
    userFirstname = prompt("Veuillez entre votre prénom");
} 

if ((/^[a-zA-Z]+$/.test(userFirstname)) && (userFirstname != null)){
        alert("Bonjour " + userName + " " + userFirstname + " , vous allez commencer une partie contre l'ordinateur!");
        + promptBox2(); // call promptbox2 if entries are true
} else alert("Recommencez :p");



// (userName >= 2) && (userName <= 20))


// // check if user choice is correct
// function promptBox2(){
//     proposal = prompt("Choisissez entre Pierre, Feuille ou Ciseaux");
//         if ((proposal ==='Pierre' || proposal ==='pierre') 
//             || (proposal === 'Feuille' || proposal ==='feuille')
//             || (proposal === 'Ciseaux' || proposal ==='ciseaux')){
//             return (toContinue = true) + proposal;
//         }
//         else return alert ("Veuillez choisir parmis les propositions indiquées.");    
// }
// // return proposal with an upper case letter as first character
// proposal = proposal.charAt(0).toUpperCase() + proposal.slice(1); 

// console.log(robotChoice, proposal);

// // call the appropriate function according to the random nomber
// if ((toContinue) && (robotChoice===0)){robot0();}

// if ((toContinue) && (robotChoice===1)){robot1();}

// if ((toContinue) && (robotChoice===2)){robot2();}


// // check when robot choice is "Pierre"

// function robot0(){

//     if (proposal==="Pierre"){
//         alert("Le robot a choisi ... Pierre! Il y a égalité. Rejouez!");
//     } else if (proposal==="Feuille"){
//         alert("Le robot a choisi ... Pierre! Vous avez gagné!");
//     } else alert("Le robot a choisi ... Pierre! Vous avez perdu!");

// }

// // check when robot choice is "Feuille"

// function robot1(){

// if (proposal==="Pierre"){
//     alert("Le robot a choisi ... Feuille! Vous avez perdu!");
// } else if (proposal==="Feuille"){
//     alert("Le robot a choisi ... Feuille! Il y a égalité. Rejouez!");
// } else alert("Le robot a choisi ... Feuille! Vous avez gagné!");

// }

// // check when robot choice is "Ciseaux"

// function robot2(){

// if (proposal==="Pierre"){
//     alert("Le robot a choisi ... Ciseaux! Vous avez gagné!");
// } else if (proposal==="Feuille"){
//     alert("Le robot a choisi ... Ciseaux! Vous avez perdu!");
// } else alert("Le robot a choisi ... Ciseaux! Il y a égalité. Rejouez!");

// }

