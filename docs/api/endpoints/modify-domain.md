---
title: Modify Record
icon: lucide/edit-3
---

# Modify Domain Record

{{ badge_path("PATCH", "/api/domain") }}

Updates the target values (e.g. IP address) or record type of an existing domain record.

---

## Authentication

- **Header**: `Authorization: Bearer <API_KEY>`
- **Required Intent**: `modify`
- **Domain Scope**: The target domain must be included in the API key's allowed domains list (or `*`).

---

## Request Body (`application/json`)

| Field      | Type             | Required | Description                                                                                                                       |
| :--------- | :--------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| `domain`   | string           | **Yes**  | Fully qualified domain name to modify (e.g. `homelab.eepy.page`).                                                                 |
| `type`     | string           | **Yes**  | Target DNS record type (`"A"`, `"AAAA"`, `"CNAME"`, or `"TXT"`).                                                                  |
| `values`   | array of strings | **Yes**  | The updated values (e.g. `["203.0.113.88"]`).                                                                                     |
| `old_type` | string           | Optional | Current record type. Required if converting an existing record from one type to another (e.g. changing an `A` record to `CNAME`). |

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
        "values": ["203.0.113.88"]
    }

    response = requests.patch("https://api.eepy.page/api/domain", headers=headers, json=payload)
    print(response.status_code)
    ```

---

## Responses

### 200 OK

Record updated and applied to DNS immediately.

### 403 Forbidden

The authenticated user does not own the requested domain.

```json
{
  "detail": "You do not own the domain homelab.eepy.page"
}
```

### 409 Conflict

A record of the requested new type already exists for this domain.

```json
{
  "detail": "Domain is already registered"
}
```

### 412 Precondition Failed

The record name or values are invalid (e.g., malformed IP address for type `A`).

```json
{
  "detail": "Invalid value in ['not-an-ip']"
}
```

### 461 Range Error

The API key is restricted to a specific domain list, and the requested domain is not in scope.

```json
{
  "message": "API key cannot do operations on requested domain",
  "detail": ["homelab.eepy.page"]
}
```

### 462 Missing Permission

The API key lacks the `modify` intent.
