# CloneCordApi.RolesAPIApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRoleUsingPOST**](RolesAPIApi.md#createRoleUsingPOST) | **POST** /guilds/{guildId}/roles | Creates a new Role in specified Guild if current User has permissions
[**deleteRoleUsingDELETE**](RolesAPIApi.md#deleteRoleUsingDELETE) | **DELETE** /guilds/{guildId}/roles/{roleId} | Deletes specified Role in specified Guild if current User has permissions
[**updateRoleUsingPUT**](RolesAPIApi.md#updateRoleUsingPUT) | **PUT** /guilds/{guildId}/roles/{roleId} | Updates specified Role in specified Guild if current User has permissions


<a name="createRoleUsingPOST"></a>
# **createRoleUsingPOST**
> Role createRoleUsingPOST(guildId, opts)

Creates a new Role in specified Guild if current User has permissions

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.RolesAPIApi();

var guildId = "guildId_example"; // String | ID of the specified Guild

var opts = { 
  'role': new CloneCordApi.FormRole() // FormRole | Role data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRoleUsingPOST(guildId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guildId** | [**String**](.md)| ID of the specified Guild | 
 **role** | [**FormRole**](FormRole.md)| Role data | [optional] 

### Return type

[**Role**](Role.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteRoleUsingDELETE"></a>
# **deleteRoleUsingDELETE**
> deleteRoleUsingDELETE(guildId, roleId)

Deletes specified Role in specified Guild if current User has permissions

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.RolesAPIApi();

var guildId = "guildId_example"; // String | ID of the specified Guild

var roleId = "roleId_example"; // String | ID of the specified Role


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRoleUsingDELETE(guildId, roleId, callback);
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
 - **Accept**: */*

<a name="updateRoleUsingPUT"></a>
# **updateRoleUsingPUT**
> Role updateRoleUsingPUT(guildId, roleId, opts)

Updates specified Role in specified Guild if current User has permissions

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.RolesAPIApi();

var guildId = "guildId_example"; // String | ID of the specified Guild

var roleId = "roleId_example"; // String | roleId

var opts = { 
  'role': new CloneCordApi.FormRole() // FormRole | New role data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRoleUsingPUT(guildId, roleId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guildId** | [**String**](.md)| ID of the specified Guild | 
 **roleId** | [**String**](.md)| roleId | 
 **role** | [**FormRole**](FormRole.md)| New role data | [optional] 

### Return type

[**Role**](Role.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

