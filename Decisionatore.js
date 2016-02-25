function decisionator(array) {
  var newChoice = array[Math.floor(Math.random()*array.length)];
  document.getElementById("result").innerHTML=newChoice;
}

var choices = [];
var counter = 0;

function choiceAdder() {
  var choice = $("#choice")[0];
  if (choice.value != "") {
    choices.push(choice.value);
    showConfirm();
    counter++;
  }
  choice.value = "";
  console.log(choices);
  console.log(choices[counter-1]);
}

function deleter(elementID) {
  $(elementID).remove();
  var removedItem = elementID;
  choices.splice($.inArray(removedItem, choices), 1);
}

function randomProperty(obj) {
    var keys = Object.keys(obj)
    return obj[keys[keys.length * Math.random() << 0]];
};

function showConfirm() {
  var confirm = $('#confirm');
  confirm.css("visibility", "visible");
  confirm.fadeIn('fast').delay(1000).fadeOut('fast');
}

//extra code
/*var list = $("#list_of_choices")[0];
var element = "'" + choices[counter] + "'";
$('#list_of_choices').append('<div style="width:150px;height:20px; border: 1px solid black" id=element></div>');
$('#assa').text("try");
var newElement = document.createElement("div");
newElement.id = choices[counter];
newElement.style = "border: 1px solid black; width 50px; height 50px; overflow: auto";
newElement.onClick = deleter(newElement.id);
var newContent = document.createTextNode(choices[counter]);
newElement.appendChild(newContent);
list.appendChild(newElement);*/
