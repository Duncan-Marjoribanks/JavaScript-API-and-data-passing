const DataSorter = function () {
}



DataSorter.prototype.sortByFaction = function (dataToSort, faction) {
  console.log(dataToSort);
  const result = dataToSort.filter((item) => {
    return item.faction_code == faction;
  });
  console.log(result);
  return result;
};

DataSorter.prototype.sortByType = function (dataToSort, type) {
  console.log(dataToSort);
  const result = dataToSort.filter((item) => {
    return item.type_code == type;
  });
  console.log(result);
  return result;
};

DataSorter.prototype.sortByCost = function (dataToSort, amount) {
  console.log(dataToSort);
  const result = dataToSort.filter((item) => {
    return item.cost == amount;
  });
  console.log(result);
  return result;
};


module.exports = DataSorter;
