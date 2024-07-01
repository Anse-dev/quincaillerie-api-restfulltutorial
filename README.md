
# API RESTful de gestion de quincaillerie

## Qu'est-ce qu'une API RESTful ?

Une API RESTful (Representational State Transfer) est une interface de programmation d'application (API) basée sur les principes architecturaux du web. Contrairement aux APIs traditionnelles qui peuvent utiliser des protocoles et des formats différents pour les communications, une API RESTful utilise principalement HTTP pour les opérations CRUD (Create, Read, Update, Delete) sur des ressources.

### Principes clés d'une API RESTful :

1. **Architecture client-serveur** : Séparation des préoccupations entre le client et le serveur, permettant à chaque partie d'évoluer indépendamment.

2. **Sans état (stateless)** : Chaque requête du client au serveur doit contenir toutes les informations nécessaires pour comprendre et traiter la requête. Aucun contexte n'est stocké sur le serveur entre les requêtes.

3. **Cacheable** : Les réponses à une requête doivent indiquer si elles peuvent être mises en cache ou non pour améliorer la performance.

4. **Interface uniforme** : Les ressources sont manipulées à travers des URI (Uniform Resource Identifier) standard, et les actions sont représentées par les méthodes HTTP (GET, POST, PUT, DELETE).

5. **Système de couches (layered system)** : L'architecture peut être composée de plusieurs couches, par exemple des serveurs intermédiaires peuvent agir comme des proxies pour gérer les demandes de manière plus efficace.

### Fonctionnalités de cette API :

Cette API permet la gestion des produits d'une quincaillerie en respectant les principes RESTful suivants :

- **GET /api/products** : Récupère la liste de tous les produits.
- **GET /api/products/:id** : Récupère les détails d'un produit spécifique par son ID.
- **POST /api/products** : Crée un nouveau produit.
- **PUT /api/products/:id** : Met à jour un produit existant.
- **DELETE /api/products/:id** : Supprime un produit par son ID.

### Prérequis pour l'utilisation de l'API :

- Node.js installé localement
- Installation des dépendances via `npm install`
- Démarrage du serveur avec `npm start`

### Exemples d'utilisation :

Pour créer un nouveau produit :

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "Hammer", "price": 12.99}' http://localhost:3000/api/products
```

Pour récupérer tous les produits :

```bash
curl http://localhost:3000/api/products
```

Pour mettre à jour un produit existant :

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"price": 15.99}' http://localhost:3000/api/products/1
```

Pour supprimer un produit :

```bash
curl -X DELETE http://localhost:3000/api/products/1
```

### Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](./LICENSE) pour plus de détails.


![Screenshot 2024-07-01 at 14-27-24 Swagger UI](https://github.com/Anse-dev/quincaillerie-api-restfulltutorial/assets/67246148/fa635842-c189-496a-b0b7-7d1bff468a5e)

