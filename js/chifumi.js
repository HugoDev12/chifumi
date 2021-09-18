
// reception box

// let welcome = alert("Bienvenue, détendez vous. Vous allez jouer au Chifoumi !");

// // asking player's name and firstname only


// let userName = null;
// let userFirstname = null;
// let correct = null;
// let error = null;


// // // // prompt box and verify if it contains a string in both statements
// promptBox1();

// function promptBox1 (){

//     if (/^[a-zA-Z]+$/.test(userName = prompt("Veuillez entrer votre nom."))
//     && (/^[a-zA-Z]+$/.test(userFirstname = prompt("Veuillez entrer votre prénom")))){
//     correct = alert("Bonjour " + userName + " " + userFirstname + " , vous allez commencer une partie contre l'ordinateur!");
//     } else { error = alert("Recommencez :p");}
//     return  {userName, userFirstname}
// };


// let correctName = userName;
// let correctFirstname = userFirstname;


// // // // condition to access to the promptBox2
// // if (((correctFirstname != null) && (/^[a-zA-Z]+$/.test(correctFirstname)))
// //     && ((correctName != null) && (/^[a-zA-Z]+$/.test(correctName))))
// // {
// //     promptBox2();
// // } 


// if ((/^[a-zA-Z]+$/.test(correctName)) && (/^[a-zA-Z]+$/.test(correctFirstname)))
// {
//     console.log("test");
// };




//toContinue();

// function toContinue(){
//     if ((/^[a-zA-Z]+$/.test(correctName)) && (/^[a-zA-Z]+$/.test(correctFirstname)))
//     {
//         let selection = promptBox2();
//         return selection
//     } 
// };



// promptBox2();

// function promptBox2(){
//     let proposal = prompt("Choisissez entre Pierre,Papier ou Ciseaux");
//     return proposal
// };

// if (promptBox2()) {robot();}


//console.log(promptBox2());
//let selection = promptBox2();

//correctEntry(selection);

// function correctEntry(userChoice){
//     if ((userChoice ==='Pierre' || userChoice ==='pierre') 
//         || (userChoice === 'Papier' || userChoice ==='papier')
//         || (userChoice === 'Ciseaux' || userChoice ==='ciseaux'))
//         { compChoice ;
//         } else {alert("Veuillez choisir parmis les propositions indiquées.");}
//   return userChoice 
// };



// function correctEntry(userChoice){
//     if ((userChoice ==='Pierre' || userChoice ==='pierre') 
//         || (userChoice === 'Papier' || userChoice ==='papier')
//         || (userChoice === 'Ciseaux' || userChoice ==='ciseaux'))
//         { return robot(); 
//     } else return alert("Veuillez choisir parmis les propositions indiquées.");
// };


// let compChoice = robot();

// function robot(){
//     alert("l'ordinateur a choisit ...");
// };

// correctEntry();
// another method : function correctEntry(){
//     let selection = promptBox2();
//     if (selection ==='....')
// }





// 

// let rock = null;
// let paper = null;
// let scissors = null;




// function (){

// }
let robotChoice = Math.floor(Math.random() * 3);
console.log(robotChoice);

let userName = prompt("Veuillez entrer votre nom.");
let userFirstname = null;
let proposal = null;
let toContinue = false;
// let robotChoice = Math.floor(Math.random() * 3);
// console.log(robotChoice);


if (/^[a-zA-Z]+$/.test(userName)){
    userFirstname = prompt("Veuillez entre votre prénom");
} 

if ((/^[a-zA-Z]+$/.test(userFirstname)) && (userFirstname != null)){
        alert("Bonjour " + userName + " " + userFirstname + " , vous allez commencer une partie contre l'ordinateur!");
        + promptBox2();
    } else alert("Recommencez :p");



function promptBox2(){
proposal = prompt("Choisissez entre Pierre, Feuille ou Ciseaux");
    if ((proposal ==='Pierre' || proposal ==='pierre') 
        || (proposal === 'Feuille' || proposal ==='feuille')
        || (proposal === 'Ciseaux' || proposal ==='ciseaux')){
        return (toContinue = true) + proposal;
        }
    else return alert ("Veuillez choisir parmis les propositions indiquées.");
}

proposal = proposal.charAt(0).toUpperCase() + proposal.slice(1); 

console.log(robotChoice, proposal);
//if (toContinue) {robot();}

if ((toContinue) && (robotChoice===0)){robot0();}

if ((toContinue) && (robotChoice===1)){robot1();}

if ((toContinue) && (robotChoice===2)){robot2();}





function robot0(){

    if (proposal==="Pierre"){
        alert("Le robot a choisi ... Pierre! Il y a égalité. Rejouez!");
    } else if (proposal==="Feuille"){
        alert("Le robot a choisi ... Pierre! Vous avez gagné!");
    } else alert("Le robot a choisi ... Pierre! Vous avez perdu!");

}


function robot1(){

    if (proposal==="Pierre"){
        alert("Le robot a choisi ... Feuille! Vous avez perdu!");
    } else if (proposal==="Feuille"){
        alert("Le robot a choisi ... Feuille! Il y a égalité. Rejouez!");
    } else alert("Le robot a choisi ... Feuille! Vous avez gagné!");

}


function robot2(){

    if (proposal==="Pierre"){
        alert("Le robot a choisi ... Ciseaux! Vous avez gagné!");
    } else if (proposal==="Feuille"){
        alert("Le robot a choisi ... Ciseaux! Vous avez perdu!");
    } else alert("Le robot a choisi ... Ciseaux! Il y a égalité. Rejouez!");

}


// if ((robotChoice=0) && (proposal = "Pierre")){
//     alert("Le robot a choisi ... Pierre! Il y a égalité. Rejouez!");
// } else if ((robotChoice=0) && (proposal = "Feuille"))
//     { alert ("Le robot a choisi ... Pierre! Vous avez gagné!")
// } else if ((robotChoice=0) && (proposal = "Ciseaux"))
//     { alert ("Le robot a choisi ... Pierre! Vous avez perdu!")
// }



// switch (robotChoice=0){
//     case (proposal = "Pierre"):
//         alert("Le robot a choisi ... Pierre! Il y a égalité. Rejouez!");
//         break;
//     case (proposal = "Feuille"):
//         alert("Le robot a choisi ... Pierre! Vous avez gagné!");
//         break;
//     case (proposal = "Ciseaux"):
//         alert("Le robot a choisi ... Pierre! Vous avez perdu!");
// }


// if ((robotChoice===0) && (proposal==="Feuille")){
//     alert("Le robot a choisi ... Pierre! Vous avez gagné!");}
// if ((robotChoice===1) && (proposal==="Feuille")){
//     alert("Le robot a choisi ... Feuille! Il y a égalité. Rejouez!");}
// if ((robotChoice===2) && (proposal==="Feuille")){
//     alert("Le robot a choisi ... Ciseaux! Vous avez perdu!");}