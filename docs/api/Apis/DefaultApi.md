# DefaultApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTunnelServeoTunnelsPost**](DefaultApi.md#createTunnelServeoTunnelsPost) | **POST** /serveo/tunnels | Create Tunnel |
| [**deleteTunnelServeoTunnelsTunnelIdDelete**](DefaultApi.md#deleteTunnelServeoTunnelsTunnelIdDelete) | **DELETE** /serveo/tunnels/{tunnel_id} | Delete Tunnel |
| [**getKeyIntentsApiIntentsGet**](DefaultApi.md#getKeyIntentsApiIntentsGet) | **GET** /api/intents | Get Key Intents |
| [**listTunnelsServeoTunnelsGet**](DefaultApi.md#listTunnelsServeoTunnelsGet) | **GET** /serveo/tunnels | List Tunnels |
| [**statusStatusGet**](DefaultApi.md#statusStatusGet) | **GET** /status | Status |
| [**updateTunnelServeoTunnelsTunnelIdPut**](DefaultApi.md#updateTunnelServeoTunnelsTunnelIdPut) | **PUT** /serveo/tunnels/{tunnel_id} | Update Tunnel |


<a name="createTunnelServeoTunnelsPost"></a>
# **createTunnelServeoTunnelsPost**
> Map createTunnelServeoTunnelsPost(TunnelCreate, Authorization)

Create Tunnel

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **TunnelCreate** | [**TunnelCreate**](../Models/TunnelCreate.md)|  | |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**Map**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteTunnelServeoTunnelsTunnelIdDelete"></a>
# **deleteTunnelServeoTunnelsTunnelIdDelete**
> oas_any_type_not_mapped deleteTunnelServeoTunnelsTunnelIdDelete(tunnel\_id, Authorization)

Delete Tunnel

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tunnel\_id** | **String**|  | [default to null] |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getKeyIntentsApiIntentsGet"></a>
# **getKeyIntentsApiIntentsGet**
> List getKeyIntentsApiIntentsGet()

Get Key Intents

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/ApiPermission.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listTunnelsServeoTunnelsGet"></a>
# **listTunnelsServeoTunnelsGet**
> Map listTunnelsServeoTunnelsGet(Authorization)

List Tunnels

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

<a name="statusStatusGet"></a>
# **statusStatusGet**
> oas_any_type_not_mapped statusStatusGet()

Status

### Parameters
This endpoint does not need any parameter.

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateTunnelServeoTunnelsTunnelIdPut"></a>
# **updateTunnelServeoTunnelsTunnelIdPut**
> Map updateTunnelServeoTunnelsTunnelIdPut(tunnel\_id, TunnelUpdate, Authorization)

Update Tunnel

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tunnel\_id** | **String**|  | [default to null] |
| **TunnelUpdate** | [**TunnelUpdate**](../Models/TunnelUpdate.md)|  | |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**Map**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

