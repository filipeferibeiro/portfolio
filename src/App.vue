<template>
	<div class="flex flex-col gap-4 h-screen">
		<HeaderBar />
		<main class="flex-1">
			<router-view />
		</main>
		<FooterBar />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderBar from "./components/organisms/HeaderBar.vue";
import FooterBar from "./components/atoms/FooterBar.vue";

export default defineComponent({
	components: { HeaderBar, FooterBar },
	data() {
		return {};
	},
});
</script>

<style scoped></style>
