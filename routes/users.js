import express from "express"

import { createUser, getUsers, getUser, deleteUser, updateUser } from "../controllers/users.js"

const router = express.Router()

let users = [
]

//all routes in here are starting with /users

// READ
router.get('/', getUsers)

// CREATE

router.post('/', createUser)

// READ
router.get('/:id', getUser)

// DELETE
router.delete('/:id', deleteUser)

// UPDATE
router.patch('/:id', updateUser)

export default router