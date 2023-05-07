import express from 'express'
import * as inventoryController from '../controllers/inventory.js';

const inventoryRouter = express.Router();

inventoryRouter.get('/', inventoryController.getProducts)
inventoryRouter.get('/smallQuantity', inventoryController.GetSmallQuantityProducts)



export default inventoryRouter;
