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


module.exports = DataSorter;
