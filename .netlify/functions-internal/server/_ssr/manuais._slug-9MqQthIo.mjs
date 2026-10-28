import { c as manuais } from "./content-DBSdcx8y.mjs";
import { G as notFound, _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manuais._slug-9MqQthIo.js
var $$splitComponentImporter = () => import("./manuais._slug-kfnvvh9k.mjs");
var Route = createFileRoute("/manuais/$slug")({
	loader: ({ params }) => {
		const m = manuais.find((x) => x.slug === params.slug);
		if (!m) throw notFound();
		return m;
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [
		{ title: `${loaderData.title} — Manuais CACC` },
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
	] : [{ title: "Manual não encontrado — CACC" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
