const express = require('express')
const controller = require('./controller')
const functions = require('../../functions')

const router = express.Router()
const { getAll, getById, insertProduct, upsertProduct, removeProduct } = controller

router.use(express.json())

router.get('/', getAll)
router.get('/:id', functions.decodeToken, getById)
router.post('/', functions.decodeToken, insertProduct)
router.put('/:id', functions.decodeToken, upsertProduct)
router.delete('/:id', functions.decodeToken, removeProduct)

module.exports = router