/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// Based on information from: http://stackoverflow.com/questions/332422/how-do-i-get-the-name-of-an-objects-type-in-javascript
// Checking types : http://tobyho.com/2011/01/28/checking-types-in-javascript/

const _owner = new WeakMap();
const _name = new WeakMap();

let setName = (owner) => {
    let funcNameRegex = /function (.{1,})\(/;
    let results = (funcNameRegex).exec((owner).constructor.toString());
    let name = (results && results.length > 1) ? results[1] : "";
    _name.set(owner, name);
}

/**
 * Represents information about a type
 */
export class TypeInfo {
    constructor(owner) {
        _owner.set(this, owner);
        setName(owner);
    }

    get name() {
        let owner = _owner.get(this);
        return _name.get(owner);
    }
}

if (!Object.prototype.typeInfo) {
    Object.defineProperty(Object.prototype, "typeInfo", {
        get: function() {
            if (this._typeInfo) return this._typeInfo;
            let typeInfo = new TypeInfo(this);
            this._typeInfo = typeInfo;
            return typeInfo;
        },
        configurable: false
    });
}



/*
Object.prototype.getConstructorName = function () {
   var str = (this.prototype ? this.prototype.constructor : this.constructor).toString();
   var cname = str.match(/function\s(\w*)/)[1];
   var aliases = ["", "anonymous", "Anonymous"];
   return aliases.indexOf(cname) > -1 ? "Function" : cname;
}

Object.prototype.getName = function() { 
   var funcNameRegex = /function (.{1,})\(/;
   var results = (funcNameRegex).exec((this).constructor.toString());
   return (results && results.length > 1) ? results[1] : "";
};


if (!Object.prototype.getClassName) {
    Object.prototype.getClassName = function () {
        return Object.prototype.toString.call(this).match(/^\[object\s(.*)\]$/)[1];
    }
}

function isInstance(obj, type) {
    var ret = false,
    isTypeAString = getType(type) == "String",
    functionConstructor, i, l, typeArray, context;
    if (!isTypeAString && getType(type) != "Function") {
        throw new TypeError("type argument must be a string or function");
    }
    if (obj !== undefined && obj !== null && obj.constructor) {
        //get the Function constructor
        functionConstructor = obj.constructor;
        while (functionConstructor != functionConstructor.constructor) {
            functionConstructor = functionConstructor.constructor;
        }
        //get the object's window
        context = functionConstructor == Function ? self : functionConstructor("return window")();
        //get the constructor for the type
        if (isTypeAString) {
            //type is a string so we'll build the context (window.Array or window.some.Type)
            for (typeArray = type.split("."), i = 0, l = typeArray.length; i < l && context; i++) {
                context = context[typeArray[i]];
            }
        } else {
            //type is a function so execute the function passing in the object's window
            //the return should be a constructor
            context = type(context);
        }
        //check if the object is an instance of the constructor
        if (context) {
            ret = obj instanceof context;
            if (!ret && (type == "Number" || type == "String" || type == "Boolean")) {
                ret = obj.constructor == context
            }
        }
    }
    return ret;
}
*/