const { Pokemon } = require('../db/sequelize')

module.exports = (app) => {
    app.get('/api/pokemons', (req, res) => {
        Pokemon.findAll()
            .then(pokemons => {
                const message = 'La listes des pokémons a bien été récupérée.'
                res.json({ message, data: pokemons })
            })
            .catch(error => {
                const message = `la liste des pokémons n'a pas pu être récupérée. Réssayez dans quelques instants.`
                res.statut(500).json({ message, data: error })
            })
    })
}