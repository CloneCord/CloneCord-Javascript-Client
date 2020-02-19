# CloneCordApi.AuthenticationApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](AuthenticationApi.md#login) | **POST** /auth/login | Log in
[**signUp**](AuthenticationApi.md#signUp) | **POST** /auth/register | Create an account



## login

> login(formLogin)

Log in

### Example

```javascript
import CloneCordApi from 'clone_cord_api';

let apiInstance = new CloneCordApi.AuthenticationApi();
let formLogin = new CloneCordApi.FormLogin(); // FormLogin | 
apiInstance.login(formLogin, (error, data, response) => {
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
 **formLogin** | [**FormLogin**](FormLogin.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## signUp

> User signUp(registrationUser)

Create an account

### Example

```javascript
import CloneCordApi from 'clone_cord_api';

let apiInstance = new CloneCordApi.AuthenticationApi();
let registrationUser = new CloneCordApi.RegistrationUser(); // RegistrationUser | 
apiInstance.signUp(registrationUser, (error, data, response) => {
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
 **registrationUser** | [**RegistrationUser**](RegistrationUser.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

