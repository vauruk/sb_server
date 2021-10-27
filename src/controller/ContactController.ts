import { Request, Response } from 'express'

import contactList from '../data/contacts'
import { ContactProps } from './ContactType'

class ContactContoller {
    public async index(req: Request, res: Response): Promise<Response> {
        //console.log("req xxß", req.params)
        const search = req.params.search
        console.log("filter", search)
        let newList: ContactProps[] = contactList.filter(item => item.name.includes(search))
        return res.json(newList);
    }

    private find(value: string) {
        console.log("filter", value)
        let newList: ContactProps[] = contactList.filter(item => item.name.includes(value))
        return newList;
    }
}
export default new ContactContoller();