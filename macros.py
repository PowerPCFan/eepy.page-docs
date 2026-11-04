import os


def define_env(env):
    @env.macro
    def get_svg(filename: str) -> str:
        base_dir = os.path.join(os.path.dirname(__file__), "docs")
        file_path = os.path.join(base_dir, filename)
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                return f.read()
        except FileNotFoundError:
            return "<!-- get_svg(): svg not found -->"

    def clean_method(method_raw: str) -> str:
        return method_raw.strip().lower().replace("<", "&lt;").replace(">", "&gt;")

    @env.macro
    def badge(method_raw: str) -> str:
        method = clean_method(method_raw)
        return f'<span class="badge badge-{method}">{method.upper()}</span>'

    @env.macro
    def badge_path(method_raw: str, path: str) -> str:
        method = clean_method(method_raw)
        return f'<span class="badge badge-path badge-{method}">{method.upper()} <code>{path}</code></span>'
