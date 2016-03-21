Docs = new FS.Collection("docs", {
  stores: [new FS.Store.GridFS("docsStore")]
});;
Docs.attachSchema(new SimpleSchema({
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
}));

Files = new FS.Collection("files", {
  stores: [new FS.Store.GridFS("filesStore")]
});

Files.allow({
  download: function () {
    return true;
  },
  fetch: null
});