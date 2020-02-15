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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloneCordApi) {
      root.CloneCordApi = {};
    }
    root.CloneCordApi.Channel = factory(root.CloneCordApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Channel model module.
   * @module model/Channel
   * @version 1.0
   */

  /**
   * Constructs a new <code>Channel</code>.
   * @alias module:model/Channel
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Channel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Channel} obj Optional instance to populate.
   * @return {module:model/Channel} The populated <code>Channel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('channelId'))
        obj.channelId = ApiClient.convertToType(data['channelId'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} channelId
   */
  exports.prototype.channelId = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  return exports;

}));
