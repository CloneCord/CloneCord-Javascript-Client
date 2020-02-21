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
 * The FormRole model module.
 * @module model/FormRole
 * @version 1.0.7
 */
class FormRole {
    /**
     * Constructs a new <code>FormRole</code>.
     * @alias module:model/FormRole
     * @param name {String} 
     * @param hexColor {String} 
     */
    constructor(name, hexColor) { 
        
        FormRole.initialize(this, name, hexColor);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, hexColor) { 
        obj['name'] = name;
        obj['hexColor'] = hexColor;
    }

    /**
     * Constructs a <code>FormRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FormRole} obj Optional instance to populate.
     * @return {module:model/FormRole} The populated <code>FormRole</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FormRole();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('hexColor')) {
                obj['hexColor'] = ApiClient.convertToType(data['hexColor'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
FormRole.prototype['name'] = undefined;

/**
 * @member {String} hexColor
 */
FormRole.prototype['hexColor'] = undefined;






export default FormRole;

