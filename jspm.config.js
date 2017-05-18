SystemJS.config({
    browserConfig: {
        "paths": {
            "npm:": "/jspm_packages/npm/",
            "github:": "/jspm_packages/github/"
        }
    },
    nodeConfig: {
        "paths": {
            "npm:": "jspm_packages/npm/",
            "github:": "jspm_packages/github/"
        }
    },
    transpiler: "plugin-babel",
    map: {
        "Distribution": "local:Distribution@master",
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
        "core-js": "npm:core-js@1.2.7",
        "plugin-babel": "npm:systemjs-plugin-babel@0.0.12",
    }
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    map: {
        "dolittle-reflection": "./Source/Reflection/index.js",
        "dolittle-exceptions": "./Source/Exceptions/index.js",
        "dolittle-specifictions": "./Source/Specifications/index.js",
        "dolittle-dependencyinversion": "./Source/DependencyInversion/index.js",
        "assert": "npm:jspm-nodelibs-assert@0.2.0",
        "buffer": "npm:jspm-nodelibs-buffer@0.2.0",
        "constants": "npm:jspm-nodelibs-constants@0.2.1",
        "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
        "events": "npm:jspm-nodelibs-events@0.2.2",
        "fs": "npm:jspm-nodelibs-fs@0.2.0",
        "os": "npm:jspm-nodelibs-os@0.2.1",
        "path": "npm:jspm-nodelibs-path@0.2.0",
        "process": "npm:jspm-nodelibs-process@0.2.1",
        "stream": "npm:jspm-nodelibs-stream@0.2.1",
        "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1",
        "systemjs": "npm:systemjs@0.20.12",
        "util": "npm:jspm-nodelibs-util@0.2.0",
        "vm": "npm:jspm-nodelibs-vm@0.2.0"
    },
    packages: {
        "npm:jspm-nodelibs-buffer@0.2.0": {
            "map": {
                "buffer-browserify": "npm:buffer@4.9.1"
            }
        },
        "npm:buffer@4.9.1": {
            "map": {
                "ieee754": "npm:ieee754@1.1.8",
                "isarray": "npm:isarray@1.0.0",
                "base64-js": "npm:base64-js@1.2.0"
            }
        },
        "npm:jspm-nodelibs-os@0.2.1": {
            "map": {
                "os-browserify": "npm:os-browserify@0.2.1"
            }
        },
        "npm:jspm-nodelibs-crypto@0.2.1": {
            "map": {
                "crypto-browserify": "npm:crypto-browserify@3.11.0"
            }
        },
        "npm:crypto-browserify@3.11.0": {
            "map": {
                "create-hmac": "npm:create-hmac@1.1.6",
                "create-ecdh": "npm:create-ecdh@4.0.0",
                "inherits": "npm:inherits@2.0.3",
                "browserify-cipher": "npm:browserify-cipher@1.0.0",
                "create-hash": "npm:create-hash@1.1.3",
                "diffie-hellman": "npm:diffie-hellman@5.0.2",
                "randombytes": "npm:randombytes@2.0.3",
                "browserify-sign": "npm:browserify-sign@4.0.4",
                "pbkdf2": "npm:pbkdf2@3.0.12",
                "public-encrypt": "npm:public-encrypt@4.0.0"
            }
        },
        "npm:create-hmac@1.1.6": {
            "map": {
                "create-hash": "npm:create-hash@1.1.3",
                "inherits": "npm:inherits@2.0.3",
                "cipher-base": "npm:cipher-base@1.0.3",
                "safe-buffer": "npm:safe-buffer@5.0.1",
                "ripemd160": "npm:ripemd160@2.0.1",
                "sha.js": "npm:sha.js@2.4.8"
            }
        },
        "npm:create-hash@1.1.3": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "cipher-base": "npm:cipher-base@1.0.3",
                "ripemd160": "npm:ripemd160@2.0.1",
                "sha.js": "npm:sha.js@2.4.8"
            }
        },
        "npm:browserify-sign@4.0.4": {
            "map": {
                "create-hash": "npm:create-hash@1.1.3",
                "create-hmac": "npm:create-hmac@1.1.6",
                "inherits": "npm:inherits@2.0.3",
                "browserify-rsa": "npm:browserify-rsa@4.0.1",
                "parse-asn1": "npm:parse-asn1@5.1.0",
                "elliptic": "npm:elliptic@6.4.0",
                "bn.js": "npm:bn.js@4.11.6"
            }
        },
        "npm:diffie-hellman@5.0.2": {
            "map": {
                "randombytes": "npm:randombytes@2.0.3",
                "miller-rabin": "npm:miller-rabin@4.0.0",
                "bn.js": "npm:bn.js@4.11.6"
            }
        },
        "npm:pbkdf2@3.0.12": {
            "map": {
                "create-hash": "npm:create-hash@1.1.3",
                "create-hmac": "npm:create-hmac@1.1.6",
                "safe-buffer": "npm:safe-buffer@5.0.1",
                "ripemd160": "npm:ripemd160@2.0.1",
                "sha.js": "npm:sha.js@2.4.8"
            }
        },
        "npm:public-encrypt@4.0.0": {
            "map": {
                "create-hash": "npm:create-hash@1.1.3",
                "randombytes": "npm:randombytes@2.0.3",
                "browserify-rsa": "npm:browserify-rsa@4.0.1",
                "parse-asn1": "npm:parse-asn1@5.1.0",
                "bn.js": "npm:bn.js@4.11.6"
            }
        },
        "npm:browserify-cipher@1.0.0": {
            "map": {
                "browserify-des": "npm:browserify-des@1.0.0",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "browserify-aes": "npm:browserify-aes@1.0.6"
            }
        },
        "npm:ripemd160@2.0.1": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "hash-base": "npm:hash-base@2.0.2"
            }
        },
        "npm:cipher-base@1.0.3": {
            "map": {
                "inherits": "npm:inherits@2.0.3"
            }
        },
        "npm:parse-asn1@5.1.0": {
            "map": {
                "browserify-aes": "npm:browserify-aes@1.0.6",
                "create-hash": "npm:create-hash@1.1.3",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "pbkdf2": "npm:pbkdf2@3.0.12",
                "asn1.js": "npm:asn1.js@4.9.1"
            }
        },
        "npm:browserify-rsa@4.0.1": {
            "map": {
                "randombytes": "npm:randombytes@2.0.3",
                "bn.js": "npm:bn.js@4.11.6"
            }
        },
        "npm:create-ecdh@4.0.0": {
            "map": {
                "elliptic": "npm:elliptic@6.4.0",
                "bn.js": "npm:bn.js@4.11.6"
            }
        },
        "npm:sha.js@2.4.8": {
            "map": {
                "inherits": "npm:inherits@2.0.3"
            }
        },
        "npm:browserify-des@1.0.0": {
            "map": {
                "cipher-base": "npm:cipher-base@1.0.3",
                "inherits": "npm:inherits@2.0.3",
                "des.js": "npm:des.js@1.0.0"
            }
        },
        "npm:evp_bytestokey@1.0.0": {
            "map": {
                "create-hash": "npm:create-hash@1.1.3"
            }
        },
        "npm:browserify-aes@1.0.6": {
            "map": {
                "cipher-base": "npm:cipher-base@1.0.3",
                "create-hash": "npm:create-hash@1.1.3",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "inherits": "npm:inherits@2.0.3",
                "buffer-xor": "npm:buffer-xor@1.0.3"
            }
        },
        "npm:elliptic@6.4.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "inherits": "npm:inherits@2.0.3",
                "hmac-drbg": "npm:hmac-drbg@1.0.1",
                "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
                "brorand": "npm:brorand@1.1.0",
                "hash.js": "npm:hash.js@1.0.3",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:miller-rabin@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "brorand": "npm:brorand@1.1.0"
            }
        },
        "npm:hash-base@2.0.2": {
            "map": {
                "inherits": "npm:inherits@2.0.3"
            }
        },
        "npm:hmac-drbg@1.0.1": {
            "map": {
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
                "hash.js": "npm:hash.js@1.0.3",
                "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
            }
        },
        "npm:asn1.js@4.9.1": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "inherits": "npm:inherits@2.0.3",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:des.js@1.0.0": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:hash.js@1.0.3": {
            "map": {
                "inherits": "npm:inherits@2.0.3"
            }
        },
        "npm:jspm-nodelibs-stream@0.2.1": {
            "map": {
                "stream-browserify": "npm:stream-browserify@2.0.1"
            }
        },
        "npm:jspm-nodelibs-string_decoder@0.2.1": {
            "map": {
                "string_decoder": "npm:string_decoder@0.10.31"
            }
        },
        "npm:stream-browserify@2.0.1": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "readable-stream": "npm:readable-stream@2.2.9"
            }
        },
        "npm:readable-stream@2.2.9": {
            "map": {
                "string_decoder": "npm:string_decoder@1.0.0",
                "isarray": "npm:isarray@1.0.0",
                "inherits": "npm:inherits@2.0.3",
                "buffer-shims": "npm:buffer-shims@1.0.0",
                "process-nextick-args": "npm:process-nextick-args@1.0.7",
                "util-deprecate": "npm:util-deprecate@1.0.2",
                "core-util-is": "npm:core-util-is@1.0.2"
            }
        },
        "npm:string_decoder@1.0.0": {
            "map": {
                "buffer-shims": "npm:buffer-shims@1.0.0"
            }
        },
        "npm:upath@0.1.7": {
            "map": {
                "underscore.string": "npm:underscore.string@2.3.3",
                "lodash": "npm:lodash@3.10.1"
            }
        }
    }
});