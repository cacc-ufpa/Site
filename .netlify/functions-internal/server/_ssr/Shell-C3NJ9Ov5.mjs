import { r as __toESM } from "../_runtime.mjs";
import { p as site } from "./content-DBSdcx8y.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Shell-C3NJ9Ov5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		to: "/",
		label: "Início",
		n: "00"
	},
	{
		to: "/eventos",
		label: "Eventos",
		n: "01"
	},
	{
		to: "/gestao",
		label: "Gestão",
		n: "02"
	},
	{
		to: "/projetos",
		label: "Projetos",
		n: "03"
	},
	{
		to: "/lojinha",
		label: "Lojinha",
		n: "04"
	},
	{
		to: "/acervo",
		label: "Acervo",
		n: "05"
	},
	{
		to: "/manuais",
		label: "Manuais",
		n: "06"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b-2 border-ink bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-stretch justify-between px-4 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2 py-3",
					"aria-label": "CACC — Início",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "display bg-ink px-2 py-1 text-2xl text-neon",
						children: "CACC"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hidden font-mono text-[0.65rem] uppercase leading-tight sm:block",
						children: [
							"Centro Acadêmico de",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Ciência da Computação"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Principal",
					className: "hidden lg:flex",
					children: NAV.slice(1).map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: i.to,
						className: "group flex items-center gap-1 border-l border-border px-4 text-sm font-semibold hover:bg-neon",
						activeProps: { className: "bg-ink text-neon hover:bg-ink" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[0.6rem] opacity-60",
							children: i.n
						}), i.label]
					}, i.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "flex items-center lg:hidden",
					onClick: () => setOpen(!open),
					"aria-expanded": open,
					"aria-label": open ? "Fechar menu" : "Abrir menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			"aria-label": "Principal (celular)",
			className: "border-t-2 border-ink bg-ink lg:hidden",
			children: NAV.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: i.to,
				onClick: () => setOpen(false),
				className: "flex items-baseline gap-3 border-b border-paper/10 px-4 py-3 text-paper",
				activeProps: { className: "text-neon" },
				activeOptions: { exact: i.to === "/" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs opacity-60",
					children: i.n
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "display text-3xl",
					children: i.label
				})]
			}, i.to))
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-ink text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[2fr_1fr_1fr] md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "display text-6xl text-neon md:text-8xl",
				children: "CACC"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-sm text-sm text-paper/70",
				children: "Portal do Centro Acadêmico de Ciência da Computação. Feito pela comunidade, para a comunidade."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Rodapé",
				className: "grid grid-cols-2 gap-2 text-sm md:col-span-2",
				children: NAV.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: i.to,
					className: "hover:text-neon",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mr-2 font-mono text-xs text-paper/50",
						children: i.n
					}), i.label]
				}, i.to))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-paper/10 px-4 py-4 text-center font-mono text-xs text-paper/50",
			children: [
				"gestão ",
				site.gestao_periodo,
				" · conteúdo em markdown · sem cookies"
			]
		})]
	});
}
function Placeholder({ label, tone = "deep", className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `grid-paper relative flex flex-col justify-between overflow-hidden p-3 ${{
			deep: "bg-deep text-neon",
			violet: "bg-violet text-paper",
			coral: "bg-coral text-ink",
			ink: "bg-ink text-neon",
			neon: "bg-neon text-ink"
		}[tone]} ${className}`,
		role: "img",
		"aria-label": `Sem imagem: ${label}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tag bg-ink/80 text-paper self-start",
			children: "imagem pendente"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "display line-clamp-3 text-2xl",
			children: label
		})]
	});
}
function Cover({ src, alt, tone = "deep", className = "" }) {
	return src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt,
		className: `object-cover ${className}`,
		loading: "lazy"
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, {
		label: alt,
		tone,
		className
	});
}
function PageHead({ n, title, kicker, tone = "paper", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `border-b-2 border-ink ${{
			paper: "bg-paper text-ink",
			ink: "bg-ink text-paper",
			neon: "bg-neon text-ink",
			violet: "bg-violet text-paper",
			deep: "bg-deep text-paper"
		}[tone]}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-6 px-4 pb-10 pt-12 md:grid-cols-[auto_1fr] md:px-8 md:pt-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "display text-7xl opacity-30 md:text-9xl",
				children: n
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "tag mb-4 bg-ink text-neon",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display text-6xl md:text-9xl",
					children: title
				}),
				children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 max-w-2xl text-lg",
					children
				})
			] })]
		})
	});
}
//#endregion
export { PageHead as i, Footer as n, Header as r, Cover as t };
