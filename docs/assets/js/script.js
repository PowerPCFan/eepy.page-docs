const replacements = {
    "Api": "API",
}

function fixCaps(str) {
    for (const [key, value] of Object.entries(replacements)) str = str.replaceAll(key, value);
    return str;
}

document$.subscribe(() => {
    document.querySelectorAll("a").forEach(link => {
        const url = new URL(link.href, window.location.href);

        // External link handling
        if (
            (url.protocol === "http:" || url.protocol === "https:") &&
            url.hostname !== window.location.hostname
        ) {
            link.target = "_blank";
            link.rel = "noopener noreferrer";

            let canCreateSVG = true;

            if (link.querySelector(".external-link-icon")) canCreateSVG = false;
            if (link.href === "https://github.com/PowerPCFan/eepy.page") canCreateSVG = false;

            if (canCreateSVG) {
                const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.setAttribute("viewBox", "0 0 24 24");
                svg.setAttribute("width", "0.85em");
                svg.setAttribute("height", "0.85em");
                svg.setAttribute("fill", "none");
                svg.setAttribute("stroke", "currentColor");
                svg.setAttribute("stroke-width", "2");
                svg.setAttribute("stroke-linecap", "round");
                svg.setAttribute("stroke-linejoin", "round");
                svg.setAttribute("aria-hidden", "true");
                svg.classList.add("external-link-icon");
                const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                path.setAttribute("d", "M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6");
                svg.appendChild(path);
                link.appendChild(svg);
            }
        }

        // "API" capitalization handling
        if (link.href.endsWith("/api/")) {
            const treeHugger = document.createTreeWalker(link, NodeFilter.SHOW_TEXT);
            while (treeHugger.nextNode()) treeHugger.currentNode.textContent = fixCaps(treeHugger.currentNode.textContent);
        }

        // Change header link icon
        if (link.classList.contains("headerlink") && !link.querySelector(".lucide-hash")) {
            link.innerHTML = `<span style="position: relative; top: 0.1em;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="0.85em" height="0.85em" class="lucide lucide-hash" viewBox="0 0 24 24"><path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/></svg></span>`;
        }
    });
});