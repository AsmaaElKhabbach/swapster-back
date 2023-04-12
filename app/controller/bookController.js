const dataMapper = require('../dataMapper');

const bookController = {

	// Méthode pour afficher les 10 derniers livres
	latestbooks: async (req, res) => {
		try {
			const latestBooks = await dataMapper.getLatestBooks();
			console.log("latestBooks :", latestBooks);
			res.status(201).json(latestBooks);
			return;
		} catch(err) {
			res.status(500).json({error:"Problème de requête lors de la vérification des books dans la BDD"});
			return;
		}
	},

	// Methode pour afficher les recherches d'un livre
	searchBook: async (req, res) => {

		try {
			const { search } = req.body
			const checkBook = await dataMapper.searchBook(search)
			return res.status(200).json(checkBook)

		} catch (error) {
			res.status(500).json({ error: "Problème lors de la requête en BDD" });
			return;
		}
	},

	// Methode pour afficher les détails d'un livre
	bookDetails: async (req,res) => {
		// on vérifie que l'id du livre est bien dans la BDD
		let checkBook;
		try {
			checkBook =  await dataMapper.getOneBookById(req.params.bookId);
		} catch(err) {
			res.status(500).json({error:"Problème de requête lors de la vérification du livre dans la BDD"});
			return;
		}

		if (!checkBook) {
			res.status(404).json({error: `Pas de livre avec l'id ${req.params.bookId}`});
			return;
		}

		res.status(201).json(checkBook);
		return;
	},

	// Methode pour afficher tous les users pour un livre
	allUsersByBookId: async (req,res) => {
		let checkBook;
		try {
			checkBook =  await dataMapper.getOneBookById(req.params.bookId);
		} catch(err) {
			res.status(500).json({error:"Problème de requête lors de la vérification du livre dans la BDD"});
			return;
		}

		if (!checkBook) {
			res.status(404).json({error: `Pas de livre avec l'id ${req.params.bookId}`});
			return;
		}

		try {
			const availableBooks = await dataMapper.getAllBooksAvailable(req.params.bookId);
			console.log("availableBooks :", availableBooks);
			res.status(201).json(availableBooks);
			return;
		} catch(err) {
			res.status(500).json({error:"Problème de requête lors de la vérification des books dans la BDD"});
			return;
		}
	},

	userBooks: async(req,res) => {
		// on vérifie que l'id du user est bien dans la BDD
		let checkUser;
		try {
			checkUser =  await dataMapper.getOneUserById(req.userId);
		} catch(err) {
			console.log(req.userId);
			res.status(500).json({error:"Problème de requête lors de la vérification du user dans la BDD"});
			return;
		}

		if (!checkUser) {
			res.status(404).json({error: `Pas de user avec l'id ${req.userId}`});
			return;
		}

		try {
			const userbooks = await dataMapper.getAllUserBooks(req.userId);
			console.log("userbooks :", userbooks);
			res.status(201).json(userbooks);
			return;
		} catch(err) {
			res.status(500).json({error:"Problème de requête lors de la vérification des books dans la BDD"});
			return;
		}
	},

	// // PATCH /book/:bookId/my
	// updatedUserBook: async (req, res) => {

	// 	try {
	// 		// On récupère le bookId dans req.params
	// 		const { bookId } = req.params;
	// 		const { userId, availibility, status } = req.body

	// 		// On vérifie si le livre est en bdd
	// 		const checkBook = await dataMapper.getOneBookById(bookId)

	// 		// Si on ne trouve pas le livre on renvoie un message d'erreur
	// 		if (!checkBook) {
	// 			return res.status(404).json({ error: `Le livre avec l'id ${bookId} n'existe pas` })
	// 		}

	// 		// On verifie si le user a déjà ce livre dans sa liste
	// 		const checkUserHasBook = await dataMapper.getUserHasBookByBookIdAndUserId(bookId, userId)

	// 		if (checkUserHasBook) {
	// 			// Si oui il peut modifier le status ou la dispo
	// 			await dataMapper.updatedUserBook(bookId, userId, availibility, status)

	// 			return res.status(201).json({ message: "Le status du livre est modifié" })

	// 		}

	// 	} catch (error) {
	// 		res.status(500).json({ error: "Le livre n'a pas pu être ajouté à la liste" })

	// 	}
	// },

	updatedUserBook: async (req, res) => {
		const { bookId } = req.params;
		// on vérifie que l'id du livre est bien dans la BDD
		let checkBook;
		try {
			checkBook =  await dataMapper.getOneBookById(bookId);
		} catch(err) {
			res.status(500).json({error:"Problème de requête lors de la vérification du livre dans la BDD"});
			return;
		}

		if (!checkBook) {
			res.status(404).json({error: `Pas de livre avec l'id ${bookId}`});
			return;
		}
		
		// on vérifie que l'id du user est bien dans la BDD
		let checkUser;
		try {
			checkUser =  await dataMapper.getOneUserById(req.userId);
		} catch(err) {
			res.status(500).json({error:"Problème de requête lors de la vérification du user dans la BDD"});
			return;
		}

		if (!checkUser) {
			res.status(404).json({error: `Pas de user avec l'id ${req.userId}`});
			return;
		}

		// on vérifie que le user a bien le livre
		let checkUserHasBook;
		try {
			checkUserHasBook =  await dataMapper.getUserHasBookByBookIdAndUserId(bookId, req.userId);
		} catch(err) {
			res.status(500).json({error:"Problème de requête lors de la vérification du user et du livre dans la BDD"});
			return;
		}

		if (!checkUserHasBook) {
			res.status(404).json({error: `Pas de livre pour cet user.`});
			return;
		}


		// on récupère les données du front
		const { availibility, status } = req.body

		// on vérifie s'il y a eu du changement sur la disponibilité du livre
		if (availibility && availibility !== checkUserHasBook.availibility) {
	
			// mise à jour dans la variable checkUser
			checkUserHasBook.availibility = availibility;
			userHasBookChanged = 1;
		}
	
		// on vérifie s'il y a eu du changement sur l'état du livre
		if (status && status !== checkUserHasBook.status) {


			// mise à jour dans la variable checkUser
			checkUserHasBook.status = status;
			userHasBookChanged = 1;
		}

		// est-ce qu'il y a eu du changement ?
		if (userHasBookChanged == 0) {
			res.status(200).json({warn: "Pas de changement"});
			return;
		}

		// mise à jour  en BDD
		try {
			await dataMapper.updatedUserBook(checkUserHasBook);
			res.status(201).json(checkUserHasBook);
			return;
		} catch(err) {
			console.log("error : ", err);
			res.status(500).json({error:"Problème de requête lors de la mise à jour de user_has_book dans la BDD"});
			return;
		}
	},


}
module.exports = bookController;