# CloneCordApi.GuildMessagesApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMessageUsingDELETE**](GuildMessagesApi.md#deleteMessageUsingDELETE) | **DELETE** /guilds/{guildId}/{channelId}/messages/{messageId} | deleteMessage
[**getMessagesUsingGET**](GuildMessagesApi.md#getMessagesUsingGET) | **GET** /guilds/{guildId}/{channelId}/messages | getMessages
[**sendMessageUsingPOST**](GuildMessagesApi.md#sendMessageUsingPOST) | **POST** /guilds/{guildId}/{channelId}/messages | sendMessage


<a name="deleteMessageUsingDELETE"></a>
# **deleteMessageUsingDELETE**
> deleteMessageUsingDELETE(channelId, guildId, messageId)

deleteMessage

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.GuildMessagesApi();

var channelId = "channelId_example"; // String | channelId

var guildId = "guildId_example"; // String | guildId

var messageId = "messageId_example"; // String | messageId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteMessageUsingDELETE(channelId, guildId, messageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelId** | [**String**](.md)| channelId | 
 **guildId** | [**String**](.md)| guildId | 
 **messageId** | [**String**](.md)| messageId | 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getMessagesUsingGET"></a>
# **getMessagesUsingGET**
> [Message] getMessagesUsingGET(channelId, guildId, opts)

getMessages

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.GuildMessagesApi();

var channelId = "channelId_example"; // String | channelId

var guildId = "guildId_example"; // String | guildId

var opts = { 
  'after': 789, // Number | after
  'before': 789, // Number | before
  'limit': 56 // Number | limit
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMessagesUsingGET(channelId, guildId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelId** | [**String**](.md)| channelId | 
 **guildId** | [**String**](.md)| guildId | 
 **after** | **Number**| after | [optional] 
 **before** | **Number**| before | [optional] 
 **limit** | **Number**| limit | [optional] 

### Return type

[**[Message]**](Message.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="sendMessageUsingPOST"></a>
# **sendMessageUsingPOST**
> Message sendMessageUsingPOST(channelId, guildId, message)

sendMessage

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.GuildMessagesApi();

var channelId = "channelId_example"; // String | channelId

var guildId = "guildId_example"; // String | guildId

var message = new CloneCordApi.FormMessage(); // FormMessage | message


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendMessageUsingPOST(channelId, guildId, message, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelId** | [**String**](.md)| channelId | 
 **guildId** | [**String**](.md)| guildId | 
 **message** | [**FormMessage**](FormMessage.md)| message | 

### Return type

[**Message**](Message.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

