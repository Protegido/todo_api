const TodoModel = require('../model/todoModel.js');

// Crud
const getAllTodos = async (req, res) => {
    try {
        const todos = await TodoModel.find();
        return res.status(200).json({
            message : "All Todos",
            data : todos
        });
    } catch (error) {        
        return res.status(500).json({
            error : error.message
        });
    }
        }
const getOneTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await TodoModel.findById(id);
        if (!todo) {
            return res.status(404).json({
                error : "Todo not found"
            });
        }
        return res.status(200).json({
            message : "Todo found",
            data : todo
        });
    } catch (error) {
        return res.status(500).json({
            error : error.message
        });
    }
};

// to create a single todo
//const { title, details } = req.body;
//const todo = await TodoModel.create({ title, details });
const createTodo = async (req, res) => {
    try {
        const todo = await TodoModel.insertMany(req.body);
        return res.status(201).json({
            message : "Todo created",
            data : todo
        });
    } catch (error) {
        return res.status(500)
        .json({error : error.message});
    }
};
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const {title, details} = req.body;
        const todo = await TodoModel.findByIdAndUpdate(
            id, 
            { completed: true}, 
            { new: true });
        return res.status(200).json({
            message : "Todo updated",
            data : todo
        });
    } catch (error) {
        return res.status(500).json({
            error : error.message
        }); 
    }
};

const updateSecondTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const {title, details} = req.body;
        const todo = await TodoModel.findByIdAndUpdate(
            id, 
            { completed: true}, 
            { new: true });
        return res.status(200).json({
            message : "Todo updated",
            data : todo
        });
    } catch (error) {
        return res.status(500).json({
            error : error.message
        }); 
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await TodoModel.findByIdAndDelete(id);
        return res.status(200).json({
            message : "Todo deleted"
        });
    } catch (error) {
        return res.status(500).json({
            error : error.message
        });
    }   
};

module.exports = {
    getAllTodos,
    getOneTodo,
    createTodo,
    updateTodo,
    updateSecondTodo,
    deleteTodo
}