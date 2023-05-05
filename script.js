
var parentDivList = document.querySelectorAll(".time-block");
var saveButton = document.querySelector("#saveBtn");
var savedData = JSON.parse(localStorage.getItem("savedNotes"));
var notesList = [];

parentDivList.forEach( function(timeBlock) {
  timeBlock.addEventListener('click', function(event) {
    if(event.target.matches('button')) {
      const parent = event.target.parentNode;
      const hour = parent.getAttribute('id');
      const noteText = parent.children[1].value;
      const noteObj = {
        hour: hour,
        noteText: noteText
      }
      notesList.push(noteObj);
      localStorage.setItem('savedNotes', JSON.stringify(notesList));
    }
  })
})
    


function renderLastText() {
  
  var savedData = localStorage.getItem("savedNotes");
  var parsedData = JSON.parse(savedData);
  console.log($("#"+parsedData.hour))
  $("#"+parsedData.hour).eq(1).text(parsedData.noteText);
  console.log(savedData)

}

renderLastText();
    
  



$(function calendar() {
    
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
});



