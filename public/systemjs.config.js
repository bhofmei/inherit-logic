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
    'ng2-dragula': {
      main: './ng2-dragula.js',
      defaultExtension: 'js'
    },
    dragula : {
      main: '/dist/dragula.js',
      defaultExtension: 'js'
    }
  };

  var map = {
    '@angular': 'lib/@angular',
    'rxjs': 'lib/rxjs',
    'ng2-dragula': 'lib/ng2-dragula',
    'dragula': 'lib/dragula'
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
    transpiler: null,
    packages: packages,
    map: map
  });
})(this);
