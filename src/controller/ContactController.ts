import { Request, Response } from 'express'

import contactList from '../data/contacts'
import { ContactProps } from './ContactType'

class ContactContoller {
    public async index(req: Request, res: Response): Promise<Response> {
        console.log("req", req.params)
        const search = req.params.search
        console.log("search", search)
        return res.json(contactList);
    }
}
export default new ContactContoller();