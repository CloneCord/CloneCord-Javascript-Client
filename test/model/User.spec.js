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
    describe('User', function() {
      beforeEach(function() {
        instance = new CloneCordApi.User();
      });

      it('should create an instance of User', function() {
        // TODO: update the code to test User
        expect(instance).to.be.a(CloneCordApi.User);
      });

      it('should have the property avatar (base name: "avatar")', function() {
        // TODO: update the code to test the property avatar
        expect(instance).to.have.property('avatar');
        // expect(instance.avatar).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property username (base name: "username")', function() {
        // TODO: update the code to test the property username
        expect(instance).to.have.property('username');
        // expect(instance.username).to.be(expectedValueLiteral);
      });

    });
  });

}));