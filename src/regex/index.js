// whiteSpace \s
// not allow space \S

const removeAllWhiteSpace = replace(/ /g, "");

const mglString = /^[А-Яа-я|Үү|Өө|Ёё]{2,120}$/;

const engString = /^[A-Za-z]{2,120}$/;

const phone = /^[(9|8|6]{1}[0-9]{7}$/;