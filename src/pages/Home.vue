<template>
	<div>
		<h1>Home Screen</h1>
		<p>{{ hamburgerMenuOpen }}</p>
		<button @click="toggleHamburgerMenu">Open hamburgerMenuOpen</button>
		<button @click="closeHamburgerMenu">Close hamburgerMenuOpen</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapMutations } from "vuex";

export default defineComponent({
	methods: {
		...mapMutations(["toggleHamburgerMenu", "closeHamburgerMenu"]),
	},
	computed: {
		...mapState(["hamburgerMenuOpen"]),
	},
});
</script>

<style></style>
