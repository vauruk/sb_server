import moment from "moment";

export const age = (date: string) => {

    const birthday = date.replace(/\s/g, '');
    const yearsOld = moment().diff(birthday, 'years', false);

    return yearsOld;
}