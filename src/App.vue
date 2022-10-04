<template>
	<div class="flex flex-col gap-4 h-screen items-center">
		<HeaderBar />
		<main class="flex-1 max-w-7xl w-full flex justify-center">
			<router-view v-slot="{ Component }">
				<transition name="fade" mode="out-in">
					<component :is="Component" />
				</transition>
			</router-view>
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
