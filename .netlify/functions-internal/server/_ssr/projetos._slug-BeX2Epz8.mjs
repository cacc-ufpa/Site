import { f as renderMarkdown } from "./content-DBSdcx8y.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Cover } from "./Shell-C3NJ9Ov5.mjs";
import { t as Route } from "./projetos._slug-DVseuz66.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projetos._slug-BeX2Epz8.js
var import_jsx_runtime = require_jsx_runtime();
function ProjetoPage() {
	const p = Route.useLoaderData();
	const { html } = renderMarkdown(p.body);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-5xl px-4 py-10 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/projetos",
				className: "font-mono text-xs uppercase link-under",
				children: "← Projetos"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mt-6 grid gap-8 border-b-2 border-ink pb-8 md:grid-cols-[12rem_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
					src: p.image,
					alt: p.title,
					tone: "deep",
					className: "aspect-square w-48"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					p.month_project && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tag bg-violet text-paper",
						children: "Projeto do mês"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display mt-3 text-6xl md:text-7xl",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-lg",
						children: p.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-mono text-xs uppercase",
						children: p.author
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-1",
						children: p.technologies.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tag bg-ink text-neon",
							children: t
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [p.repository_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: p.repository_url,
							target: "_blank",
							rel: "noreferrer",
							className: "bg-ink px-4 py-2 font-semibold text-neon hover:bg-deep",
							children: "Repositório →"
						}), p.demo_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: p.demo_url,
							target: "_blank",
							rel: "noreferrer",
							className: "bg-neon px-4 py-2 font-semibold text-ink hover:bg-ink hover:text-neon",
							children: "Demonstração →"
						})]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "prose-cacc mt-8",
				dangerouslySetInnerHTML: { __html: html }
			})
		]
	});
}
//#endregion
export { ProjetoPage as component };
