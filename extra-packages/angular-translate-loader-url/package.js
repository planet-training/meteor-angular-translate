var version = "2.7.0";
var name = "angular-translate-loader-url";
Package.describe({
  documentation: null,
  summary: "Angular Translate",
  name: "planettraining:"+name,
  version: version,
  git:"https://github.com/planet-training/angular-translate.git"
});


Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.use("planettraining:angular-translate@"+version, "client");

  api.addFiles([
    '../../angular-translate/dist/'+name+'/'+name+'.js'
  ], "client");
});