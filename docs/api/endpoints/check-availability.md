---
title: Check Availability
icon: lucide/search
---

# Check Domain Availability

{{ badge_path("GET", "/api/domain/available") }}

Checks whether a domain name is available for registration.

---

## Authentication

- **Required**: None (Public)

---

## Query Parameters

| Parameter | Type   | Required | Description                                                       |
| :-------- | :----- | :------- | :---------------------------------------------------------------- |
| `name`    | string | **Yes**  | Fully qualified domain name to check (e.g. `coolsite.eepy.page`). |

---

## Request Examples

=== "curl"

    ```bash
    curl -X GET "https://api.eepy.page/api/domain/available?name=coolsite.eepy.page"
    ```

=== "Python"

    ```python
    import requests

    params = {"name": "coolsite.eepy.page"}
    resp = requests.get("https://api.eepy.page/api/domain/available", params=params)

    if resp.status_code == 200:
        print("Domain is available!")
    elif resp.status_code == 409:
        print("Domain is taken:", resp.json())
    ```

=== "JavaScript"

    ```javascript
    const resp = await fetch("https://api.eepy.page/api/domain/available?name=coolsite.eepy.page");
    if (resp.status_code === 200) {
      console.log("Domain is available!");
    } else {
      console.log("Domain taken:", await resp.json());
    }
    ```

---

## Responses

### 200 OK

Returned when the requested domain is available for registration.

```json
null
```

### 409 Conflict

Returned when the domain is already registered or reserved.

```json
{
  "detail": "Domain coolsite.eepy.page is not available"
}
```
