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


import ApiClient from './ApiClient';
import Channel from './model/Channel';
import FormChannel from './model/FormChannel';
import FormGuild from './model/FormGuild';
import FormLogin from './model/FormLogin';
import FormMessage from './model/FormMessage';
import FormRole from './model/FormRole';
import FormUser from './model/FormUser';
import Guild from './model/Guild';
import Member from './model/Member';
import Message from './model/Message';
import Reaction from './model/Reaction';
import RegistrationUser from './model/RegistrationUser';
import Role from './model/Role';
import User from './model/User';
import AuthenticationApi from './api/AuthenticationApi';
import ChannelsApi from './api/ChannelsApi';
import GuildsApi from './api/GuildsApi';
import MessagesApi from './api/MessagesApi';
import RolesApi from './api/RolesApi';
import UsersApi from './api/UsersApi';


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
* @version 1.0.5
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Channel model constructor.
     * @property {module:model/Channel}
     */
    Channel,

    /**
     * The FormChannel model constructor.
     * @property {module:model/FormChannel}
     */
    FormChannel,

    /**
     * The FormGuild model constructor.
     * @property {module:model/FormGuild}
     */
    FormGuild,

    /**
     * The FormLogin model constructor.
     * @property {module:model/FormLogin}
     */
    FormLogin,

    /**
     * The FormMessage model constructor.
     * @property {module:model/FormMessage}
     */
    FormMessage,

    /**
     * The FormRole model constructor.
     * @property {module:model/FormRole}
     */
    FormRole,

    /**
     * The FormUser model constructor.
     * @property {module:model/FormUser}
     */
    FormUser,

    /**
     * The Guild model constructor.
     * @property {module:model/Guild}
     */
    Guild,

    /**
     * The Member model constructor.
     * @property {module:model/Member}
     */
    Member,

    /**
     * The Message model constructor.
     * @property {module:model/Message}
     */
    Message,

    /**
     * The Reaction model constructor.
     * @property {module:model/Reaction}
     */
    Reaction,

    /**
     * The RegistrationUser model constructor.
     * @property {module:model/RegistrationUser}
     */
    RegistrationUser,

    /**
     * The Role model constructor.
     * @property {module:model/Role}
     */
    Role,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
    * The AuthenticationApi service constructor.
    * @property {module:api/AuthenticationApi}
    */
    AuthenticationApi,

    /**
    * The ChannelsApi service constructor.
    * @property {module:api/ChannelsApi}
    */
    ChannelsApi,

    /**
    * The GuildsApi service constructor.
    * @property {module:api/GuildsApi}
    */
    GuildsApi,

    /**
    * The MessagesApi service constructor.
    * @property {module:api/MessagesApi}
    */
    MessagesApi,

    /**
    * The RolesApi service constructor.
    * @property {module:api/RolesApi}
    */
    RolesApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi
};
