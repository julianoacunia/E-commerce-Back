const express = require('express')
const controller = require('./controller')
const functions = require('../../functions')

const router = express.Router()
const { getAll, insertUser } = controller

router.use(express.json())

router.get('/', getAll)
router.post('/', insertUser)

module.exports = router