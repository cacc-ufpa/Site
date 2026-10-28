import { u as projetos } from "./content-DBSdcx8y.mjs";
import { G as notFound, _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projetos._slug-DVseuz66.js
var $$splitComponentImporter = () => import("./projetos._slug-BeX2Epz8.mjs");
var Route = createFileRoute("/projetos/$slug")({
	loader: ({ params }) => {
		const p = projetos.find((x) => x.slug === params.slug);
		if (!p) throw notFound();
		return p;
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [
		{ title: `${loaderData.title} — Projetos CACC` },
		{
			name: "description",
			content: loaderData.description
		},
		{
			property: "og:title",
			content: loaderData.title
		},
		{
			property: "og:description",
			content: loaderData.description
		}
	] : [{ title: "Projeto não encontrado — CACC" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
