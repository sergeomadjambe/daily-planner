// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var description = $('.description');
var nine = $('#9');
var ten = $('#10'); 
var eleven = $('#11');
var saveButton = $('.saveBtn')
var currentDay = $('#currentDay')
var hour = $(".hour")
var textVal = $('textarea')

currentDay = dayjs();
$('#currentDay').text(currentDay.format('MMMM D YYYY, h:mm:ss a'))
saveButton.on("click", function(event){
  event.preventDefault()
    
    localStorage.setItem("inputnine", nine.val())
    localStorage.setItem("inputTen", ten.val())
    localStorage.setItem("inputeleven", eleven.val())
    
    entry();
    
  })
    



function entry() {

  var inputnine = localStorage.getItem('inputnine');
    nine.text(inputnine);

  var inputTen = localStorage.getItem('inputTen');
    ten.text(inputTen);

  var inputeleven = localStorage.getItem('inputeleven');
   eleven.text(inputeleven);

};


function  color() {
  var currentTime = dayjs().format('LT');
  var hourPLus = dayjs().add(60, 'minutes').format('LT');

  for(var i = 0; i < hour.length; i++){
    if(hour[i].textContent >= currentTime && hour[i].textContent < hourPLus){
      textVal[i].setAttribute('style', 'background:red')
    } else if (hour[i].textContent < currentTime){
      textVal[i].setAttribute('style', 'background: grey')
    }else if(hour[i].textContent > currentTime){
      textVal[i].setAttribute('style', 'background: green')

    }
  }

}

entry();
color();