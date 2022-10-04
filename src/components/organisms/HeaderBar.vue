<template>
	<header
		class="bg-portfolio-primary/30 rounded-2xl py-2 px-2 border-white/5 border-[1px] flex justify-between items-center text-white m-2 self-stretch"
	>
		<router-link class="text-xl md:text-2xl my-1 ml-3 font-normal text-gray-100 tracking-wide" to="/"
			>&lt;filipe-fernandes /&gt;</router-link
		>
		<NavBar />
	</header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations, mapState } from "vuex";
import NavBar from "../molecules/NavBar.vue";

export default defineComponent({
	components: { NavBar },
	methods: {
		...mapMutations(["openHamburgerMenu", "closeHamburgerMenu"]),
	},
	computed: {
		...mapState(["hamburgerMenuOpen"]),
	},
});
</script>

<style></style>
