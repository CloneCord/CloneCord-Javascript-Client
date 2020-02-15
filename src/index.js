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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Channel', 'model/FormChannel', 'model/FormGuild', 'model/FormLogin', 'model/FormMessage', 'model/FormRole', 'model/FormUser', 'model/Guild', 'model/Member', 'model/Message', 'model/Reaction', 'model/RegistrationUser', 'model/Role', 'model/User', 'api/AuthenticationAPIApi', 'api/ChannelsAPIApi', 'api/GuildsAPIApi', 'api/MessagesAPIApi', 'api/RolesAPIApi', 'api/UsersAPIApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Channel'), require('./model/FormChannel'), require('./model/FormGuild'), require('./model/FormLogin'), require('./model/FormMessage'), require('./model/FormRole'), require('./model/FormUser'), require('./model/Guild'), require('./model/Member'), require('./model/Message'), require('./model/Reaction'), require('./model/RegistrationUser'), require('./model/Role'), require('./model/User'), require('./api/AuthenticationAPIApi'), require('./api/ChannelsAPIApi'), require('./api/GuildsAPIApi'), require('./api/MessagesAPIApi'), require('./api/RolesAPIApi'), require('./api/UsersAPIApi'));
  }
}(function(ApiClient, Channel, FormChannel, FormGuild, FormLogin, FormMessage, FormRole, FormUser, Guild, Member, Message, Reaction, RegistrationUser, Role, User, AuthenticationAPIApi, ChannelsAPIApi, GuildsAPIApi, MessagesAPIApi, RolesAPIApi, UsersAPIApi) {
  'use strict';

  /**
   * REST_API_to_use_CloneCord.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var CloneCordApi = require('index'); // See note below*.
   * var xxxSvc = new CloneCordApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new CloneCordApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new CloneCordApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new CloneCordApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Channel model constructor.
     * @property {module:model/Channel}
     */
    Channel: Channel,
    /**
     * The FormChannel model constructor.
     * @property {module:model/FormChannel}
     */
    FormChannel: FormChannel,
    /**
     * The FormGuild model constructor.
     * @property {module:model/FormGuild}
     */
    FormGuild: FormGuild,
    /**
     * The FormLogin model constructor.
     * @property {module:model/FormLogin}
     */
    FormLogin: FormLogin,
    /**
     * The FormMessage model constructor.
     * @property {module:model/FormMessage}
     */
    FormMessage: FormMessage,
    /**
     * The FormRole model constructor.
     * @property {module:model/FormRole}
     */
    FormRole: FormRole,
    /**
     * The FormUser model constructor.
     * @property {module:model/FormUser}
     */
    FormUser: FormUser,
    /**
     * The Guild model constructor.
     * @property {module:model/Guild}
     */
    Guild: Guild,
    /**
     * The Member model constructor.
     * @property {module:model/Member}
     */
    Member: Member,
    /**
     * The Message model constructor.
     * @property {module:model/Message}
     */
    Message: Message,
    /**
     * The Reaction model constructor.
     * @property {module:model/Reaction}
     */
    Reaction: Reaction,
    /**
     * The RegistrationUser model constructor.
     * @property {module:model/RegistrationUser}
     */
    RegistrationUser: RegistrationUser,
    /**
     * The Role model constructor.
     * @property {module:model/Role}
     */
    Role: Role,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The AuthenticationAPIApi service constructor.
     * @property {module:api/AuthenticationAPIApi}
     */
    AuthenticationAPIApi: AuthenticationAPIApi,
    /**
     * The ChannelsAPIApi service constructor.
     * @property {module:api/ChannelsAPIApi}
     */
    ChannelsAPIApi: ChannelsAPIApi,
    /**
     * The GuildsAPIApi service constructor.
     * @property {module:api/GuildsAPIApi}
     */
    GuildsAPIApi: GuildsAPIApi,
    /**
     * The MessagesAPIApi service constructor.
     * @property {module:api/MessagesAPIApi}
     */
    MessagesAPIApi: MessagesAPIApi,
    /**
     * The RolesAPIApi service constructor.
     * @property {module:api/RolesAPIApi}
     */
    RolesAPIApi: RolesAPIApi,
    /**
     * The UsersAPIApi service constructor.
     * @property {module:api/UsersAPIApi}
     */
    UsersAPIApi: UsersAPIApi
  };

  return exports;
}));