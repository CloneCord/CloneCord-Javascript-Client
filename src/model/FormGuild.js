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
 * The FormGuild model module.
 * @module model/FormGuild
 * @version 1.0.8
 */
class FormGuild {
    /**
     * Constructs a new <code>FormGuild</code>.
     * @alias module:model/FormGuild
     * @param name {String} 
     */
    constructor(name) { 
        
        FormGuild.initialize(this, name);
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
     * Constructs a <code>FormGuild</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FormGuild} obj Optional instance to populate.
     * @return {module:model/FormGuild} The populated <code>FormGuild</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FormGuild();

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
FormGuild.prototype['name'] = undefined;






export default FormGuild;

