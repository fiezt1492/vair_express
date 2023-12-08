import { Router } from 'express'
import * as controller from '../../../controllers/api/products'
import { checkAuthorization } from '../../../middlewares/auth'

export const apiProductRoute = Router()

apiProductRoute.get('/', controller.getProducts)
apiProductRoute.post('/', checkAuthorization, controller.createProduct)
apiProductRoute.get('/:productId', controller.getProduct)
apiProductRoute.get(
    '/:productId/download',
    checkAuthorization,
    controller.downloadProduct
)
apiProductRoute.post(
    '/:productId/buy',
    checkAuthorization,
    controller.buyProduct
)
