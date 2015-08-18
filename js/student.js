var Student = function() {
  var that = this;

  that.getOrSetId = function(id) {
    if (!id) {
      id = Student.counter + 1;
    }
    that.incCount(id);
    return id;
  };

  that.incCount = function(id) {
    if (id > Student.counter) {
      Student.counter = id;
    }
  };

  that.init = function(properties) {
    that.name = properties.name;
    that.id = that.getOrSetId(properties.id);
  };

  that.appendToList = function() {
      var li = $('#list_item_template').clone();
      li.removeAttr('id')
        .attr('data-id',that.id)
        .addClass('student')
        .prepend(that.name)
        .removeClass('hidden');

      $('#students').append(li);
  };
};

// var s = new Student();
// s.init('Adriana');
Student.getStudentById = function(id) {
  var student;
  $.each(roster.students,function(index, current_student) {
      if (current_student.id.toString() === id.toString()) {
        student = current_student;
        return false;
      }
  });
  return student;
};
