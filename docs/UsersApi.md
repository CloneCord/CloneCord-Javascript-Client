# CloneCordApi.UsersApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSelf**](UsersApi.md#getSelf) | **GET** /users/@self | 
[**getSelfGuilds**](UsersApi.md#getSelfGuilds) | **GET** /users/@self/guilds | 
[**getUser**](UsersApi.md#getUser) | **GET** /users/{userId} | 
[**putSelf**](UsersApi.md#putSelf) | **PUT** /users/@self | 



## getSelf

> User getSelf()



Gets information about current User

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: user-auth
let user-auth = defaultClient.authentications['user-auth'];
user-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user-auth.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.UsersApi();
apiInstance.getSelf((error, data, response) => {
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

[user-auth](../README.md#user-auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getSelfGuilds

> [Guild] getSelfGuilds()



Gets list of guilds the current User is a Member of

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: user-auth
let user-auth = defaultClient.authentications['user-auth'];
user-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user-auth.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.UsersApi();
apiInstance.getSelfGuilds((error, data, response) => {
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

[user-auth](../README.md#user-auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getUser

> User getUser(userId)



Gets information about specified User

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: user-auth
let user-auth = defaultClient.authentications['user-auth'];
user-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user-auth.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.UsersApi();
let userId = null; // String | ID of the user whose data is requested
apiInstance.getUser(userId, (error, data, response) => {
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

[user-auth](../README.md#user-auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## putSelf

> User putSelf(formUser)



Updates information about current User

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: user-auth
let user-auth = defaultClient.authentications['user-auth'];
user-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user-auth.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.UsersApi();
let formUser = new CloneCordApi.FormUser(); // FormUser | New User data
apiInstance.putSelf(formUser, (error, data, response) => {
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
 **formUser** | [**FormUser**](FormUser.md)| New User data | 

### Return type

[**User**](User.md)

### Authorization

[user-auth](../README.md#user-auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

