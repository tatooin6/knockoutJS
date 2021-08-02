function ViewModel() {
  var self = this;
  self.userName = ko.observable("Wayne")
}


const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new ViewModel(), knockoutApp)
