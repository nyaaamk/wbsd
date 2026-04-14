const whatIsInAName = (collection, source) => {
  return collection.filter(obj => {
    return Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  });
};