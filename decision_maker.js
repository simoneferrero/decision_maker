var choices = [];
var counter = 0;

function randomizer(array) {
  var newChoice = array[Math.floor(Math.random()*array.length)];
  if (array.length > 0) {
    $("#result").text(newChoice);
  } else {
    $("#result").text("You have no options to choose from!");
  }
}

function choiceAdder() {
  var choice = $("#choice")[0];
  var list = $("#list_of_choices")[0];
  if (choice.value != "") {
    choices.push(choice.value);
    showConfirm();
    var element = $("<button />", {id:choices[counter], html:choices[counter],
    style: "border:1px solid black;width:150px;height:20px;overflow:auto;display:block"});
    element.appendTo(list);
    element.on("click", element, function() {
      $(this).closest("button").remove();
      var index = choices.indexOf($(this).text());
      choices.splice(index, 1);
      console.log(choices);
      counter--;
    });
    counter++;
  }
  choice.value = "";
}

function showConfirm() {
  var confirm = $('#confirm');
  confirm.css("visibility", "visible");
  confirm.fadeIn('fast').delay(1000).fadeOut('fast');
}
