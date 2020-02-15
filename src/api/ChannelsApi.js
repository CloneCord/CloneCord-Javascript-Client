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
* @version 1.0.1
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
     * Callback function to receive the result of the createChannelUsingPOST operation.
     * @callback module:api/ChannelsApi~createChannelUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Channel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new Channel in specified Guild
     * @param {String} guildId ID of the specified Guild
     * @param {Object} opts Optional parameters
     * @param {module:model/FormChannel} opts.channel Channel data
     * @param {module:api/ChannelsApi~createChannelUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Channel}
     */
    createChannelUsingPOST(guildId, opts, callback) {
      opts = opts || {};
      let postBody = opts['channel'];
      // verify the required parameter 'guildId' is set
      if (guildId === undefined || guildId === null) {
        throw new Error("Missing the required parameter 'guildId' when calling createChannelUsingPOST");
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

      let authNames = ['JWT'];
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
     * Callback function to receive the result of the deleteChannelUsingDELETE operation.
     * @callback module:api/ChannelsApi~deleteChannelUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes specified Channel if current User has permissions
     * @param {String} channelId ID of the specified Channel
     * @param {String} guildId ID of the specified Guild
     * @param {module:api/ChannelsApi~deleteChannelUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteChannelUsingDELETE(channelId, guildId, callback) {
      let postBody = null;
      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling deleteChannelUsingDELETE");
      }
      // verify the required parameter 'guildId' is set
      if (guildId === undefined || guildId === null) {
        throw new Error("Missing the required parameter 'guildId' when calling deleteChannelUsingDELETE");
      }

      let pathParams = {
        'channelId': channelId,
        'guildId': guildId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWT'];
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
     * Callback function to receive the result of the updateChannelUsingPUT operation.
     * @callback module:api/ChannelsApi~updateChannelUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Channel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates specified Channel if current User has permissions
     * @param {String} channelId ID of the specified Channel
     * @param {String} guildId ID of the specified Guild
     * @param {Object} opts Optional parameters
     * @param {module:model/FormChannel} opts.channel New channel data
     * @param {module:api/ChannelsApi~updateChannelUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Channel}
     */
    updateChannelUsingPUT(channelId, guildId, opts, callback) {
      opts = opts || {};
      let postBody = opts['channel'];
      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling updateChannelUsingPUT");
      }
      // verify the required parameter 'guildId' is set
      if (guildId === undefined || guildId === null) {
        throw new Error("Missing the required parameter 'guildId' when calling updateChannelUsingPUT");
      }

      let pathParams = {
        'channelId': channelId,
        'guildId': guildId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWT'];
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
