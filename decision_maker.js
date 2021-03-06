'use strict';

var choices = [],
  counter = 0;

function randomizer(array) {
  var newChoice = array[Math.floor(Math.random()*array.length)],
  result = $("#result_button > span");
  result
    .finish()
    .fadeOut(0);
  if (array.length > 0) {
    result
      .text(newChoice);
  } else {
    result
      .text("You have no options to choose from!")
      .css("font-size", "75%");
  }
  result
    .fadeIn(500)
    .delay(2000)
    .fadeOut(500)
    .queue(function(next) {
      result
        .text("CHOOSE!")
        .css("font-size", "100%");
        next();
    })
    .fadeIn(500);
  choice
    .focus();
}

function choiceAdder() {
  var choice = $("#choice")[0];
  var list = $("#list_of_choices")[0];
  choice
    .focus();
  if (choice.value != "") {
    choices.push(choice.value);
    var text = choices[counter];
    var element = $("<button />", {class: "remove_button", html: text}); //se non si mette span
    //var element = $("<button />", {class: "remove_button"}); //se si mette span
    if ($(window).width() <= 1300) {
      element
        .css("width", "29%")
        .css("font-size", "160%")
        .css("max-height", "60px");
    }
    //var content = $("<span />", {html: choices[counter]}); //se si mette span
    element
      .appendTo(list);
    //element.append(content); //se si mette span
    showConfirm("Choice added");
    element
      .hover(function() {
        $("#descr")
          .html(text);
        element
          .html("DELETE?"); //se non si mette span
        //content.html('DELETE?'); //se si mette span
      }, function() {
        element
          .html(text); //se non si mette span
        //content.html(text); //se si mette span
      });
    list.scrollTop = list.scrollHeight;
    element
      .on("click", element, function() {
        var index = choices.indexOf(text);
        showConfirm("Choice removed");
        choices.splice(index, 1);
        counter--;
        $(this)
          .remove();
        choice
          .focus();
      });
    counter++;
  }
  choice.value = "";
}

function showConfirm(text) {
  $('#confirm')
    .finish()
    .fadeOut(0)
    .text(text)
    .fadeIn(500)
    .delay(1000)
    .fadeOut(500);
}

function fullAnimationOpen() {
  $("#full_content")
    .css("visibility", "visible")
    .fadeOut(0);
  $("#second_page")
    .animate({"margin-right": 0}, {duration: 2000, queue: false});
  $("#slider")
    .animate({"width": "6%"}, {duration: 300, queue: false})
    .removeClass("spinner_ccw")
    .animate({"margin-right": "90%"}, 1800, function() {
      $('#choice')
        .focus();
    })
    .addClass("spinner_cw")
    .css("transform", "rotate(180deg)");
}

function fullAnimationClose() {
  $("#second_page")
    .animate({"margin-right": "-100%"}, {duration: 2000, queue: false});
  $("#slider")
    .animate({"width": "6%"}, {duration: 300, queue: false})
    .removeClass("spinner_cw")
    .animate({"margin-right": "1%"}, {duration: 1800, queue: false})
    .addClass("spinner_ccw")
    .css("transform", "");
}

function partialAnimationOpen() {
  $("#full_content")
    .css("visibility", "visible")
    .fadeOut(0);
  $("#second_page")
    .animate({"margin-right": 0}, 2000, function() {
      $('#choice')
        .focus();
    });
  $("#slider")
    .removeClass("spinner_ccw")
    .addClass("spinner_cw")
    .css("transform", "rotate(180deg)");
}

function partialAnimationClose() {
  $("#second_page")
    .animate({"margin-right": "-100%"}, {duration: 2000, queue: false});
  $("#slider")
    .removeClass("spinner_cw")
    .animate({"margin-right": "1%"}, {duration: 1800, queue: false})
    .addClass("spinner_ccw")
    .css("transform", "");
}

window.addEventListener("resize", function() {
  if ($(window).width() <= 1300) {
    $("body")
      .css("font-size", "120%");
    $("#quote")
      .css("font-size", "3.5vw")
      .css("left", "55%");
    $("#description_row")
      .css("font-size", "210%");
    $("#first_column")
      .css("width", "80%")
      .css("font-size", "150%");
    $("#second_column")
      .css("width", "80%");
    $("#third_column")
      .css("width", "80%");
    $(".remove_button")
      .css("width", "29%")
      .css("font-size", "160%")
      .css("max-height", "60px");
    $("#result_button")
      .css("width", "80%");
    $("#wrapper")
      .css("width", "80%")
      .css("font-size", "250%");
    if ($(window).width() <= 1000) {
      $("#quote")
        .css("font-size", "4.5vw")
        .css("left", "45%");
      $("#first_column")
        .css("font-size", "170%");
      $(".remove_button")
        .css("max-height", "53px");
    }
  } else {
    $("body")
      .css("font-size", "100%");
    $("#description_row").
      css("font-size", "200%");
    $("#first_column")
      .css("width", "30%")
      .css("min-height", "0px");
    $("#second_column")
      .css("width", "30%");
    $("#third_column")
      .css("width", "30%");
    $(".remove_button")
      .css("width", "46%")
      .css("font-size", "180%")
      .css("max-height", "53px");
    $("#result_button")
      .css("width", "30%");
    $("#wrapper")
      .css("width", "61%")
      .css("font-size", "350%");
  }
});
