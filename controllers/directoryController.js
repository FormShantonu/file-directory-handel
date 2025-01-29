import Directory from "../models/Directory.js";

export const createItem = async (req, res) => {
  try {
    const { name, type, parent } = req.body;
    const newItem = new Directory({ name, type, parent });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getDirectories = async (req, res) => {
  try {
    const directories = await Directory.find();
    res.status(200).json(directories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const renameItem = async (req, res) => {
  try {
    const { name } = req.body;
    const updatedItem = await Directory.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteItem = async (req, res) => {
  try {
    await Directory.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
