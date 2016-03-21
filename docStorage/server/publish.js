Meteor.startup(function() {
  //ImageUploads.remove({});
  console.log("Images Uploads:", Collections.Images.find().count());
  console.log("Files:", Collections.Files.find().count());

  Collections.Images.on('removed', function (fileObj) {
    console.log("Removed " + fileObj._id + " from Images collection.");
  });
});

Meteor.publish("images", function() {
  return Collections.Images.find();
});

Meteor.publish("files", function() {
  return Collections.Files.find();
});

Meteor.publish("docs", function() {
  return Collections.Docs.find();
});

