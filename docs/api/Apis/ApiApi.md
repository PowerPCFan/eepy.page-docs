# ApiApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createApiTokenApiCreateKeyPost**](ApiApi.md#createApiTokenApiCreateKeyPost) | **POST** /api/create-key | Create Api Token |
| [**deleteApiDomainDelete**](ApiApi.md#deleteApiDomainDelete) | **DELETE** /api/domain | Delete |
| [**deleteApiKeyApiDeleteKeyDelete**](ApiApi.md#deleteApiKeyApiDeleteKeyDelete) | **DELETE** /api/delete-key | Delete Api Key |
| [**getApiKeysApiGetKeysGet**](ApiApi.md#getApiKeysApiGetKeysGet) | **GET** /api/get-keys | Get Api Keys |
| [**getDomainsApiDomainsGet**](ApiApi.md#getDomainsApiDomainsGet) | **GET** /api/domains | Get Domains |
| [**getKeyApiGetKeyGet**](ApiApi.md#getKeyApiGetKeyGet) | **GET** /api/get-key | Get Key |
| [**getUserProfileApiUserGet**](ApiApi.md#getUserProfileApiUserGet) | **GET** /api/user | Get User Profile |
| [**isAvailableApiDomainAvailableGet**](ApiApi.md#isAvailableApiDomainAvailableGet) | **GET** /api/domain/available | Is Available |
| [**modifyApiDomainPatch**](ApiApi.md#modifyApiDomainPatch) | **PATCH** /api/domain | Modify |
| [**registerApiDomainPost**](ApiApi.md#registerApiDomainPost) | **POST** /api/domain | Register |


<a name="createApiTokenApiCreateKeyPost"></a>
# **createApiTokenApiCreateKeyPost**
> String createApiTokenApiCreateKeyPost(ApiCreationBody, Authorization)

Create Api Token

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ApiCreationBody** | [**ApiCreationBody**](../Models/ApiCreationBody.md)|  | |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteApiDomainDelete"></a>
# **deleteApiDomainDelete**
> oas_any_type_not_mapped deleteApiDomainDelete(domain, type)

Delete

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **domain** | **String**|  | [default to null] |
| **type** | **String**|  | [optional] [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteApiKeyApiDeleteKeyDelete"></a>
# **deleteApiKeyApiDeleteKeyDelete**
> oas_any_type_not_mapped deleteApiKeyApiDeleteKeyDelete(ApiDeletion, Authorization)

Delete Api Key

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ApiDeletion** | [**ApiDeletion**](../Models/ApiDeletion.md)|  | |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getApiKeysApiGetKeysGet"></a>
# **getApiKeysApiGetKeysGet**
> Map getApiKeysApiGetKeysGet(Authorization)

Get Api Keys

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**Map**](../Models/ApiType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDomainsApiDomainsGet"></a>
# **getDomainsApiDomainsGet**
> List getDomainsApiDomainsGet()

Get Domains

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/DomainRecord.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getKeyApiGetKeyGet"></a>
# **getKeyApiGetKeyGet**
> String getKeyApiGetKeyGet(hash, Authorization)

Get Key

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **hash** | **String**|  | [default to null] |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUserProfileApiUserGet"></a>
# **getUserProfileApiUserGet**
> UserPageType getUserProfileApiUserGet()

Get User Profile

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserPageType**](../Models/UserPageType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="isAvailableApiDomainAvailableGet"></a>
# **isAvailableApiDomainAvailableGet**
> oas_any_type_not_mapped isAvailableApiDomainAvailableGet(name)

Is Available

    Check whether a domain is available. No authentication required

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | **String**|  | [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="modifyApiDomainPatch"></a>
# **modifyApiDomainPatch**
> oas_any_type_not_mapped modifyApiDomainPatch(DomainType)

Modify

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **DomainType** | [**DomainType**](../Models/DomainType.md)|  | |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="registerApiDomainPost"></a>
# **registerApiDomainPost**
> oas_any_type_not_mapped registerApiDomainPost(DomainType)

Register

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **DomainType** | [**DomainType**](../Models/DomainType.md)|  | |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

