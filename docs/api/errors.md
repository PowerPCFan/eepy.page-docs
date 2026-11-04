---
icon: lucide/alert-triangle
---

# Errors

When you make an API request, the eepy.page API returns an HTTP status code along with a response body. Whether the request was a success or an error is up to you to determine by using status codes and response bodies.

!!! warning "Quirks"
    The eepy.page API uses many nonstandard status codes. We are planning on fixing this in the future, by moving to standard codes, error messages returned by the server, and centralized enums instead of requiring developers to write cases and error descriptions for tons of different status codes.

    We are also working on standardizing response bodies. This is all part of an ongoing effort to streamline the eepy.page experience—whether it's end users, developers, or maintainers like me, the process will be smoother going forward. We thank you for your patience!

---

## Error Response Format

Errors are returned in JSON format. Most error responses contain a `message` and/or a `detail` property explaining what went wrong:

```json
{
  "detail": "Domain mycoolsite.eepy.page is not available"
}
```

Or for API key errors:

```json
{
  "message": "API key does not have the necessary permissions to perform this action",
  "detail": ["register"]
}
```

---

## Status Codes

| Status Code | Error Type           | Description |
| :---        | :---                 | :--- |
| **`460`**   | `ApiError`           | **Invalid or missing API key**. The `Authorization: Bearer <key>` header was missing, malformed, or the key provided was invalid/expired/revoked. |
| **`461`**   | `ApiRangeError`      | **Out of scope**. The API key is valid, but does not have the scope to do what you requested. |
| **`462`**   | `ApiPermissionError` | **Missing intent / permission**. The API key does not have the required capability (e.g. `register`, `modify`, `delete`, `list`, or `userdetails`). |

### Examples

#### 460 Invalid API Key
```json
{
  "message": "Invalid API key",
  "detail": ["API key not found"]
}
```

#### 461 Domain Out of Scope
```json
{
  "message": "API key cannot do operations on requested domain",
  "detail": ["sub.eepy.page"]
}
```

#### 462 Missing Permission
```json
{
  "message": "API key does not have the necessary permissions to perform this action",
  "detail": ["modify"]
}
```

---

## Standardized HTTP Status Codes

| Status Code | Name                  | Typical Cause |
| :---        | :---                  | :--- |
| **`200`**   | OK                    | All good; request completed successfully |
| **`400`**   | Bad Request           | Invalid domain name/attempting to delete domain while child subdomains still exist |
| **`401`**   | Unauthorized          | The account does not own the required base TLD. |
| **`403`**   | Forbidden             | You do not own the requested domain, or you tried to register a nested subdomain without owning the parent domain (e.g. a.b.eepy.page without b.eepy.page). |
| **`404`**   | Not Found             | Object not found/could not be determined |
| **`405`**   | Method Not Allowed    | Account has reached domain registration limits |
| **`409`**   | Conflict              | Domain already registered / conflicting DNS record exists |
| **`412`**   | Precondition Failed   | Unsupported record type / values invalid for specified record type |
| **`429`**   | Too Many Requests     | Rate limit exceeded, retry shortly |
| **`500`**   | Internal Server Error | An unhandled exception occurred |
