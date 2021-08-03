/*
function ViewModel() {
  var self = this;
  self.userName = ko.observable("Wayne")
}*/

function SeatReservation(name, initialMeal) {
  let self = this;
  self.name = name
  self.meal = ko.observable(initialMeal)
}

function ReservationsViewModel() {
  var self = this;
  self.viewModelName = ko.observable("RESERVATION_VIEW_MODEL")

  self.availableMeals = [
    { mealName: "sandwich", price: 5.50 },
    { mealName: "hot dog", price: 15.10 },
    { mealName: "tranca pecho", price: 20 },
  ]

  // editable data
  self.seats = ko.observableArray([
    new SeatReservation("Peter", self.availableMeals[0]),
    new SeatReservation("Clark", self.availableMeals[1])
  ])
}

const knockoutApp = document.querySelector("#knockout-app");
// ko.applyBindings(new ViewModel(), knockoutApp)
ko.applyBindings(new ReservationsViewModel(), knockoutApp)
