
Template.myDocs.helpers({
    'files':function(){
        return Files.find({},{sort:{'uploadedAt':-1}}).fetch()
    },
    'theImageUrl':function(){
        return Files.findOne(this._id).url();
    },
    'isImage':function(){
        return Files.findOne(this._id).isImage()
    },
    'raw':function(){
        return EJSON.stringify(this,{'indent':true})
    }
});

Template.myDocs.events({
    'change .myFileInput': function(event, template) {
        var files = event.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
            Files.insert(files[i], function (err, fileObj) {
                console.log('fileObj',fileObj);
                // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
            });
        }
    }
});
