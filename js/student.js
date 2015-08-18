var Student = function() {
  var that = this;

  that.getOrSetId = function(id) {
    if (!id) {
      id = Student.counter + 1;
      Student.counter ++;
    }
    return id;
  };

  that.init = function(properties) {
    that.name = properties.name;
    that.id = that.getOrSetId(properties.id);
  };

  this.appendToList = function() {
      var li = $('#list_item_template').clone();
      li.removeAttr('id')
        .addClass('student')
        .prepend(self.name)
        .removeClass('hidden');

      $('#students').append(li);
  };
};

// var s = new Student();
// s.init('Adriana');
