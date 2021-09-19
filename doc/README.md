// Description du code projet


1/  Après avoir codé le message d'accueil avec un prompt, je me devais de vérifier les informations rentrées par l'utilisateur.

--> J'ai ainsi ordonné à la machine de vérifier si les données saisies étaient bien uniquement des caractères, pas de chiffre ou d'espaces...

2/  Si les rentrées sont correctes, j'appelle une fonction où j'introduis un 2è prompt

--> dans cette fonction je vérifie que les données saisies soient bien "Pierre/Feuille/ ou Ciseaux", avec ou sans majuscule pour la 1ère lettre.

3/  Si les rentrées sont correctes, j'appelle la fonction robot suivant le nombre aléatoire obtenu (entre 0 et 2). Soit 0 pour pierre, 1 pour feuille et 2 pour ciseaux

--> Dans ces fonctions je fais le comparaison entre la proposition de l'utilisateur et le choix aléatoire du robot. J'envoies ensuite le message adéquate (gagné/perdu ou égalité).