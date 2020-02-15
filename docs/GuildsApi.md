# CloneCordApi.GuildsApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGuildUsingPOST**](GuildsApi.md#createGuildUsingPOST) | **POST** /guilds | Creates a new Guild
[**deleteGuildUsingDELETE**](GuildsApi.md#deleteGuildUsingDELETE) | **DELETE** /guilds/{guildId} | Deletes an owned Guild
[**getGuildInfoUsingGET**](GuildsApi.md#getGuildInfoUsingGET) | **GET** /guilds/{guildId} | Gets info of a specific Guild
[**updateGuildUsingPUT**](GuildsApi.md#updateGuildUsingPUT) | **PUT** /guilds/{guildId} | Updates an owned Guild



## createGuildUsingPOST

> Guild createGuildUsingPOST(guild)

Creates a new Guild

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.GuildsApi();
let guild = new CloneCordApi.FormGuild(); // FormGuild | guild
apiInstance.createGuildUsingPOST(guild, (error, data, response) => {
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
 **guild** | [**FormGuild**](FormGuild.md)| guild | 

### Return type

[**Guild**](Guild.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteGuildUsingDELETE

> deleteGuildUsingDELETE(guildId)

Deletes an owned Guild

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.GuildsApi();
let guildId = null; // String | ID of the specified Guild
apiInstance.deleteGuildUsingDELETE(guildId, (error, data, response) => {
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

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getGuildInfoUsingGET

> Guild getGuildInfoUsingGET(guildId)

Gets info of a specific Guild

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.GuildsApi();
let guildId = null; // String | ID of the specified Guild
apiInstance.getGuildInfoUsingGET(guildId, (error, data, response) => {
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

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## updateGuildUsingPUT

> Guild updateGuildUsingPUT(guildId, newGuild)

Updates an owned Guild

### Example

```javascript
import CloneCordApi from 'clone_cord_api';
let defaultClient = CloneCordApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new CloneCordApi.GuildsApi();
let guildId = null; // String | ID of the specified Guild
let newGuild = new CloneCordApi.FormGuild(); // FormGuild | New guild data
apiInstance.updateGuildUsingPUT(guildId, newGuild, (error, data, response) => {
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
 **newGuild** | [**FormGuild**](FormGuild.md)| New guild data | 

### Return type

[**Guild**](Guild.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

