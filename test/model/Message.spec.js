/*
 * CloneCord API
 * REST API to use CloneCord
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CloneCordApi);
  }
}(this, function(expect, CloneCordApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Message', function() {
      beforeEach(function() {
        instance = new CloneCordApi.Message();
      });

      it('should create an instance of Message', function() {
        // TODO: update the code to test Message
        expect(instance).to.be.a(CloneCordApi.Message);
      });

      it('should have the property channelId (base name: "channelId")', function() {
        // TODO: update the code to test the property channelId
        expect(instance).to.have.property('channelId');
        // expect(instance.channelId).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property message (base name: "message")', function() {
        // TODO: update the code to test the property message
        expect(instance).to.have.property('message');
        // expect(instance.message).to.be(expectedValueLiteral);
      });

      it('should have the property reactionList (base name: "reactionList")', function() {
        // TODO: update the code to test the property reactionList
        expect(instance).to.have.property('reactionList');
        // expect(instance.reactionList).to.be(expectedValueLiteral);
      });

      it('should have the property senderId (base name: "senderId")', function() {
        // TODO: update the code to test the property senderId
        expect(instance).to.have.property('senderId');
        // expect(instance.senderId).to.be(expectedValueLiteral);
      });

      it('should have the property sentDate (base name: "sentDate")', function() {
        // TODO: update the code to test the property sentDate
        expect(instance).to.have.property('sentDate');
        // expect(instance.sentDate).to.be(expectedValueLiteral);
      });

    });
  });

}));