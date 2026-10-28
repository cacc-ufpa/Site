import { c as manuais, d as proximosEventos, n as acervo, o as fmtDate, r as avisos, u as projetos } from "./content-DBSdcx8y.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as Cover } from "./Shell-C3NJ9Ov5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CprzHnrJ.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const [main, ...rest] = proximosEventos;
	const aviso = avisos[0];
	const destaques = projetos.slice(0, 4);
	const materiais = [...manuais.map((m) => ({
		key: "m" + m.slug,
		type: "Manual",
		title: m.title,
		to: "/manuais/$slug",
		slug: m.slug,
		href: ""
	})), ...acervo.map((r) => ({
		key: "a" + r.slug,
		type: r.type,
		title: r.title,
		to: null,
		slug: "",
		href: r.url
	}))].slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden border-b-2 border-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-4 pb-12 pt-10 md:col-span-8 md:px-8 md:pt-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2 font-mono text-xs uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tag bg-ink text-neon",
								children: "Edição permanente"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Centro Acadêmico de Ciência da Computação" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "display mt-8 text-[18vw] md:text-[10.5rem]",
							children: [
								"Código",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-[0.6em] bg-neon px-2",
									children: "aberto,"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"curso ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-violet",
									children: "vivo."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-lg text-lg",
							children: "O CACC representa os estudantes de Computação, organiza eventos, divulga o que a gente constrói e reúne o que todo mundo precisa saber para sobreviver ao curso."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "flex flex-col border-t-2 border-ink bg-deep text-paper md:col-span-4 md:border-l-2 md:border-t-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "display p-6 text-[7rem] leading-none text-neon md:text-[9rem]",
						children: "CC"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Nesta edição",
						className: "mt-auto",
						children: [
							[
								"/eventos",
								"Agenda",
								"01"
							],
							[
								"/projetos",
								"Projetos",
								"03"
							],
							[
								"/acervo",
								"Acervo",
								"05"
							],
							[
								"/manuais",
								"Manuais",
								"06"
							]
						].map(([to, label, n]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to,
							className: "flex items-center justify-between border-t border-paper/20 px-6 py-4 hover:bg-neon hover:text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "display text-3xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mr-3 font-mono text-xs opacity-60",
									children: n
								}), label]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						}, to))
					})]
				})]
			})
		}),
		aviso && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: aviso.important ? "bg-violet text-paper" : "bg-neon text-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 md:flex-row md:items-center md:gap-8 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tag self-start bg-coral text-ink",
						children: "Aviso do CA"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "display text-3xl md:text-4xl",
						children: aviso.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm opacity-90 md:ml-auto md:max-w-sm",
						children: aviso.body.trim()
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-16 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				n: "01",
				title: "Próximos eventos",
				to: "/eventos"
			}), main ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/eventos/$slug",
					params: { slug: main.slug },
					className: "group grid md:col-span-8 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
						src: main.image,
						alt: main.title,
						tone: "violet",
						className: "aspect-[4/5] w-full"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col bg-ink p-6 text-paper",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateBlock, { date: main.date }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "tag mt-6 self-start bg-coral text-ink",
								children: main.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display mt-3 text-5xl group-hover:text-neon",
								children: main.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-auto pt-6 font-mono text-xs",
								children: [
									main.time,
									" · ",
									main.location
								]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "md:col-span-4",
					children: [rest.slice(0, 4).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-t-2 border-ink",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/eventos/$slug",
							params: { slug: e.slug },
							className: "flex gap-4 py-4 hover:bg-neon",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "display w-16 shrink-0 text-4xl",
								children: fmtDate(e.date).day
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs uppercase",
								children: [
									fmtDate(e.date).month,
									" · ",
									e.category
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-lg font-semibold",
								children: e.title
							})] })]
						})
					}, e.slug)), rest.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-t-2 border-ink py-4 text-sm text-muted-foreground",
						children: "Mais eventos em breve."
					})]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Nenhum evento agendado no momento."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-neon",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-16 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					n: "03",
					title: "Feito por aqui",
					to: "/projetos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4",
					children: destaques.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/projetos/$slug",
						params: { slug: p.slug },
						className: `group ${i % 2 ? "lg:mt-12" : ""}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
								src: p.image,
								alt: p.title,
								tone: i % 2 ? "ink" : "deep",
								className: "aspect-square w-32"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display mt-4 text-3xl group-hover:underline",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm",
								children: p.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-mono text-xs uppercase opacity-70",
								children: p.author
							})
						]
					}, p.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1fr_2fr] md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-neon",
						children: "05 / 06"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display mt-2 text-6xl",
						children: "Últimos materiais"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex gap-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/acervo",
							className: "link-under",
							children: "Acervo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/manuais",
							className: "link-under",
							children: "Manuais"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: materiais.map((m) => {
					const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `tag w-24 shrink-0 text-center ${m.to ? "bg-coral text-ink" : "bg-neon text-ink"}`,
							children: m.type
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1 text-lg",
							children: m.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "shrink-0 opacity-50" })
					] });
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-t border-paper/20",
						children: m.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: m.to,
							params: { slug: m.slug },
							className: "flex items-center gap-4 py-4 hover:text-neon",
							children: inner
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: m.href,
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center gap-4 py-4 hover:text-neon",
							children: inner
						})
					}, m.key);
				}) })]
			})
		})
	] });
}
function SectionTitle({ n, title, to }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-10 flex items-end justify-between gap-4 border-b-2 border-current pb-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "display text-5xl md:text-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mr-3 align-top font-mono text-sm",
				children: n
			}), title]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to,
			className: "shrink-0 font-mono text-xs uppercase link-under",
			children: "Ver tudo →"
		})]
	});
}
function DateBlock({ date }) {
	const d = fmtDate(date);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-end gap-2 text-neon",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "display text-8xl",
			children: d.day
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "pb-2 font-mono text-sm uppercase",
			children: [
				d.month,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				d.year
			]
		})]
	});
}
//#endregion
export { SectionTitle, Home as component };
