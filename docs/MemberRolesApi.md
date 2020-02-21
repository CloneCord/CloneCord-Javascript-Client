# CloneCordApi.MemberRolesApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRole**](MemberRolesApi.md#addRole) | **PATCH** /guilds/{guildId}/members/{memberId}/roles | 
[**removeRole**](MemberRolesApi.md#removeRole) | **DELETE** /guilds/{guildId}/members/{memberId}/roles | 



## addRole

> addRole(guildId, memberId, opts)



### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: user-auth
let user-auth = defaultClient.authentications['user-auth'];
user-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user-auth.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.MemberRolesApi();
let guildId = null; // String | 
let memberId = null; // String | 
let opts = {
  'body': null // String | 
};
apiInstance.addRole(guildId, memberId, opts, (error, data, response) => {
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
 **guildId** | [**String**](.md)|  | 
 **memberId** | [**String**](.md)|  | 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[user-auth](../README.md#user-auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## removeRole

> removeRole(guildId, memberId, opts)



### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: user-auth
let user-auth = defaultClient.authentications['user-auth'];
user-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user-auth.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.MemberRolesApi();
let guildId = null; // String | 
let memberId = null; // String | 
let opts = {
  'body': null // String | 
};
apiInstance.removeRole(guildId, memberId, opts, (error, data, response) => {
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
 **guildId** | [**String**](.md)|  | 
 **memberId** | [**String**](.md)|  | 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[user-auth](../README.md#user-auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

