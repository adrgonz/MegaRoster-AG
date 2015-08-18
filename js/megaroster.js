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
  var that = this;

  this.save = function () {   //  save to local storage
    try {
      return (localStorage.students = JSON.stringify(that.students));
    }
    catch(err) {
      return false;
    }
  };

  this.load = function () {
    try {
      that.students = JSON.parse(localStorage.students);
      $.each(that.students, function(index, student_name) {
        that.appendToList(student_name);
      });
    }
    catch (err) {
      return false;
    }
  };

  this.appendToList = function(student_name) {
      var li = $('#list_item_template').clone();
      li.removeAttr('id')
        .addClass('student')
        .prepend(student_name)
        .removeClass('hidden');

      $('#students').append(li);
  };

  this.addStudent = function (student_name) {
        that.students.push(student_name);
        that.appendToList(student_name);
        console.log(that.save());
  };

  this.delete = function () {
// remove it from the array
// remove it from the list_item_template
    $(this).closest('li').remove;
//  update local storage
  };

  this.edit = function () {

  };

  this.init = function() {
    that.students = [];
    that.load();

    $('#new_student_form').on('submit', function(ev) {
      ev.preventDefault();
      var student_name = $(this.student_name).val();

      that.addStudent(student_name);

      $(this.student_name)
        .val('')   //  clear the value of the above $ field
        .focus();  //  refocus
    } );

    $('button.delete').on('click', function() {
          // remove from students
          $(this).closest('li').remove();  //  remove from teh ol
          // remove from the local storage
    });

    $('button.edit').on('click', function () {
      alert('Edit');
    });
  };

};
document.querySelector('form').student_name.focus();

var roster = new Megaroster();
roster.init();
