# CloneCordApi.AuthenticationApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginUsingPOST**](AuthenticationApi.md#loginUsingPOST) | **POST** /auth/login | Log in
[**signUpUsingPOST**](AuthenticationApi.md#signUpUsingPOST) | **POST** /auth/register | Create an account



## loginUsingPOST

> loginUsingPOST(loginData)

Log in

### Example

```javascript
import CloneCordApi from 'clone_cord_api';

let apiInstance = new CloneCordApi.AuthenticationApi();
let loginData = new CloneCordApi.FormLogin(); // FormLogin | loginData
apiInstance.loginUsingPOST(loginData, (error, data, response) => {
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
 **loginData** | [**FormLogin**](FormLogin.md)| loginData | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## signUpUsingPOST

> User signUpUsingPOST(registrationData)

Create an account

### Example

```javascript
import CloneCordApi from 'clone_cord_api';

let apiInstance = new CloneCordApi.AuthenticationApi();
let registrationData = new CloneCordApi.RegistrationUser(); // RegistrationUser | registrationData
apiInstance.signUpUsingPOST(registrationData, (error, data, response) => {
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
 **registrationData** | [**RegistrationUser**](RegistrationUser.md)| registrationData | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

