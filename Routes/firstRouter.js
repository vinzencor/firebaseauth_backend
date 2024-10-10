
import express from 'express';
import { sample } from '../Controller/firstController.js';

const router = express.Router()

router.post('/create',sample)

export default router