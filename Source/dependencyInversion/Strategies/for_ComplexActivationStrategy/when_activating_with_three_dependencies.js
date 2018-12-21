/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { ComplexActivationStrategy } from '../../Strategies/ComplexActivationStrategy';

var _first = null;
var _second = null;
var _third = null;

class MyClass {
    constructor(first, second, third) {
        _first = first;
        _second = second;
        _third = third;
    }
}

describe('when activating with three dependencies', () => {
    var instances = [
        { 'first': 'instance' },
        { 'second': 'instance' },
        { 'third': 'instance' }
    ];
    let servicesResolved = [];
    let currentInstance = 0;
    let container = {
        get: service => {
            servicesResolved.push(service);

            let promise = {
                then: (callback) => {
                    var instance = instances[currentInstance]
                    callback(instance);
                    currentInstance++;
                }
            };

            return promise;
        }
    };
    let activationContext = {};
    let binding = {
        service: 'Some service',
        target: MyClass
    };
    let strategy = new ComplexActivationStrategy(container);
    let instance = null;

    beforeEach((done) => {
        _first = null;
        _second = null;
        _third = null;
        servicesResolved = [];
        currentInstance = 0;
        instance = null;

        (becauseOf => {
            strategy.activate(activationContext, binding).then((i) => {
                instance = i;
                done();
            });
        })();
    });

    it('should ask the container for the first dependency', () => servicesResolved[0].should.equal('first'));
    it('should ask the container for the second dependency', () => servicesResolved[1].should.equal('second'));
    it('should ask the container for the third dependency', () => servicesResolved[2].should.equal('third'));
    it('should pass the first argument to the constructor', () => _first.should.equal(instances[0]));
    it('should pass the second argument to the constructor', () => _second.should.equal(instances[1]));
    it('should pass the third argument to the constructor', () => _third.should.equal(instances[2]));
    it('should return an instance of what was bound', () => instance.should.be.instanceof(binding.target));
});