import { Request, Response } from 'express'

import contactList from '../data/contacts'
import { ContactProps } from './ContactType'

import { age } from '../util/dateUtil'

class ContactContoller {

    private find = (text: string) => {
        console.log(text)
        return null
    }

    public async index(req: Request, res: Response): Promise<Response> {
        const search = req.params.search
        const text = search.split(' ')
        console.log("text", text)
        let newList: ContactProps[] = contactList.filter(item =>
            item.name.includes(search)
        )

        return res.json(newList);
    }

}
export default new ContactContoller();