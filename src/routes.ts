import { Request, Response, Router } from "express";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { ListMessageController } from "./controllers/ListMessageController";


const router = Router();


const createMessageController = new CreateMessageController()


const listMessageController = new ListMessageController()

router.get('/',(request:Request,response:Response) => {
    return response.json({message: 'Bem vindo a API de lâmpadas'})
})

router.get('/message',listMessageController.handle)
router.post('/message',createMessageController.handle)

export {router}
