(function(global){
  var packages = {
    app: {
      main: './bootstrap.js',
      defaultExtension: 'js',
      format: 'register'
    },
    rxjs: {
      defaultExtension: 'js'
    },
    /*,
    'ng2-dnd': {
      main: 'bundles/ng2-dnd.umd.js',
      defaultExtension: 'js'
    }*/
  };

  var map = {
    '@angular': 'lib/@angular',
    '@angular/common/http': 'lib/@angular/common/bundles/common-http.umd.js',
    'rxjs': 'lib/rxjs',
    'tslib': 'lib/tslib/tslib.js',
    '@ng-bootstrap/ng-bootstrap': 'lib/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
    'ng2-dnd': 'lib/ng2-dnd/bundles/ng2-dnd.umd.js'
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'router',
    'platform-browser',
    'platform-browser-dynamic'
  ];

  ngPackageNames.forEach(function(pkgName){
    packages['@angular/'+pkgName] = {
      main: '/bundles/' + pkgName + '.umd.js',
      defaultExtension: 'js'
    };
  });

  System.config({
    defaultJSExtensions: true,
    transpiler: 'typescript',
    packages: packages,
    map: map
  });
})(this);
