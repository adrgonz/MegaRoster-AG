var Megatask = {
  author: "Ana",
  title: "Her awesomeness",
  GoalInLife: "Rule the world",
  newStudentForm: $('#newStudentForm'),
  submitHandler: function(ev) {
    alert ('Duuude');
  },
  start: function() {
    this.newStudentForm.submit(this.submitHandler);
  }
};

Megatask.start();

//  example of how to load stuff
// var foods = {
//   fruits: ['apples','bananas','oranges'],
//   veggies: ['celery','broccoli'],
//   favorite: 'lasagna'
// }
