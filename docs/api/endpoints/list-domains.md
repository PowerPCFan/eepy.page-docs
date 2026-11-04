---
title: List Domains
icon: lucide/list
---

# List Registered Domains

{{ badge_path("GET", "/api/domains") }}

Retrieves all domains and DNS records owned by the account associated with the provided API key.

---

## Authentication

- **Header**: `Authorization: Bearer <API_KEY>`
- **Required Intent**: `list`

---

## Query Parameters & Body

This endpoint accepts no query parameters and no request body.

---

## Request Examples

=== "curl"

    ```bash
    curl -X GET "https://api.eepy.page/api/domains" \
      -H "Authorization: Bearer YOUR_API_KEY"
    ```

=== "Python"

    ```python
    import requests

    headers = {"Authorization": "Bearer YOUR_API_KEY"}
    resp = requests.get("https://api.eepy.page/api/domains", headers=headers)
    print(resp.json())
    ```

=== "JavaScript"

    ```javascript
    const resp = await fetch("https://api.eepy.page/api/domains", {
      headers: {
        "Authorization": "Bearer YOUR_API_KEY"
      }
    });
    const domains = await resp.json();
    console.log(domains);
    ```

---

## Responses

### 200 OK

Returns an array of domain records registered by the user.

```json
[
  {
    "name": "alpha.eepy.page",
    "type": "A",
    "ip": ["192.0.2.1"],
    "registered": 1730592000
  },
  {
    "name": "beta.eepy.page",
    "type": "AAAA",
    "ip": ["2001:db8::1"],
    "registered": 1730592400
  },
  {
    "name": "canary.eepy.page",
    "type": "CNAME",
    "ip": ["target.example.com"],
    "registered": 1730592800
  }
]
```

#### Record Schema

| Field        | Type             | Description                                              |
| :----------- | :--------------- | :------------------------------------------------------- |
| `name`       | string           | Fully qualified domain name.                             |
| `type`       | string           | DNS record type (`A`, `AAAA`, `CNAME`, `TXT`).           |
| `ip`         | array of strings | Values or target hostnames assigned to this record.      |
| `registered` | integer          | Unix timestamp (seconds) when the domain was registered. |

### 460 Invalid Key

Returned if the API key is missing or invalid.

```json
{
  "message": "Invalid API key",
  "detail": ["API key not found"]
}
```

### 462 Missing Permission

Returned if the key lacks the `list` intent.

```json
{
  "message": "API key does not have the necessary permissions to perform this action",
  "detail": ["list"]
}
```
