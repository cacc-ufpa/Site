import { p as site, u as projetos } from "./content-DBSdcx8y.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as PageHead, t as Cover } from "./Shell-C3NJ9Ov5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projetos.index-Bd3GvNpM.js
var import_jsx_runtime = require_jsx_runtime();
function Projetos() {
	const doMes = projetos.find((p) => p.month_project);
	const outros = projetos.filter((p) => p !== doMes);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
			n: "03",
			title: "Projetos",
			kicker: "Vitrine",
			tone: "neon",
			children: "Software feito por estudantes: bots, compiladores, ferramentas e experimentos."
		}),
		doMes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b-2 border-ink bg-violet text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-[auto_1fr_auto] md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
						src: doMes.image,
						alt: doMes.title,
						tone: "neon",
						className: "aspect-square w-40"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tag bg-neon text-ink",
							children: "Projeto do mês"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/projetos/$slug",
							params: { slug: doMes.slug },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display mt-3 text-5xl hover:underline md:text-6xl",
								children: doMes.title
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xl",
							children: doMes.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-mono text-xs uppercase opacity-80",
							children: doMes.author
						})
					] }),
					site.vote_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: site.vote_url,
						target: "_blank",
						rel: "noreferrer",
						className: "display self-start bg-paper px-5 py-3 text-2xl text-ink hover:bg-neon md:self-center",
						children: "Votar no próximo →"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 py-14 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children: outros.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "border-t-2 border-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/projetos/$slug",
					params: { slug: p.slug },
					className: "group grid items-center gap-6 py-6 md:grid-cols-[3rem_6rem_1fr_1fr]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "display text-3xl opacity-40",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
							src: p.image,
							alt: p.title,
							tone: i % 2 ? "coral" : "deep",
							className: "aspect-square w-24"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "display text-4xl group-hover:text-violet",
							children: p.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase opacity-70",
							children: p.author
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p.description }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-1",
							children: p.technologies.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tag bg-ink text-neon",
								children: t
							}, t))
						})] })
					]
				})
			}, p.slug)) })
		})
	] });
}
//#endregion
export { Projetos as component };
