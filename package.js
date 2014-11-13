Package.describe({
  summary: "Load flexslider into your Meteor project."
  version: "0.0.1"
});

Package.on_use(function(api) {
  api.add_files('jquery.flexslider.js', ['client']);
  api.add_files('flexslider.css', ['client']);
});
