---
icon: lucide/shield-check
---

# Get Intents

{{ badge_path("GET", "/api/intents") }}

Returns the list of intents granted to the currently authenticated API key.

---

## Authentication

* **Header**: `Authorization: Bearer <API_KEY>`
* **Required Intent**: None (Any valid API key can call this endpoint)

---

## Query Parameters & Body

This endpoint accepts no query parameters and no request body.

---

## Request Examples

=== "curl"

    ```bash
    curl -X GET "https://api.eepy.page/api/intents" \
      -H "Authorization: Bearer YOUR_API_KEY"
    ```

=== "Python"

    ```python
    import requests

    headers = {"Authorization": "Bearer YOUR_API_KEY"}
    resp = requests.get("https://api.eepy.page/api/intents", headers=headers)
    print("Granted intents:", resp.json())
    ```

---

## Responses

### 200 OK
Returns an array of strings representing the enabled intents on the active key.

```json
[
  "list",
  "modify",
  "register",
  "userdetails"
]
```

### 460 Invalid Key
Returned if the API key is missing or invalid.
