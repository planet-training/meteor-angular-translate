var version = "2.8.0";
var name = "angular-translate-interpolation-messageformat";
Package.describe({
  documentation: null,
  summary: "Angular Translate",
  name: "planettraining:"+name,
  version: version,
  git:"https://github.com/planet-training/meteor-angular-translate.git"
});


Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.use("planettraining:angular-translate@"+version, "client");

  api.addFiles([
    'angular-translate/dist/'+name+'/'+name+'.js'
  ], "client");
});