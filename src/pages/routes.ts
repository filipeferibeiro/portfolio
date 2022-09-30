import { createRouter, createWebHistory } from "vue-router";

import Home from "./Home.vue";
import Projects from "./Projects.vue";
import Experiences from "./Experiences.vue";
import Contact from "./Contact.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", name: "Home", component: Home },
		{ path: "/projects", name: "Projects", component: Projects },
		{ path: "/experiences", name: "Experiences", component: Experiences },
		{ path: "/contact", name: "Contact", component: Contact },
	],
});

export default router;
