mySchema = new SimpleSchema({
  name: {
    type: String
  },
  fileId: {
    type: String,
    autoform: {
      afFieldInput: {
        type: "cfs-file",
        collection: "files"
      }
    }
  }
});
Files.attachSchema(mySchema);

Meteor.methods({
  myServerMethod: function(doc) {
    try {
      check(doc, mySchema);
      mySchema.clean(doc);
    }catch(e){
      throw new Meteor.Error(e);
    }

    //do some stuff here and throw a new Meteor.Error if there is a problem
  }});


// Images.allow({
//   'insert': function () {
//     // add custom authentication code here
//     return true;
//   }
// });

// Files.allow({
//   'insert': function () {
//     // add custom authentication code here
//     return true;
//   }
// });