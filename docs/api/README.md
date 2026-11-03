# Documentation for FastAPI

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://localhost*

| Class | Method | HTTP request | Description |
|------------ | ------------- | ------------- | -------------|
| *AccountApi* | [**createApiTokenApiCreateKeyPost**](Apis/AccountApi.md#createApiTokenApiCreateKeyPost) | **POST** /api/create-key | Create Api Token |
*AccountApi* | [**createMfaMfaCreatePost**](Apis/AccountApi.md#createMfaMfaCreatePost) | **POST** /mfa/create | Create Mfa |
*AccountApi* | [**createReferralReferralPost**](Apis/AccountApi.md#createReferralReferralPost) | **POST** /referral | Create Referral |
*AccountApi* | [**deleteApiKeyApiDeleteKeyDelete**](Apis/AccountApi.md#deleteApiKeyApiDeleteKeyDelete) | **DELETE** /api/delete-key | Delete Api Key |
*AccountApi* | [**deleteMfaMfaDeleteDelete**](Apis/AccountApi.md#deleteMfaMfaDeleteDelete) | **DELETE** /mfa/delete | Delete Mfa |
*AccountApi* | [**deleteMfaWithUsernamePassMfaRecoveryDelete**](Apis/AccountApi.md#deleteMfaWithUsernamePassMfaRecoveryDelete) | **DELETE** /mfa/recovery | Delete Mfa With Username Pass |
*AccountApi* | [**getApiKeysApiGetKeysGet**](Apis/AccountApi.md#getApiKeysApiGetKeysGet) | **GET** /api/get-keys | Get Api Keys |
*AccountApi* | [**getGdprGdprGet**](Apis/AccountApi.md#getGdprGdprGet) | **GET** /gdpr | Get Gdpr |
*AccountApi* | [**getKeyApiGetKeyGet**](Apis/AccountApi.md#getKeyApiGetKeyGet) | **GET** /api/get-key | Get Key |
*AccountApi* | [**getSettingsSettingsGet**](Apis/AccountApi.md#getSettingsSettingsGet) | **GET** /settings | Get Settings |
*AccountApi* | [**loginLoginPost**](Apis/AccountApi.md#loginLoginPost) | **POST** /login | Login |
*AccountApi* | [**logoutLogoutPatch**](Apis/AccountApi.md#logoutLogoutPatch) | **PATCH** /logout | Logout |
*AccountApi* | [**redeemCodeRedeemPost**](Apis/AccountApi.md#redeemCodeRedeemPost) | **POST** /redeem | Redeem Code |
*AccountApi* | [**refreshRefreshPost**](Apis/AccountApi.md#refreshRefreshPost) | **POST** /refresh | Refresh |
*AccountApi* | [**resendVerificationEmailSendPost**](Apis/AccountApi.md#resendVerificationEmailSendPost) | **POST** /email/send | Resend Verification |
*AccountApi* | [**resetPasswordRecoveryVerifyPost**](Apis/AccountApi.md#resetPasswordRecoveryVerifyPost) | **POST** /recovery/verify | Reset Password |
*AccountApi* | [**sendAccountDeletionDeletionSendDelete**](Apis/AccountApi.md#sendAccountDeletionDeletionSendDelete) | **DELETE** /deletion/send | Send Account Deletion |
*AccountApi* | [**sendRecoveryLinkRecoverySendPost**](Apis/AccountApi.md#sendRecoveryLinkRecoverySendPost) | **POST** /recovery/send | Send Recovery Link |
*AccountApi* | [**signUpSignUpPost**](Apis/AccountApi.md#signUpSignUpPost) | **POST** /sign-up | Sign Up |
*AccountApi* | [**verifyAccountEmailVerifyPost**](Apis/AccountApi.md#verifyAccountEmailVerifyPost) | **POST** /email/verify | Verify Account |
*AccountApi* | [**verifyDeletionDeletionVerifyDelete**](Apis/AccountApi.md#verifyDeletionDeletionVerifyDelete) | **DELETE** /deletion/verify | Verify Deletion |
*AccountApi* | [**verifyMfaSetupMfaVerifyPost**](Apis/AccountApi.md#verifyMfaSetupMfaVerifyPost) | **POST** /mfa/verify | Verify Mfa Setup |
*AccountApi* | [**yearWrappedProfileWrappedGet**](Apis/AccountApi.md#yearWrappedProfileWrappedGet) | **GET** /profile/wrapped | Year Wrapped |
| *AdminApi* | [**addTldAdminUserTldAddPost**](Apis/AdminApi.md#addTldAdminUserTldAddPost) | **POST** /admin/user/tld/add | Add Tld |
*AdminApi* | [**canAccessAdminUserCanAccessGet**](Apis/AdminApi.md#canAccessAdminUserCanAccessGet) | **GET** /admin/user/can-access | Can Access |
*AdminApi* | [**changePermissionAdminUserPermissionPatch**](Apis/AdminApi.md#changePermissionAdminUserPermissionPatch) | **PATCH** /admin/user/permission | Change Permission |
*AdminApi* | [**clearStatusAdminStatusClearPost**](Apis/AdminApi.md#clearStatusAdminStatusClearPost) | **POST** /admin/status/clear | Clear Status |
*AdminApi* | [**deleteDnsRecordAdminUserDeleteRecordDelete**](Apis/AdminApi.md#deleteDnsRecordAdminUserDeleteRecordDelete) | **DELETE** /admin/user/delete/record | Delete Dns Record |
*AdminApi* | [**deleteDomainAdminDomainDeleteDelete**](Apis/AdminApi.md#deleteDomainAdminDomainDeleteDelete) | **DELETE** /admin/domain/delete | Delete Domain |
*AdminApi* | [**deleteUserAdminUserDeleteDelete**](Apis/AdminApi.md#deleteUserAdminUserDeleteDelete) | **DELETE** /admin/user/delete | Delete User |
*AdminApi* | [**domainDetailAdminDomainDetailGet**](Apis/AdminApi.md#domainDetailAdminDomainDetailGet) | **GET** /admin/domain/detail | Domain Detail |
*AdminApi* | [**editDomainAdminDomainEditPatch**](Apis/AdminApi.md#editDomainAdminDomainEditPatch) | **PATCH** /admin/domain/edit | Edit Domain |
*AdminApi* | [**findDesyncAdminDnsDesyncGet**](Apis/AdminApi.md#findDesyncAdminDnsDesyncGet) | **GET** /admin/dns/desync | Find Desync |
*AdminApi* | [**findUserByDomainAdminUserGetDomainGet**](Apis/AdminApi.md#findUserByDomainAdminUserGetDomainGet) | **GET** /admin/user/get/domain | Find User By Domain |
*AdminApi* | [**findUserByEmailAdminUserGetEmailGet**](Apis/AdminApi.md#findUserByEmailAdminUserGetEmailGet) | **GET** /admin/user/get/email | Find User By Email |
*AdminApi* | [**findUserByIdAdminUserGetIdGet**](Apis/AdminApi.md#findUserByIdAdminUserGetIdGet) | **GET** /admin/user/get/id | Find User By Id |
*AdminApi* | [**findUserByIpsAdminUserGetIpsPost**](Apis/AdminApi.md#findUserByIpsAdminUserGetIpsPost) | **POST** /admin/user/get/ips | Find User By Ips |
*AdminApi* | [**findUserByReferralAdminUserGetReferralGet**](Apis/AdminApi.md#findUserByReferralAdminUserGetReferralGet) | **GET** /admin/user/get/referral | Find User By Referral |
*AdminApi* | [**findUserByUsernameAdminUserGetUsernameGet**](Apis/AdminApi.md#findUserByUsernameAdminUserGetUsernameGet) | **GET** /admin/user/get/username | Find User By Username |
*AdminApi* | [**fullAdminAdminUserFullAdminPost**](Apis/AdminApi.md#fullAdminAdminUserFullAdminPost) | **POST** /admin/user/full-admin | Full Admin |
*AdminApi* | [**getFlaggedUsersAdminUsersFlaggedGet**](Apis/AdminApi.md#getFlaggedUsersAdminUsersFlaggedGet) | **GET** /admin/users/flagged | Get Flagged Users |
*AdminApi* | [**manualLoginAdminUserManualLoginPost**](Apis/AdminApi.md#manualLoginAdminUserManualLoginPost) | **POST** /admin/user/manual-login | Manual Login |
*AdminApi* | [**reinstateUserAdminUserReinstatePost**](Apis/AdminApi.md#reinstateUserAdminUserReinstatePost) | **POST** /admin/user/reinstate | Reinstate User |
*AdminApi* | [**removeTldAdminUserTldRemovePost**](Apis/AdminApi.md#removeTldAdminUserTldRemovePost) | **POST** /admin/user/tld/remove | Remove Tld |
*AdminApi* | [**setStatusAdminStatusPost**](Apis/AdminApi.md#setStatusAdminStatusPost) | **POST** /admin/status | Set Status |
*AdminApi* | [**terminateManualLoginAdminUserManualLoginTerminatePost**](Apis/AdminApi.md#terminateManualLoginAdminUserManualLoginTerminatePost) | **POST** /admin/user/manual-login/terminate | Terminate Manual Login |
*AdminApi* | [**toggleUserDisabledAdminUserDisabledPost**](Apis/AdminApi.md#toggleUserDisabledAdminUserDisabledPost) | **POST** /admin/user/disabled | Toggle User Disabled |
*AdminApi* | [**updateUserRiskAdminUserRiskUpdatePost**](Apis/AdminApi.md#updateUserRiskAdminUserRiskUpdatePost) | **POST** /admin/user/risk/update | Update User Risk |
*AdminApi* | [**verifyAdminUserVerifyPost**](Apis/AdminApi.md#verifyAdminUserVerifyPost) | **POST** /admin/user/verify | Verify |
| *ApiApi* | [**createApiTokenApiCreateKeyPost**](Apis/ApiApi.md#createApiTokenApiCreateKeyPost) | **POST** /api/create-key | Create Api Token |
*ApiApi* | [**deleteApiDomainDelete**](Apis/ApiApi.md#deleteApiDomainDelete) | **DELETE** /api/domain | Delete |
*ApiApi* | [**deleteApiKeyApiDeleteKeyDelete**](Apis/ApiApi.md#deleteApiKeyApiDeleteKeyDelete) | **DELETE** /api/delete-key | Delete Api Key |
*ApiApi* | [**getApiKeysApiGetKeysGet**](Apis/ApiApi.md#getApiKeysApiGetKeysGet) | **GET** /api/get-keys | Get Api Keys |
*ApiApi* | [**getDomainsApiDomainsGet**](Apis/ApiApi.md#getDomainsApiDomainsGet) | **GET** /api/domains | Get Domains |
*ApiApi* | [**getKeyApiGetKeyGet**](Apis/ApiApi.md#getKeyApiGetKeyGet) | **GET** /api/get-key | Get Key |
*ApiApi* | [**getUserProfileApiUserGet**](Apis/ApiApi.md#getUserProfileApiUserGet) | **GET** /api/user | Get User Profile |
*ApiApi* | [**isAvailableApiDomainAvailableGet**](Apis/ApiApi.md#isAvailableApiDomainAvailableGet) | **GET** /api/domain/available | Is Available |
*ApiApi* | [**modifyApiDomainPatch**](Apis/ApiApi.md#modifyApiDomainPatch) | **PATCH** /api/domain | Modify |
*ApiApi* | [**registerApiDomainPost**](Apis/ApiApi.md#registerApiDomainPost) | **POST** /api/domain | Register |
| *Class2faApi* | [**createMfaMfaCreatePost**](Apis/Class2faApi.md#createMfaMfaCreatePost) | **POST** /mfa/create | Create Mfa |
*Class2faApi* | [**deleteMfaMfaDeleteDelete**](Apis/Class2faApi.md#deleteMfaMfaDeleteDelete) | **DELETE** /mfa/delete | Delete Mfa |
*Class2faApi* | [**deleteMfaWithUsernamePassMfaRecoveryDelete**](Apis/Class2faApi.md#deleteMfaWithUsernamePassMfaRecoveryDelete) | **DELETE** /mfa/recovery | Delete Mfa With Username Pass |
*Class2faApi* | [**verifyMfaSetupMfaVerifyPost**](Apis/Class2faApi.md#verifyMfaSetupMfaVerifyPost) | **POST** /mfa/verify | Verify Mfa Setup |
| *DefaultApi* | [**createTunnelServeoTunnelsPost**](Apis/DefaultApi.md#createTunnelServeoTunnelsPost) | **POST** /serveo/tunnels | Create Tunnel |
*DefaultApi* | [**deleteTunnelServeoTunnelsTunnelIdDelete**](Apis/DefaultApi.md#deleteTunnelServeoTunnelsTunnelIdDelete) | **DELETE** /serveo/tunnels/{tunnel_id} | Delete Tunnel |
*DefaultApi* | [**getKeyIntentsApiIntentsGet**](Apis/DefaultApi.md#getKeyIntentsApiIntentsGet) | **GET** /api/intents | Get Key Intents |
*DefaultApi* | [**listTunnelsServeoTunnelsGet**](Apis/DefaultApi.md#listTunnelsServeoTunnelsGet) | **GET** /serveo/tunnels | List Tunnels |
*DefaultApi* | [**statusStatusGet**](Apis/DefaultApi.md#statusStatusGet) | **GET** /status | Status |
*DefaultApi* | [**updateTunnelServeoTunnelsTunnelIdPut**](Apis/DefaultApi.md#updateTunnelServeoTunnelsTunnelIdPut) | **PUT** /serveo/tunnels/{tunnel_id} | Update Tunnel |
| *DomainApi* | [**deleteApiDomainDelete**](Apis/DomainApi.md#deleteApiDomainDelete) | **DELETE** /api/domain | Delete |
*DomainApi* | [**deleteDomainDeleteDelete**](Apis/DomainApi.md#deleteDomainDeleteDelete) | **DELETE** /domain/delete | Delete |
*DomainApi* | [**getDomainsApiDomainsGet**](Apis/DomainApi.md#getDomainsApiDomainsGet) | **GET** /api/domains | Get Domains |
*DomainApi* | [**getDomainsDomainGetGet**](Apis/DomainApi.md#getDomainsDomainGetGet) | **GET** /domain/get | Get Domains |
*DomainApi* | [**isAvailableApiDomainAvailableGet**](Apis/DomainApi.md#isAvailableApiDomainAvailableGet) | **GET** /api/domain/available | Is Available |
*DomainApi* | [**isAvailableDomainAvailableGet**](Apis/DomainApi.md#isAvailableDomainAvailableGet) | **GET** /domain/available | Is Available |
*DomainApi* | [**modifyApiDomainPatch**](Apis/DomainApi.md#modifyApiDomainPatch) | **PATCH** /api/domain | Modify |
*DomainApi* | [**modifyDomainModifyPatch**](Apis/DomainApi.md#modifyDomainModifyPatch) | **PATCH** /domain/modify | Modify |
*DomainApi* | [**registerApiDomainPost**](Apis/DomainApi.md#registerApiDomainPost) | **POST** /api/domain | Register |
*DomainApi* | [**registerDomainRegisterPost**](Apis/DomainApi.md#registerDomainRegisterPost) | **POST** /domain/register | Register |
| *FunApi* | [**yearWrappedProfileWrappedGet**](Apis/FunApi.md#yearWrappedProfileWrappedGet) | **GET** /profile/wrapped | Year Wrapped |
| *InviteApi* | [**createInviteCreatePost**](Apis/InviteApi.md#createInviteCreatePost) | **POST** /invite/create | Create |
| *KofiApi* | [**redeemCodeRedeemPost**](Apis/KofiApi.md#redeemCodeRedeemPost) | **POST** /redeem | Redeem Code |
*KofiApi* | [**webhookKofiWebhookPost**](Apis/KofiApi.md#webhookKofiWebhookPost) | **POST** /kofi/webhook | Webhook |
| *PrivacyApi* | [**getGdprGdprGet**](Apis/PrivacyApi.md#getGdprGdprGet) | **GET** /gdpr | Get Gdpr |
| *ReferralApi* | [**createReferralReferralPost**](Apis/ReferralApi.md#createReferralReferralPost) | **POST** /referral | Create Referral |
| *SessionApi* | [**loginLoginPost**](Apis/SessionApi.md#loginLoginPost) | **POST** /login | Login |
*SessionApi* | [**logoutLogoutPatch**](Apis/SessionApi.md#logoutLogoutPatch) | **PATCH** /logout | Logout |
*SessionApi* | [**refreshRefreshPost**](Apis/SessionApi.md#refreshRefreshPost) | **POST** /refresh | Refresh |
| *UserApi* | [**getUserProfileApiUserGet**](Apis/UserApi.md#getUserProfileApiUserGet) | **GET** /api/user | Get User Profile |


<a name="documentation-for-models"></a>
## Documentation for Models

 - [AccountData](./Models/AccountData.md)
 - [AdminDomainEdit](./Models/AdminDomainEdit.md)
 - [AdminStatusMessage](./Models/AdminStatusMessage.md)
 - [ApiCreationBody](./Models/ApiCreationBody.md)
 - [ApiDeletion](./Models/ApiDeletion.md)
 - [ApiPermission](./Models/ApiPermission.md)
 - [ApiType](./Models/ApiType.md)
 - [BanUser](./Models/BanUser.md)
 - [Ban_Reasons](./Models/Ban_Reasons.md)
 - [Country](./Models/Country.md)
 - [CountryType](./Models/CountryType.md)
 - [DomainRecord](./Models/DomainRecord.md)
 - [DomainRetrieve](./Models/DomainRetrieve.md)
 - [DomainType](./Models/DomainType.md)
 - [HTTPValidationError](./Models/HTTPValidationError.md)
 - [InviteCreate](./Models/InviteCreate.md)
 - [InviteType](./Models/InviteType.md)
 - [Ip](./Models/Ip.md)
 - [IpFind](./Models/IpFind.md)
 - [Location_inner](./Models/Location_inner.md)
 - [LoginRequest](./Models/LoginRequest.md)
 - [MFACreation](./Models/MFACreation.md)
 - [ManualLoginTermination](./Models/ManualLoginTermination.md)
 - [MfaRecovery](./Models/MfaRecovery.md)
 - [NewSessionType](./Models/NewSessionType.md)
 - [PasswordReset](./Models/PasswordReset.md)
 - [Registered](./Models/Registered.md)
 - [Response_Find_User_By_Email_Admin_User_Get_Email_Get](./Models/Response_Find_User_By_Email_Admin_User_Get_Email_Get.md)
 - [Response_Find_User_By_Username_Admin_User_Get_Username_Get](./Models/Response_Find_User_By_Username_Admin_User_Get_Username_Get.md)
 - [Risk](./Models/Risk.md)
 - [RiskFlag](./Models/RiskFlag.md)
 - [RiskUpdateBody](./Models/RiskUpdateBody.md)
 - [SignUp](./Models/SignUp.md)
 - [TunnelCreate](./Models/TunnelCreate.md)
 - [TunnelUpdate](./Models/TunnelUpdate.md)
 - [UserAction](./Models/UserAction.md)
 - [UserDisabledBody](./Models/UserDisabledBody.md)
 - [UserPageType](./Models/UserPageType.md)
 - [UserRisk](./Models/UserRisk.md)
 - [ValidationError](./Models/ValidationError.md)
 - [Value](./Models/Value.md)
 - [YearWrapped](./Models/YearWrapped.md)
 - [login_login_post_200_response](./Models/login_login_post_200_response.md)
 - [login_login_post_422_response](./Models/login_login_post_422_response.md)
 - [sign_up_sign_up_post_422_response](./Models/sign_up_sign_up_post_422_response.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

All endpoints do not require authorization.
