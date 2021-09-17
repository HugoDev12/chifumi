
// reception box

let welcome = alert("Bienvenue, détendez vous. Vous allez jouer au Chifoumi !");

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
    return {userName, userFirstname}
};



// prompt box and verify if it contains a string in both statements
promptBox1();

if (userName != null){promptBox2();}

function promptBox2(){
    let proposal = prompt("Choisissez entre Pierre,Papier ou Ciseaux");
    return proposal
}



// correctEntry();

// function correctEntry(proposal){
//     if (proposal ==='Pierre' || 'pierre' 
//         && proposal === 'Papier' || 'papier'
//         && proposal === 'Ciseaux' || 'ciseaux'){ 

//     }
// }


// let rock = null;
// let paper = null;
// let scissors = null;




// function proposal(r,p,s){

// }