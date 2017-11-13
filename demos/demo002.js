let vehicle = [
  { license: "A1234", name: "High flyer", type: "aircraft" },
  { license: "B234", name: "ground lifter", type: "drone" },
  { license: "C234", name: "sapton", type: "car" }
];

function findDrone(vehicle) {
  return vehicle.type == "drone";
}

let result = vehicle.find(findDrone);
console.log(result);
