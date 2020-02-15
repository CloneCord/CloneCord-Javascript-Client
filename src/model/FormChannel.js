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
 * The FormChannel model module.
 * @module model/FormChannel
 * @version 1.0.1
 */
class FormChannel {
    /**
     * Constructs a new <code>FormChannel</code>.
     * @alias module:model/FormChannel
     */
    constructor() { 
        
        FormChannel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FormChannel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FormChannel} obj Optional instance to populate.
     * @return {module:model/FormChannel} The populated <code>FormChannel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FormChannel();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
FormChannel.prototype['name'] = undefined;






export default FormChannel;

