---
title: Delete Domain
icon: lucide/trash-2
---

# Delete Domain Record

{{ badge_path("DELETE", "/api/domain") }}

Deletes a domain or a specific DNS record.

---

## Authentication

- **Header**: `Authorization: Bearer <API_KEY>`
- **Required Intent**: `delete`
- **Domain Scope**: The target domain must be included in the API key's allowed domains list (or `*`).

---

## Query Parameters

| Parameter | Type   | Required | Description                                                                                                                                |
| :-------- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| `domain`  | string | **Yes**  | Fully qualified domain name to delete.                                                                                                     |
| `type`    | string | Optional | Specific record type to delete (`A`, `AAAA`, `CNAME`, `TXT`). If omitted, the server looks up the user's active record type automatically. |

!!! warning
    A domain cannot be deleted if active subdomains exist underneath it. For example, if you have `api.dev.eepy.page`, you must delete `api.dev.eepy.page` before you can delete `dev.eepy.page`.

---

## Request Examples

=== "curl"

    ```bash
    curl -X DELETE "https://api.eepy.page/api/domain?domain=homelab.eepy.page&type=A" \
      -H "Authorization: Bearer YOUR_API_KEY"
    ```

=== "Python"

    ```python
    import requests

    headers = {"Authorization": "Bearer YOUR_API_KEY"}
    params = {"domain": "homelab.eepy.page", "type": "A"}

    resp = requests.delete("https://api.eepy.page/api/domain", headers=headers, params=params)
    print(resp.status_code)
    ```

---

## Responses

### 200 OK

Domain deleted successfully.

### 400 Bad Request

Subdomains still exist under this domain. Subdomains must be deleted first.

```json
{
  "detail": "Cannot delete domain while subdomains exist (api.homelab.eepy.page). Please delete subdomains first."
}
```

### 403 Forbidden

The domain does not exist or your account does not own it.

```json
{
  "detail": "Domain does not exist, or user does not own it."
}
```

### 404 Not Found

Record type could not be automatically determined. Provide the `type` query parameter explicitly.

```json
{
  "detail": "Domain type could not be fetched. Please specify it manually with the `type` query param"
}
```

### 461 Range Error

The API key is restricted and does not have permission to delete this domain.

```json
{
  "message": "API key cannot do operations on requested domain",
  "detail": ["homelab.eepy.page"]
}
```

### 462 Missing Permission

The API key lacks the `delete` intent.
