const Task = require("../models/Task");

// Create Task
exports.createTask = async (req, res) => {
    const { title, completed } = req.body;
    if(!title || title.length < 3) {
        return res.status(400).json({ message: "Title must be at least 3 characters" });
    }
    try {
        const task = await Task.create({ title, completed, user: req.user._id });
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get All Tasks for logged-in user
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user._id });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get Task by ID
exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, user: req.user._id });
        if(!task) return res.status(404).json({ message: "Task not found" });
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update Task
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, user: req.user._id });
        if(!task) return res.status(404).json({ message: "Task not found" });

        const { title, completed } = req.body;
        if(title) task.title = title;
        if(typeof completed === "boolean") task.completed = completed;

        await task.save();
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete Task
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, user: req.user._id });
        if(!task) return res.status(404).json({ message: "Task not found" });

        await task.remove();
        res.json({ message: "Task removed" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
