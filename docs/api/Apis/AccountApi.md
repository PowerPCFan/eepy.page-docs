# AccountApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createApiTokenApiCreateKeyPost**](AccountApi.md#createApiTokenApiCreateKeyPost) | **POST** /api/create-key | Create Api Token |
| [**createMfaMfaCreatePost**](AccountApi.md#createMfaMfaCreatePost) | **POST** /mfa/create | Create Mfa |
| [**createReferralReferralPost**](AccountApi.md#createReferralReferralPost) | **POST** /referral | Create Referral |
| [**deleteApiKeyApiDeleteKeyDelete**](AccountApi.md#deleteApiKeyApiDeleteKeyDelete) | **DELETE** /api/delete-key | Delete Api Key |
| [**deleteMfaMfaDeleteDelete**](AccountApi.md#deleteMfaMfaDeleteDelete) | **DELETE** /mfa/delete | Delete Mfa |
| [**deleteMfaWithUsernamePassMfaRecoveryDelete**](AccountApi.md#deleteMfaWithUsernamePassMfaRecoveryDelete) | **DELETE** /mfa/recovery | Delete Mfa With Username Pass |
| [**getApiKeysApiGetKeysGet**](AccountApi.md#getApiKeysApiGetKeysGet) | **GET** /api/get-keys | Get Api Keys |
| [**getGdprGdprGet**](AccountApi.md#getGdprGdprGet) | **GET** /gdpr | Get Gdpr |
| [**getKeyApiGetKeyGet**](AccountApi.md#getKeyApiGetKeyGet) | **GET** /api/get-key | Get Key |
| [**getSettingsSettingsGet**](AccountApi.md#getSettingsSettingsGet) | **GET** /settings | Get Settings |
| [**loginLoginPost**](AccountApi.md#loginLoginPost) | **POST** /login | Login |
| [**logoutLogoutPatch**](AccountApi.md#logoutLogoutPatch) | **PATCH** /logout | Logout |
| [**redeemCodeRedeemPost**](AccountApi.md#redeemCodeRedeemPost) | **POST** /redeem | Redeem Code |
| [**refreshRefreshPost**](AccountApi.md#refreshRefreshPost) | **POST** /refresh | Refresh |
| [**resendVerificationEmailSendPost**](AccountApi.md#resendVerificationEmailSendPost) | **POST** /email/send | Resend Verification |
| [**resetPasswordRecoveryVerifyPost**](AccountApi.md#resetPasswordRecoveryVerifyPost) | **POST** /recovery/verify | Reset Password |
| [**sendAccountDeletionDeletionSendDelete**](AccountApi.md#sendAccountDeletionDeletionSendDelete) | **DELETE** /deletion/send | Send Account Deletion |
| [**sendRecoveryLinkRecoverySendPost**](AccountApi.md#sendRecoveryLinkRecoverySendPost) | **POST** /recovery/send | Send Recovery Link |
| [**signUpSignUpPost**](AccountApi.md#signUpSignUpPost) | **POST** /sign-up | Sign Up |
| [**verifyAccountEmailVerifyPost**](AccountApi.md#verifyAccountEmailVerifyPost) | **POST** /email/verify | Verify Account |
| [**verifyDeletionDeletionVerifyDelete**](AccountApi.md#verifyDeletionDeletionVerifyDelete) | **DELETE** /deletion/verify | Verify Deletion |
| [**verifyMfaSetupMfaVerifyPost**](AccountApi.md#verifyMfaSetupMfaVerifyPost) | **POST** /mfa/verify | Verify Mfa Setup |
| [**yearWrappedProfileWrappedGet**](AccountApi.md#yearWrappedProfileWrappedGet) | **GET** /profile/wrapped | Year Wrapped |


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

<a name="createReferralReferralPost"></a>
# **createReferralReferralPost**
> oas_any_type_not_mapped createReferralReferralPost(code, Authorization)

Create Referral

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **code** | **String**|  | [default to null] |
| **Authorization** | **String**|  | [optional] [default to null] |

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

<a name="getGdprGdprGet"></a>
# **getGdprGdprGet**
> Map getGdprGdprGet(Authorization)

Get Gdpr

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**Map**](../Models/AnyType.md)

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

<a name="getSettingsSettingsGet"></a>
# **getSettingsSettingsGet**
> UserPageType getSettingsSettingsGet(Authorization)

Get Settings

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**UserPageType**](../Models/UserPageType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="loginLoginPost"></a>
# **loginLoginPost**
> login_login_post_200_response loginLoginPost(x-captcha-code, LoginRequest, x-mfa-code, x-device-id)

Login

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **x-captcha-code** | **String**|  | [default to null] |
| **LoginRequest** | [**LoginRequest**](../Models/LoginRequest.md)|  | |
| **x-mfa-code** | **String**|  | [optional] [default to null] |
| **x-device-id** | **String**|  | [optional] [default to null] |

### Return type

[**login_login_post_200_response**](../Models/login_login_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="logoutLogoutPatch"></a>
# **logoutLogoutPatch**
> oas_any_type_not_mapped logoutLogoutPatch(x-device-id, Authorization)

Logout

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **x-device-id** | **String**|  | [optional] [default to null] |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="redeemCodeRedeemPost"></a>
# **redeemCodeRedeemPost**
> oas_any_type_not_mapped redeemCodeRedeemPost(code, Authorization)

Redeem Code

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **code** | **String**|  | [default to null] |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="refreshRefreshPost"></a>
# **refreshRefreshPost**
> login_login_post_200_response refreshRefreshPost()

Refresh

### Parameters
This endpoint does not need any parameter.

### Return type

[**login_login_post_200_response**](../Models/login_login_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="resendVerificationEmailSendPost"></a>
# **resendVerificationEmailSendPost**
> oas_any_type_not_mapped resendVerificationEmailSendPost(user\_id)

Resend Verification

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **user\_id** | **String**|  | [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="resetPasswordRecoveryVerifyPost"></a>
# **resetPasswordRecoveryVerifyPost**
> oas_any_type_not_mapped resetPasswordRecoveryVerifyPost(PasswordReset)

Reset Password

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **PasswordReset** | [**PasswordReset**](../Models/PasswordReset.md)|  | |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="sendAccountDeletionDeletionSendDelete"></a>
# **sendAccountDeletionDeletionSendDelete**
> oas_any_type_not_mapped sendAccountDeletionDeletionSendDelete(x-mfa-code, Authorization)

Send Account Deletion

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

<a name="sendRecoveryLinkRecoverySendPost"></a>
# **sendRecoveryLinkRecoverySendPost**
> oas_any_type_not_mapped sendRecoveryLinkRecoverySendPost(username)

Send Recovery Link

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**|  | [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="signUpSignUpPost"></a>
# **signUpSignUpPost**
> oas_any_type_not_mapped signUpSignUpPost(x-captcha-code, SignUp, x-device-id)

Sign Up

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **x-captcha-code** | **String**|  | [default to null] |
| **SignUp** | [**SignUp**](../Models/SignUp.md)|  | |
| **x-device-id** | **String**|  | [optional] [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="verifyAccountEmailVerifyPost"></a>
# **verifyAccountEmailVerifyPost**
> oas_any_type_not_mapped verifyAccountEmailVerifyPost(code)

Verify Account

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **code** | **String**|  | [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="verifyDeletionDeletionVerifyDelete"></a>
# **verifyDeletionDeletionVerifyDelete**
> oas_any_type_not_mapped verifyDeletionDeletionVerifyDelete(code)

Verify Deletion

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **code** | **String**|  | [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
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

<a name="yearWrappedProfileWrappedGet"></a>
# **yearWrappedProfileWrappedGet**
> YearWrapped yearWrappedProfileWrappedGet(Authorization)

Year Wrapped

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**YearWrapped**](../Models/YearWrapped.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

