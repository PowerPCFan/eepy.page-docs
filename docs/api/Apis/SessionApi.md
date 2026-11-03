# SessionApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**loginLoginPost**](SessionApi.md#loginLoginPost) | **POST** /login | Login |
| [**logoutLogoutPatch**](SessionApi.md#logoutLogoutPatch) | **PATCH** /logout | Logout |
| [**refreshRefreshPost**](SessionApi.md#refreshRefreshPost) | **POST** /refresh | Refresh |


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

