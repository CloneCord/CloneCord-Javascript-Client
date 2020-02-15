# CloneCordApi.GuildsControllerApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGuildUsingPOST**](GuildsControllerApi.md#createGuildUsingPOST) | **POST** /guilds | createGuild
[**deleteGuildUsingDELETE**](GuildsControllerApi.md#deleteGuildUsingDELETE) | **DELETE** /guilds/{guildId} | deleteGuild
[**getGuildInfoUsingGET**](GuildsControllerApi.md#getGuildInfoUsingGET) | **GET** /guilds/{guildId} | getGuildInfo
[**updateGuildUsingPUT**](GuildsControllerApi.md#updateGuildUsingPUT) | **PUT** /guilds/{guildId} | updateGuild


<a name="createGuildUsingPOST"></a>
# **createGuildUsingPOST**
> Guild createGuildUsingPOST(guild)

createGuild

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.GuildsControllerApi();

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

deleteGuild

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.GuildsControllerApi();

var guildId = "guildId_example"; // String | guildId


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
 **guildId** | [**String**](.md)| guildId | 

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

getGuildInfo

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.GuildsControllerApi();

var guildId = "guildId_example"; // String | guildId


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
 **guildId** | [**String**](.md)| guildId | 

### Return type

[**Guild**](Guild.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateGuildUsingPUT"></a>
# **updateGuildUsingPUT**
> Guild updateGuildUsingPUT(guildId, newGuild)

updateGuild

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.GuildsControllerApi();

var guildId = "guildId_example"; // String | guildId

var newGuild = new CloneCordApi.FormGuild(); // FormGuild | newGuild


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateGuildUsingPUT(guildId, newGuild, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guildId** | [**String**](.md)| guildId | 
 **newGuild** | [**FormGuild**](FormGuild.md)| newGuild | 

### Return type

[**Guild**](Guild.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

