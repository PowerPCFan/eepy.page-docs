---
icon: lucide/terminal
---

# Overview

Welcome to the eepy.page API documentation. The eepy.page API allows developers to manage eepy.page domains, DNS records, accounts, and more.

---

## Architecture

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">

    <a href="authentication/" class="group flex flex-col gap-1 rounded-xl border border-gray-200/10 bg-white/3 p-5 no-underline! text-inherit transition-all! duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white/6">
        <div class="flex items-center gap-3">
            <div class="flex size-9 items-center justify-center rounded-lg bg-primary/15 text-primary *:size-5">
                {{ get_svg('assets/icons/lucide/key-round.svg') }}
            </div>
            <h3 class="m-0! text-base font-semibold">Authentication</h3>
        </div>
        <p class="m-0 mt-2 text-xs leading-relaxed text-gray-400">
            How API keys, authentication, and permissions work
        </p>
    </a>

    <a href="dns-records/" class="group flex flex-col gap-1 rounded-xl border border-gray-200/10 bg-white/3 p-5 no-underline! text-inherit transition-all! duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white/6">
        <div class="flex items-center gap-3">
            <div class="flex size-9 items-center justify-center rounded-lg bg-primary/15 text-primary *:size-5">
                {{ get_svg('assets/icons/lucide/globe.svg') }}
            </div>
            <h3 class="m-0! text-base font-semibold">DNS and Subdomains</h3>
        </div>
        <p class="m-0 mt-2 text-xs leading-relaxed text-gray-400">
            Record types, ownership, and subdomain hierarchies
        </p>
    </a>

    <a href="errors/" class="group flex flex-col gap-1 rounded-xl border border-gray-200/10 bg-white/3 p-5 no-underline! text-inherit transition-all! duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white/6">
        <div class="flex items-center gap-3">
            <div class="flex size-9 items-center justify-center rounded-lg bg-primary/15 text-primary *:size-5">
                {{ get_svg('assets/icons/lucide/alert-triangle.svg') }}
            </div>
            <h3 class="m-0! text-base font-semibold">Errors</h3>
        </div>
        <p class="m-0 mt-2 text-xs leading-relaxed text-gray-400">
            Explanations of eepy.page status codes
        </p>
    </a>

    <a href="endpoints/" class="group flex flex-col gap-1 rounded-xl border border-gray-200/10 bg-white/3 p-5 no-underline! text-inherit transition-all! duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white/6">
        <div class="flex items-center gap-3">
            <div class="flex size-9 items-center justify-center rounded-lg bg-primary/15 text-primary *:size-5">
                {{ get_svg('assets/icons/lucide/list.svg') }}
            </div>
            <h3 class="m-0! text-base font-semibold">Endpoints</h3>
        </div>
        <p class="m-0 mt-2 text-xs leading-relaxed text-gray-400">
            Documentation for every API endpoint, complete with request and response samples
        </p>
    </a>

</div>

---

## URLs and Payloads

Main API URL:

```text
https://api.eepy.page
```

Beta/alpha APIs (may not be up at all times):

```text
https://beta.eepy.page
https://alpha.eepy.page
```

All requests and responses use JSON.

---

## Rate Limits

The API enforces rate limits on both an IP and account basis. When you hit a rate limit, requests start returning HTTP `429 Too Many Requests`.

Rate limits may be annoying when you're a legitimate user, but every service has them and they're important for reducing spam and abuse of our API, so please do not attempt to circumvent them in any way—they should be plenty sufficient for 99% of use cases.
