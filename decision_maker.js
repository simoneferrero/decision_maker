'use strict';

var choices = [];
var counter = 0;

function randomizer(array) {
  var newChoice = array[Math.floor(Math.random()*array.length)];
  var result = $("#result");
  var noOptions = $("#no_options");
  result.fadeOut(0);
  result.clearQueue().stop();
  if (array.length > 0) {
    result.text(newChoice).fadeIn(600);
  } else {
    result.text("You have no options to choose from!").fadeIn(600).delay(1000).fadeOut(600, function() {result.text("Your choice is...").delay(200).fadeIn(600)});
  }
}

function choiceAdder() {
  var choice = $("#choice")[0];
  var list = $("#list_of_choices")[0];
  choice.focus();
  if (choice.value != "") {
    choices.push(choice.value);
    var text = choices[counter];
    var element = $("<button />", {class: "remove_button", html: text});
    //var element = $("<button />", {class: "remove_button"}); //se si mette span
    //var content = $("<span />", {html: choices[counter]}); //se si mette span
    element.appendTo(list);
    //element.append(content); //se si mette span
    showConfirm("Choice added");
    element.hover(function() {
      element.html('DELETE?');
      //content.html('DELETE?'); //se si mette span
    }, function() {
      element.html(text);
      //content.html(text); //se si mette span
    });
    list.scrollTop = list.scrollHeight;
    //element.on("click", element, deleter(text, choices, counter)); //Non funziona
    element.on("click", element, function() {
      var index = choices.indexOf(text);
      showConfirm("Choice removed");
      choices.splice(index, 1);
      console.log(choices);
      counter--;
      $(this).remove();
    });
    counter++;
  }
  choice.value = "";
}

function showConfirm(text) {
  var confirm = $('#confirm');

  confirm.clearQueue().stop()
  confirm.fadeOut(0);
  confirm.text(text).fadeIn(500).delay(1000).fadeOut(500);
}

function fullAnimationOpen() {
  var slider = $("#slider"),
    secondPage = $("#second_page");
  secondPage.animate({"margin-right": 0}, 2000);
  slider.animate({"width": "6%"}, {duration: 300, queue: false}).removeClass("spinner_ccw").animate({"margin-right": "91%"}, 1800, function() {$('#choice').focus();}).addClass("spinner_cw").css("transform", "rotate(180deg)");
}

function fullAnimationClose() {
  var slider = $("#slider"),
    secondPage = $("#second_page");
  secondPage.animate({"margin-right": "-100%"}, 2000);
  slider.animate({"width": "6%"}, {duration: 300, queue: false}).removeClass("spinner_cw").animate({"margin-right": "1%"}, {duration: 1800, queue: false}).addClass("spinner_ccw").css("transform", "");
}

function partialAnimationOpen() {
  var slider = $("#slider"),
    secondPage = $("#second_page");
  secondPage.animate({"margin-right": 0}, 2000, function() {$('#choice').focus();});
  slider.removeClass("spinner_ccw").addClass("spinner_cw").css("transform", "rotate(180deg)");
}

function partialAnimationClose() {
  var slider = $("#slider"),
    secondPage = $("#second_page");
  secondPage.animate({"margin-right": "-100%"}, 2000);
  slider.removeClass("spinner_cw").animate({"margin-right": "1%"}, {duration: 1800, queue: false}).addClass("spinner_ccw").css("transform", "");
}

window.addEventListener("resize", function() {
  if ($(window).width() <= 1300) {
    $("#first_column").css("margin", "1% 20% 1% 20%");
    $("#second_column").css("margin", "1% 20% 1% 20%");
    $("#third_column").css("margin", "1% 20% 1% 20%");
    $("body").css("font-size", "120%");
  } else {
    $("#first_column").css("margin", "1%");
    $("#second_column").css("margin", "1%");
    $("#third_column").css("margin", "1%");
    $("body").css("font-size", "100%");
  }
})
//Non funziona in funzione
function deleter(t, a, c) {
  var index = a.indexOf(t);
  a.splice(index, 1);
  console.log(a);
  c--;
  $(this).closest("button").remove();
}
