---
title: Get Profile
icon: lucide/user
---

# Get User Profile

{{ badge_path("GET", "/api/user") }}

Retrieves account metadata for the user associated with the authenticated API key, including email verification status, owned base TLDs, and referral information.

---

## Authentication

- **Header**: `Authorization: Bearer <API_KEY>`
- **Required Intent**: `userdetails`

---

## Query Parameters & Body

This endpoint accepts no query parameters and no request body.

---

## Request Examples

=== "curl"

    ```bash
    curl -X GET "https://api.eepy.page/api/user" \
      -H "Authorization: Bearer YOUR_API_KEY"
    ```

=== "Python"

    ```python
    import requests

    headers = {"Authorization": "Bearer YOUR_API_KEY"}
    resp = requests.get("https://api.eepy.page/api/user", headers=headers)
    print(resp.json())
    ```

---

## Responses

### 200 OK

Returns the user's profile metadata.

```json
{
  "username": "Hakulinen7",
  "email": "jussi.hakulinen@example.com",
  "lang": "en",
  "country": "FI",
  "created": 1792234572,
  "verified": true,
  "beta-enroll": false,
  "mfa_enabled": true,
  "referral-code": "Joutsenlaulu",
  "referred-people": 2,
  "owned-tlds": ["eepy.page", "worksonmymachine.top"]
}
```

#### Field Schema

| Field             | Type             | Description                                                           |
| :---------------- | :--------------- | :-------------------------------------------------------------------- |
| `username`        | string           | Account username.                                                     |
| `email`           | string           | Account email address.                                                |
| `lang`            | string           | User's configured language code.                                      |
| `country`         | string / object  | User country code or location dictionary.                             |
| `created`         | integer          | Unix timestamp (seconds) when the account was created.                |
| `verified`        | boolean          | Indicates whether the user's email has been verified.                 |
| `beta-enroll`     | boolean          | Whether the user is enrolled in early beta features.                  |
| `mfa_enabled`     | boolean          | Whether multi-factor authentication (2FA) is active.                  |
| `referral-code`   | string or null   | Personal invite/referral code.                                        |
| `referred-people` | integer or null  | Number of referrals credited to this account.                         |
| `owned-tlds`      | array of strings | List of parent TLDs under which this account can register subdomains. |

### 404 Not Found

User account could not be found.

```json
{
  "detail": "Could not find user"
}
```

### 462 Missing Permission

The API key lacks the `userdetails` intent.
