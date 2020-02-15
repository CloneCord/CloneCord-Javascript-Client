# CloneCordApi.AuthenticationApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginUsingPOST**](AuthenticationApi.md#loginUsingPOST) | **POST** /auth/login | Log in
[**signUpUsingPOST**](AuthenticationApi.md#signUpUsingPOST) | **POST** /auth/register | Create an account


<a name="loginUsingPOST"></a>
# **loginUsingPOST**
> loginUsingPOST(opts)

Log in

### Example
```javascript
var CloneCordApi = require('clone_cord_api');

var apiInstance = new CloneCordApi.AuthenticationApi();

var opts = { 
  'user': new CloneCordApi.FormLogin() // FormLogin | Login data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.loginUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**FormLogin**](FormLogin.md)| Login data | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="signUpUsingPOST"></a>
# **signUpUsingPOST**
> User signUpUsingPOST(opts)

Create an account

### Example
```javascript
var CloneCordApi = require('clone_cord_api');

var apiInstance = new CloneCordApi.AuthenticationApi();

var opts = { 
  'registrationData': new CloneCordApi.RegistrationUser() // RegistrationUser | authData
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.signUpUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationData** | [**RegistrationUser**](RegistrationUser.md)| authData | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

