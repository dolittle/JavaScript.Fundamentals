(function() {
    var resolve = System.constructor.prototype.resolve;
    System.constructor.prototype.resolve = function(url, parentUrl) {
        return Promise.resolve(resolve.call(this, url, parentUrl))
        .then(function(result) {            
            if( result.indexOf('.js') < 0 ) result = result+'.js?'+window.runPostfix;
            return result;
        })
    };
})();