# Swapster-back

## Titre et presentation projet :
Swapster est un site web permettant à ses utilisateurs de partager gratuitement des livres. En donnant une seconde vie à ses livres les buts sont multiples : économie, écologie, échanges humains.
La partie Back de l'application est déployé sur Railway et la partie Front sur Vercel. Ce repository concerne seulement la partie Backend.


### Fonctionnalités :
- CRUD Utilisateur
- CRUD Livres d'un utilisateur
- Afficher les resultats d'une recherche de livre
- Afficher le détails d'un livre
- Afficher les derniers livres ajoutés

### Structure du projet :
- API REST :
  - app : application complète avec
    - controller
    - dataMapper
    - logs : journalisation des logs/erreurs
    - middelware : authentification JWT
    - router
    - services : validation JOI
    - utils : gestionnaire d'erreurs, documentation Swagger
  - conception : modelisation de la base de donnée
  - data : seeding & json de fausses données
  - migrations : fichier création de table, revert et verify (sqitch)
  


### Configuration & installation:
- En local:
    - Installer les packages avec la commande : ``npm i``
    - Créer fichier ``.env`` en suivant le modèle ``.env.example`` pour les variables d'environnement
    - Créer une BDD Postgresql local en utilisant les dossiers migrations (pour création des tables et revert via sqitch) et data (pour le seeding)
    - Lancer l'application avec la commande : ``npm run dev``
  

### Documentation
La documentation concernant toutes les routes et fonctionnalités est disponible sur :
https://swapster-back-production.up.railway.app/api-docs/

### Auteurs : 
Min Jung Kim (Lead-Dev) 

Asmaa El Khabbach (Dev)