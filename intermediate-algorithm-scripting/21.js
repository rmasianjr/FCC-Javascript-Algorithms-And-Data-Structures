/* 
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris
*/

/* Map the Debris */

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(obj => {
    var orbital = 2 * Math.PI * Math.sqrt(Math.pow((earthRadius + obj.avgAlt), 3) / GM);
    orbital = Math.round(orbital);
    return { name: obj.name, orbitalPeriod: orbital };
  });
}

// orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])