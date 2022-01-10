var Carlist = document.getElementById("Cars");
var TopCars = [
  "SSC TUATARA",
  "BUGATTI CHIRON SUPER SPORT",
  "Hennessey Venom GT",
  "Bugatti Chiron",
  "Koenigsegg Agera R",
  "SSC Ultimate Aero",
];

countCars = (data) => {
  var count = document.getElementById("counter");

  if (data) {
    count.innerHTML = "There are a total of " + data + " Cars";
  } else {
    count.innerHTML = "No country";
    document.getElementById("name").style.display = "none";
  }
};
// Read: GET
getCars = () => {
  var data = "";
  if (TopCars.length > 0) {
    for (i = 0; i < TopCars.length; i++) {
      data += "<tr>";
      data += "<td>" + TopCars[i] + "</td>";
      data += '<td><button onclick="editCountry(' + i + ')">Edit</button></td>';
      data += '<td><button onclick="deleteCar(' + i + ')">Delete</button></td>';
      data += "</tr>";
    }
  }

  countCars(TopCars.length);
  return (Carlist.innerHTML = data);
};
// Create: POST
addCar = () => {
  var CarAdded = document.getElementById("AddName");
  // Get the value
  var Car = CarAdded.value;

  if (Car) {
    // addCountry the new value
    TopCars.push(Car.trim());
    // Reset input value
    CarAdded.value = "";
    // Dislay the new list
    getCars();
  }
};
// Update: PUT
editCountry = (item) => {
  var editCar = document.getElementById("EditName");
  // Display value in the field
  editCar.value = TopCars[item];
  // Display fields
  document.getElementById("EditForm").style.display = "block";

  document.getElementById("SaveEdit").onsubmit = () => {
    // Get value
    var Car = editCar.value;
    if (Car) {
      // editCountry value
      TopCars.splice(item, 1, Car.trim());
      // Display the new list
      getCars();
      // Hide fields
      closeInput();
    }
  };
};
// Delete: Delete
deleteCar = (item) => {
  // deleteCountry the current row
  TopCars.splice(item, 1);
  // Display the new list
  getCars();
};

getCars();

closeInput = () => {
  document.getElementById("EditForm").style.display = "none";
};
