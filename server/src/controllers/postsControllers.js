import * as sql from '../server/models/posts.dao.js'

export const findPosts = (_, res) => {
  sql.findPosts()
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json({ status: false, code: 404, message: error }))
}

export const findByIdPost = (req, res) => {
  sql.findByIdPost(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json({ status: false, code: 404, message: error }))
}

export const createPost = (req, res) => {
  sql.createPost(req.body.titulo, req.body.img, req.body.descripcion)
    .then((result) => res.status(201).json({ status: true, code: 201, message: result }))
    .catch((error) => res.status(500).json({ status: false, code: 404, message: error }))
}

export const updatePost = (req, res) => {
  sql.updatePost(req.params.id, req.body.titulo, req.body.img, req.body.descripcion)
    .then((result) => res.status(201).json({ status: true, code: 201, message: result }))
    .catch((error) => res.status(500).json({ status: false, code: 404, message: error }))
}

export const deletePost = (req, res) => {
  sql.deletePost(req.params.id)
    .then((result) => res.status(201).json({ status: true, code: 201, message: result }))
    .catch((error) => res.status(500).json({ status: false, code: 404, message: error }))
}

export const likePost = (req, res) => {
  sql.likePost(req.params.id)
    .then((result) => res.status(201).json(result))
    .catch((error) => res.status(500).json({ status: false, code: 404, message: error }))
}

export const allPost = (_, res) => res.status(404).json({status: false, code: 404, message: 'Page not found'})
