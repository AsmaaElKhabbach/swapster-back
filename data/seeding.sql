BEGIN;
	INSERT INTO "user"
	("name", "email", "password", "city", "picture")
	VALUES
	('John', 'john@oclock.io', '$2b$10$yZznjHJCENsDpS4SFDcLQuOiaNKHLPsJ9qURrKTFyWOqMdVVR46/.', 'Paris', 'https://thumbs.dreamstime.com/b/vecteur-d-ic%C3%B4ne-de-profil-avatar-par-d%C3%A9faut-image-sociale-utilisateur-m%C3%A9dias-social-182145777.jpg');
	
	INSERT INTO "user"
	("name", "email", "password", "city", "picture")
	VALUES
	('Donneur', 'donneur@oclock.io', '$2b$10$nol..oNKvA4TsQICrBrAte/XAhbceVBadwuREuGqu7mEqj62ci//G', 'Creteil', 'https://thumbs.dreamstime.com/b/vecteur-d-ic%C3%B4ne-de-profil-avatar-par-d%C3%A9faut-image-sociale-utilisateur-m%C3%A9dias-social-182145777.jpg');
	
	INSERT INTO "category"
	("name")
	VALUES
	('Fantastique');
	
	INSERT INTO "category"
	("name")
	VALUES
	('Fiction absurde');
	
	INSERT INTO "category"
	("name")
	VALUES
	('Fantasy littéraire');
	
	INSERT INTO "category"
	("name")
	VALUES
	('Jeunesse');
	
	INSERT INTO "category"
	("name")
	VALUES
	('Roman');
	
	INSERT INTO "category"
	("name")
	VALUES
	('Fiction d’action');
	
	INSERT INTO "category"
	("name")
	VALUES
	('Fiction épique');
	
	INSERT INTO "category"
	("name")
	VALUES
	('Science fiction');
	
	INSERT INTO "category"
	("name")
	VALUES
	('Comédie-ballet');
	
	INSERT INTO "category"
	("name")
	VALUES
	('Comédie');
	
	INSERT INTO "work"
	("title", "resume", "category_id")
	VALUES
	('Alice aux pays des merveilles', 'Tandis qu’elle s’ennuie sur la berge d’un fleuve, Alice voit tout à coup passer un lapin blanc, ce qui n’a rien d’exceptionnel, mais, chose plus surprenante, elle le voit également tirer une montre de la poche de son gilet. Intriguée, la voilà qui se lance à sa poursuite. Le lapin disparaît dans un grand terrier: elle décide d’y descendre à son tour. ', 4);
	
	INSERT INTO "work"
	("title", "resume", "category_id")
	VALUES
	('Harry Potter et l’école des sorciers', 'Le jour de ses onze ans, Harry Potter, un orphelin élevé par un oncle et une tante qui le détestent, voit son existence bouleversée. Un géant vient le chercher pour l’emmener à Poudlard, une école de sorcellerie! Voler en balai, jeter des sorts, combattre les trolls : Harry Potter se révèle un sorcier doué. Mais un mystère entoure sa naissance et l’effroyable V…, le mage dont personne n’ose prononcer le nom.', 1);
	
	INSERT INTO "work"
	("title", "resume", "category_id")
	VALUES
	('Les misérables', 'Ce livre est un vrai chef d’ oeuvre de la littérature française. Ce roman historique écrit par le grand Victor Hugo est très fidèle au condition de l’ époque. Je remercie le ministère de l’ éducation de l’ avoir mit au programme', 5);
	
	INSERT INTO "work"
	("title", "resume", "category_id")
	VALUES
	('1984', 'Année 1984 en Océanie. 1984 ? C’est en tout cas ce qu’il semble à Winston, qui ne saurait toutefois en jurer. Le passé a été réinventé, et les événements les plus récents sont susceptibles d’être modifiés. Winston est lui-même chargé de récrire les archives qui contredisent le présent et les promesses de Big Brother. Grâce à une technologie de pointe, ce dernier sait tout, voit tout. Liberté est Servitude. Ignorance est Puissance. Telles sont les devises du régime. Pourtant Winston refuse de perdre espoir. Avec l’insoumise Julia, ils vont tenter d’intégrer la Fraternité, une organisation ayant pour but de renverser Big Brother. Mais celui-ci veille...', 1);
	
	INSERT INTO "work"
	("title", "resume", "category_id")
	VALUES
	('Pierre et Jean', 'Au cours d’une partie de pêche familiale en compagnie de Mme Rosémilly, les deux frères, pour séduire la jeune femme, se livrent à une compétition acharnée à la rame. Le lecteur découvre que sous une apparence d’union et d’affection, une vraie rivalité oppose les deux frères.', 3);
	
	INSERT INTO "work"
	("title", "resume", "category_id")
	VALUES
	('Le Petit Prince', '"Le premier soir, je me suis donc endormi sur le sable à mille milles de toute terre habitée. J’étais bien plus isolé qu’un naufragé sur un radeau au milieu de l’océan. Alors, vous imaginez ma surprise, au lever du jour, quand une drôle de petite voix m’a réveillé. Elle disait : “S’il vous plaît... dessine-moi un mouton !” J’ai bien regardé. Et j’ai vu ce petit bonhomme tout à fait extraordinaire qui me considérait gravement..."', 4);
	
	INSERT INTO "work"
	("title", "resume", "category_id")
	VALUES
	('Cent ans de solitude', 'À Macondo, petit village isolé d’Amérique du Sud, l’illustre famille Buendia est condamnée à cent ans de solitude par la prophétie du gitan Melquiades… Dans un tourbillon de révolutions, de guerres civiles, de fléaux et de destructions, elle vit une épopée mythique, à la saveur inoubliable, qui traverse les trois âges de la vie : naissance, vie et décadence… Ce roman époustouflant est un chef-d’œuvre du XXe siècle.', 7);
	
	INSERT INTO "work"
	("title", "resume", "category_id")
	VALUES
	('Le meilleur des mondes', 'Voici près d’un siècle, dans d’étourdissantes visions, Aldous Huxley imagine une civilisation future jusque dans ses rouages les plus surprenants : un État Mondial, parfaitement hiérarchisé, a cantonné les derniers humains " sauvages " dans des réserves. La culture in vitro des fœtus a engendré le règne des " Alphas ", génétiquement déterminés à être l’élite dirigeante. Les castes inférieures, elles, sont conditionnées pour se satisfaire pleinement de leur sort. Dans cette société où le bonheur est loi, famille, monogamie, sentiments sont bannis. Le meilleur des mondes est possible. Aujourd’hui, il nous paraît même familier...', 4);
	
	INSERT INTO "work"
	("title", "resume", "category_id")
	VALUES
	('Le Tour du monde en 80 jours', '"Le Tour du monde en 80 jours" est un roman d’aventures de Jules Verne paru en 1872. Il relate l’histoire de Phileas Fogg, (un gentleman anglais), et de son fidèle serviteur Jean Passepartout. Lorsque Phileas Fogg apprend dans le journal local qu’il est possible de réaliser le tour du monde en moins de 80 jours grâce à l’ouverture d’une nouvelle voie de chemin de fer en Inde, il parie 20.000 livres avec ses confrères du Reform Club qu’il parviendra à réaliser ce voyage dans le temps imparti. Une aventure semée d’embûches et de péripéties à la découverte de contrées encore méconnues au XIXe siècle. Alternant récit de voyage et succession de données scientifiques, Jules Verne nous fait découvrir les avancées technologiques de l’époque au travers d’une épopée inoubliable.', 6);
	
	INSERT INTO "work"
	("title", "resume", "category_id")
	VALUES
	('Vingt-Mille Lieues sous les mers', 'Dans ce roman d’aventures, l’un des plus emblématiques du XIXe siècle, la foisonnante imagination de Jules Verne nous plonge au cœur des profondeurs, en compagnie du sombre capitaine Nemo.', 8);
	
	INSERT INTO "work"
	("title", "resume", "category_id")
	VALUES
	('Le Bourgeois gentilhomme', 'Monsieur Jourdain prétend sortir de sa condition bourgeoise en singeant les manières d’un noble. Mais, avec une naïveté qui n’a d’égale que sa prétention, il  se laisse duper par l’apparence d’un hôte qu’on lui présente comme le fils du Grand Turc et auquel il destine sa fille.', 9);
	
	INSERT INTO "work"
	("title", "resume", "category_id")
	VALUES
	('L’Avare', '« La peste soit de l’avarice et des avaricieux ! »... Car tous ceux qui ont le malheur de fréquenter Harpagon ont à se plaindre de lui, tous ont à subir la tyrannie de ce vieillard irascible rongé par le désir de posséder toujours plus d’argent et d’en dépenser le moins possible. Harpagon refuse à ses enfants des mariages d’amour et impose à tous les pires supplices au nom de cet argent qu’il entasse dans sa « chère cassette ». Mais un jour, la cassette disparaît...', 10);
	
	INSERT INTO "author"
	("name")
	VALUES
	('Lewis Carroll');
	
	INSERT INTO "author"
	("name")
	VALUES
	('JK Rowling');
	
	INSERT INTO "author"
	("name")
	VALUES
	('Victor Hugo');
	
	INSERT INTO "author"
	("name")
	VALUES
	('George Orwell');
	
	INSERT INTO "author"
	("name")
	VALUES
	('Guy de Maupassant');
	
	INSERT INTO "author"
	("name")
	VALUES
	('Antoine de Saint-exupéry');
	
	INSERT INTO "author"
	("name")
	VALUES
	('Gabriel García Márquez');
	
	INSERT INTO "author"
	("name")
	VALUES
	('Aldous Huxley');
	
	INSERT INTO "author"
	("name")
	VALUES
	('Jules Verne');
	
	INSERT INTO "author"
	("name")
	VALUES
	('Molière');
	
	INSERT INTO "book"
	("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
	VALUES
	('9782210740587', 'https://m.media-amazon.com/images/I/91dswfXsBaL._AC_UL400_.jpg', 'Magnard', '2 mai 2014', 'Français', '160', '18', '13 ', '0.9', 1);
	
	INSERT INTO "book"
	("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
	VALUES
	('9782070624522', 'https://images-eu.ssl-images-amazon.com/images/I/91Ad4FyTwHL._AC_UL232_SR232,232_.jpg', 'Gallimard Jeunesse', '3 octobre 2016', 'Français', '336', '22.5', '15.5', '2.7', 2);
	
	INSERT INTO "book"
	("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
	VALUES
	('9798524923523', 'https://m.media-amazon.com/images/I/61cQB+9H0lS._AC_UL400_.jpg', 'Independently published', '28 juin 2021', 'Français', '359', '20.32', '12.7', '2.29', 3);
	
	INSERT INTO "book"
	("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
	VALUES
	('9782072878497', 'https://m.media-amazon.com/images/I/71UYvdDVyzL._AC_UL400_.jpg', 'Folio', '28 mai 2020', 'Français', '400', '17.9', '11', '1.5', 3);
	
	INSERT INTO "book"
	("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
	VALUES
	('9780547249643', 'https://books.google.fr/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72TqNul0l5EyeKZn_DRiLR3Gt5LiRGcjn1UWQz0vZV3k-0t5JqM7wpJjJUFB90kto2WYIyFsKaSMt0ilNiEMkAQe29MB5iIQzJBc86FuDjphgTauJ8rXdCpcVcJ5RXFllWmMrTY', 'HarperCollins', '9 janvier 2013', 'Français', '304', '11', '15', '1.5', 4);
	
	INSERT INTO "book"
	("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
	VALUES
	('9782290106075', 'https://sp.yimg.com/ib/th?id=OPE.6yF7N2NrMv6c3g300C300&pid=21.1&w=174&h=174', 'Librio', '6 juin 2018', 'Français', '192', '17.7', '12.5', '1.2', 5);
	
	INSERT INTO "book"
	("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
	VALUES
	('9782072878497', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41Hdsa+X4jL._SX302_BO1,204,203,200_.jpg', 'Folio', '28 mai 2020', 'Français', '400', '11', '17', '1.5', 4);
	
	INSERT INTO "book"
	("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
	VALUES
	('9782070410859', 'https://sp.yimg.com/ib/th?id=OPE.6yF7N2NrMv6c3g300C300&pid=21.1&w=174&h=174', 'Folio', '2 juillet 1999', 'Français', '282', '18', '11', '1.3', 5);
	
	INSERT INTO "book"
	("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
	VALUES
	('9782070667222', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41B-d58s3GL._SX353_BO1,204,203,200_.jpg', 'Gallimard Jeunesse', '27 août 2015', 'Français', '64', '25.7', '18.3', '4.3', 6);
	
	INSERT INTO "book"
	("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
	VALUES
	('9782072730849', 'https://images2.medimops.eu/product/cd0774/M02072730848-large.jpg', 'Gallimard', '15 juin 2015', 'Français', '179', '28', '11', '8', 6);
	
	INSERT INTO "book"
	("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
	VALUES
	('9782757893272', 'https://cdn.cultura.com/cdn-cgi/image/width=768/media/pim/TITELIVE/55_9782757893272_1_75.jpg', 'Points', '25 mars 2022', 'Français', '480', '17.8', '10.9', '2.5', 7);
	
	INSERT INTO "book"
	("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
	VALUES
	('9782266283038', 'https://m.media-amazon.com/images/I/71iZzLwuZML._AC_UF1000,1000_QL80_.jpg', 'Pocket', '17 août 2017', 'Français', '320', '17.8', '10.9', '1.5', 8);
	
	INSERT INTO "book"
	("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
	VALUES
	('9782266311410', 'https://m.media-amazon.com/images/I/51l5UshozNL._SY291_BO1,204,203,200_QL40_ML2_.jpg', 'Pocket Jeunesse', '26 août 2021', 'Français', '320', '17.8', '11', '1.5', 8);
	
	INSERT INTO "book"
	("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
	VALUES
	('9788412201819', 'https://m.media-amazon.com/images/P/8412201817.01._SCLZZZZZZZ_SX500_.jpg', 'Libellio ', '4 juin 2020', 'Français', '270', '22.86', '15.24', '1.55', 8);
	
	INSERT INTO "book"
	("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
	VALUES
	('9798491974306', 'https://m.media-amazon.com/images/P/B09HPF3K5J.01._SCLZZZZZZZ_SX500_.jpg', 'Independently published', '7 octobre 2021', 'Français', '191', '22.86', '15.24', '1.12', 9);
	
	INSERT INTO "book"
	("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
	VALUES
	('9782218939709', 'https://m.media-amazon.com/images/I/51-jucVzPNL._SY291_BO1,204,203,200_QL40_ML2_.jpg', 'Hatier', '31 août 2011', 'Français', '352', '17.5', '12.6', '2', 9);
	
	INSERT INTO "book"
	("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
	VALUES
	('9782210758810', 'https://m.media-amazon.com/images/I/61Hnm6vJH6L._AC_UY218_.jpg', 'Magnard', '24 avril 2018', 'Français', '160', '18', '13', '0.8', 10);
	
	INSERT INTO "book"
	("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
	VALUES
	('9798489937313', 'https://m.media-amazon.com/images/I/81IhfdarSIL._AC_UY218_.jpg', 'Independently published', '5 octobre 2021', 'Français', '360', '22.86', '15.24', '2.08', 10);
	
	INSERT INTO "book"
	("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
	VALUES
	('9782218959158', 'https://m.media-amazon.com/images/I/51ewFkFMWEL._SX358_BO1,204,203,200_.jpg', 'Hatier', '14 décembre 2011', 'Français', '160', '17.5', '12.6', '0.9', 11);
	
	INSERT INTO "book"
	("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
	VALUES
	('9782013949750', 'https://m.media-amazon.com/images/I/81lEhkwBobL._AC_UY218_.jpg', 'Hachette Éducation', '7 juin 2017', 'Français', '192', '17.8', '12.5', '1', 11);
	
	INSERT INTO "book"
	("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
	VALUES
	('9782012706132', 'https://m.media-amazon.com/images/I/81+xnjmjJgL._AC_UY218_.jpg', 'Hachette Éducation', '26 août 2015', 'Français', '176', '18', '12.5', '1', 12);
	
	INSERT INTO "author_has_work"
	("work_id", "author_id")
	VALUES
	(1, 1);
	
	INSERT INTO "author_has_work"
	("work_id", "author_id")
	VALUES
	(2, 2);
	
	INSERT INTO "author_has_work"
	("work_id", "author_id")
	VALUES
	(3, 3);
	
	INSERT INTO "author_has_work"
	("work_id", "author_id")
	VALUES
	(4, 4);
	
	INSERT INTO "author_has_work"
	("work_id", "author_id")
	VALUES
	(5, 5);
	
	INSERT INTO "author_has_work"
	("work_id", "author_id")
	VALUES
	(6, 6);
	
	INSERT INTO "author_has_work"
	("work_id", "author_id")
	VALUES
	(7, 7);
	
	INSERT INTO "author_has_work"
	("work_id", "author_id")
	VALUES
	(8, 8);
	
	INSERT INTO "author_has_work"
	("work_id", "author_id")
	VALUES
	(9, 9);
	
	INSERT INTO "author_has_work"
	("work_id", "author_id")
	VALUES
	(10, 9);
	
	INSERT INTO "author_has_work"
	("work_id", "author_id")
	VALUES
	(11, 10);
	
	INSERT INTO "author_has_work"
	("work_id", "author_id")
	VALUES
	(12, 10);
	
	INSERT INTO "user_has_book"
	("book_id", "user_id","availability", "status")
	VALUES
	( '1', '2', 'disponible', 'bon état');
	
	INSERT INTO "user_has_book"
	("book_id", "user_id","availability", "status")
	VALUES
	( '2', '2', 'donné', 'mauvais');
	
	INSERT INTO "user_has_book"
	("book_id", "user_id","availability", "status")
	VALUES
	( '4', '1', 'disponible', 'correct');
	
	INSERT INTO "user_has_book"
	("book_id", "user_id","availability", "status")
	VALUES
	( '6', '1', 'disponible', 'mauvais');
	
	INSERT INTO "user_has_book"
	("book_id", "user_id","availability", "status")
	VALUES
	( '8', '2', 'disponible', 'correct');
	COMMIT;