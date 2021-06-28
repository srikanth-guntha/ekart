import * as express from 'express';
import { BooksController } from '../controllers/BooksController';
export const router = express.Router();

router.get(`/searchBooks`, BooksController.searchBooks);
router.get(`/bookinfo`, BooksController.getBookInfo);
