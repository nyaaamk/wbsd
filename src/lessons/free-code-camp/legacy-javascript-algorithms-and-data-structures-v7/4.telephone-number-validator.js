function telephoneCheck (str){
  const regx = /^(?:\+1\s*|1\s*)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;

  return !!str.match(regx);
}

console.log(telephoneCheck("555-555-5555"));