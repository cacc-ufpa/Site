import { p as site, s as gestao } from "./content-DBSdcx8y.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as PageHead, t as Cover } from "./Shell-C3NJ9Ov5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gestao-HOSDJ-g3.js
var import_jsx_runtime = require_jsx_runtime();
function Gestao() {
	const destaque = gestao.members.filter((m) => m.highlight);
	const demais = gestao.members.filter((m) => !m.highlight);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
			n: "02",
			title: "Gestão",
			kicker: `Período ${site.gestao_periodo}`,
			tone: "deep",
			children: gestao.intro
		}),
		gestao.demo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "bg-coral px-4 py-3 text-center font-mono text-sm text-ink",
			children: "Demonstração: nomes, cargos e textos abaixo são fictícios."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 py-14 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-2",
				children: destaque.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[8rem_1fr] gap-5 border-t-4 border-ink pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
						src: m.photo,
						alt: m.name,
						tone: "neon",
						className: "aspect-[3/4] w-32"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "tag bg-violet text-paper",
							children: m.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display mt-3 text-4xl",
							children: m.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm",
							children: m.bio
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Links, { links: m.links })
					] })]
				}, m.name))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-7xl gap-x-6 gap-y-10 px-4 py-14 sm:grid-cols-2 md:px-8 lg:grid-cols-4",
				children: demais.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
						src: m.photo,
						alt: m.name,
						tone: [
							"deep",
							"coral",
							"violet"
						][i % 3],
						className: "aspect-[3/4] w-full"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-mono text-xs uppercase text-neon",
						children: m.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "display text-3xl",
						children: m.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-paper/70",
						children: m.bio
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Links, { links: m.links })
				] }, m.name))
			})
		})
	] });
}
function Links({ links }) {
	if (!links.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-2 flex gap-3 text-sm",
		children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: l.url,
			target: "_blank",
			rel: "noreferrer",
			className: "link-under",
			children: l.label
		}, l.url))
	});
}
//#endregion
export { Gestao as component };
