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
        const params = search.split(" ")
        let newList: ContactProps[] = contactList.filter(item =>
            (params.length > 0 && (item.name.toLowerCase().includes(params[0]) || item.phone_number.includes(params[0].replace("[^0-9]", "")) || age(item.birthday).toString().includes(params[0].replace("[^0-9]", ""))))
            || (params.length > 1 && (item.name.toLowerCase().includes(params[1]) || item.phone_number.includes(params[1].replace("[^0-9]", "")) || age(item.birthday).toString().includes(params[1].replace("[^0-9]", ""))))
            || (params.length > 2 && (item.name.toLowerCase().includes(params[2]) || item.phone_number.includes(params[2].replace("[^0-9]", "")) || age(item.birthday).toString().includes(params[2].replace("[^0-9]", ""))))

        )
        return res.json(newList);
    }

}
export default new ContactContoller();