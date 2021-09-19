
function promptBox2(){
    proposal = prompt("Choisissez entre Pierre, Feuille ou Ciseaux");
        if ((proposal ==='Pierre' || proposal ==='pierre') 
            || (proposal === 'Feuille' || proposal ==='feuille')
            || (proposal === 'Ciseaux' || proposal ==='ciseaux')){
            return (toContinue = true) + proposal;
            }
        else return alert ("Veuillez choisir parmis les propositions indiquées.");
    }



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