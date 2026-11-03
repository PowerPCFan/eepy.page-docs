# Class2faApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createMfaMfaCreatePost**](Class2faApi.md#createMfaMfaCreatePost) | **POST** /mfa/create | Create Mfa |
| [**deleteMfaMfaDeleteDelete**](Class2faApi.md#deleteMfaMfaDeleteDelete) | **DELETE** /mfa/delete | Delete Mfa |
| [**deleteMfaWithUsernamePassMfaRecoveryDelete**](Class2faApi.md#deleteMfaWithUsernamePassMfaRecoveryDelete) | **DELETE** /mfa/recovery | Delete Mfa With Username Pass |
| [**verifyMfaSetupMfaVerifyPost**](Class2faApi.md#verifyMfaSetupMfaVerifyPost) | **POST** /mfa/verify | Verify Mfa Setup |


<a name="createMfaMfaCreatePost"></a>
# **createMfaMfaCreatePost**
> MFACreation createMfaMfaCreatePost(Authorization)

Create Mfa

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**MFACreation**](../Models/MFACreation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteMfaMfaDeleteDelete"></a>
# **deleteMfaMfaDeleteDelete**
> oas_any_type_not_mapped deleteMfaMfaDeleteDelete(x-mfa-code, x-backup-code, Authorization)

Delete Mfa

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **x-mfa-code** | **String**|  | [optional] [default to null] |
| **x-backup-code** | **String**|  | [optional] [default to null] |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteMfaWithUsernamePassMfaRecoveryDelete"></a>
# **deleteMfaWithUsernamePassMfaRecoveryDelete**
> oas_any_type_not_mapped deleteMfaWithUsernamePassMfaRecoveryDelete(x-backup-code, MfaRecovery)

Delete Mfa With Username Pass

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **x-backup-code** | **String**|  | [default to null] |
| **MfaRecovery** | [**MfaRecovery**](../Models/MfaRecovery.md)|  | |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="verifyMfaSetupMfaVerifyPost"></a>
# **verifyMfaSetupMfaVerifyPost**
> oas_any_type_not_mapped verifyMfaSetupMfaVerifyPost(x-mfa-code, Authorization)

Verify Mfa Setup

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **x-mfa-code** | **String**|  | [default to null] |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

