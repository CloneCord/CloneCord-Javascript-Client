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

/**
 * The Role model module.
 * @module model/Role
 * @version 1.0.1
 */
class Role {
    /**
     * Constructs a new <code>Role</code>.
     * @alias module:model/Role
     * @param hexColor {String} 
     * @param name {String} 
     */
    constructor(hexColor, name) { 
        
        Role.initialize(this, hexColor, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, hexColor, name) { 
        obj['hexColor'] = hexColor;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>Role</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Role} obj Optional instance to populate.
     * @return {module:model/Role} The populated <code>Role</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Role();

            if (data.hasOwnProperty('hexColor')) {
                obj['hexColor'] = ApiClient.convertToType(data['hexColor'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} hexColor
 */
Role.prototype['hexColor'] = undefined;

/**
 * @member {String} id
 */
Role.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Role.prototype['name'] = undefined;






export default Role;

