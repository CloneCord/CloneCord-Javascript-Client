# CloneCordApi.GuildsApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGuild**](GuildsApi.md#createGuild) | **POST** /guilds | 
[**deleteGuild**](GuildsApi.md#deleteGuild) | **DELETE** /guilds/{guildId} | 
[**getGuildInfo**](GuildsApi.md#getGuildInfo) | **GET** /guilds/{guildId} | 
[**updateGuild**](GuildsApi.md#updateGuild) | **PUT** /guilds/{guildId} | 



## createGuild

> Guild createGuild(opts)



Creates a new Guild

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: user-auth
let user-auth = defaultClient.authentications['user-auth'];
user-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user-auth.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.GuildsApi();
let opts = {
  'formGuild': new CloneCordApi.FormGuild() // FormGuild | 
};
apiInstance.createGuild(opts, (error, data, response) => {
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
 **formGuild** | [**FormGuild**](FormGuild.md)|  | [optional] 

### Return type

[**Guild**](Guild.md)

### Authorization

[user-auth](../README.md#user-auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteGuild

> deleteGuild(guildId)



Deletes an owned Guild

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: user-auth
let user-auth = defaultClient.authentications['user-auth'];
user-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user-auth.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.GuildsApi();
let guildId = null; // String | ID of the specified Guild
apiInstance.deleteGuild(guildId, (error, data, response) => {
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
 **guildId** | [**String**](.md)| ID of the specified Guild | 

### Return type

null (empty response body)

### Authorization

[user-auth](../README.md#user-auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getGuildInfo

> Guild getGuildInfo(guildId)



Gets info of a specific Guild

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: user-auth
let user-auth = defaultClient.authentications['user-auth'];
user-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user-auth.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.GuildsApi();
let guildId = null; // String | ID of the specified Guild
apiInstance.getGuildInfo(guildId, (error, data, response) => {
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
 **guildId** | [**String**](.md)| ID of the specified Guild | 

### Return type

[**Guild**](Guild.md)

### Authorization

[user-auth](../README.md#user-auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## updateGuild

> Guild updateGuild(guildId, formGuild)



Updates an owned Guild

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: user-auth
let user-auth = defaultClient.authentications['user-auth'];
user-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user-auth.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.GuildsApi();
let guildId = null; // String | ID of the specified Guild
let formGuild = new CloneCordApi.FormGuild(); // FormGuild | New guild data
apiInstance.updateGuild(guildId, formGuild, (error, data, response) => {
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
 **guildId** | [**String**](.md)| ID of the specified Guild | 
 **formGuild** | [**FormGuild**](FormGuild.md)| New guild data | 

### Return type

[**Guild**](Guild.md)

### Authorization

[user-auth](../README.md#user-auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

