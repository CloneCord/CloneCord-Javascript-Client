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
import Channel from '../model/Channel';
import FormChannel from '../model/FormChannel';

/**
* Channels service.
* @module api/ChannelsApi
* @version 1.0.6
*/
export default class ChannelsApi {

    /**
    * Constructs a new ChannelsApi. 
    * @alias module:api/ChannelsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createChannel operation.
     * @callback module:api/ChannelsApi~createChannelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Channel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new Channel in specified Guild
     * @param {String} guildId ID of the specified Guild
     * @param {module:model/FormChannel} formChannel Channel data
     * @param {module:api/ChannelsApi~createChannelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Channel}
     */
    createChannel(guildId, formChannel, callback) {
      let postBody = formChannel;
      // verify the required parameter 'guildId' is set
      if (guildId === undefined || guildId === null) {
        throw new Error("Missing the required parameter 'guildId' when calling createChannel");
      }
      // verify the required parameter 'formChannel' is set
      if (formChannel === undefined || formChannel === null) {
        throw new Error("Missing the required parameter 'formChannel' when calling createChannel");
      }

      let pathParams = {
        'guildId': guildId
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
      let returnType = Channel;
      return this.apiClient.callApi(
        '/guilds/{guildId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteChannel operation.
     * @callback module:api/ChannelsApi~deleteChannelCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes specified Channel if current User has permissions
     * @param {String} guildId ID of the specified Guild
     * @param {String} channelId ID of the specified Channel
     * @param {module:api/ChannelsApi~deleteChannelCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteChannel(guildId, channelId, callback) {
      let postBody = null;
      // verify the required parameter 'guildId' is set
      if (guildId === undefined || guildId === null) {
        throw new Error("Missing the required parameter 'guildId' when calling deleteChannel");
      }
      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling deleteChannel");
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
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/guilds/{guildId}/{channelId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateChannel operation.
     * @callback module:api/ChannelsApi~updateChannelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Channel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates specified Channel if current User has permissions
     * @param {String} guildId ID of the specified Guild
     * @param {String} channelId ID of the specified Channel
     * @param {module:model/FormChannel} formChannel New channel data
     * @param {module:api/ChannelsApi~updateChannelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Channel}
     */
    updateChannel(guildId, channelId, formChannel, callback) {
      let postBody = formChannel;
      // verify the required parameter 'guildId' is set
      if (guildId === undefined || guildId === null) {
        throw new Error("Missing the required parameter 'guildId' when calling updateChannel");
      }
      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling updateChannel");
      }
      // verify the required parameter 'formChannel' is set
      if (formChannel === undefined || formChannel === null) {
        throw new Error("Missing the required parameter 'formChannel' when calling updateChannel");
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
      let returnType = Channel;
      return this.apiClient.callApi(
        '/guilds/{guildId}/{channelId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
