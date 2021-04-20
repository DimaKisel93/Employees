export const sortDate = (date: any[]) =>
    date.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));