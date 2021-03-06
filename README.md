# clone_cord_api

CloneCordApi - JavaScript client for clone_cord_api
REST API to use CloneCord
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.1
- Package version: 1.0.8
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install clone_cord_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your clone_cord_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CloneCordApi = require('clone_cord_api');


var api = new CloneCordApi.AuthenticationApi()
var formLogin = new CloneCordApi.FormLogin(); // {FormLogin} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.login(formLogin, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:8080*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CloneCordApi.AuthenticationApi* | [**login**](docs/AuthenticationApi.md#login) | **POST** /auth/login | Log in
*CloneCordApi.AuthenticationApi* | [**signUp**](docs/AuthenticationApi.md#signUp) | **POST** /auth/register | Create an account
*CloneCordApi.ChannelsApi* | [**createChannel**](docs/ChannelsApi.md#createChannel) | **POST** /guilds/{guildId} | 
*CloneCordApi.ChannelsApi* | [**deleteChannel**](docs/ChannelsApi.md#deleteChannel) | **DELETE** /guilds/{guildId}/{channelId} | 
*CloneCordApi.ChannelsApi* | [**updateChannel**](docs/ChannelsApi.md#updateChannel) | **PUT** /guilds/{guildId}/{channelId} | 
*CloneCordApi.GuildsApi* | [**createGuild**](docs/GuildsApi.md#createGuild) | **POST** /guilds | 
*CloneCordApi.GuildsApi* | [**deleteGuild**](docs/GuildsApi.md#deleteGuild) | **DELETE** /guilds/{guildId} | 
*CloneCordApi.GuildsApi* | [**getGuildInfo**](docs/GuildsApi.md#getGuildInfo) | **GET** /guilds/{guildId} | 
*CloneCordApi.GuildsApi* | [**kickMember**](docs/GuildsApi.md#kickMember) | **DELETE** /guilds/{memberId} | 
*CloneCordApi.GuildsApi* | [**updateGuild**](docs/GuildsApi.md#updateGuild) | **PUT** /guilds/{guildId} | 
*CloneCordApi.MemberRolesApi* | [**addRole**](docs/MemberRolesApi.md#addRole) | **PATCH** /guilds/{guildId}/members/{memberId}/roles | 
*CloneCordApi.MemberRolesApi* | [**removeRole**](docs/MemberRolesApi.md#removeRole) | **DELETE** /guilds/{guildId}/members/{memberId}/roles | 
*CloneCordApi.MessagesApi* | [**deleteMessage**](docs/MessagesApi.md#deleteMessage) | **DELETE** /guilds/{guildId}/{channelId}/messages/{messageId} | 
*CloneCordApi.MessagesApi* | [**getMessages**](docs/MessagesApi.md#getMessages) | **GET** /guilds/{guildId}/{channelId}/messages | 
*CloneCordApi.MessagesApi* | [**sendMessage**](docs/MessagesApi.md#sendMessage) | **POST** /guilds/{guildId}/{channelId}/messages | 
*CloneCordApi.RolesApi* | [**createRole**](docs/RolesApi.md#createRole) | **POST** /guilds/{guildId}/roles | 
*CloneCordApi.RolesApi* | [**deleteRole**](docs/RolesApi.md#deleteRole) | **DELETE** /guilds/{guildId}/roles/{roleId} | 
*CloneCordApi.RolesApi* | [**updateRole**](docs/RolesApi.md#updateRole) | **PUT** /guilds/{guildId}/roles/{roleId} | 
*CloneCordApi.UsersApi* | [**getSelf**](docs/UsersApi.md#getSelf) | **GET** /users/@self | 
*CloneCordApi.UsersApi* | [**getSelfGuilds**](docs/UsersApi.md#getSelfGuilds) | **GET** /users/@self/guilds | 
*CloneCordApi.UsersApi* | [**getUser**](docs/UsersApi.md#getUser) | **GET** /users/{userId} | 
*CloneCordApi.UsersApi* | [**putSelf**](docs/UsersApi.md#putSelf) | **PUT** /users/@self | 


## Documentation for Models

 - [CloneCordApi.Channel](docs/Channel.md)
 - [CloneCordApi.FormChannel](docs/FormChannel.md)
 - [CloneCordApi.FormGuild](docs/FormGuild.md)
 - [CloneCordApi.FormLogin](docs/FormLogin.md)
 - [CloneCordApi.FormMessage](docs/FormMessage.md)
 - [CloneCordApi.FormRole](docs/FormRole.md)
 - [CloneCordApi.FormUser](docs/FormUser.md)
 - [CloneCordApi.Guild](docs/Guild.md)
 - [CloneCordApi.Member](docs/Member.md)
 - [CloneCordApi.Message](docs/Message.md)
 - [CloneCordApi.Reaction](docs/Reaction.md)
 - [CloneCordApi.RegistrationUser](docs/RegistrationUser.md)
 - [CloneCordApi.Role](docs/Role.md)
 - [CloneCordApi.User](docs/User.md)


## Documentation for Authorization



### user-auth


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

