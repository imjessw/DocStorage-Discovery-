if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

}

if (Meteor.isServer) {
  Meteor.startup(function () {
  	Images.allow({
			'insert': function () {
			// add custom authentication code here
			return true;
		}
	});
	Files.allow({
			'insert': function () {
			// add custom authentication code here
			return true;
		}
	});
  });
}