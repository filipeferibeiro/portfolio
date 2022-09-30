<template>
	<div class="flex flex-col justify-center items-center text-white">
		<h1>Home Screen</h1>
		<div class="invisible">
			<p>{{ hamburgerMenuOpen }}</p>
			<button @click="toggleHamburgerMenu">Open hamburgerMenuOpen</button>
			<button @click="closeHamburgerMenu">Close hamburgerMenuOpen</button>
		</div>
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
