# CloneCordApi.RolesApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRole**](RolesApi.md#createRole) | **POST** /guilds/{guildId}/roles | 
[**deleteRole**](RolesApi.md#deleteRole) | **DELETE** /guilds/{guildId}/roles/{roleId} | 
[**updateRole**](RolesApi.md#updateRole) | **PUT** /guilds/{guildId}/roles/{roleId} | 



## createRole

> Role createRole(guildId, formRole)



Creates a new Role in specified Guild if current User has permissions

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: user-auth
let user-auth = defaultClient.authentications['user-auth'];
user-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user-auth.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.RolesApi();
let guildId = null; // String | ID of the specified Guild
let formRole = new CloneCordApi.FormRole(); // FormRole | Role data
apiInstance.createRole(guildId, formRole, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guildId** | [**String**](.md)| ID of the specified Guild | 
 **formRole** | [**FormRole**](FormRole.md)| Role data | 

### Return type

[**Role**](Role.md)

### Authorization

[user-auth](../README.md#user-auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteRole

> deleteRole(guildId, roleId)



Deletes specified Role in specified Guild if current User has permissions

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: user-auth
let user-auth = defaultClient.authentications['user-auth'];
user-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user-auth.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.RolesApi();
let guildId = null; // String | ID of the specified Guild
let roleId = null; // String | ID of the specified Role
apiInstance.deleteRole(guildId, roleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guildId** | [**String**](.md)| ID of the specified Guild | 
 **roleId** | [**String**](.md)| ID of the specified Role | 

### Return type

null (empty response body)

### Authorization

[user-auth](../README.md#user-auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateRole

> Role updateRole(guildId, roleId, formRole)



Updates specified Role in specified Guild if current User has permissions

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: user-auth
let user-auth = defaultClient.authentications['user-auth'];
user-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user-auth.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.RolesApi();
let guildId = null; // String | ID of the specified Guild
let roleId = null; // String | 
let formRole = new CloneCordApi.FormRole(); // FormRole | New role data
apiInstance.updateRole(guildId, roleId, formRole, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guildId** | [**String**](.md)| ID of the specified Guild | 
 **roleId** | [**String**](.md)|  | 
 **formRole** | [**FormRole**](FormRole.md)| New role data | 

### Return type

[**Role**](Role.md)

### Authorization

[user-auth](../README.md#user-auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

