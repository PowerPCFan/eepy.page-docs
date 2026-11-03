# AdminApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addTldAdminUserTldAddPost**](AdminApi.md#addTldAdminUserTldAddPost) | **POST** /admin/user/tld/add | Add Tld |
| [**canAccessAdminUserCanAccessGet**](AdminApi.md#canAccessAdminUserCanAccessGet) | **GET** /admin/user/can-access | Can Access |
| [**changePermissionAdminUserPermissionPatch**](AdminApi.md#changePermissionAdminUserPermissionPatch) | **PATCH** /admin/user/permission | Change Permission |
| [**clearStatusAdminStatusClearPost**](AdminApi.md#clearStatusAdminStatusClearPost) | **POST** /admin/status/clear | Clear Status |
| [**deleteDnsRecordAdminUserDeleteRecordDelete**](AdminApi.md#deleteDnsRecordAdminUserDeleteRecordDelete) | **DELETE** /admin/user/delete/record | Delete Dns Record |
| [**deleteDomainAdminDomainDeleteDelete**](AdminApi.md#deleteDomainAdminDomainDeleteDelete) | **DELETE** /admin/domain/delete | Delete Domain |
| [**deleteUserAdminUserDeleteDelete**](AdminApi.md#deleteUserAdminUserDeleteDelete) | **DELETE** /admin/user/delete | Delete User |
| [**domainDetailAdminDomainDetailGet**](AdminApi.md#domainDetailAdminDomainDetailGet) | **GET** /admin/domain/detail | Domain Detail |
| [**editDomainAdminDomainEditPatch**](AdminApi.md#editDomainAdminDomainEditPatch) | **PATCH** /admin/domain/edit | Edit Domain |
| [**findDesyncAdminDnsDesyncGet**](AdminApi.md#findDesyncAdminDnsDesyncGet) | **GET** /admin/dns/desync | Find Desync |
| [**findUserByDomainAdminUserGetDomainGet**](AdminApi.md#findUserByDomainAdminUserGetDomainGet) | **GET** /admin/user/get/domain | Find User By Domain |
| [**findUserByEmailAdminUserGetEmailGet**](AdminApi.md#findUserByEmailAdminUserGetEmailGet) | **GET** /admin/user/get/email | Find User By Email |
| [**findUserByIdAdminUserGetIdGet**](AdminApi.md#findUserByIdAdminUserGetIdGet) | **GET** /admin/user/get/id | Find User By Id |
| [**findUserByIpsAdminUserGetIpsPost**](AdminApi.md#findUserByIpsAdminUserGetIpsPost) | **POST** /admin/user/get/ips | Find User By Ips |
| [**findUserByReferralAdminUserGetReferralGet**](AdminApi.md#findUserByReferralAdminUserGetReferralGet) | **GET** /admin/user/get/referral | Find User By Referral |
| [**findUserByUsernameAdminUserGetUsernameGet**](AdminApi.md#findUserByUsernameAdminUserGetUsernameGet) | **GET** /admin/user/get/username | Find User By Username |
| [**fullAdminAdminUserFullAdminPost**](AdminApi.md#fullAdminAdminUserFullAdminPost) | **POST** /admin/user/full-admin | Full Admin |
| [**getFlaggedUsersAdminUsersFlaggedGet**](AdminApi.md#getFlaggedUsersAdminUsersFlaggedGet) | **GET** /admin/users/flagged | Get Flagged Users |
| [**manualLoginAdminUserManualLoginPost**](AdminApi.md#manualLoginAdminUserManualLoginPost) | **POST** /admin/user/manual-login | Manual Login |
| [**reinstateUserAdminUserReinstatePost**](AdminApi.md#reinstateUserAdminUserReinstatePost) | **POST** /admin/user/reinstate | Reinstate User |
| [**removeTldAdminUserTldRemovePost**](AdminApi.md#removeTldAdminUserTldRemovePost) | **POST** /admin/user/tld/remove | Remove Tld |
| [**setStatusAdminStatusPost**](AdminApi.md#setStatusAdminStatusPost) | **POST** /admin/status | Set Status |
| [**terminateManualLoginAdminUserManualLoginTerminatePost**](AdminApi.md#terminateManualLoginAdminUserManualLoginTerminatePost) | **POST** /admin/user/manual-login/terminate | Terminate Manual Login |
| [**toggleUserDisabledAdminUserDisabledPost**](AdminApi.md#toggleUserDisabledAdminUserDisabledPost) | **POST** /admin/user/disabled | Toggle User Disabled |
| [**updateUserRiskAdminUserRiskUpdatePost**](AdminApi.md#updateUserRiskAdminUserRiskUpdatePost) | **POST** /admin/user/risk/update | Update User Risk |
| [**verifyAdminUserVerifyPost**](AdminApi.md#verifyAdminUserVerifyPost) | **POST** /admin/user/verify | Verify |


<a name="addTldAdminUserTldAddPost"></a>
# **addTldAdminUserTldAddPost**
> oas_any_type_not_mapped addTldAdminUserTldAddPost(id, tld, send\_email, Authorization)

Add Tld

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | [default to null] |
| **tld** | **String**|  | [default to null] |
| **send\_email** | **Boolean**|  | [optional] [default to false] |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="canAccessAdminUserCanAccessGet"></a>
# **canAccessAdminUserCanAccessGet**
> oas_any_type_not_mapped canAccessAdminUserCanAccessGet(Authorization)

Can Access

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="changePermissionAdminUserPermissionPatch"></a>
# **changePermissionAdminUserPermissionPatch**
> oas_any_type_not_mapped changePermissionAdminUserPermissionPatch(id, permission, value, send\_email, Authorization)

Change Permission

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | [default to null] |
| **permission** | **String**|  | [default to null] |
| **value** | [**Value**](../Models/.md)|  | [default to null] |
| **send\_email** | **Boolean**|  | [optional] [default to false] |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="clearStatusAdminStatusClearPost"></a>
# **clearStatusAdminStatusClearPost**
> oas_any_type_not_mapped clearStatusAdminStatusClearPost(Authorization)

Clear Status

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteDnsRecordAdminUserDeleteRecordDelete"></a>
# **deleteDnsRecordAdminUserDeleteRecordDelete**
> oas_any_type_not_mapped deleteDnsRecordAdminUserDeleteRecordDelete(record, type, Authorization)

Delete Dns Record

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **record** | **String**|  | [default to null] |
| **type** | **String**|  | [default to null] |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteDomainAdminDomainDeleteDelete"></a>
# **deleteDomainAdminDomainDeleteDelete**
> oas_any_type_not_mapped deleteDomainAdminDomainDeleteDelete(domain, userid, reason, send\_email, Authorization)

Delete Domain

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **domain** | **String**|  | [default to null] |
| **userid** | **String**|  | [default to null] |
| **reason** | **String**|  | [default to null] |
| **send\_email** | **Boolean**|  | [optional] [default to false] |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteUserAdminUserDeleteDelete"></a>
# **deleteUserAdminUserDeleteDelete**
> oas_any_type_not_mapped deleteUserAdminUserDeleteDelete(BanUser, Authorization)

Delete User

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **BanUser** | [**BanUser**](../Models/BanUser.md)|  | |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="domainDetailAdminDomainDetailGet"></a>
# **domainDetailAdminDomainDetailGet**
> Map domainDetailAdminDomainDetailGet(user\_id, domain, type, Authorization)

Domain Detail

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **user\_id** | **String**|  | [default to null] |
| **domain** | **String**|  | [default to null] |
| **type** | **String**|  | [optional] [default to null] |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**Map**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="editDomainAdminDomainEditPatch"></a>
# **editDomainAdminDomainEditPatch**
> Map editDomainAdminDomainEditPatch(AdminDomainEdit, Authorization)

Edit Domain

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **AdminDomainEdit** | [**AdminDomainEdit**](../Models/AdminDomainEdit.md)|  | |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**Map**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="findDesyncAdminDnsDesyncGet"></a>
# **findDesyncAdminDnsDesyncGet**
> Map findDesyncAdminDnsDesyncGet(Authorization)

Find Desync

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

<a name="findUserByDomainAdminUserGetDomainGet"></a>
# **findUserByDomainAdminUserGetDomainGet**
> AccountData findUserByDomainAdminUserGetDomainGet(domain, Authorization)

Find User By Domain

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **domain** | **String**|  | [default to null] |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**AccountData**](../Models/AccountData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="findUserByEmailAdminUserGetEmailGet"></a>
# **findUserByEmailAdminUserGetEmailGet**
> Response_Find_User_By_Email_Admin_User_Get_Email_Get findUserByEmailAdminUserGetEmailGet(email, Authorization)

Find User By Email

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **email** | **String**|  | [default to null] |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**Response_Find_User_By_Email_Admin_User_Get_Email_Get**](../Models/Response_Find_User_By_Email_Admin_User_Get_Email_Get.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="findUserByIdAdminUserGetIdGet"></a>
# **findUserByIdAdminUserGetIdGet**
> AccountData findUserByIdAdminUserGetIdGet(id, Authorization)

Find User By Id

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | [default to null] |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**AccountData**](../Models/AccountData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="findUserByIpsAdminUserGetIpsPost"></a>
# **findUserByIpsAdminUserGetIpsPost**
> List findUserByIpsAdminUserGetIpsPost(IpFind, Authorization)

Find User By Ips

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **IpFind** | [**IpFind**](../Models/IpFind.md)|  | |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**List**](../Models/AccountData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="findUserByReferralAdminUserGetReferralGet"></a>
# **findUserByReferralAdminUserGetReferralGet**
> AccountData findUserByReferralAdminUserGetReferralGet(referral, Authorization)

Find User By Referral

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **referral** | **String**|  | [default to null] |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**AccountData**](../Models/AccountData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="findUserByUsernameAdminUserGetUsernameGet"></a>
# **findUserByUsernameAdminUserGetUsernameGet**
> Response_Find_User_By_Username_Admin_User_Get_Username_Get findUserByUsernameAdminUserGetUsernameGet(username, regex, Authorization)

Find User By Username

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**|  | [default to null] |
| **regex** | **Boolean**|  | [optional] [default to false] |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**Response_Find_User_By_Username_Admin_User_Get_Username_Get**](../Models/Response_Find_User_By_Username_Admin_User_Get_Username_Get.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="fullAdminAdminUserFullAdminPost"></a>
# **fullAdminAdminUserFullAdminPost**
> oas_any_type_not_mapped fullAdminAdminUserFullAdminPost(UserAction, Authorization)

Full Admin

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **UserAction** | [**UserAction**](../Models/UserAction.md)|  | |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getFlaggedUsersAdminUsersFlaggedGet"></a>
# **getFlaggedUsersAdminUsersFlaggedGet**
> List getFlaggedUsersAdminUsersFlaggedGet(Authorization)

Get Flagged Users

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**List**](../Models/AccountData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="manualLoginAdminUserManualLoginPost"></a>
# **manualLoginAdminUserManualLoginPost**
> Map manualLoginAdminUserManualLoginPost(UserAction, Authorization)

Manual Login

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **UserAction** | [**UserAction**](../Models/UserAction.md)|  | |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

**Map**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="reinstateUserAdminUserReinstatePost"></a>
# **reinstateUserAdminUserReinstatePost**
> oas_any_type_not_mapped reinstateUserAdminUserReinstatePost(user\_id, send\_email, Authorization)

Reinstate User

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **user\_id** | **String**|  | [default to null] |
| **send\_email** | **Boolean**|  | [optional] [default to false] |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="removeTldAdminUserTldRemovePost"></a>
# **removeTldAdminUserTldRemovePost**
> oas_any_type_not_mapped removeTldAdminUserTldRemovePost(id, tld, send\_email, Authorization)

Remove Tld

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | [default to null] |
| **tld** | **String**|  | [default to null] |
| **send\_email** | **Boolean**|  | [optional] [default to false] |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="setStatusAdminStatusPost"></a>
# **setStatusAdminStatusPost**
> oas_any_type_not_mapped setStatusAdminStatusPost(AdminStatusMessage, Authorization)

Set Status

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **AdminStatusMessage** | [**AdminStatusMessage**](../Models/AdminStatusMessage.md)|  | |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="terminateManualLoginAdminUserManualLoginTerminatePost"></a>
# **terminateManualLoginAdminUserManualLoginTerminatePost**
> oas_any_type_not_mapped terminateManualLoginAdminUserManualLoginTerminatePost(ManualLoginTermination, Authorization)

Terminate Manual Login

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ManualLoginTermination** | [**ManualLoginTermination**](../Models/ManualLoginTermination.md)|  | |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="toggleUserDisabledAdminUserDisabledPost"></a>
# **toggleUserDisabledAdminUserDisabledPost**
> AccountData toggleUserDisabledAdminUserDisabledPost(UserDisabledBody, Authorization)

Toggle User Disabled

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **UserDisabledBody** | [**UserDisabledBody**](../Models/UserDisabledBody.md)|  | |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**AccountData**](../Models/AccountData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateUserRiskAdminUserRiskUpdatePost"></a>
# **updateUserRiskAdminUserRiskUpdatePost**
> AccountData updateUserRiskAdminUserRiskUpdatePost(RiskUpdateBody, Authorization)

Update User Risk

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **RiskUpdateBody** | [**RiskUpdateBody**](../Models/RiskUpdateBody.md)|  | |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**AccountData**](../Models/AccountData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="verifyAdminUserVerifyPost"></a>
# **verifyAdminUserVerifyPost**
> oas_any_type_not_mapped verifyAdminUserVerifyPost(id, Authorization)

Verify

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | [default to null] |
| **Authorization** | **String**|  | [optional] [default to null] |

### Return type

[**oas_any_type_not_mapped**](../Models/AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

