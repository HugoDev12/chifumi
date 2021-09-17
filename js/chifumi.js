
// reception box

//let welcome = alert("Bienvenue, détendez vous. Vous allez jouer au Chifoumi !");

// asking player's name and firstname only


let userName = null;
let userFirstname = null;
let correct = null;
let error = null;
// let proposal = null;
// let scissors = null;

function promptBox1 (){

    if (/^[a-zA-Z]+$/.test(userName = prompt("Veuillez entrer votre nom."))
    && (/^[a-zA-Z]+$/.test(userFirstname = prompt("Veuillez entrer votre prénom")))){
    correct = alert("Bonjour " + userName + " " + userFirstname + " , vous allez commencer une partie contre l'ordinateur!");
    } else { error = alert("Recommencez :p");}
    return  userFirstname
};



// prompt box and verify if it contains a string in both statements
promptBox1();

// let returnNames = promptBox1();
// let userNameEntry = returnNames.userName,
// userFirstnameEntry = returnNames.userFirstname;




console.log(userFirstname);
// 2nd prompt box to start the game
if ((userFirstname != null) && (/^[a-zA-Z]+$/.test(userFirstname)))
{
    promptBox2();
} 



function promptBox2(){
    let proposal = prompt("Choisissez entre Pierre,Papier ou Ciseaux");
    return proposal
}



// correctEntry();

// function correctEntry(userChoice){
//     if (userChoice ==='Pierre' || 'pierre' 
//         && userChoice === 'Papier' || 'papier'
//         && userChoice === 'Ciseaux' || 'ciseaux'){ 

//     }
// }



// let rock = null;
// let paper = null;
// let scissors = null;




// function proposal(r,p,s){

// }