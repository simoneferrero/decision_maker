'use strict';

var choices = [];
var counter = 0;

function randomizer(array) {
  var newChoice = array[Math.floor(Math.random()*array.length)];
  if (array.length > 0) {
    $("#result").text(newChoice);
    $("#box").css("visibility", "visible");
  } else {
    $("#result").text("You have no options to choose from!");
    $("#box").css("visibility", "visible");
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
    showConfirm();
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
      choices.splice(index, 1);
      console.log(choices);
      counter--;
      $(this).remove();
    });
    counter++;
  }
  choice.value = "";
}

function showConfirm() {
  var confirm = $('#confirm');
  confirm.clearQueue();
  confirm.stop();
  confirm.fadeIn(500).delay(700).fadeOut(500);
}

var functionIsRunning = false;

function myFunction() {
    if (!functionIsRunning) {
        functionIsRunning = true;
        //do stuff
        functionIsRunning = false;
    }
}

//Non funziona in funzione
function deleter(t, a, c) {
  var index = a.indexOf(t);
  a.splice(index, 1);
  console.log(a);
  c--;
  $(this).closest("button").remove();
}
