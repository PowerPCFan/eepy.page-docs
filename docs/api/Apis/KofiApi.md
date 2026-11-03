# KofiApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**redeemCodeRedeemPost**](KofiApi.md#redeemCodeRedeemPost) | **POST** /redeem | Redeem Code |
| [**webhookKofiWebhookPost**](KofiApi.md#webhookKofiWebhookPost) | **POST** /kofi/webhook | Webhook |


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

<a name="webhookKofiWebhookPost"></a>
# **webhookKofiWebhookPost**
> oas_any_type_not_mapped webhookKofiWebhookPost(data)

Webhook

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | **String**|  | [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

