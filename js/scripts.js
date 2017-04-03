//business logic
function Places(place, landMark, where, food, weather) {
  this.place = place;
  this.landMark = landMark;
  this.where = where;
  this.food = food;
  this.weather = weather;
}

Places.prototype.toUppercase = function() {
  return this.place.toUpperCase();
  // return this.landMark.toUpperCase();
  // return this.where.toUpperCase();
  // return this.timeYear.toUpperCase();
  // return this.food.toUpperCase();
  // return this.weather.toUpperCase();
}


  function add() {
      var list = document.getElementById('list'),
          item = document.createElement('li');
      item.innerHTML = '<input type="checkbox" /> item';
      list.appendChild(item);
  }

  function rem() {
      var list = document.getElementById('list'),
          items = Array.prototype.slice.call(list.childNodes),
          item;
      while (item = items.pop()) {
          if (item.firstChild && item.firstChild.checked) {
              list.removeChild(item);
          }
      }
  }

  function jAdd() {
      $('#list').append('<li><input type="checkbox" /> item</li>');
  }

  function jRem() {
      $('#list').children().filter(function () {
          return this.firstChild.checked;
      }).remove();
  }
//user interface logic
$(document).ready(function(){
  $("form#new-place").submit(function(event){
    event.preventDefault();

    var inputtedPlace = $("input#place").val();
    var inputtedLandMark = $("input#landMark").val();
    var inputtedWhere = $("input#where").val();
    var inputtedFood = $("input#food").val();
    var inputtedWeather = $("input#weather").val();

    var newPlace = new Places(inputtedPlace,
        inputtedLandMark,
        inputtedWhere,
        inputtedFood,
        inputtedWeather);

    $("ul#placelist").append("<li><span class='placeAppend'>" + newPlace.toUppercase() + "</span></li>");

    $("input#place").val("");
    $("input#landMark").val("");
    $("input#where").val("");
    $("input#food").val("");
    $("input#weather").val("");

    $(".placeAppend").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.place);
      $(".landMarkClass").text(newPlace.landMark);
      $(".whereClass").text(newPlace.where);
      $(".foodClass").text(newPlace.food);
      $(".weatherClass").text(newPlace.weather);

    });
  });
});
