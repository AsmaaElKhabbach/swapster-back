Auteur: id, nom
ECRIRE, 1N Auteur, 1N Oeuvre
Oeuvre: id, titre, resume, code_category
DISPOSER, 0N Catégorie, 11 Oeuvre
Catégorie: id, nom

PUBLIER, 1N Oeuvre, 11 Livre
Livre: id, isbn_13, couverture, editeur, date de publication, langue, nombre de pages, hauteur, largeur, épaisseur, code_oeuvre

APPARTENIR, 0N Livre, 0N Utilisateur : disponibilite, etat

Utilisateur: id, email, pseudo, ville, mot de passe, photo
:
