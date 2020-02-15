# CloneCordApi.MessagesApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMessageUsingDELETE**](MessagesApi.md#deleteMessageUsingDELETE) | **DELETE** /guilds/{guildId}/{channelId}/messages/{messageId} | Deletes specified message in specified Channel if current User has permissions
[**getMessagesUsingGET**](MessagesApi.md#getMessagesUsingGET) | **GET** /guilds/{guildId}/{channelId}/messages | Gets a list of messages in specified Channel if current User has permissions
[**sendMessageUsingPOST**](MessagesApi.md#sendMessageUsingPOST) | **POST** /guilds/{guildId}/{channelId}/messages | Sends a new message to specified Channel if current User has permissions



## deleteMessageUsingDELETE

> deleteMessageUsingDELETE(channelId, guildId, messageId)

Deletes specified message in specified Channel if current User has permissions

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.MessagesApi();
let channelId = null; // String | ID of the specified Channel
let guildId = null; // String | ID of the specified Guild
let messageId = null; // String | ID of the specified Message
apiInstance.deleteMessageUsingDELETE(channelId, guildId, messageId, (error, data, response) => {
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
 **messageId** | [**String**](.md)| ID of the specified Message | 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getMessagesUsingGET

> [Message] getMessagesUsingGET(channelId, guildId, opts)

Gets a list of messages in specified Channel if current User has permissions

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.MessagesApi();
let channelId = null; // String | ID of the specified Channel
let guildId = null; // String | ID of the specified Guild
let opts = {
  'after': 789, // Number | Return only mesages after this timestamp
  'before': 789, // Number | Return only messages sent before this timestamp
  'limit': 100 // Number | Maximum number of messages to return (max = 100)
};
apiInstance.getMessagesUsingGET(channelId, guildId, opts, (error, data, response) => {
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
 **after** | **Number**| Return only mesages after this timestamp | [optional] 
 **before** | **Number**| Return only messages sent before this timestamp | [optional] 
 **limit** | **Number**| Maximum number of messages to return (max &#x3D; 100) | [optional] [default to 100]

### Return type

[**[Message]**](Message.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## sendMessageUsingPOST

> Message sendMessageUsingPOST(channelId, guildId, opts)

Sends a new message to specified Channel if current User has permissions

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.MessagesApi();
let channelId = null; // String | ID of the specified Channel
let guildId = null; // String | ID of the specified Guild
let opts = {
  'message': new CloneCordApi.FormMessage() // FormMessage | Message data
};
apiInstance.sendMessageUsingPOST(channelId, guildId, opts, (error, data, response) => {
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
 **message** | [**FormMessage**](FormMessage.md)| Message data | [optional] 

### Return type

[**Message**](Message.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

