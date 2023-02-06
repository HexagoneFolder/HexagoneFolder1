# HexagoneFolder1
contient les fichiers du projet hexagone

Comment accéder au projet ->

Installer un IDE (le mieux est VScode)
une fois l'ide installer, le lancer installer git et ses dépendances
une fois git installé il faut ouvrir VScode, en haut à droite il y un bouton vert où il est écrit "<> code" en cliquant dessus cela génère un url (url du projet)
Une fois l'url récupéré il faut ouvrir un terminal dans VScode (en haut à gauche) et lancer la commande git clone "url de git"
La le projet est récupéré, par la suite il faudra installer npm et node.js
Une fois le projet récupéré et npm installer on peut lancer le projet :

-> Partie API :
il faut se rendre dans all files puis dans api grace au terminal et à la commande "cd" donc pour aller dans l'api les commandes vont être cd all files, puis cd api, une fois dans le dossier api, il faudra installer les dépendances npm avec la commande "npm install"
Une fois les dépendances installées, la commande "npm start permet de lancer le serveur et donc la base de données".

ensuite il faudra laisser ce terminal ouvert et ouvrir un autre terminal pour lancer le projet (partie front)

-> partie front :
Dans un terminal il faudra se rendre dans le dossier FrontApp également à l'aide de la commande "cd", une fois dans le dossier FrontApp il faudra également installer les dépendances npm avec la commande "npm install"
Une fois les dépendances installées on peut lancer la partie front (il faut que l'api soit lancée pour que le front se lance) avec la commande "npm run dev"

pour accéder à l'ensemble quand les deux parties sont lancées, il faut ouvrir un navigateur, l'app étant sur le port 3000, il faut entrer dans la barre de recherche "localhost:3000"
