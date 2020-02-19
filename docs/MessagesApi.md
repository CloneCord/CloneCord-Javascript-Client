# CloneCordApi.MessagesApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMessage**](MessagesApi.md#deleteMessage) | **DELETE** /guilds/{guildId}/{channelId}/messages/{messageId} | 
[**getMessages**](MessagesApi.md#getMessages) | **GET** /guilds/{guildId}/{channelId}/messages | 
[**sendMessage**](MessagesApi.md#sendMessage) | **POST** /guilds/{guildId}/{channelId}/messages | 



## deleteMessage

> deleteMessage(guildId, channelId, messageId)



Deletes specified message in specified Channel if current User has permissions

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: user-auth
let user-auth = defaultClient.authentications['user-auth'];
user-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user-auth.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.MessagesApi();
let guildId = null; // String | ID of the specified Guild
let channelId = null; // String | ID of the specified Channel
let messageId = null; // String | ID of the specified Message
apiInstance.deleteMessage(guildId, channelId, messageId, (error, data, response) => {
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
 **messageId** | [**String**](.md)| ID of the specified Message | 

### Return type

null (empty response body)

### Authorization

[user-auth](../README.md#user-auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getMessages

> [Message] getMessages(guildId, channelId, opts)



Gets a list of messages in specified Channel if current User has permissions

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: user-auth
let user-auth = defaultClient.authentications['user-auth'];
user-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user-auth.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.MessagesApi();
let guildId = null; // String | ID of the specified Guild
let channelId = null; // String | ID of the specified Channel
let opts = {
  'limit': 56, // Number | Maximum number of messages to return (max = 100)
  'before': 789, // Number | Return only messages sent before this timestamp
  'after': 789 // Number | Return only mesages after this timestamp
};
apiInstance.getMessages(guildId, channelId, opts, (error, data, response) => {
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
 **limit** | **Number**| Maximum number of messages to return (max &#x3D; 100) | [optional] 
 **before** | **Number**| Return only messages sent before this timestamp | [optional] 
 **after** | **Number**| Return only mesages after this timestamp | [optional] 

### Return type

[**[Message]**](Message.md)

### Authorization

[user-auth](../README.md#user-auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## sendMessage

> Message sendMessage(guildId, channelId, formMessage)



Sends a new message to specified Channel if current User has permissions

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: user-auth
let user-auth = defaultClient.authentications['user-auth'];
user-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user-auth.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.MessagesApi();
let guildId = null; // String | ID of the specified Guild
let channelId = null; // String | ID of the specified Channel
let formMessage = new CloneCordApi.FormMessage(); // FormMessage | Message data
apiInstance.sendMessage(guildId, channelId, formMessage, (error, data, response) => {
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
 **formMessage** | [**FormMessage**](FormMessage.md)| Message data | 

### Return type

[**Message**](Message.md)

### Authorization

[user-auth](../README.md#user-auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

