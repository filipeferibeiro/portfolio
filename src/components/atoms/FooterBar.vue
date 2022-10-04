<template>
	<footer>Filipe Fernandes &copy; {{ year }}. All rights reserved.</footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	computed: {
		year() {
			const date = new Date();

			return date.getFullYear();
		},
	},
});
</script>

<style>
footer {
	@apply bg-portfolio-primary/30 flex justify-center items-center py-6 text-white self-stretch;
}
</style>
