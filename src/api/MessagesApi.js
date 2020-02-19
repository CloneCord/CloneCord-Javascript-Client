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


import ApiClient from "../ApiClient";
import FormMessage from '../model/FormMessage';
import Message from '../model/Message';

/**
* Messages service.
* @module api/MessagesApi
* @version 1.0.4
*/
export default class MessagesApi {

    /**
    * Constructs a new MessagesApi. 
    * @alias module:api/MessagesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteMessage operation.
     * @callback module:api/MessagesApi~deleteMessageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes specified message in specified Channel if current User has permissions
     * @param {String} guildId ID of the specified Guild
     * @param {String} channelId ID of the specified Channel
     * @param {String} messageId ID of the specified Message
     * @param {module:api/MessagesApi~deleteMessageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteMessage(guildId, channelId, messageId, callback) {
      let postBody = null;
      // verify the required parameter 'guildId' is set
      if (guildId === undefined || guildId === null) {
        throw new Error("Missing the required parameter 'guildId' when calling deleteMessage");
      }
      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling deleteMessage");
      }
      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling deleteMessage");
      }

      let pathParams = {
        'guildId': guildId,
        'channelId': channelId,
        'messageId': messageId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['user-auth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/guilds/{guildId}/{channelId}/messages/{messageId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMessages operation.
     * @callback module:api/MessagesApi~getMessagesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Message>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of messages in specified Channel if current User has permissions
     * @param {String} guildId ID of the specified Guild
     * @param {String} channelId ID of the specified Channel
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum number of messages to return (max = 100)
     * @param {Number} opts.before Return only messages sent before this timestamp
     * @param {Number} opts.after Return only mesages after this timestamp
     * @param {module:api/MessagesApi~getMessagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Message>}
     */
    getMessages(guildId, channelId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'guildId' is set
      if (guildId === undefined || guildId === null) {
        throw new Error("Missing the required parameter 'guildId' when calling getMessages");
      }
      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling getMessages");
      }

      let pathParams = {
        'guildId': guildId,
        'channelId': channelId
      };
      let queryParams = {
        'limit': opts['limit'],
        'before': opts['before'],
        'after': opts['after']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['user-auth'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = [Message];
      return this.apiClient.callApi(
        '/guilds/{guildId}/{channelId}/messages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sendMessage operation.
     * @callback module:api/MessagesApi~sendMessageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Message} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sends a new message to specified Channel if current User has permissions
     * @param {String} guildId ID of the specified Guild
     * @param {String} channelId ID of the specified Channel
     * @param {module:model/FormMessage} formMessage Message data
     * @param {module:api/MessagesApi~sendMessageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Message}
     */
    sendMessage(guildId, channelId, formMessage, callback) {
      let postBody = formMessage;
      // verify the required parameter 'guildId' is set
      if (guildId === undefined || guildId === null) {
        throw new Error("Missing the required parameter 'guildId' when calling sendMessage");
      }
      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling sendMessage");
      }
      // verify the required parameter 'formMessage' is set
      if (formMessage === undefined || formMessage === null) {
        throw new Error("Missing the required parameter 'formMessage' when calling sendMessage");
      }

      let pathParams = {
        'guildId': guildId,
        'channelId': channelId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['user-auth'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = Message;
      return this.apiClient.callApi(
        '/guilds/{guildId}/{channelId}/messages', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
