/**
 * CloneCord API
 * REST API to use CloneCord
 *
 * The version of the OpenAPI document: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CloneCordApi);
  }
}(this, function(expect, CloneCordApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CloneCordApi.MessagesApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('MessagesApi', function() {
    describe('deleteMessage', function() {
      it('should call deleteMessage successfully', function(done) {
        //uncomment below and update the code to test deleteMessage
        //instance.deleteMessage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMessages', function() {
      it('should call getMessages successfully', function(done) {
        //uncomment below and update the code to test getMessages
        //instance.getMessages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendMessage', function() {
      it('should call sendMessage successfully', function(done) {
        //uncomment below and update the code to test sendMessage
        //instance.sendMessage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
