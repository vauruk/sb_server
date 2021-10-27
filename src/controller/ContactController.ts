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
        const search = req.params.search.toLowerCase()
        let newList: ContactProps[] = contactList.filter(item =>
            item.name.toLowerCase().includes(search)
            /// || item.address.toLocaleLowerCase().includes(search)
            || item.phone_number.includes(search.replace("[^0-9]", ""))
            || age(item.birthday).toString().includes(search.replace("[^0-9]", ""))
        )
        return res.json(newList);
    }

}
export default new ContactContoller();