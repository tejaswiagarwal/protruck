Template.IssuesList.events({
});

Template.IssuesList.helpers({
  issues: function () {
    return Issues.find();
  },

  dueDateFormatted: function () {
    return moment(this.dueDate).format("MMM Do YY");
  },

});
