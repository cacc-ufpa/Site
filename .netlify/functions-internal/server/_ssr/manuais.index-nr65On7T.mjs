import { c as manuais } from "./content-DBSdcx8y.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as PageHead } from "./Shell-C3NJ9Ov5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manuais.index-nr65On7T.js
var import_jsx_runtime = require_jsx_runtime();
function Manuais() {
	const cats = [...new Set(manuais.map((m) => m.category))].sort();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
		n: "06",
		title: "Manuais",
		kicker: "Base de conhecimento",
		children: "Procedimentos acadêmicos e orientações práticas, explicados passo a passo."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-5xl px-4 py-14 md:px-8",
		children: cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mb-12 grid gap-4 md:grid-cols-[14rem_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-mono text-sm uppercase text-deep",
				children: c
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: manuais.filter((m) => m.category === c).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "border-t-2 border-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/manuais/$slug",
					params: { slug: m.slug },
					className: "block py-4 hover:bg-neon",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl font-semibold",
						children: m.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm text-muted-foreground",
						children: m.description
					})]
				})
			}, m.slug)) })]
		}, c))
	})] });
}
//#endregion
export { Manuais as component };
