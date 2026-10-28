import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as Footer, r as Header } from "./Shell-C3NJ9Ov5.mjs";
import { t as Route$8 } from "./eventos._slug-CT_2pdJH.mjs";
import { t as Route$9 } from "./manuais._slug-9MqQthIo.mjs";
import { t as Route$10 } from "./projetos._slug-DVseuz66.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cw-4YTgh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-B4FyjvVj.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "CACC — Centro Acadêmico de Ciência da Computação" },
			{
				name: "description",
				content: "Portal do CACC: eventos, projetos, lojinha, acervo e manuais."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap"
			},
			{
				rel: "preload",
				href: "/fonts/Terminus-Bold.ttf",
				as: "font",
				type: "font/ttf",
				crossOrigin: "anonymous"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pt-BR",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-neon focus:p-2",
				children: "Pular para o conteúdo"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var $$splitComponentImporter$6 = () => import("./routes-CprzHnrJ.mjs");
var Route$6 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "CACC — Centro Acadêmico de Ciência da Computação" },
		{
			name: "description",
			content: "A revista-portal do CACC: eventos, projetos de alunos, avisos, lojinha, acervo e manuais."
		},
		{
			property: "og:title",
			content: "CACC — Centro Acadêmico de Ciência da Computação"
		},
		{
			property: "og:description",
			content: "Eventos, projetos, avisos, acervo e manuais da comunidade de Computação."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./acervo-BZRFljZn.mjs");
var Route$5 = createFileRoute("/acervo")({
	head: () => ({ meta: [
		{ title: "Acervo — CACC" },
		{
			name: "description",
			content: "Biblioteca de livros, cursos, vídeos e ferramentas gratuitas para estudantes de Computação."
		},
		{
			property: "og:title",
			content: "Acervo — CACC"
		},
		{
			property: "og:description",
			content: "Materiais gratuitos organizados por área."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./gestao-HOSDJ-g3.mjs");
var Route$4 = createFileRoute("/gestao")({
	head: () => ({ meta: [
		{ title: "Gestão — CACC" },
		{
			name: "description",
			content: "Conheça a gestão atual do Centro Acadêmico de Ciência da Computação."
		},
		{
			property: "og:title",
			content: "Gestão — CACC"
		},
		{
			property: "og:description",
			content: "Integrantes e coordenações do CACC."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./lojinha-RbcwKs4R.mjs");
var Route$3 = createFileRoute("/lojinha")({
	head: () => ({ meta: [
		{ title: "Lojinha — CACC" },
		{
			name: "description",
			content: "Camisetas, adesivos e produtos do CACC. Pedidos via WhatsApp."
		},
		{
			property: "og:title",
			content: "Lojinha — CACC"
		},
		{
			property: "og:description",
			content: "Produtos do Centro Acadêmico de Computação."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./eventos.index-qUf5iCMm.mjs");
var Route$2 = createFileRoute("/eventos/")({
	head: () => ({ meta: [
		{ title: "Eventos — CACC" },
		{
			name: "description",
			content: "Agenda de eventos, palestras e oficinas do CACC, e o arquivo de eventos passados."
		},
		{
			property: "og:title",
			content: "Eventos — CACC"
		},
		{
			property: "og:description",
			content: "Agenda visual de eventos da Computação."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./manuais.index-nr65On7T.mjs");
var Route$1 = createFileRoute("/manuais/")({
	head: () => ({ meta: [
		{ title: "Manuais — CACC" },
		{
			name: "description",
			content: "Guias práticos: Wi-Fi, SIGAA, matrícula, documentos e serviços acadêmicos."
		},
		{
			property: "og:title",
			content: "Manuais — CACC"
		},
		{
			property: "og:description",
			content: "Base de conhecimento para estudantes de Computação."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./projetos.index-Bd3GvNpM.mjs");
var Route = createFileRoute("/projetos/")({
	head: () => ({ meta: [
		{ title: "Projetos — CACC" },
		{
			name: "description",
			content: "Vitrine de projetos desenvolvidos por estudantes de Ciência da Computação."
		},
		{
			property: "og:title",
			content: "Projetos — CACC"
		},
		{
			property: "og:description",
			content: "O que a comunidade de Computação está construindo."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$7
});
var AcervoRoute = Route$5.update({
	id: "/acervo",
	path: "/acervo",
	getParentRoute: () => Route$7
});
var GestaoRoute = Route$4.update({
	id: "/gestao",
	path: "/gestao",
	getParentRoute: () => Route$7
});
var LojinhaRoute = Route$3.update({
	id: "/lojinha",
	path: "/lojinha",
	getParentRoute: () => Route$7
});
var EventosIndexRoute = Route$2.update({
	id: "/eventos/",
	path: "/eventos/",
	getParentRoute: () => Route$7
});
var EventosSlugRoute = Route$8.update({
	id: "/eventos/$slug",
	path: "/eventos/$slug",
	getParentRoute: () => Route$7
});
var ManuaisIndexRoute = Route$1.update({
	id: "/manuais/",
	path: "/manuais/",
	getParentRoute: () => Route$7
});
var ManuaisSlugRoute = Route$9.update({
	id: "/manuais/$slug",
	path: "/manuais/$slug",
	getParentRoute: () => Route$7
});
var ProjetosIndexRoute = Route.update({
	id: "/projetos/",
	path: "/projetos/",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute,
	AcervoRoute,
	GestaoRoute,
	LojinhaRoute,
	EventosSlugRoute,
	ManuaisSlugRoute,
	ProjetosSlugRoute: Route$10.update({
		id: "/projetos/$slug",
		path: "/projetos/$slug",
		getParentRoute: () => Route$7
	}),
	EventosIndexRoute,
	ManuaisIndexRoute,
	ProjetosIndexRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
