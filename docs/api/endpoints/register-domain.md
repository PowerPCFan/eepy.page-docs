---
title: Register Domain
icon: lucide/plus-circle
---

# Register Domain / Create Record

{{ badge_path("POST", "/api/domain") }}

Registers a new domain or creates a DNS record under your account.

---

## Authentication

- **Header**: `Authorization: Bearer <API_KEY>`
- **Required Intent**: `register`

---

## Request Body

| Field    | Type             | Required | Description                                                                                                                         |
| :------- | :--------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| `domain` | string           | **Yes**  | Fully qualified domain name to register (e.g. `homelab.eepy.page`).                                                                 |
| `type`   | string           | **Yes**  | DNS record type: `"A"`, `"AAAA"`, `"CNAME"`, or `"TXT"`.                                                                            |
| `values` | array of strings | **Yes**  | Record target value(s). For `A`, IPv4 addresses; for `AAAA`, IPv6 addresses; for `CNAME`, valid hostnames; for `TXT`, text strings. |

!!! note
    Hierarchy requirements: To register a multi-level subdomain like `dev.server.eepy.page`, your account must already own the parent domain `server.eepy.page`.

---

## Request Examples

=== "Python"

    ```python
    import requests

    headers = {
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json"
    }
    payload = {
        "domain": "homelab.eepy.page",
        "type": "A",
        "values": ["198.51.100.25"]
    }

    response = requests.post("https://api.eepy.page/api/domain", headers=headers, json=payload)
    print(response.status_code)
    ```

---

## Responses

### 200 OK

Domain registered and DNS record created successfully.

### 400 Bad Request

The provided domain name is invalid or malformed.

```json
{
  "detail": "Invalid record name"
}
```

### 401 Unauthorized

The base TLD has not been unlocked or purchased on this account.

```json
{
  "detail": "User must purchase TLD worksonmymachine.top before registering this domain"
}
```

### 403 Forbidden

The parent subdomain is not owned by your account.

```json
{
  "detail": "You need to own server.eepy.page before registering dev.server.eepy.page"
}
```

### 405 Method Not Allowed

Your account has exceeded its allocated domain quota.

```json
{
  "detail": "Domain limit reached for account"
}
```

### 409 Conflict

The domain name is already registered or a conflicting record exists in PowerDNS.

```json
{
  "detail": "Domain is already registered"
}
```

### 412 Precondition Failed

The DNS record type is invalid.

```json
{
  "detail": "Invalid type MX"
}
```

### 460 Invalid Key / 462 Missing Permission

Key is invalid or lacks the `register` intent.
