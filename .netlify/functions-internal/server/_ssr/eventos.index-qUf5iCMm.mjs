import { a as eventosPassados, d as proximosEventos, o as fmtDate } from "./content-DBSdcx8y.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as PageHead, t as Cover } from "./Shell-C3NJ9Ov5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/eventos.index-qUf5iCMm.js
var import_jsx_runtime = require_jsx_runtime();
var tones = [
	"violet",
	"coral",
	"deep",
	"ink"
];
function Card({ e, i }) {
	const d = fmtDate(e.date);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/eventos/$slug",
		params: { slug: e.slug },
		className: "group block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
				src: e.image,
				alt: e.title,
				tone: tones[i % 4],
				className: `w-full ${i % 3 === 1 ? "aspect-square" : "aspect-[3/4]"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 font-mono text-xs uppercase",
				children: [
					d.full,
					" · ",
					e.time,
					" · ",
					e.category
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "display mt-1 text-3xl group-hover:text-violet",
				children: e.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: e.location
			})
		]
	});
}
function Eventos() {
	const [main, ...rest] = proximosEventos;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
			n: "01",
			title: "Agenda",
			kicker: "Eventos",
			children: "Palestras, oficinas, semanas acadêmicas e encontros da comunidade."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-14 md:px-8",
			children: [
				main && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/eventos/$slug",
					params: { slug: main.slug },
					className: "group mb-16 grid border-2 border-ink md:grid-cols-[2fr_3fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
						src: main.image,
						alt: main.title,
						tone: "violet",
						className: "aspect-[3/4] w-full md:aspect-auto md:min-h-[28rem]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col bg-neon p-6 md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tag self-start bg-ink text-neon",
								children: "Em destaque"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display mt-6 text-6xl md:text-8xl",
								children: main.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-auto grid grid-cols-2 gap-4 pt-10 font-mono text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "opacity-60",
										children: "Data"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: fmtDate(main.date).full })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "opacity-60",
										children: "Horário"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: main.time })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "opacity-60",
										children: "Local"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: main.location })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "opacity-60",
										children: "Organização"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: main.organizer })] })
								]
							})
						]
					})]
				}),
				rest.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-10 sm:grid-cols-2 lg:grid-cols-3",
					children: rest.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						e,
						i
					}, e.slug))
				}),
				!main && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Nenhum evento agendado no momento."
				})
			]
		}),
		eventosPassados.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-14 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display mb-8 text-5xl text-neon",
					children: "Arquivo"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: eventosPassados.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-t border-paper/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/eventos/$slug",
						params: { slug: e.slug },
						className: "grid gap-2 py-4 hover:text-neon md:grid-cols-[10rem_1fr_auto]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-sm",
								children: fmtDate(e.date).full
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg font-semibold",
								children: e.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs uppercase opacity-60",
								children: e.category
							})
						]
					})
				}, e.slug)) })]
			})
		})
	] });
}
//#endregion
export { Eventos as component };
