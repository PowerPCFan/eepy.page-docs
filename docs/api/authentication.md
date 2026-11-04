---
icon: lucide/key-round
---

# Authentication

eepy.page uses API keys to authenticate developer requests.

API keys support intents and optional domain scoping. This ensures that keys are restricted to the minimum required permissions, improving security.

---

## Creating an API Key

1. Head to the [API Keys dashboard](https://www.eepy.page/api/dashboard)
2. Configure the key:
    - **Name**: A name for the key. Does not impact functionality so it can be whatever you'd like, but name it something descriptive so you remember what it's for.
    - **Domain Scoping**: Choose whether to restrict the key to specific domains, or allow it full access to your domains
    - **Permissions (Intents)**: Select the capabilities you'd like to grant the API key access to.
3. Click "Create API Key" and copy your API key immediately. For security, keys are hashed upon creation and cannot be viewed again, so you'll have to create a new key if you lose it.

---

## Using your API Key

Include the API key in the `Authorization` header on every authenticated call:

```
Authorization: Bearer <YOUR_API_KEY_GOES_HERE>
```

### Request example

=== "Python"

    ```python
    import requests

    response = requests.get(
        "https://api.eepy.page/api/domains",
        headers={"Authorization": "Bearer supersecureapikeylol"},
    )

    print(response.json())
    ```

=== "bash"
    ```bash
    curl -H "Authorization: Bearer supersecureapikeylol" https://api.eepy.page/api/domains
    ```

---

## Intents

Every API key is assigned one or more intents. If an endpoint is called with an API key that is missing the required intent, the server returns HTTP `462`.

| Intent | Capability | Endpoints |
| :--- | :--- | :--- |
| `list` | View all registered domains under your account | [`GET /api/domains`](endpoints/list-domains.md) |
| `register` | Create DNS records | [`POST /api/domain`](endpoints/register-domain.md) |
| `modify` | Update DNS records | [`PATCH /api/domain`](endpoints/modify-domain.md) |
| `delete` | Delete DNS records | [`DELETE /api/domain`](endpoints/delete-domain.md) |
| `userdetails` | Access user profile details, quotas, and other info | [`GET /api/user`](endpoints/get-user.md) |

!!! tip
    You can check what intents are active on your current key at runtime by calling [`GET /api/intents`](endpoints/get-intents.md).

---

## Domain Scoping

When issuing an API key, you can scope it to specific subdomains instead of your entire account:

- **Global Scope**: The key can perform its permitted actions on any domain owned by the account.
- **Restricted Scope**: The key can only modify or delete the specified domains.

If an API key attempts to call [`PATCH /api/domain`](endpoints/modify-domain.md) or [`DELETE /api/domain`](endpoints/delete-domain.md) on a domain outside its scope, the API returns `ApiRangeError` (HTTP `461`):

```json
{
  "message": "API key cannot do operations on requested domain",
  "detail": ["other.eepy.page"]
}
```
