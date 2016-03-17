
Template.myImages.helpers({
    'files':function(){
        return Images.find({},{sort:{'uploadedAt':-1}}).fetch()
    },
    'theImageUrl':function(){
        return Images.findOne(this._id).url();
    },
    'isImage':function(){
        return Images.findOne(this._id).isImage()
    },
    'raw':function(){
        return EJSON.stringify(this,{'indent':true})
    }
});

Template.myImages.events({
    'change .myFileInput': function(event, template) {
        var files = event.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
            Images.insert(files[i], function (err, fileObj) {
                console.log('fileObj',fileObj);
                // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
            });
        }
    }
});

Template.myImages.onCreated(function () {
    //add your statement here
});

Template.myImages.onRendered(function () {
    //add your statement here
});

Template.myImages.onDestroyed(function () {
    //add your statement here
});

