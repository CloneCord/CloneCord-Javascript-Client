# CloneCordApi.GuildsAPIApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGuildUsingPOST**](GuildsAPIApi.md#createGuildUsingPOST) | **POST** /guilds | Creates a new Guild
[**deleteGuildUsingDELETE**](GuildsAPIApi.md#deleteGuildUsingDELETE) | **DELETE** /guilds/{guildId} | Deletes an owned Guild
[**getGuildInfoUsingGET**](GuildsAPIApi.md#getGuildInfoUsingGET) | **GET** /guilds/{guildId} | Gets info of a specific Guild
[**updateGuildUsingPUT**](GuildsAPIApi.md#updateGuildUsingPUT) | **PUT** /guilds/{guildId} | Updates an owned Guild


<a name="createGuildUsingPOST"></a>
# **createGuildUsingPOST**
> Guild createGuildUsingPOST(guild)

Creates a new Guild

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.GuildsAPIApi();

var guild = new CloneCordApi.FormGuild(); // FormGuild | guild


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createGuildUsingPOST(guild, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guild** | [**FormGuild**](FormGuild.md)| guild | 

### Return type

[**Guild**](Guild.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteGuildUsingDELETE"></a>
# **deleteGuildUsingDELETE**
> deleteGuildUsingDELETE(guildId)

Deletes an owned Guild

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.GuildsAPIApi();

var guildId = "guildId_example"; // String | ID of the specified Guild


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteGuildUsingDELETE(guildId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guildId** | [**String**](.md)| ID of the specified Guild | 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getGuildInfoUsingGET"></a>
# **getGuildInfoUsingGET**
> Guild getGuildInfoUsingGET(guildId)

Gets info of a specific Guild

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.GuildsAPIApi();

var guildId = "guildId_example"; // String | ID of the specified Guild


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGuildInfoUsingGET(guildId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guildId** | [**String**](.md)| ID of the specified Guild | 

### Return type

[**Guild**](Guild.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateGuildUsingPUT"></a>
# **updateGuildUsingPUT**
> Guild updateGuildUsingPUT(guildId, opts)

Updates an owned Guild

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.GuildsAPIApi();

var guildId = "guildId_example"; // String | ID of the specified Guild

var opts = { 
  'newGuild': new CloneCordApi.FormGuild() // FormGuild | New guild data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateGuildUsingPUT(guildId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guildId** | [**String**](.md)| ID of the specified Guild | 
 **newGuild** | [**FormGuild**](FormGuild.md)| New guild data | [optional] 

### Return type

[**Guild**](Guild.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

