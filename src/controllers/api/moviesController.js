const db = require('../../database/models');

module.exports = {
    create : (req, res) => {
        db.Movie.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        })
        .then(movie => {
            let response = {
                meta: {
                    status: 201,
                    endpoint: '/api/movies/create'+ movie.id,
                },
                data: movie
            }
            res.status(201)
            .res.json(response)
        })
        .catch(error => {
            res.status(400).json({
                error: error
            })
        })
    },
    destroy : (req, res) => {
        db.Movie.destroy({
            where: {
                id: +req.params.id
            }
        })
        .then(movie => {
            let response = {
                meta: {
                    status: 200,
                    endpoint: '/api/movies/destroy/' + req.params.id,
                },
                data: movie
            }
            res.json(response)
        })
        .catch(error => {
            res.status(400).json({
                error: error
            })
        })
    }
}