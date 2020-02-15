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
    instance = new CloneCordApi.GuildsControllerApi();
  });

  describe('(package)', function() {
    describe('GuildsControllerApi', function() {
      describe('createGuildUsingPOST', function() {
        it('should call createGuildUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for createGuildUsingPOST call and complete the assertions
          /*
          var guild = new CloneCordApi.FormGuild();
          guild.name = "";

          instance.createGuildUsingPOST(guild, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CloneCordApi.Guild);
            {
              let dataCtr = data.channels;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(CloneCordApi.Channel);
                expect(data.channelId).to.be.a('string');
                expect(data.channelId).to.be("""00000000-0000-0000-0000-000000000000");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
              }
            }
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("""00000000-0000-0000-0000-000000000000");
            {
              let dataCtr = data.members;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(CloneCordApi.Member);
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("""00000000-0000-0000-0000-000000000000");
                expect(data.owner).to.be.a('boolean');
                expect(data.owner).to.be(false);
                {
                  let dataCtr = data.roles;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(CloneCordApi.Role);
                    expect(data.displayName).to.be.a('string');
                    expect(data.displayName).to.be("");
                    expect(data.hexColor).to.be.a('string');
                    expect(data.hexColor).to.be("");
                    expect(data.id).to.be.a('string');
                    expect(data.id).to.be("""00000000-0000-0000-0000-000000000000");
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
                  }
                }
                expect(data.username).to.be.a('string');
                expect(data.username).to.be("");
              }
            }
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            {
              let dataCtr = data.roles;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(CloneCordApi.Role);
                expect(data.displayName).to.be.a('string');
                expect(data.displayName).to.be("");
                expect(data.hexColor).to.be.a('string');
                expect(data.hexColor).to.be("");
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("""00000000-0000-0000-0000-000000000000");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteGuildUsingDELETE', function() {
        it('should call deleteGuildUsingDELETE successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteGuildUsingDELETE call
          /*
          var guildId = "guildId_example";

          instance.deleteGuildUsingDELETE(guildId, function(error, data, response) {
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
      describe('getGuildInfoUsingGET', function() {
        it('should call getGuildInfoUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for getGuildInfoUsingGET call and complete the assertions
          /*
          var guildId = "guildId_example";

          instance.getGuildInfoUsingGET(guildId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CloneCordApi.Guild);
            {
              let dataCtr = data.channels;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(CloneCordApi.Channel);
                expect(data.channelId).to.be.a('string');
                expect(data.channelId).to.be("""00000000-0000-0000-0000-000000000000");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
              }
            }
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("""00000000-0000-0000-0000-000000000000");
            {
              let dataCtr = data.members;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(CloneCordApi.Member);
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("""00000000-0000-0000-0000-000000000000");
                expect(data.owner).to.be.a('boolean');
                expect(data.owner).to.be(false);
                {
                  let dataCtr = data.roles;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(CloneCordApi.Role);
                    expect(data.displayName).to.be.a('string');
                    expect(data.displayName).to.be("");
                    expect(data.hexColor).to.be.a('string');
                    expect(data.hexColor).to.be("");
                    expect(data.id).to.be.a('string');
                    expect(data.id).to.be("""00000000-0000-0000-0000-000000000000");
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
                  }
                }
                expect(data.username).to.be.a('string');
                expect(data.username).to.be("");
              }
            }
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            {
              let dataCtr = data.roles;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(CloneCordApi.Role);
                expect(data.displayName).to.be.a('string');
                expect(data.displayName).to.be("");
                expect(data.hexColor).to.be.a('string');
                expect(data.hexColor).to.be("");
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("""00000000-0000-0000-0000-000000000000");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateGuildUsingPUT', function() {
        it('should call updateGuildUsingPUT successfully', function(done) {
          // TODO: uncomment, update parameter values for updateGuildUsingPUT call and complete the assertions
          /*
          var guildId = "guildId_example";
          var newGuild = new CloneCordApi.FormGuild();
          newGuild.name = "";

          instance.updateGuildUsingPUT(guildId, newGuild, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CloneCordApi.Guild);
            {
              let dataCtr = data.channels;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(CloneCordApi.Channel);
                expect(data.channelId).to.be.a('string');
                expect(data.channelId).to.be("""00000000-0000-0000-0000-000000000000");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
              }
            }
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("""00000000-0000-0000-0000-000000000000");
            {
              let dataCtr = data.members;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(CloneCordApi.Member);
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("""00000000-0000-0000-0000-000000000000");
                expect(data.owner).to.be.a('boolean');
                expect(data.owner).to.be(false);
                {
                  let dataCtr = data.roles;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(CloneCordApi.Role);
                    expect(data.displayName).to.be.a('string');
                    expect(data.displayName).to.be("");
                    expect(data.hexColor).to.be.a('string');
                    expect(data.hexColor).to.be("");
                    expect(data.id).to.be.a('string');
                    expect(data.id).to.be("""00000000-0000-0000-0000-000000000000");
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
                  }
                }
                expect(data.username).to.be.a('string');
                expect(data.username).to.be("");
              }
            }
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            {
              let dataCtr = data.roles;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(CloneCordApi.Role);
                expect(data.displayName).to.be.a('string');
                expect(data.displayName).to.be("");
                expect(data.hexColor).to.be.a('string');
                expect(data.hexColor).to.be("");
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("""00000000-0000-0000-0000-000000000000");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
              }
            }

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
