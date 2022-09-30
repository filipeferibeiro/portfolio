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
	@apply flex justify-center items-center py-6 text-white bg-[#4d4b51]/30 self-stretch;
}
</style>
