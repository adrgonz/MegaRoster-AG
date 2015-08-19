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
    try {    //      that.students = JSON.parse(localStorage.students);
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
  //??//    $('#students').append(li);
    edit_form = $('#edit_form_template')
        .clone()
        .removeAttr('id')
        .removeClass('hidden');

    label.addClass('hidden');
    li.find('.btn-group').addClass('hidden');

    li.append(edit_form);
    edit_form.find('input[name=student_name]')
        .val(label.text())
        .focus()
        .select();
  };

  this.cancelEdit = function(ev) {
    var li, edit_form, label;
    li = $(this).closest('li');
    label = li.find('label');
debugger;
    edit_form = $(this).closest('form');
    edit_form.remove();

    label.removeClass('hidden');
    li.find('.btn-group').removeClass('hidden');
  };

  this.updateStudent = function(ev) {
    ev.preventDefault();
    var form = this;
console.log('in update student');
debugger;
    //  get the id of the updated student
    var id = $(this).closest('li').attr('data-id');
    //  find student record with that id
    var student = Student.getStudentById(id);
    //  change name of student object
    student.name = this.student_name.value;
    //  my way
    // //  display updated name in the list
    // var li = $(this).closest('li');
    // var label = li.find('label');
    // li.label.text = student.name;
    // Davey's way

    $(form).siblings('label').text(student.name);

    //  update local storage
    that.cancelEdit.apply(form);
    that.save();


  };

//  everything in this function is triggered / called when the page is loaded
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
          that.save();
    });

    $(document).on('click', 'button.edit', that.createdEditForm);
    $(document).on('click', 'button.cancel', that.cancelEdit);
    $(document).on('submit', 'form.edit', that.updateStudent);
  };

};
//document.querySelector('form').student_name.focus();

var roster = new Megaroster();
roster.init();
