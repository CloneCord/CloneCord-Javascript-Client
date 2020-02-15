# CloneCordApi.MessagesAPIApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMessageUsingDELETE**](MessagesAPIApi.md#deleteMessageUsingDELETE) | **DELETE** /guilds/{guildId}/{channelId}/messages/{messageId} | Deletes specified message in specified Channel if current User has permissions
[**getMessagesUsingGET**](MessagesAPIApi.md#getMessagesUsingGET) | **GET** /guilds/{guildId}/{channelId}/messages | Gets a list of messages in specified Channel if current User has permissions
[**sendMessageUsingPOST**](MessagesAPIApi.md#sendMessageUsingPOST) | **POST** /guilds/{guildId}/{channelId}/messages | Sends a new message to specified Channel if current User has permissions


<a name="deleteMessageUsingDELETE"></a>
# **deleteMessageUsingDELETE**
> deleteMessageUsingDELETE(channelId, guildId, messageId)

Deletes specified message in specified Channel if current User has permissions

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.MessagesAPIApi();

var channelId = "channelId_example"; // String | ID of the specified Channel

var guildId = "guildId_example"; // String | ID of the specified Guild

var messageId = "messageId_example"; // String | ID of the specified Message


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
 **channelId** | [**String**](.md)| ID of the specified Channel | 
 **guildId** | [**String**](.md)| ID of the specified Guild | 
 **messageId** | [**String**](.md)| ID of the specified Message | 

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

Gets a list of messages in specified Channel if current User has permissions

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.MessagesAPIApi();

var channelId = "channelId_example"; // String | ID of the specified Channel

var guildId = "guildId_example"; // String | ID of the specified Guild

var opts = { 
  'after': 789, // Number | Return only mesages after this timestamp
  'before': 789, // Number | Return only messages sent before this timestamp
  'limit': 100 // Number | Maximum number of messages to return (max = 100)
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
 **channelId** | [**String**](.md)| ID of the specified Channel | 
 **guildId** | [**String**](.md)| ID of the specified Guild | 
 **after** | **Number**| Return only mesages after this timestamp | [optional] 
 **before** | **Number**| Return only messages sent before this timestamp | [optional] 
 **limit** | **Number**| Maximum number of messages to return (max = 100) | [optional] [default to 100]

### Return type

[**[Message]**](Message.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="sendMessageUsingPOST"></a>
# **sendMessageUsingPOST**
> Message sendMessageUsingPOST(channelId, guildId, opts)

Sends a new message to specified Channel if current User has permissions

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.MessagesAPIApi();

var channelId = "channelId_example"; // String | ID of the specified Channel

var guildId = "guildId_example"; // String | ID of the specified Guild

var opts = { 
  'message': new CloneCordApi.FormMessage() // FormMessage | Message data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendMessageUsingPOST(channelId, guildId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelId** | [**String**](.md)| ID of the specified Channel | 
 **guildId** | [**String**](.md)| ID of the specified Guild | 
 **message** | [**FormMessage**](FormMessage.md)| Message data | [optional] 

### Return type

[**Message**](Message.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

