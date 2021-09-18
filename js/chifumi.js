
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


let userName = prompt("Veuillez entrer votre nom.");
let userFirstname = null;
let proposal = null;

if (/^[a-zA-Z]+$/.test(userName)){
    userFirstname = prompt("Veuillez entre votre prénom");
} else alert("Recommencez :p");

if ((/^[a-zA-Z]+$/.test(userFirstname)) && (userFirstname != null)){
    alert("Bonjour " + userName + " " + userFirstname + " , vous allez commencer une partie contre l'ordinateur!"); + promptBox2();
}

//let proposal = prompt("Choisissez entre Pierre,Papier ou Ciseaux");


function promptBox2(){
proposal = prompt("Choisissez entre Pierre,Papier ou Ciseaux");
    if ((proposal ==='Pierre' || proposal ==='pierre') 
        || (proposal === 'Papier' || proposal ==='papier')
        || (proposal === 'Ciseaux' || proposal ==='ciseaux')){
        return proposal + robot();
        }
    else return alert ("Veuillez choisir parmis les propositions indiquées.");
}




function robot(){console.log("test");}

// function toContinue(){
//     if ((/^[a-zA-Z]+$/.test(userName)) && (/^[a-zA-Z]+$/.test(userFirstname)))
//         {
//             return alert("Bonjour " + userName + " " + userFirstname + " , vous allez commencer une partie contre l'ordinateur!");
//         } 
//     else return alert("Recommencez :p");
// };
