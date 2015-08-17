// function Megaroster() {
//   function Megaroster() {
//     debugger;
//     this.students = [];
//   }
//   return Megaroster;
// }();
// ///  Megatask function is here twice because the outer defines the function
// //  and the inner function initializes Megatask
// //  calling new Megatask actually runs the inner function and instantsiates it
// //  the (stuff)(); is dumb as hell and defines and runs the function as soon
// //as the page is loaded.
// //  this didn't work anyway!!!
// new Megaroster();

var Megaroster = function() {
  this.meats = ['pork','steak','chicken'];
//  var students = [];

  this.init = function() {
    var that = this;
    this.students = [];

    $('#new_student_form').on('submit', function(ev) {
      ev.preventDefault();
      //  add student to the array
      var student_name = $(this.student_name).val();
      that.students.push(student_name);
      //  display full list in the html
      $('#students').append('<li class = "list-group-item">' + student_name + '</li>');
      $(this.student_name)
        .val('')   //  clear the value of the above $ field
        .focus();  //  refocus
    } );
  };
};
document.querySelector('form').student_name.focus();
//var f = document.querySelector('form');
//f.student_name.focus();
var roster = new Megaroster();
roster.init();
