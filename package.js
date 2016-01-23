Package.describe({
  name: "carlosbaraza:admin-lte",
  summary: "Admin dashboard and control panel template",
  version: "2.3.2",
  git: "https://github.com/carlosbaraza/AdminLTE",
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  // Third party dependencies
  api.use('twbs:bootstrap');
  api.use('jquery');
  api.use('fortawesome:fontawesome@4.5.0');
  api.use('pagebakers:ionicons');
  api.use('fastclick');

  api.addFiles('dist/css/skins/_all-skins.min.css', 'client');
  api.addFiles('dist/css/AdminLTE.min.css', 'client');
  api.addFiles('dist/js/app.js', 'client');
});
