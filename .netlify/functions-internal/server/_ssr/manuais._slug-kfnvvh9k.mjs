import { f as renderMarkdown, o as fmtDate } from "./content-DBSdcx8y.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Route } from "./manuais._slug-9MqQthIo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manuais._slug-kfnvvh9k.js
var import_jsx_runtime = require_jsx_runtime();
function ManualPage() {
	const m = Route.useLoaderData();
	const { html, headings } = renderMarkdown(m.body);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-6xl px-4 py-10 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/manuais",
				className: "font-mono text-xs uppercase link-under",
				children: "← Manuais"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mt-6 border-b-2 border-ink pb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "tag bg-deep text-paper",
						children: m.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display mt-3 text-5xl md:text-7xl",
						children: m.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-lg",
						children: m.description
					}),
					m.updated && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-mono text-xs",
						children: ["Atualizado em ", fmtDate(m.updated).full]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-10 lg:grid-cols-[1fr_14rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					headings.length > 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "mb-6 border-2 border-ink p-3 lg:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
							className: "font-mono text-sm uppercase",
							children: "Sumário"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toc, { headings })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "prose-cacc",
						dangerouslySetInnerHTML: { __html: html }
					}),
					m.related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "mt-10 max-w-[68ch] bg-neon p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display text-2xl",
							children: "Recursos relacionados"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2",
							children: m.related.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: r.url,
								target: "_blank",
								rel: "noreferrer",
								className: "link-under",
								children: r.label
							}) }, r.url))
						})]
					})
				] }), headings.length > 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Sumário",
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sticky top-24 border-l-4 border-neon pl-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase",
							children: "Sumário"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toc, { headings })]
					})
				})]
			})
		]
	});
}
function Toc({ headings }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "mt-2 space-y-1 text-sm",
		children: headings.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: `#${h.id}`,
			className: "hover:text-violet",
			children: h.text
		}) }, h.id))
	});
}
//#endregion
export { ManualPage as component };
