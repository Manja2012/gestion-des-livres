import express from 'express'
import { add, getAll, getById, updateById, deleteById } from "../controllers/livre.controller.js";

const router = express.Router();

router.post('/', add);

router.get('/', getAll);

router.get('/:id', getById);

router.put('/:id', updateById);

router.delete('/:id', deleteById);

export default router;
