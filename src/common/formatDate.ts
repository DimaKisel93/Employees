export const formatDate = (date:string) => {
    let arrDate = date.split("-");
    [arrDate[0], arrDate[2]] = [arrDate[2], arrDate[0]];
    return arrDate.join(".");
};