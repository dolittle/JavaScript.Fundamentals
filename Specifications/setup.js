function parseUri(sourceUri){
    var uriPartNames = ["source","protocol","authority","domain","port","path","directoryPath","fileName","query","anchor"];
    var uriParts = new RegExp("^(?:([^:/?#.]+):)?(?://)?(([^:/?#]*)(?::(\\d*))?)?((/(?:[^?#](?![^?#/]*\\.[^?#/.]+(?:[\\?#]|$)))*/?)?([^?#/]*))?(?:\\?([^#]*))?(?:#(.*))?").exec(sourceUri);
    var uri = {};

    for (var i = 0; i < 10; i++){
        uri[uriPartNames[i]] = (uriParts[i] ? uriParts[i] : "");
    }

    // Always end directoryPath with a trailing backslash if a path was present in the source URI
    // Note that a trailing backslash is NOT automatically inserted within or appended to the "path" key
    if(uri.directoryPath.length > 0){
        uri.directoryPath = uri.directoryPath.replace(/\/?$/, "/");
    }

    return uri;
}	
    
/*
function given(moduleName, context, specification) {
    var base = "base/";
    var position = moduleName.indexOf(base);
    position += base.length;
    
    var uri = parseUri(moduleName);
    var root = uri.directoryPath;
    context = context.split(" ").join("_");
    var fullContext = root+"given/"+context;
    
    var context = null;
    
    System.import(fullContext).then(module => {
        var context = module.default;
        
        console.log("Context loaded");
    });
    
    return function() {
        var suite = this;
        
        console.log("Calling spec");
        
        var proto = context;
        proto.prototype = suite;
        var instance = new proto();
        debugger;
        specification.call(instance);    
    };
}
*/

function given(context, specification) {
    return function() {
        context.prototype = this;
        var contextInstance = new context.default();
        specification.call(contextInstance);
    }
}