# CloneCordApi.UsersApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSelfGuildsUsingGET**](UsersApi.md#getSelfGuildsUsingGET) | **GET** /users/@self/guilds | Gets list of guilds the current User is a Member of
[**getSelfUsingGET**](UsersApi.md#getSelfUsingGET) | **GET** /users/@self | Gets information about current User
[**getUserUsingGET**](UsersApi.md#getUserUsingGET) | **GET** /users/{userId} | Gets information about specified User
[**putSelfUsingPUT**](UsersApi.md#putSelfUsingPUT) | **PUT** /users/@self | Updates information about current User



## getSelfGuildsUsingGET

> [Guild] getSelfGuildsUsingGET()

Gets list of guilds the current User is a Member of

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.UsersApi();
apiInstance.getSelfGuildsUsingGET((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Guild]**](Guild.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getSelfUsingGET

> User getSelfUsingGET()

Gets information about current User

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.UsersApi();
apiInstance.getSelfUsingGET((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getUserUsingGET

> User getUserUsingGET(userId)

Gets information about specified User

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.UsersApi();
let userId = null; // String | ID of the user whose data is requested
apiInstance.getUserUsingGET(userId, (error, data, response) => {
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
 **userId** | [**String**](.md)| ID of the user whose data is requested | 

### Return type

[**User**](User.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## putSelfUsingPUT

> User putSelfUsingPUT(opts)

Updates information about current User

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.UsersApi();
let opts = {
  'user': new CloneCordApi.FormUser() // FormUser | New User data
};
apiInstance.putSelfUsingPUT(opts, (error, data, response) => {
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
 **user** | [**FormUser**](FormUser.md)| New User data | [optional] 

### Return type

[**User**](User.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

