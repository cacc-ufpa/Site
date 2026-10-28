import { r as __toESM } from "../_runtime.mjs";
import { n as acervo, t as ACERVO_CATEGORIAS } from "./content-DBSdcx8y.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as PageHead } from "./Shell-C3NJ9Ov5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/acervo-BZRFljZn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tones = [
	"bg-deep text-neon",
	"bg-violet text-paper",
	"bg-coral text-ink",
	"bg-ink text-neon",
	"bg-neon text-ink"
];
function Acervo() {
	const [cat, setCat] = (0, import_react.useState)(null);
	const cats = ACERVO_CATEGORIAS.filter((c) => acervo.some((r) => r.category === c));
	const list = acervo.filter((r) => !cat || r.category === cat);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
			n: "05",
			title: "Acervo",
			kicker: "Biblioteca",
			tone: "violet",
			children: "Livros, cursos, vídeos e ferramentas gratuitas, organizados por área."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sticky top-[58px] z-30 border-b-2 border-ink bg-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-3 md:px-8",
				role: "group",
				"aria-label": "Filtrar por área",
				children: [null, ...cats].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCat(c),
					"aria-pressed": cat === c,
					className: `shrink-0 border-2 border-ink px-3 py-1 text-sm font-semibold ${cat === c ? "bg-ink text-neon" : "hover:bg-neon"}`,
					children: c ?? "Tudo"
				}, c ?? "all"))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-7xl gap-x-6 gap-y-10 px-4 py-14 sm:grid-cols-2 md:px-8 lg:grid-cols-4",
			children: list.map((r) => {
				const tone = tones[ACERVO_CATEGORIAS.indexOf(r.category) % tones.length];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: r.url,
					target: "_blank",
					rel: "noreferrer",
					className: "group flex flex-col",
					children: [
						r.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: r.image,
							alt: r.title,
							className: "aspect-[3/4] w-full object-cover",
							loading: "lazy"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `flex aspect-[3/4] flex-col justify-between p-4 ${tone}`,
							"aria-hidden": true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[0.65rem] uppercase",
									children: r.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "display line-clamp-5 text-3xl",
									children: r.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs uppercase",
									children: r.type
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tag mt-3 self-start bg-ink text-neon",
							children: r.type
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-2 flex items-start gap-1 text-lg font-semibold group-hover:text-violet",
							children: [
								r.title,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "mt-1 size-4 shrink-0" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: r.description
						})
					]
				}, r.slug);
			})
		})
	] });
}
//#endregion
export { Acervo as component };
