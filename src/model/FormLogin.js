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
 * The FormLogin model module.
 * @module model/FormLogin
 * @version 1.0.4
 */
class FormLogin {
    /**
     * Constructs a new <code>FormLogin</code>.
     * @alias module:model/FormLogin
     * @param email {String} 
     * @param password {String} 
     */
    constructor(email, password) { 
        
        FormLogin.initialize(this, email, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, password) { 
        obj['email'] = email;
        obj['password'] = password;
    }

    /**
     * Constructs a <code>FormLogin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FormLogin} obj Optional instance to populate.
     * @return {module:model/FormLogin} The populated <code>FormLogin</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FormLogin();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} email
 */
FormLogin.prototype['email'] = undefined;

/**
 * @member {String} password
 */
FormLogin.prototype['password'] = undefined;






export default FormLogin;

