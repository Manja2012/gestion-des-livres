import { Livre } from "../models/index.js";

export const add = async (req, res) => {
  try {
    const newLivre = await Livre.create(req.body);
    await newLivre.createAuteur(req.body.auteur)  // это служит для того чтоб добавить в бД табло с автором и при создании книги с указанием автора оно автоматом пойдет в табло "автор"
    res.status(201).json(newLivre);
  } catch (err) {
    res.status(500).json({ error: "Error lors de la création ! 😭" });
  }
};

export const getAll = async (req, res) => {
  try {
    const livres = await Livre.findAll();
    res.status(200).json(livres);
  } catch (err) {
    res.status(500).json({ error: "Error lors de la récupération" });
  }
};

export const getById = async (req, res) => {
  try {
    const id = req.params.id;
    const livre = await Livre.findByPk(id);
    res.status(200).json(livre);
  } catch (err) {
    res.status(500).json({ error: "Error lors de la récupération" });
  }
};

export const updateById = async (req, res) => {
  try {
    const livre = await Livre.findByPk(req.params.id);
    await livre.update(req.body);
    return res.status(200).json(livre);
  } catch (err) {
    res.status(500).json({ error: "Error lors de la récupération" });
  }
};

export const deleteById = async (req, res) => {
  try {
    const livre = await Livre.findByPk(req.params.id);
    await livre.destroy();
    res.status(200).json("livre deleted ! ");
  } catch (err) {
    res.status(500).json({ error: "Error lors de la récupération" });
  }
};

