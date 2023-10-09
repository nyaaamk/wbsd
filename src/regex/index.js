// whiteSpace \s
// not allow space \S

export const removeAllWhiteSpace = replace(/ /g, "");

export const parsedSTring = "   John     Doe    ".replace(/ +/g, " ").trim();

export const mglString = /^[А-Яа-я|Үү|Өө|Ёё|\s|.]{2,255}$/;

export const engString = /^[A-Za-z]{2,120}$/;

export const phone = /^[(9|8|6]{1}[0-9]{7}$/;

export const strongPassword = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})$/;

export const optionalPassword = /^((?=.*[\d])(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s])|(?=.*[\d])(?=.*[A-Z])(?=.*[^\w\d\s])|(?=.*[\d])(?=.*[a-z])(?=.*[^\w\d\s])).{7,30}$/;