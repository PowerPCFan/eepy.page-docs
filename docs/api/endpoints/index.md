---
icon: lucide/list
---

# Endpoints

This section contains documentation for each API endpoint available to developers. Does not cover endpoints that are not meant for use with user-created API keys.

---

## Endpoints List

<!--
| Method                | Path                                             | Intent Required        | Description                                        |
| :-------------------- | :----------------------------------------------- | :--------------------- | :------------------------------------------------- |
| {{ badge("GET") }}    | [`/api/domain/available`](check-availability.md) | None (No key required) | Check whether a subdomain is available to register |
| {{ badge("GET") }}    | [`/api/domains`](list-domains.md)                | `list`                 | List all domains owned by your account             |
| {{ badge("POST") }}   | [`/api/domain`](register-domain.md)              | `register`             | Register a new domain                              |
| {{ badge("PATCH") }}  | [`/api/domain`](modify-domain.md)                | `modify`               | Update DNS records                                 |
| {{ badge("DELETE") }} | [`/api/domain`](delete-domain.md)                | `delete`               | Remove a domain                                    |
| {{ badge("GET") }}    | [`/api/user`](get-user.md)                       | `userdetails`          | Retrieve user profile metadata                     |
| {{ badge("GET") }}    | [`/api/intents`](get-intents.md)                 | None (Any key)         | Retrieve the permission intents your key has       |
-->

| Docs                                        | Request                                          | Intent Required        | Description                                        |
| :------------------------------------------ | :----------------------------------------------- | :--------------------- | :------------------------------------------------- |
| [Check Availability](check-availability.md) | {{ badge_path("GET", "/api/domain/available") }} | None (No key required) | Check whether a subdomain is available to register |
| [List Domains](list-domains.md)             | {{ badge_path("GET", "/api/domains") }}          | `list`                 | List all domains owned by your account             |
| [Register Domain](register-domain.md)       | {{ badge_path("POST", "/api/domain") }}          | `register`             | Register a new domain                              |
| [Modify Record](modify-domain.md)           | {{ badge_path("PATCH", "/api/domain") }}         | `modify`               | Update DNS records                                 |
| [Delete Domain](delete-domain.md)           | {{ badge_path("DELETE", "/api/domain") }}        | `delete`               | Remove a domain                                    |
| [Get Profile](get-user.md)                  | {{ badge_path("GET", "/api/user") }}             | `userdetails`          | Retrieve user profile metadata                     |
| [Get Intents](get-intents.md)               | {{ badge_path("GET", "/api/intents") }}          | None (Any key)         | Retrieve the permission intents your key has       |
