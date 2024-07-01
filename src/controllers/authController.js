const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const secret = require("../config")
const users = [];

async function register(req, res) {
    const { username, password } = req.body;

    try {
        // Vérifie si l'utilisateur existe déjà
        const existingUser = users.find(user => user.username === username);

        if (existingUser) {
            return res.status(400).json({ message: 'Utilisateur déjà existant' });
        }

        // Hashage du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Création d'un nouvel utilisateur
        const newUser = new User(username, hashedPassword);
        users.push(newUser);

        res.status(201).json({ message: 'Utilisateur créé avec succès' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de l'enregistrement de l'utilisateur" });
    }
}

async function login(req, res) {
    const { username, password } = req.body;

    try {
        // Vérifie si l'utilisateur existe
        const user = users.find(user => user.username === username);

        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        // Vérifie le mot de passe
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }

        // Génère un token JWT
        const token = jwt.sign({ id: user.id }, 'console.error', { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error(secret);
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la connexion' });
    }
}

module.exports = {
    register,
    login
};
