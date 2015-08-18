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
//      that.students = JSON.parse(localStorage.students);
      var student_data_objects = JSON.parse(localStorage.students);
      $.each(student_data_objecs, function(index, student_data) {
        var student = new Student();
        student.init(student_data)
        student.appendToList();
        that.students.push(student);
      });
    }
    catch (err) {
      return false;
    }
  };

  // this.appendToList = function(student_name) {
  //     var li = $('#list_item_template').clone();
  //     li.removeAttr('id')
  //       .addClass('student')
  //       .prepend(student_name)
  //       .removeClass('hidden');
  //
  //     $('#students').append(li);
  // };

  this.addStudent = function (student_name) {
      var student = new Student();

      student.init({
        name: student_name
      });

    //  student.students.push(student_name);
       that.students.push(student);

      student.appendToList();
      //that.appendToList(student_name);
      //console.log(that.save());
      that.save();
  };

//   this.delete = function () {
// // remove it from the array
// // remove it from the list_item_template
//     $(this).closest('li').remove;
// //  update local storage
//   };
//
//   this.edit = function () {
//
//   };
  this.createdEditForm = function(ev) {
    var li, edit_form, label;
    li = $(this).closest('li');
    label = li.find('label');

    //  append a clone of edit form template to hte li
      $('#students').append(li);
    edit_form = $('#edit_form_template')
        .clone()
        .removeAttr('id')
        .removeClass('hidden');

    label.addClass('hidden');
    li.find('.btn-group').addClass('hidden');
    
    li.append(edit_form);
  };

  this.init = function() {
    that.students = [];
    Student.counter = 0;
    that.load();

    $('#new_student_form').on('submit', function(ev) {
      ev.preventDefault();
      var student_name = $(this.student_name).val();

      that.addStudent(student_name);

      $(this.student_name)
        .val('')   //  clear the value of the above $ field
        .focus();  //  refocus
    } );

    // $('document').on('click', 'button.delete', function() {
    //       // remove from students
    //       var li = $(this).closest('li');
    //       li.remove();  //  remove from teh ol
    //       // remove from the local storage
    // });

    $(document).on('click', 'button.delete', function() {
          // remove from students
          var li = $(this).closest('li');
          // remove from array
          var id = li.attr('data-id');

// this next block does the same as the following line
           $.each(that.students, function(index, current_student) {
             if (current_student.id.toString() === id.toString()) {
               that.students.splice(index, 1);
               return false;
             }
           });

    //      self.students.splice(self.students.indexOf(current_student), 1);
          li.remove();  //  remove from teh ol
          // remove from the local storage
      //    that.save();
    });

    $(document).on('click', 'button.edit', that.createdEditForm);
  };

};
//document.querySelector('form').student_name.focus();

var roster = new Megaroster();
roster.init();
