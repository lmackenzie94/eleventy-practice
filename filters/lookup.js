module.exports = (array, filterString) => {
  array = array.filter(item => {
    return item.name.includes(filterString);
  });
  return array;
};
