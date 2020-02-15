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

  beforeEach(function() {
    instance = new CloneCordApi.GuildRoleApi();
  });

  describe('(package)', function() {
    describe('GuildRoleApi', function() {
      describe('createRoleUsingPOST', function() {
        it('should call createRoleUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for createRoleUsingPOST call and complete the assertions
          /*
          var guildId = "guildId_example";
          var role = new CloneCordApi.FormRole();
          role.displayName = "";
          role.hexColor = "";
          role.name = "";

          instance.createRoleUsingPOST(guildId, role, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CloneCordApi.Role);
            expect(data.displayName).to.be.a('string');
            expect(data.displayName).to.be("");
            expect(data.hexColor).to.be.a('string');
            expect(data.hexColor).to.be("");
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("""00000000-0000-0000-0000-000000000000");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteRoleUsingDELETE', function() {
        it('should call deleteRoleUsingDELETE successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteRoleUsingDELETE call
          /*
          var guildId = "guildId_example";
          var roleId = "roleId_example";

          instance.deleteRoleUsingDELETE(guildId, roleId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateRoleUsingPUT', function() {
        it('should call updateRoleUsingPUT successfully', function(done) {
          // TODO: uncomment, update parameter values for updateRoleUsingPUT call and complete the assertions
          /*
          var guildId = "guildId_example";
          var role = new CloneCordApi.FormRole();
          role.displayName = "";
          role.hexColor = "";
          role.name = "";
          var roleId = "roleId_example";

          instance.updateRoleUsingPUT(guildId, role, roleId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CloneCordApi.Role);
            expect(data.displayName).to.be.a('string');
            expect(data.displayName).to.be("");
            expect(data.hexColor).to.be.a('string');
            expect(data.hexColor).to.be("");
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("""00000000-0000-0000-0000-000000000000");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
