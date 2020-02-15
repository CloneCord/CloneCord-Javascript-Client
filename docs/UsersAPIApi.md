# CloneCordApi.UsersAPIApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSelfGuildsUsingGET**](UsersAPIApi.md#getSelfGuildsUsingGET) | **GET** /users/@self/guilds | Gets list of guilds the current User is a Member of
[**getSelfUsingGET**](UsersAPIApi.md#getSelfUsingGET) | **GET** /users/@self | Gets information about current User
[**getUserUsingGET**](UsersAPIApi.md#getUserUsingGET) | **GET** /users/{userId} | Gets information about specified User
[**putSelfUsingPUT**](UsersAPIApi.md#putSelfUsingPUT) | **PUT** /users/@self | Updates information about current User


<a name="getSelfGuildsUsingGET"></a>
# **getSelfGuildsUsingGET**
> [Guild] getSelfGuildsUsingGET()

Gets list of guilds the current User is a Member of

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.UsersAPIApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSelfGuildsUsingGET(callback);
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

<a name="getSelfUsingGET"></a>
# **getSelfUsingGET**
> User getSelfUsingGET()

Gets information about current User

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.UsersAPIApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSelfUsingGET(callback);
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

<a name="getUserUsingGET"></a>
# **getUserUsingGET**
> User getUserUsingGET(userId)

Gets information about specified User

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.UsersAPIApi();

var userId = "userId_example"; // String | ID of the user whose data is requested


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserUsingGET(userId, callback);
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

<a name="putSelfUsingPUT"></a>
# **putSelfUsingPUT**
> User putSelfUsingPUT(opts)

Updates information about current User

### Example
```javascript
var CloneCordApi = require('clone_cord_api');
var defaultClient = CloneCordApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new CloneCordApi.UsersAPIApi();

var opts = { 
  'user': new CloneCordApi.FormUser() // FormUser | New User data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putSelfUsingPUT(opts, callback);
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

