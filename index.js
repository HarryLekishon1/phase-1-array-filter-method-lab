// Code your solution here
function findMatching(driver, attribute) {
    return driver.filter(function (driver){
      return driver.toLowerCase() === attribute.toLowerCase()
    })
    }
    
    function fuzzyMatch(source, testString) {
      return source.filter(
        (possibleMatch) =>
          possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
      );
    }
    
    function matchName(drivers, argument) {
      return drivers.filter(function (driver){
        return driver.name === argument;
      });
    }