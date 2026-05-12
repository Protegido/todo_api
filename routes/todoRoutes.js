const express = require("express");
const router = express.Router();
const {
    getAllTodos,
    getOneTodo,
    deleteTodo,
    createTodo,
    updateTodo,
    updateSecondTodo
} = require("../controller/todoController.js");

router.get("/get-todos", getAllTodos);
router.get("/todos/:id", getOneTodo);
router.post("/create-todos", createTodo);
router.patch("/update-todos/:id", updateTodo);
router.patch("/update2-todos/:id", updateSecondTodo);
router.delete("/delete-todos/:id", deleteTodo);

module.exports = router;