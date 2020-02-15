# CloneCordApi.ChannelsApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChannelUsingPOST**](ChannelsApi.md#createChannelUsingPOST) | **POST** /guilds/{guildId} | Creates a new Channel in specified Guild
[**deleteChannelUsingDELETE**](ChannelsApi.md#deleteChannelUsingDELETE) | **DELETE** /guilds/{guildId}/{channelId} | Deletes specified Channel if current User has permissions
[**updateChannelUsingPUT**](ChannelsApi.md#updateChannelUsingPUT) | **PUT** /guilds/{guildId}/{channelId} | Updates specified Channel if current User has permissions



## createChannelUsingPOST

> Channel createChannelUsingPOST(guildId, opts)

Creates a new Channel in specified Guild

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.ChannelsApi();
let guildId = null; // String | ID of the specified Guild
let opts = {
  'channel': new CloneCordApi.FormChannel() // FormChannel | Channel data
};
apiInstance.createChannelUsingPOST(guildId, opts, (error, data, response) => {
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
 **channel** | [**FormChannel**](FormChannel.md)| Channel data | [optional] 

### Return type

[**Channel**](Channel.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteChannelUsingDELETE

> deleteChannelUsingDELETE(channelId, guildId)

Deletes specified Channel if current User has permissions

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.ChannelsApi();
let channelId = null; // String | ID of the specified Channel
let guildId = null; // String | ID of the specified Guild
apiInstance.deleteChannelUsingDELETE(channelId, guildId, (error, data, response) => {
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
 **channelId** | [**String**](.md)| ID of the specified Channel | 
 **guildId** | [**String**](.md)| ID of the specified Guild | 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateChannelUsingPUT

> Channel updateChannelUsingPUT(channelId, guildId, opts)

Updates specified Channel if current User has permissions

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.ChannelsApi();
let channelId = null; // String | ID of the specified Channel
let guildId = null; // String | ID of the specified Guild
let opts = {
  'channel': new CloneCordApi.FormChannel() // FormChannel | New channel data
};
apiInstance.updateChannelUsingPUT(channelId, guildId, opts, (error, data, response) => {
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

