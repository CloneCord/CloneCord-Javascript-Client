# CloneCordApi.AuthenticationApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginUsingPOST**](AuthenticationApi.md#loginUsingPOST) | **POST** /auth/login | Log in
[**signUpUsingPOST**](AuthenticationApi.md#signUpUsingPOST) | **POST** /auth/register | Create an account



## loginUsingPOST

> loginUsingPOST(opts)

Log in

### Example

```javascript
import CloneCordApi from 'clone_cord_api';

let apiInstance = new CloneCordApi.AuthenticationApi();
let opts = {
  'user': new CloneCordApi.FormLogin() // FormLogin | Login data
};
apiInstance.loginUsingPOST(opts, (error, data, response) => {
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
 **user** | [**FormLogin**](FormLogin.md)| Login data | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## signUpUsingPOST

> User signUpUsingPOST(opts)

Create an account

### Example

```javascript
import CloneCordApi from 'clone_cord_api';

let apiInstance = new CloneCordApi.AuthenticationApi();
let opts = {
  'registrationData': new CloneCordApi.RegistrationUser() // RegistrationUser | authData
};
apiInstance.signUpUsingPOST(opts, (error, data, response) => {
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
 **registrationData** | [**RegistrationUser**](RegistrationUser.md)| authData | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

