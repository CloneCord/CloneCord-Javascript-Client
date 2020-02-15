# CloneCordApi.ChannelsApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChannelUsingPOST**](ChannelsApi.md#createChannelUsingPOST) | **POST** /guilds/{guildId} | Creates a new Channel in specified Guild
[**deleteChannelUsingDELETE**](ChannelsApi.md#deleteChannelUsingDELETE) | **DELETE** /guilds/{guildId}/{channelId} | Deletes specified Channel if current User has permissions
[**updateChannelUsingPUT**](ChannelsApi.md#updateChannelUsingPUT) | **PUT** /guilds/{guildId}/{channelId} | Updates specified Channel if current User has permissions


<a name="createChannelUsingPOST"></a>
# **createChannelUsingPOST**
> Channel createChannelUsingPOST(guildId, opts)

Creates a new Channel in specified Guild

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.ChannelsApi();

var guildId = "guildId_example"; // String | ID of the specified Guild

var opts = { 
  'channel': new CloneCordApi.FormChannel() // FormChannel | Channel data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createChannelUsingPOST(guildId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guildId** | [**String**](.md)| ID of the specified Guild | 
 **channel** | [**FormChannel**](FormChannel.md)| Channel data | [optional] 

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

Deletes specified Channel if current User has permissions

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.ChannelsApi();

var channelId = "channelId_example"; // String | ID of the specified Channel

var guildId = "guildId_example"; // String | ID of the specified Guild


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
 **channelId** | [**String**](.md)| ID of the specified Channel | 
 **guildId** | [**String**](.md)| ID of the specified Guild | 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateChannelUsingPUT"></a>
# **updateChannelUsingPUT**
> Channel updateChannelUsingPUT(channelId, guildId, opts)

Updates specified Channel if current User has permissions

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.ChannelsApi();

var channelId = "channelId_example"; // String | ID of the specified Channel

var guildId = "guildId_example"; // String | ID of the specified Guild

var opts = { 
  'channel': new CloneCordApi.FormChannel() // FormChannel | New channel data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateChannelUsingPUT(channelId, guildId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelId** | [**String**](.md)| ID of the specified Channel | 
 **guildId** | [**String**](.md)| ID of the specified Guild | 
 **channel** | [**FormChannel**](FormChannel.md)| New channel data | [optional] 

### Return type

[**Channel**](Channel.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

