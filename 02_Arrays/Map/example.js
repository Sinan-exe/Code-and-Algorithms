// ways of creating map

let map = new Map();

map.set("name", "sinan");
map.set("age", 22);

let map1 = new Map([
  ["name", "sinan"],
  ["age", 22],
  ["gender", "male"],
]);

// accessing the element
let result = map1.get("name");

// checking existence
console.log(map1.has("name"));

map1.delete("gender");
console.log(map1);
