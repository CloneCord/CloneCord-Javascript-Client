# CloneCordApi.GuildChannelApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChannelUsingPOST**](GuildChannelApi.md#createChannelUsingPOST) | **POST** /guilds/{guildId} | createChannel
[**deleteChannelUsingDELETE**](GuildChannelApi.md#deleteChannelUsingDELETE) | **DELETE** /guilds/{guildId}/{channelId} | deleteChannel
[**updateChannelUsingPUT**](GuildChannelApi.md#updateChannelUsingPUT) | **PUT** /guilds/{guildId}/{channelId} | updateChannel


<a name="createChannelUsingPOST"></a>
# **createChannelUsingPOST**
> Channel createChannelUsingPOST(channel, guildId)

createChannel

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.GuildChannelApi();

var channel = new CloneCordApi.FormChannel(); // FormChannel | channel

var guildId = "guildId_example"; // String | guildId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createChannelUsingPOST(channel, guildId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel** | [**FormChannel**](FormChannel.md)| channel | 
 **guildId** | [**String**](.md)| guildId | 

### Return type

[**Channel**](Channel.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteChannelUsingDELETE"></a>
# **deleteChannelUsingDELETE**
> deleteChannelUsingDELETE(channelId, guildId)

deleteChannel

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.GuildChannelApi();

var channelId = "channelId_example"; // String | channelId

var guildId = "guildId_example"; // String | guildId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteChannelUsingDELETE(channelId, guildId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelId** | [**String**](.md)| channelId | 
 **guildId** | [**String**](.md)| guildId | 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateChannelUsingPUT"></a>
# **updateChannelUsingPUT**
> Channel updateChannelUsingPUT(channel, channelId, guildId)

updateChannel

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.GuildChannelApi();

var channel = new CloneCordApi.FormChannel(); // FormChannel | channel

var channelId = "channelId_example"; // String | channelId

var guildId = "guildId_example"; // String | guildId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateChannelUsingPUT(channel, channelId, guildId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel** | [**FormChannel**](FormChannel.md)| channel | 
 **channelId** | [**String**](.md)| channelId | 
 **guildId** | [**String**](.md)| guildId | 

### Return type

[**Channel**](Channel.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

