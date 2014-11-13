Package.describe({
  summary: "Load flexslider into your Meteor project."
});

Package.on_use(function(api) {
  api.add_files('jquery.flexslider.js', ['client']);
  api.add_files('flexslider.css', ['client']);
});
