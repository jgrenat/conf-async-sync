SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  transpiler: "plugin-babel",

  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "co": "npm:co@4.6.0",
    "core-js": "npm:core-js@2.2.1",
    "css": "github:systemjs/plugin-css@0.1.20",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "json": "github:systemjs/plugin-json@0.1.0",
    "lodash": "npm:lodash@4.6.0",
    "mustache": "github:janl/mustache.js@2.2.1",
    "nanoajax": "github:yanatan16/nanoajax@0.4.3",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.7",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.7.4",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha"
  },

  packages: {
    "app": {
      "main": "app.js",
      "meta": {
        "*.js": {
          "babelOptions": {
            "plugins": [
              "transform-async-to-generator"
            ]
          }
        }
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.5.0"
      }
    },
    "github:twbs/bootstrap@3.3.6": {
      "map": {
        "jquery": "github:components/jquery@2.2.1"
      }
    },
    "npm:ansi-styles@2.2.0": {
      "map": {
        "color-convert": "npm:color-convert@1.0.0"
      }
    },
    "npm:babel-code-frame@6.7.4": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "chalk": "npm:chalk@1.1.1",
        "esutils": "npm:esutils@2.0.2",
        "js-tokens": "npm:js-tokens@1.0.3",
        "repeating": "npm:repeating@1.1.3"
      }
    },
    "npm:babel-helper-function-name@6.6.0": {
      "map": {
        "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.6.5",
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-template": "npm:babel-template@6.7.0",
        "babel-traverse": "npm:babel-traverse@6.7.4",
        "babel-types": "npm:babel-types@6.7.2"
      }
    },
    "npm:babel-helper-get-function-arity@6.6.5": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-types": "npm:babel-types@6.7.2"
      }
    },
    "npm:babel-helper-remap-async-to-generator@6.7.0": {
      "map": {
        "babel-helper-function-name": "npm:babel-helper-function-name@6.6.0",
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-template": "npm:babel-template@6.7.0",
        "babel-traverse": "npm:babel-traverse@6.7.4",
        "babel-types": "npm:babel-types@6.7.2"
      }
    },
    "npm:babel-messages@6.7.2": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-plugin-syntax-async-functions@6.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-plugin-transform-async-to-generator@6.7.4": {
      "map": {
        "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.7.0",
        "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.5.0",
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-template@6.7.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-traverse": "npm:babel-traverse@6.7.4",
        "babel-types": "npm:babel-types@6.7.2",
        "babylon": "npm:babylon@6.7.0",
        "lodash": "npm:lodash@3.10.1"
      }
    },
    "npm:babel-traverse@6.7.4": {
      "map": {
        "babel-code-frame": "npm:babel-code-frame@6.7.4",
        "babel-messages": "npm:babel-messages@6.7.2",
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-types": "npm:babel-types@6.7.2",
        "babylon": "npm:babylon@6.7.0",
        "debug": "npm:debug@2.2.0",
        "globals": "npm:globals@8.18.0",
        "invariant": "npm:invariant@2.2.1",
        "lodash": "npm:lodash@3.10.1",
        "repeating": "npm:repeating@1.1.3"
      }
    },
    "npm:babel-types@6.7.2": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-traverse": "npm:babel-traverse@6.7.4",
        "esutils": "npm:esutils@2.0.2",
        "lodash": "npm:lodash@3.10.1",
        "to-fast-properties": "npm:to-fast-properties@1.0.2"
      }
    },
    "npm:babylon@6.7.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:buffer@4.5.0": {
      "map": {
        "base64-js": "npm:base64-js@1.1.1",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:chalk@1.1.1": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.2.0",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:invariant@2.2.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.1.0"
      }
    },
    "npm:is-finite@1.0.1": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:loose-envify@1.1.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:repeating@1.1.3": {
      "map": {
        "is-finite": "npm:is-finite@1.0.1"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    }
  }
});
