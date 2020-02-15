# CloneCordApi.AuthControllerApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginUsingPOST**](AuthControllerApi.md#loginUsingPOST) | **POST** /auth/login | login
[**signUpUsingPOST**](AuthControllerApi.md#signUpUsingPOST) | **POST** /auth/register | signUp


<a name="loginUsingPOST"></a>
# **loginUsingPOST**
> loginUsingPOST(user)

login

### Example
```javascript
var CloneCordApi = require('clone_cord_api');

var apiInstance = new CloneCordApi.AuthControllerApi();

var user = "user_example"; // String | user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.loginUsingPOST(user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| user | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="signUpUsingPOST"></a>
# **signUpUsingPOST**
> User signUpUsingPOST(authData)

signUp

### Example
```javascript
var CloneCordApi = require('clone_cord_api');

var apiInstance = new CloneCordApi.AuthControllerApi();

var authData = new CloneCordApi.RegistrationUser(); // RegistrationUser | authData


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.signUpUsingPOST(authData, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authData** | [**RegistrationUser**](RegistrationUser.md)| authData | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

