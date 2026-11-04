---
icon: lucide/home
hide:
    - toc
---

# Home

Welcome to the eepy.page docs. Choose what you're looking for.

<div class="grid grid-cols-1 sm:grid-cols-2 gap-5 my-8">

    <a href="guides/" class="group flex flex-col rounded-xl border border-gray-200/10 bg-white/3 p-6 no-underline! text-inherit transition-all! duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white/6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">

        <div class="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/15 *:size-6 *:text-white/80!">
            {{ get_svg('assets/icons/lucide/book-open.svg') }}
        </div>

        <div class="flex flex-col gap-1">
            <h2 class="m-0 text-lg font-semibold">Guides</h2>
            <p class="m-0 text-xs leading-relaxed text-gray-400">
                Find comprehensive guides to help you get started with using eepy.page.
            </p>
            <span class="mt-2 text-xs font-medium text-primary">
                Browse guides <span class="inline-block transition-transform! group-hover:translate-x-0.5">→</span>
            </span>
        </div>

    </a>

    <a href="api/" class="group flex flex-col rounded-xl border border-gray-200/10 bg-white/3 p-6 no-underline! text-inherit transition-all! duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white/6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">

        <div class="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/15 *:size-6 *:text-white/80!">
            {{ get_svg('assets/icons/lucide/code.svg') }}
        </div>

        <div class="flex flex-col gap-1 h-full">
            <h2 class="m-0 text-lg font-semibold">API Documentation</h2>
            <p class="m-0 text-xs leading-relaxed text-gray-400">
                Looking to develop something with our API? Check out the API docs here.
            </p>
            <div class="mt-auto text-xs font-medium text-primary">
                Explore API <span class="inline-block transition-transform! group-hover:translate-x-0.5">→</span>
            </div>
        </div>

    </a>

</div>