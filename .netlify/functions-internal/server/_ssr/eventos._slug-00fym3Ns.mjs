import { f as renderMarkdown, o as fmtDate } from "./content-DBSdcx8y.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Cover } from "./Shell-C3NJ9Ov5.mjs";
import { t as Route } from "./eventos._slug-CT_2pdJH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/eventos._slug-00fym3Ns.js
var import_jsx_runtime = require_jsx_runtime();
function EventoPage() {
	const e = Route.useLoaderData();
	const { html } = renderMarkdown(e.body);
	const d = fmtDate(e.date);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-7xl px-4 py-10 md:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/eventos",
			className: "font-mono text-xs uppercase link-under",
			children: "← Agenda"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-10 md:grid-cols-[2fr_3fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
				src: e.image,
				alt: e.title,
				tone: "violet",
				className: "aspect-[3/4] w-full"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tag bg-coral text-ink",
						children: e.category
					}), e.past && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tag bg-ink text-paper",
						children: "Encerrado"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display mt-4 text-6xl md:text-8xl",
					children: e.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-8 grid grid-cols-2 gap-4 border-y-2 border-ink py-4 font-mono text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "opacity-60",
							children: "Data"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: d.full })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "opacity-60",
							children: "Horário"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: e.time })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "opacity-60",
							children: "Local"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: e.location })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "opacity-60",
							children: "Organização"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: e.organizer })] })
					]
				}),
				e.registration_url && !e.past && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: e.registration_url,
					target: "_blank",
					rel: "noreferrer",
					className: "display mt-6 inline-block bg-neon px-5 py-3 text-2xl hover:bg-ink hover:text-neon",
					children: "Inscrever-se →"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "prose-cacc mt-8",
					dangerouslySetInnerHTML: { __html: html }
				})
			] })]
		})]
	});
}
//#endregion
export { EventoPage as component };
