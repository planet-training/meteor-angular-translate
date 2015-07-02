Package.describe({
  summary: "Angular Translate",
  name: "planettraining:angular-translate",
  version: "2.7.2",
  git:"https://github.com/planet-training/meteor-angular-translate.git"
});


Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.use("angular:angular@1.3.15", "client");

  api.addFiles([
    'angular-translate/dist/angular-translate.js'
  ], "client");
});
