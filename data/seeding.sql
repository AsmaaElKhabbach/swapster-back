BEGIN;
<<<<<<< HEAD

INSERT INTO
    "user" (
        "name",
        "email",
        "password",
        "city",
        "picture"
    )
VALUES (
        'John',
        'John@oclock.io',
        '$2b$10$yZznjHJCENsDpS4SFDcLQuOiaNKHLPsJ9qURrKTFyWOqMdVVR46/.',
        'Paris',
        'https://thumbs.dreamstime.com/b/vecteur-d-ic%C3%B4ne-de-profil-avatar-par-d%C3%A9faut-image-sociale-utilisateur-m%C3%A9dias-social-182145777.jpg'
    );

INSERT INTO
    "user" (
        "name",
        "email",
        "password",
        "city",
        "picture"
    )
VALUES (
        'Donneur',
        'Donneur@oclock.io',
        '$2b$10$nol..oNKvA4TsQICrBrAte/XAhbceVBadwuREuGqu7mEqj62ci//G',
        'Creteil',
        'https://thumbs.dreamstime.com/b/vecteur-d-ic%C3%B4ne-de-profil-avatar-par-d%C3%A9faut-image-sociale-utilisateur-m%C3%A9dias-social-182145777.jpg'
    );

INSERT INTO "category" ("name") VALUES ('Fantastique');

INSERT INTO "category" ("name") VALUES ('Fiction absurde');

INSERT INTO "category" ("name") VALUES ('Fantasy littéraire');

INSERT INTO
    "category" ("name")
VALUES ('Littérature pour enfants');

INSERT INTO "category" ("name") VALUES ('Roman');

INSERT INTO "category" ("name") VALUES ('Fiction');

INSERT INTO
    "work" (
        "title",
        "resume",
        "category_id"
    )
VALUES (
        'Alice aux pays des merveilles',
        'loremdnkjndlqskdjqlsjdqklzope o ,dqod ,qd qzpd,zq,dzqpokdqlmkdzqmldqpzq',
        4
    );

INSERT INTO
    "work" (
        "title",
        "resume",
        "category_id"
    )
VALUES (
        'Harry Potter et l’école des sorciers',
        'loremdnkjndlqskdjqlsjdqklzope o ,dqod ,qd qzpd,zq,dzqpokdqlmkdzqmldqpzq',
        1
    );

INSERT INTO
    "work" (
        "title",
        "resume",
        "category_id"
    )
VALUES (
        'Les misérables',
        'Ce livre est un vrai chef d’ oeuvre de la littérature française. Ce roman historique écrit par le grand Victor Hugo est très fidèle au condition de l’ époque. Je remercie le ministère de l’ éducation de l’ avoir mit au programme',
        5
    );

INSERT INTO
    "work" (
        "title",
        "resume",
        "category_id"
    )
VALUES (
        '1984',
        'dnsqmldjkmql,zlmq,qslk,ddqsdq',
        1
    );

INSERT INTO
    "work" (
        "title",
        "resume",
        "category_id"
    )
VALUES (
        'Pierre et Jean',
        'Au cours d’une partie de pêche familiale en compagnie de Mme Rosémilly, les deux frères, pour séduire la jeune femme, se livrent à une compétition acharnée à la rame. Le lecteur découvre que sous une apparence d’union et d’affection, une vraie rivalité oppose les deux frères.',
        6
    );

INSERT INTO
    "work" (
        "title",
        "resume",
        "category_id"
    )
VALUES (
        'Le Petit Prince',
        'loremdnkjndlqskdjqlsjdqklzope o ,dqod ,qd qzpd,zq,dzqpokdqlmkdzqmldqpzq skqldjqsdq',
        4
    );

INSERT INTO "author" ("name") VALUES ('Lewis Carroll');

INSERT INTO "author" ("name") VALUES ('JK Rowling');

INSERT INTO "author" ("name") VALUES ('Victor Hugo');

INSERT INTO "author" ("name") VALUES ('George Orwell');

INSERT INTO "author" ("name") VALUES (' Guy de Maupassant');

INSERT INTO
    "author" ("name")
VALUES ('Antoine de Saint-exupéry');

INSERT INTO
    "book" (
        "isbn_13",
        "cover_page",
        "editor",
        "publication_date",
        "language",
        "pages_number",
        "height",
        "width",
        "thickness",
        "work_id"
    )
VALUES (
        '9782215126423',
        'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61fNOqZlsRL._SX218_BO1,204,203,200_QL40_ML2_.jpg',
        'Fleurus',
        '24 octobre 2013',
        'Français',
        '176',
        '123',
        '456',
        '25',
        1
    );

INSERT INTO
    "book" (
        "isbn_13",
        "cover_page",
        "editor",
        "publication_date",
        "language",
        "pages_number",
        "height",
        "width",
        "thickness",
        "work_id"
    )
VALUES (
        '9782215126548',
        'data:image/jpeg;base64,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',
        'Les sorcier',
        '10 octobre 2004',
        'Français',
        '140',
        '10',
        '15',
        '8',
        2
    );

INSERT INTO
    "book" (
        "isbn_13",
        "cover_page",
        "editor",
        "publication_date",
        "language",
        "pages_number",
        "height",
        "width",
        "thickness",
        "work_id"
    )
VALUES (
        '9782211238465',
        'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/511RqGjjD2L._SX322_BO1,204,203,200_.jpg',
        'J. Hetzel et A. Lacroix',
        '10 octobre 1866',
        'Français',
        '799',
        '10',
        '15',
        '8',
        3
    );

INSERT INTO
    "book" (
        "isbn_13",
        "cover_page",
        "editor",
        "publication_date",
        "language",
        "pages_number",
        "height",
        "width",
        "thickness",
        "work_id"
    )
VALUES (
        '9782211238465',
        'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/511RqGjjD2L._SX322_BO1,204,203,200_.jpg',
        'Abridged',
        '9 janvier 2019',
        'Français',
        '324',
        '12.5',
        '18.9',
        '2.5',
        3
    );

INSERT INTO
    "book" (
        "isbn_13",
        "cover_page",
        "editor",
        "publication_date",
        "language",
        "pages_number",
        "height",
        "width",
        "thickness",
        "work_id"
    )
VALUES (
        '9780547249643',
        'https://books.google.fr/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72TqNul0l5EyeKZn_DRiLR3Gt5LiRGcjn1UWQz0vZV3k-0t5JqM7wpJjJUFB90kto2WYIyFsKaSMt0ilNiEMkAQe29MB5iIQzJBc86FuDjphgTauJ8rXdCpcVcJ5RXFllWmMrTY',
        'HarperCollins',
        '9 janvier 2013',
        'Français',
        '304',
        '11',
        '15',
        '1.5',
        4
    );

INSERT INTO
    "book" (
        "isbn_13",
        "cover_page",
        "editor",
        "publication_date",
        "language",
        "pages_number",
        "height",
        "width",
        "thickness",
        "work_id"
    )
VALUES (
        '9782290106075',
        'https://sp.yimg.com/ib/th?id=OPE.6yF7N2NrMv6c3g300C300&pid=21.1&w=174&h=174',
        'Librio',
        '6 juin 2018',
        'Français',
        '192',
        '17.7',
        '12.5',
        '1.2',
        5
    );

INSERT INTO
    "book" (
        "isbn_13",
        "cover_page",
        "editor",
        "publication_date",
        "language",
        "pages_number",
        "height",
        "width",
        "thickness",
        "work_id"
    )
VALUES (
        '9782072878497',
        'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41Hdsa+X4jL._SX302_BO1,204,203,200_.jpg',
        'Folio',
        '28 mai 2020',
        'Français',
        '400',
        '11',
        '17',
        '1.5',
        4
    );

INSERT INTO
    "book" (
        "isbn_13",
        "cover_page",
        "editor",
        "publication_date",
        "language",
        "pages_number",
        "height",
        "width",
        "thickness",
        "work_id"
    )
VALUES (
        '9782070410859',
        'https://sp.yimg.com/ib/th?id=OPE.6yF7N2NrMv6c3g300C300&pid=21.1&w=174&h=174',
        'Folio',
        '2 juillet 1999',
        'Français',
        '282',
        '18',
        '11',
        '1.3',
        5
    );

INSERT INTO
    "book" (
        "isbn_13",
        "cover_page",
        "editor",
        "publication_date",
        "language",
        "pages_number",
        "height",
        "width",
        "thickness",
        "work_id"
    )
VALUES (
        '9782070667222',
        'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41B-d58s3GL._SX353_BO1,204,203,200_.jpg',
        'Gallimard Jeunesse',
        '27 août 2015',
        'Français',
        '64',
        '18.3',
        '25.7',
        '4.3',
        6
    );

INSERT INTO
    "book" (
        "isbn_13",
        "cover_page",
        "editor",
        "publication_date",
        "language",
        "pages_number",
        "height",
        "width",
        "thickness",
        "work_id"
    )
VALUES (
        '9782072730849',
        'https://images2.medimops.eu/product/cd0774/M02072730848-large.jpg',
        'Gallimard',
        '15 juin 2015',
        'Français',
        '179',
        '11',
        '28',
        '8',
        6
    );

INSERT INTO
    "author_has_work" ("work_id", "author_id")
VALUES (1, 1);

INSERT INTO
    "author_has_work" ("work_id", "author_id")
VALUES (2, 2);

INSERT INTO
    "author_has_work" ("work_id", "author_id")
VALUES (3, 3);

INSERT INTO
    "author_has_work" ("work_id", "author_id")
VALUES (4, 4);

INSERT INTO
    "author_has_work" ("work_id", "author_id")
VALUES (5, 5);

INSERT INTO
    "author_has_work" ("work_id", "author_id")
VALUES (6, 6);

INSERT INTO
    "user_has_book" (
        "book_id",
        "user_id",
        "availability",
        "status"
    )
VALUES (1, 2, 'disponible', 'bon état');

INSERT INTO
    "user_has_book" (
        "book_id",
        "user_id",
        "availability",
        "status"
    )
VALUES (2, 2, 'donné', 'mauvais');

INSERT INTO
    "user_has_book" (
        "book_id",
        "user_id",
        "availability",
        "status"
    )
VALUES (4, 1, 'disponible', 'correct');

INSERT INTO
    "user_has_book" (
        "book_id",
        "user_id",
        "availability",
        "status"
    )
VALUES (6, 1, 'disponible', 'mauvais');

INSERT INTO
    "user_has_book" (
        "book_id",
        "user_id",
        "availability",
        "status"
    )
VALUES (8, 2, 'disponible', 'correct');

COMMIT;
=======
        INSERT INTO "user"
        ("name", "email", "password", "city", "picture")
        VALUES
        ('John', 'John@oclock.io', '$2b$10$yZznjHJCENsDpS4SFDcLQuOiaNKHLPsJ9qURrKTFyWOqMdVVR46/.', 'Paris', 'https://thumbs.dreamstime.com/b/vecteur-d-ic%C3%B4ne-de-profil-avatar-par-d%C3%A9faut-image-sociale-utilisateur-m%C3%A9dias-social-182145777.jpg');
        
        INSERT INTO "user"
        ("name", "email", "password", "city", "picture")
        VALUES
        ('Donneur', 'Donneur@oclock.io', '$2b$10$nol..oNKvA4TsQICrBrAte/XAhbceVBadwuREuGqu7mEqj62ci//G', 'Creteil', 'https://thumbs.dreamstime.com/b/vecteur-d-ic%C3%B4ne-de-profil-avatar-par-d%C3%A9faut-image-sociale-utilisateur-m%C3%A9dias-social-182145777.jpg');
        
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
        ('Littérature pour enfants');
        
        INSERT INTO "category"
        ("name")
        VALUES
        ('Roman');
        
        INSERT INTO "category"
        ("name")
        VALUES
        ('Fiction');
        
        INSERT INTO "work"
        ("title", "resume", "category_id")
        VALUES
        ('Alice aux pays des merveilles', 'loremdnkjndlqskdjqlsjdqklzope o ,dqod ,qd qzpd,zq,dzqpokdqlmkdzqmldqpzq', 4);
        
        INSERT INTO "work"
        ("title", "resume", "category_id")
        VALUES
        ('Harry Potter et l’école des sorciers', 'loremdnkjndlqskdjqlsjdqklzope o ,dqod ,qd qzpd,zq,dzqpokdqlmkdzqmldqpzq', 1);
        
        INSERT INTO "work"
        ("title", "resume", "category_id")
        VALUES
        ('Les misérables', 'Ce livre est un vrai chef d’ oeuvre de la littérature française. Ce roman historique écrit par le grand Victor Hugo est très fidèle au condition de l’ époque. Je remercie le ministère de l’ éducation de l’ avoir mit au programme', 5);
        
        INSERT INTO "work"
        ("title", "resume", "category_id")
        VALUES
        ('1984', 'dnsqmldjkmql,zlmq,qslk,ddqsdq', 1);
        
        INSERT INTO "work"
        ("title", "resume", "category_id")
        VALUES
        ('Pierre et Jean', 'Au cours d’une partie de pêche familiale en compagnie de Mme Rosémilly, les deux frères, pour séduire la jeune femme, se livrent à une compétition acharnée à la rame. Le lecteur découvre que sous une apparence d’union et d’affection, une vraie rivalité oppose les deux frères.', 6);
        
        INSERT INTO "work"
        ("title", "resume", "category_id")
        VALUES
        ('Le Petit Prince', 'loremdnkjndlqskdjqlsjdqklzope o ,dqod ,qd qzpd,zq,dzqpokdqlmkdzqmldqpzq skqldjqsdq', 4);
        
        INSERT INTO "author"
        ("lastname", "firstname")
        VALUES
        ('Carroll', 'Lewis');
        
        INSERT INTO "author"
        ("lastname", "firstname")
        VALUES
        ('Rowling', 'JK');
        
        INSERT INTO "author"
        ("lastname", "firstname")
        VALUES
        ('Hugo', 'Victor');
        
        INSERT INTO "author"
        ("lastname", "firstname")
        VALUES
        ('Orwell', 'George');
        
        INSERT INTO "author"
        ("lastname", "firstname")
        VALUES
        ('de Maupassant', 'Guy');
        
        INSERT INTO "author"
        ("lastname", "firstname")
        VALUES
        ('de Saint-exupéry', 'Antoine');
        
        INSERT INTO "book"
        ("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
        VALUES
        ('9782215126423', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61fNOqZlsRL._SX218_BO1,204,203,200_QL40_ML2_.jpg', 'Fleurus', '24 octobre 2013', 'Français', '176', '123', '456', '25', 1);
        
        INSERT INTO "book"
        ("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
        VALUES
        ('9782215126548', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAGQAZAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAMEBgcBAgj/xAA6EAACAQIEBAQEBAQGAwEAAAABAgMEEQAFEiETMUFRBiJhcRQygZEHI0KhUmKxwSQzRNHh8ENy8RX/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEAAX/xAAiEQEAAgMAAgICAwAAAAAAAAABAAIDESESMSJBExQEIzL/2gAMAwEAAhEDEQA/AMwyaeGmrlaqhWaK9mVhcEe2CteI6tZKuCGKkjnXywrezNzOntt9MAI9UrhbgdcECzBKRRM8tPF5ropvHc7gjvt6jCI72QPqS8voBmTuYo2kdNJVohu+1yCP7ntjRMoyChjpKmXMXp4MseGnSad5GBmZm5JcDRyIuCbb9d1f/D/wzFXOnlK0706/E61BY7kab8wTb9sTfE2YZbW55muR5uqU+T5bSrJGYAdSMikW7WIlta3T1xo8zxAJEoltst1bBSx0XApKSUU0bgFIAbuTuWv1PW5xW6qCgp6OZkrI3qGsYABey9QemL5R11JU5dFU0rA0rRgrYEWFu2MX/EXM8vyqvaDL4ZUMn5jK19JB6g973/bF8GQqfLhIZsbZ+PWSK7OjSIEnHEjva4ba/tir5rmEtcpU1BdOYW/y9sCHzxallWRCqHYux/7ti/8Ahb8PZaueGbN6pIIH/wBMjAzSLz2tyHrja/yMabGZzBYTZ2Z0rPHKGU6WA5jnh6mAmm+KhmMEiNbUBZVAG5I5DfpjU898J0NHU1cpFNBRBTpiA1FiBtcnkfbviiSUfh2GLTUcV6lj/wCNimn2t/fEclHJXdWWrlrW2rEhQzShHjquEnF/1SsRY2uAQOne1hjkUSZTLR1lZRzSiqNvORYow5qL879+Y7HEWaRYKsDUKmAONdxZ9J57ra+wI39O+JeaUNNNUypBLNDBDOy65dThAQNG3MX379MeZlL+WrTbTx1usj5pqiqPPl0C6rlVimFlGoi3uLWwsBJkgYgyNPr3vYA9T64WAGiPGkuTcHzYLZNERWIzXTSCQfW2BtPG7EEJqHfBnKFYytGsV2kYAAGzAdTY9Nxvi2ICwshlVEm2fhvmNLTZalOi8IsokZZD5mLbAA/yhcSz4Zy/MM/qpp4y8M7TCW7EcRJFiupsbndTbt0xW6HPMryHL6V82RVWXiCIMjOz2sWIAvtcgYleH/GlJn9W8GXRzpUourgyr5iOtu5GKNa2s97J0vatN65NGpsvp6ejipowOHEulAOi9B9MZN+Jvg6eqz2WvllSLKUphJJKSAYyCFsL97+2LxBns8C/mxutu6nEfxVm+W5l4brKaoqIUnMXFRHYA+Vhz9LkC574W+O9DvqUxZKXtz3MMzPwfVU1SkWX1EVekyGRFiI4mgC5JW+9u4543bw74erMryClL8KTN4oQiSyL/lj6c9tvpjNvDWb5NkefivzWIU/BjPCVE1kkjTeygkDc42HKM2p8xpFmp6iKcSIZE4MquWXuAPfE6qG5XKC6lTzDwFV1dIWjzOUyynXMkyg6mPM3H9MV5fwxro0kLAMzeUEG5wT8TfjDS0FTLQZJl0lXVxtw2MvlUODYrYbk4cyL8S8yMtPF4myhKNahlSOaFibEm3nX9I3H74r+zaR/VA5AcngArRyxBAkhHzuLnVipy5RXVUKTVNXJKqWZ0SPSVIv8zEXbSVIvvj6FmymOZy0kjG/TGeVGWRJV5rSSVEjinqHIgjXdVJSQG/qXIt/TD2vTIixCl6CExDNl0V0i6tYvcG1v26YWHfEwZM0ZZAqsFsdHI2JH9sLGe3uaK+ozFwzsw2PYYIZdmHwMihacyEsbjXz6Cwtz3+uBUTMGuGK+xxJeUxtBKCS6EHf0N8MOyInZq0tOcw8NqrJTP8HOGE2/ESNrkkWHO+xHIXv3tDjpEos3ybNmkjgqjNGszgMA6ny8u+nriJ4XzOTMoKiNoQb07LKtvnU28vT39LYh+K58xy5iyyqKNURoBazlym23UAkYFh35EOG26NH3C/iX8VKqB6nLMmZioLRvWXuwsbXQWt9T/wA4qOU09W0M1RJUmR6liWaYcTidLkk6u/XFbgj1t1KCwNjz9MXOjq4jTDyhBGu6gfLgj5vYr/WASHSZAkWriSAqxuUjTSD97nEeXiZBmM82XyvC1TAQvDNhsyllPpYfvg18TpQtINNhe1+QxXs7qjUSQyAeUJIB9sG1ahyClrWt2EfBclNTZpNJWyIrzBeCzjdr7kgnkdx9xgrV05rK7Ksuo5S09XOxni5ssZZfNfpexAHXALw1JT1cq5XWmJYavQEllAIjlFgCb8gbaT740nwxVZd4dzJYM2pP8TAzq1QqDVdrfMPQAcsJ+NXZNGTNXHU8ppMuYUVKy0+7MBpADi/13xWXqUOaZsVr4KdPiLoLXkjbhQjVffnf/wC9O+K/EfhvJuBVy0IrjKyhjAy6kU381iQTy5eowCrs2jgyCsrg1FH8XxJYDGl5dLklPXUAYuXy/TDaHhICnVJjGeyRy5i76GiJF9CkEKOYF7DpbphY7XsrT3bz/wAJO5Iubc8LBsfKPT/JI1PZjbQpPdjYYfqYv8KzMqB42AbT2I2xFjADedgowQCpLRzRxa9YXXuoAa2OoCRLukhvwdUSVNTl9IlSVDSaZIyBYAG5Iv1IB3wx45zBcwziR0YCBPKun02sPpbEPwbOKbOTVPq4dNTyzMB1spA/dhgPPO9RKZJLXPQch6DCeT46lK1Dc9RSXqI9gqg2C9sWmgYMiySaVVeRa3P+LFZy1NdZH5A4B3U8jixiNmZdcaluhBB+3K32waRMk91zBoglyA7Xbvbt/TAfNtKUsKrsSzbemCUhMjgyLoRBZQx39T6fXAvPGZuCSLAXHPlg2YtDpI1JFx1EfEEYa41EXF9ttvf98aX4nppIMziBLGU0kHFctfWwS1/rYYzagZ/IqwmX8y+gfqO2Lb40rZautoJYjIomoIyyObNGwZr3H2wa28Tcb+RRvj1POYzVaUK8SreGnc8PSVDFudyPbAuplkgokh16wEUJY9CBffEnNZZZaOmpuIvCRANBUho+dyb9y1/fAqtmkmk84uq3sf8AfFPW7SFTYVfqD6kjWLXA07YWPNQ3nGx5dsLEG3ZqDkbTY8uWJ9PqA4rhgAD/ACr9zzx4p6KerfTBGSfX1NsTaTLXcTOwjkWIbl357fpGOx2N6i5DkhQxyw0+YsmwUJE5HZmv++kYgWwb4UTZfMJJWV/JsjCxUavm7n5ceI8mPwXxD1KXaNmWNRfl0JwuRKuo+P5V3GskS8jsLDT1ODToSNRVX9uvsR/fAmkDQ0VXLG5QxvGAABuW1Xvt/LiPNWSup1FdXcLY/thi2olqqwwIXBvogi/9VJb77YH5rvC4/hdbD3vhqCvqFHmcsB36Y7VzA00czRIWZztbaw59fb745d+oK1R7GqYyLBEIQOJxmYP0QWUEn05fbB7NZ6sVMcNZMZ5I40LSnYnUA2/e18C/DU8cFbNUS+VYYHfYdbf72xPzqrWsr5JSd2ij26fIMXrjGgsXJd34/UZlqeM/DZmK3FgzE4aqWYR8l1dfb1xHW7OQo3/4xyRjN5rkbm1+uEM48Z34dOyRJyQw32ttbthY8TqQ4semFiUuepyOaWI3jdl3B2NsFcsanlcSVlSdbHcD9I7k/TpgS+kEaTfbfE+nhDUD3pyzhriRQbkW3B6W5Ymm4WGIDltTTVTTAU8cjfli1tO3P74m0VLkbZS8CtHNVR00sskqE7aY2a4+oH3xWpJXeicbBALC/X2xJ8OZkaFqwGUR6qOcRGw/zDGQv3P05YNsIa7FpdTssLZRS1CIixtGZqamnkCjTGwQXcX5hiGY/T12hZpk9F8JmX/5dJK5pqqSNnlk88YQxhrAfOty3S4Bvvbfma+IZ4YqOnpniMT0UTtIPMwfSyMD05X253tgfX5m6GpmpMzSRauWV3jjR1ZTJ899SgWI22P2w0ML0LmLwvDHV1UclKlZVwNd2KMDCoULcbWfSw5WvfvjkXh6JaRIq1hKTUCEFCVKN8RHG/T1+x6G+A0jcXIMvpYi3ENVUNIgu2wEYU29y4/6MTznVWxRpaZ31VAqAsY/VxUdre+n6Xxx7nRuDIKeMuZsw0QPE8siRp+YsK6muLnc/l2I25jc32F1UhM8nDlBTyqt9rgKBe30wRkzGZ52b4eSaJoJacHh6WCPrtvve2s+9vrgFq8/nH6txyxQshEQWTNnTSps9ldT2PI48hdOhSQOgv8AucelYC4uBbl/bDLMpEYkLHSP08j32xm1KRiocFwfTrhY5VnVICBbyjbthYcOTo1iRT1E0flSRgCLEA9MLCxzDJM0SrSM+5OkEX6b9MQl6YWFgnokz7j0G9XEhHlY2PtfEe9+YGFhYZjEcEsiogV2Gi9iDY8wf6gfbBqONZcvimbUHa4Ol2HIE358+X2wsLAIYrLxQp1kFFc3lfmSL9f5v2HrcLISXJO5O5wsLDRZ6jduKm/y8jjrSOzXdtTE7k47hYkxiRZj5vpjuFhYpOn/2Q==', 'Les sorcier', '10 octobre 2004', 'Français', '140', '10', '15', '8', 2);
        
        INSERT INTO "book"
        ("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
        VALUES
        ('9782211238465', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/511RqGjjD2L._SX322_BO1,204,203,200_.jpg', 'J. Hetzel et A. Lacroix', '10 octobre 1866', 'Français', '799', '10', '15', '8', 3);
        
        INSERT INTO "book"
        ("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
        VALUES
        ('9782211238465', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/511RqGjjD2L._SX322_BO1,204,203,200_.jpg', 'Abridged', '9 janvier 2019', 'Français', '324', '12.5', '18.9', '2.5', 3);
        
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
        ('9782070667222', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41B-d58s3GL._SX353_BO1,204,203,200_.jpg', 'Gallimard Jeunesse', '27 août 2015', 'Français', '64', '18.3', '25.7', '4.3', 6);
        
        INSERT INTO "book"
        ("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
        VALUES
        ('9782072730849', 'https://images2.medimops.eu/product/cd0774/M02072730848-large.jpg', 'Gallimard', '15 juin 2015', 'Français', '179', '11', '28', '8', 6);
        
        INSERT INTO "author_has_work"
        ("work_id", "author_id")
        VALUES
        ( '1', '1');
        
        INSERT INTO "author_has_work"
        ("work_id", "author_id")
        VALUES
        ( '2', '2');
        
        INSERT INTO "author_has_work"
        ("work_id", "author_id")
        VALUES
        ( '3', '3');
        
        INSERT INTO "author_has_work"
        ("work_id", "author_id")
        VALUES
        ( '4', '4');
        
        INSERT INTO "author_has_work"
        ("work_id", "author_id")
        VALUES
        ( '5', '5');
        
        INSERT INTO "author_has_work"
        ("work_id", "author_id")
        VALUES
        ( '6', '6');
        
        INSERT INTO "user_has_book"
        ("book_id", "user_id","disponibility", "status")
        VALUES
        ( '1', '2', 'disponible', 'bon état');
        
        INSERT INTO "user_has_book"
        ("book_id", "user_id","disponibility", "status")
        VALUES
        ( '2', '2', 'donné', 'mauvais');
        
        INSERT INTO "user_has_book"
        ("book_id", "user_id","disponibility", "status")
        VALUES
        ( '4', '1', 'disponible', 'correct');
        
        INSERT INTO "user_has_book"
        ("book_id", "user_id","disponibility", "status")
        VALUES
        ( '6', '1', 'disponible', 'mauvais');
        
        INSERT INTO "user_has_book"
        ("book_id", "user_id","disponibility", "status")
        VALUES
        ( '8', '2', 'disponible', 'correct');
        COMMIT;
>>>>>>> origin/main
