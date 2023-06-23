// whiteSpace \s
// not allow space \S

const removeAllWhiteSpace = replace(/ /g, "");

const mglString = /^[А-Яа-я|Үү|Өө|Ёё]{2,120}$/;

const engString = /^[A-Za-z]{2,120}$/;