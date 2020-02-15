# CloneCordApi.RolesApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRoleUsingPOST**](RolesApi.md#createRoleUsingPOST) | **POST** /guilds/{guildId}/roles | Creates a new Role in specified Guild if current User has permissions
[**deleteRoleUsingDELETE**](RolesApi.md#deleteRoleUsingDELETE) | **DELETE** /guilds/{guildId}/roles/{roleId} | Deletes specified Role in specified Guild if current User has permissions
[**updateRoleUsingPUT**](RolesApi.md#updateRoleUsingPUT) | **PUT** /guilds/{guildId}/roles/{roleId} | Updates specified Role in specified Guild if current User has permissions



## createRoleUsingPOST

> Role createRoleUsingPOST(guildId, role)

Creates a new Role in specified Guild if current User has permissions

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.RolesApi();
let guildId = null; // String | ID of the specified Guild
let role = new CloneCordApi.FormRole(); // FormRole | Role data
apiInstance.createRoleUsingPOST(guildId, role, (error, data, response) => {
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
 **role** | [**FormRole**](FormRole.md)| Role data | 

### Return type

[**Role**](Role.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteRoleUsingDELETE

> deleteRoleUsingDELETE(guildId, roleId)

Deletes specified Role in specified Guild if current User has permissions

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.RolesApi();
let guildId = null; // String | ID of the specified Guild
let roleId = null; // String | ID of the specified Role
apiInstance.deleteRoleUsingDELETE(guildId, roleId, (error, data, response) => {
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

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateRoleUsingPUT

> Role updateRoleUsingPUT(guildId, roleId, role)

Updates specified Role in specified Guild if current User has permissions

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.RolesApi();
let guildId = null; // String | ID of the specified Guild
let roleId = null; // String | roleId
let role = new CloneCordApi.FormRole(); // FormRole | New role data
apiInstance.updateRoleUsingPUT(guildId, roleId, role, (error, data, response) => {
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
 **roleId** | [**String**](.md)| roleId | 
 **role** | [**FormRole**](FormRole.md)| New role data | 

### Return type

[**Role**](Role.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

