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

import ApiClient from '../ApiClient';
import Channel from './Channel';
import Member from './Member';
import Role from './Role';

/**
 * The Guild model module.
 * @module model/Guild
 * @version 1.0.6
 */
class Guild {
    /**
     * Constructs a new <code>Guild</code>.
     * @alias module:model/Guild
     * @param name {String} 
     */
    constructor(name) { 
        
        Guild.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>Guild</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Guild} obj Optional instance to populate.
     * @return {module:model/Guild} The populated <code>Guild</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Guild();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], [Role]);
            }
            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], [Member]);
            }
            if (data.hasOwnProperty('channels')) {
                obj['channels'] = ApiClient.convertToType(data['channels'], [Channel]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
Guild.prototype['name'] = undefined;

/**
 * @member {String} id
 */
Guild.prototype['id'] = undefined;

/**
 * @member {Array.<module:model/Role>} roles
 */
Guild.prototype['roles'] = undefined;

/**
 * @member {Array.<module:model/Member>} members
 */
Guild.prototype['members'] = undefined;

/**
 * @member {Array.<module:model/Channel>} channels
 */
Guild.prototype['channels'] = undefined;






export default Guild;

