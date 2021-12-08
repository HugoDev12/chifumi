// // reception box

// let userName = prompt("Veuillez entrer votre nom.");
// let userFirstname = null;
// let proposal = null;
// let toContinue = false;
// let robotChoice = Math.floor(Math.random() * 3);
// let userWin =0;
// let robotWin =0;


// // check if user's entry is correct
// if ((/^[a-zA-Z]+$/.test(userName)) && ((userName.length>2) && (userName.length<20))) {
//     userFirstname = prompt("Veuillez entre votre prénom");
// } 
// else {
//     alert("Recommencez :)");
// }

// if ((/^[a-zA-Z]+$/.test(userFirstname)) && ((userFirstname.length>2) && (userFirstname.length<20))) {
//         alert("Bonjour " + (userName.charAt(0).toUpperCase() + userName.slice(1)) + " " 
//         + (userFirstname.charAt(0).toUpperCase() + userFirstname.slice(1)) + " , vous allez commencer une partie contre l'ordinateur!");
//         + promptBox2(); // call promptbox2 if entries are true
// } else alert("Recommencez :p");


// // check if user choice is correct
// function promptBox2(){
//     proposal = prompt("Choisissez entre Pierre, Feuille ou Ciseaux");
//         if ((proposal ==='Pierre' || proposal ==='pierre') 
//             || (proposal === 'Feuille' || proposal ==='feuille')
//             || (proposal === 'Ciseaux' || proposal ==='ciseaux')){
//             return (toContinue = true) + proposal;
//         }
//         else alert ("Veuillez choisir parmis les propositions indiquées.") + promptBox2();    
// }
// // return proposal with an upper case letter as first character
// proposal = proposal.charAt(0).toUpperCase() + proposal.slice(1); 

// // call the appropriate function according to the random nomber
// console.log(userWin,robotWin);

// if ((toContinue) && (robotChoice===0)){robot0();}

// if ((toContinue) && (robotChoice===1)){robot1();}

// if ((toContinue) && (robotChoice===2)){robot2();}


// // check when robot choice is "Pierre"


// function robot0(){

//     if (proposal==="Pierre"){
//         alert("Le robot a choisi ... Pierre! Il y a égalité. Rejouez!");// + promptBox2();
//     } else if (proposal==="Feuille"){
//         alert("Le robot a choisi ... Pierre! Vous avez gagné!");
//         userWin ++;
//         //promptBox2();
//     } else alert("Le robot a choisi ... Pierre! Vous avez perdu!");
//         robotWin ++;
//         //promptBox2();
// return robotWin + userWin;
// };

// // check when robot choice is "Feuille"

// function robot1(){

// if (proposal==="Pierre"){
//         alert("Le robot a choisi ... Feuille! Vous avez perdu!");
//         robotWin ++;
//         //promptBox2();
//     } else if (proposal==="Feuille"){
//         alert("Le robot a choisi ... Feuille! Il y a égalité. Rejouez!");// + promptBox2();
//     } else alert("Le robot a choisi ... Feuille! Vous avez gagné!");
//         userWin ++;
//         //promptBox2();
// return robotWin + userWin;
// };

// // check when robot choice is "Ciseaux"

// function robot2(){

// if (proposal==="Pierre"){
//         alert("Le robot a choisi ... Ciseaux! Vous avez gagné!");
//         userWin ++;
//         //promptBox2();
//     } else if (proposal==="Feuille"){
//         alert("Le robot a choisi ... Ciseaux! Vous avez perdu!");
//         robotWin ++;
//         //promptBox2();
//     } else alert("Le robot a choisi ... Ciseaux! Il y a égalité. Rejouez!");// + promptBox2();
// return robotWin + userWin;
// };


// while ((userWin<=3) && (robotWin <=3)) {
//     proposal = null;
//     promptBox2();
// }

// if (userWin ===3){alert ("Vous avez gagné!");}
// if (robotWin ===3){alert ("L'ordinateur a gagné :(");}



//commentaire juste pour un commit


//----------------------------------------------------------------------------------------------------------------------------------------//

const SELECTION = [
    "Pierre",
    "Feuille",
    "Ciseaux"
];

const WINMATCH = [
    "Pierre/Ciseaux",
    "Feuille/Pierre",
    "Ciseaux/Feuille"
];

let points = 0;


function getUserNames() {
    let userFirstname = prompt("Entrez votre prénom");
    let userName = prompt("Entrez votre nom");

    alert(`Bonjour ${userName} ${userFirstname}, vous allez jouer au chifumi`)
    return {userFirstname, userName};
}


function getUserChoice(){
    let proposal = prompt("Choisissez entre Pierre / Feuille / Ciseaux");
    return proposal;
}

function getCompChoice(SELECTION){
    let proposal = Math.floor(Math.random() * 3);
    return SELECTION[proposal];
}

function getResult(userName, compChoice, string, points){
    return alert (
        `
        L'ordinateur a choisit : ${compChoice}\n
        ${string} !
        \nscores :\n
        ${userName} : ${points}\n
        Ordinateur : ${points}
        `
    );
}

function Main(){
    let userChoice = getUserChoice();
    while (!(SELECTION.includes(userChoice))) userChoice = getUserChoice();
    let compChoice = getCompChoice(SELECTION);
    
    return WINMATCH.includes(`${userChoice}/${compChoice}`) ?
    getResult(user.userFirstname, compChoice, "Gagné", points)
    : 
    userChoice === compChoice ? 
    getResult(user.userFirstname, compChoice, "Egalité", points)
    : 
    getResult(user.userFirstname, compChoice, "Gagné", points)
    ;
}


let user =  getUserNames();

// while (points < 3) Main(); 2 scores et non 1...

