import inventoryRouter from '../routes/inventory.js'
import authRouter from "./router/auth.js";
import orderRouter from '../routes/order.js'
import handleError from '../middlewares/handleError.js'


const route = (app) => {

    app.use('/api/v1/inventory', inventoryRouter)
    app.use('/api/v1/auth', authRouter)
    app.use('/api/v1/order', orderRouter)
    app.use(handleError)

}

export default route;