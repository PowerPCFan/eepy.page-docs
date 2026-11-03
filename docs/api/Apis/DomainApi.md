# DomainApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteApiDomainDelete**](DomainApi.md#deleteApiDomainDelete) | **DELETE** /api/domain | Delete |
| [**deleteDomainDeleteDelete**](DomainApi.md#deleteDomainDeleteDelete) | **DELETE** /domain/delete | Delete |
| [**getDomainsApiDomainsGet**](DomainApi.md#getDomainsApiDomainsGet) | **GET** /api/domains | Get Domains |
| [**getDomainsDomainGetGet**](DomainApi.md#getDomainsDomainGetGet) | **GET** /domain/get | Get Domains |
| [**isAvailableApiDomainAvailableGet**](DomainApi.md#isAvailableApiDomainAvailableGet) | **GET** /api/domain/available | Is Available |
| [**isAvailableDomainAvailableGet**](DomainApi.md#isAvailableDomainAvailableGet) | **GET** /domain/available | Is Available |
| [**modifyApiDomainPatch**](DomainApi.md#modifyApiDomainPatch) | **PATCH** /api/domain | Modify |
| [**modifyDomainModifyPatch**](DomainApi.md#modifyDomainModifyPatch) | **PATCH** /domain/modify | Modify |
| [**registerApiDomainPost**](DomainApi.md#registerApiDomainPost) | **POST** /api/domain | Register |
| [**registerDomainRegisterPost**](DomainApi.md#registerDomainRegisterPost) | **POST** /domain/register | Register |


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

<a name="deleteDomainDeleteDelete"></a>
# **deleteDomainDeleteDelete**
> oas_any_type_not_mapped deleteDomainDeleteDelete(domain, type, Authorization)

Delete

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **domain** | **String**|  | [default to null] |
| **type** | **String**|  | [optional] [default to null] |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

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

<a name="getDomainsDomainGetGet"></a>
# **getDomainsDomainGetGet**
> DomainRetrieve getDomainsDomainGetGet(Authorization)

Get Domains

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**DomainRetrieve**](../Models/DomainRetrieve.md)

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

<a name="isAvailableDomainAvailableGet"></a>
# **isAvailableDomainAvailableGet**
> oas_any_type_not_mapped isAvailableDomainAvailableGet(name)

Is Available

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

<a name="modifyDomainModifyPatch"></a>
# **modifyDomainModifyPatch**
> oas_any_type_not_mapped modifyDomainModifyPatch(DomainType, Authorization)

Modify

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **DomainType** | [**DomainType**](../Models/DomainType.md)|  | |
| **Authorization** | **String**|  | [optional] [default to null] |

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

<a name="registerDomainRegisterPost"></a>
# **registerDomainRegisterPost**
> oas_any_type_not_mapped registerDomainRegisterPost(DomainType, Authorization)

Register

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **DomainType** | [**DomainType**](../Models/DomainType.md)|  | |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

