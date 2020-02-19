# CloneCordApi.ChannelsApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChannel**](ChannelsApi.md#createChannel) | **POST** /guilds/{guildId} | 
[**deleteChannel**](ChannelsApi.md#deleteChannel) | **DELETE** /guilds/{guildId}/{channelId} | 
[**updateChannel**](ChannelsApi.md#updateChannel) | **PUT** /guilds/{guildId}/{channelId} | 



## createChannel

> Channel createChannel(guildId, formChannel)



Creates a new Channel in specified Guild

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: user-auth
let user-auth = defaultClient.authentications['user-auth'];
user-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user-auth.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.ChannelsApi();
let guildId = null; // String | ID of the specified Guild
let formChannel = new CloneCordApi.FormChannel(); // FormChannel | Channel data
apiInstance.createChannel(guildId, formChannel, (error, data, response) => {
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
 **formChannel** | [**FormChannel**](FormChannel.md)| Channel data | 

### Return type

[**Channel**](Channel.md)

### Authorization

[user-auth](../README.md#user-auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteChannel

> deleteChannel(guildId, channelId)



Deletes specified Channel if current User has permissions

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: user-auth
let user-auth = defaultClient.authentications['user-auth'];
user-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user-auth.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.ChannelsApi();
let guildId = null; // String | ID of the specified Guild
let channelId = null; // String | ID of the specified Channel
apiInstance.deleteChannel(guildId, channelId, (error, data, response) => {
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
 **channelId** | [**String**](.md)| ID of the specified Channel | 

### Return type

null (empty response body)

### Authorization

[user-auth](../README.md#user-auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateChannel

> Channel updateChannel(guildId, channelId, formChannel)



Updates specified Channel if current User has permissions

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: user-auth
let user-auth = defaultClient.authentications['user-auth'];
user-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user-auth.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.ChannelsApi();
let guildId = null; // String | ID of the specified Guild
let channelId = null; // String | ID of the specified Channel
let formChannel = new CloneCordApi.FormChannel(); // FormChannel | New channel data
apiInstance.updateChannel(guildId, channelId, formChannel, (error, data, response) => {
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
 **channelId** | [**String**](.md)| ID of the specified Channel | 
 **formChannel** | [**FormChannel**](FormChannel.md)| New channel data | 

### Return type

[**Channel**](Channel.md)

### Authorization

[user-auth](../README.md#user-auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

