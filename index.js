// Code your solution in this file
function findMatching(drivers, name){
  return drivers.filter(function (driver){
    return driver.toLowerCase() == name.toLowerCase();
  })
}

function fuzzyMatch(drivers, fuzz) {
  return drivers.filter(function(driver) {
    return fuzz.toLowerCase() == driver.slice(0, fuzz.length).toLowerCase();
  })
}

function matchName(drivers, name) {
  return drivers.filter(function(driver){
    return driver.name.toLowerCase() == name.toLowerCase();
  })
}
