import { i as eventos } from "./content-DBSdcx8y.mjs";
import { G as notFound, _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/eventos._slug-CT_2pdJH.js
var $$splitComponentImporter = () => import("./eventos._slug-00fym3Ns.mjs");
var Route = createFileRoute("/eventos/$slug")({
	loader: ({ params }) => {
		const e = eventos.find((x) => x.slug === params.slug);
		if (!e) throw notFound();
		return e;
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [
		{ title: `${loaderData.title} — Eventos CACC` },
		{
			name: "description",
			content: `${loaderData.category} em ${loaderData.location}, ${loaderData.date}.`
		},
		{
			property: "og:title",
			content: loaderData.title
		},
		{
			property: "og:description",
			content: `${loaderData.category} — ${loaderData.location}`
		}
	] : [{ title: "Evento não encontrado — CACC" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
