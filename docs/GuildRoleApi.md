# CloneCordApi.GuildRoleApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRoleUsingPOST**](GuildRoleApi.md#createRoleUsingPOST) | **POST** /guilds/{guildId}/roles | createRole
[**deleteRoleUsingDELETE**](GuildRoleApi.md#deleteRoleUsingDELETE) | **DELETE** /guilds/{guildId}/roles/{roleId} | deleteRole
[**updateRoleUsingPUT**](GuildRoleApi.md#updateRoleUsingPUT) | **PUT** /guilds/{guildId}/roles/{roleId} | updateRole


<a name="createRoleUsingPOST"></a>
# **createRoleUsingPOST**
> Role createRoleUsingPOST(guildId, role)

createRole

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.GuildRoleApi();

var guildId = "guildId_example"; // String | guildId

var role = new CloneCordApi.FormRole(); // FormRole | role


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRoleUsingPOST(guildId, role, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guildId** | [**String**](.md)| guildId | 
 **role** | [**FormRole**](FormRole.md)| role | 

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

deleteRole

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.GuildRoleApi();

var guildId = "guildId_example"; // String | guildId

var roleId = "roleId_example"; // String | roleId


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
 **guildId** | [**String**](.md)| guildId | 
 **roleId** | [**String**](.md)| roleId | 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateRoleUsingPUT"></a>
# **updateRoleUsingPUT**
> Role updateRoleUsingPUT(guildId, role, roleId)

updateRole

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.GuildRoleApi();

var guildId = "guildId_example"; // String | guildId

var role = new CloneCordApi.FormRole(); // FormRole | role

var roleId = "roleId_example"; // String | roleId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRoleUsingPUT(guildId, role, roleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guildId** | [**String**](.md)| guildId | 
 **role** | [**FormRole**](FormRole.md)| role | 
 **roleId** | [**String**](.md)| roleId | 

### Return type

[**Role**](Role.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

