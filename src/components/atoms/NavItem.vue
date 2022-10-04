<template>
	<router-link class="link-mobile link-desktop" active-class="link-active" :to="to" @click="$emit('item-clicked')">
		{{ text }}
	</router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";

export default defineComponent({
	props: {
		text: {
			type: String,
			required: true,
		},
		to: {
			type: String,
			required: true,
		},
	},
	emits: ["item-clicked"],
	methods: {
		...mapMutations(["closeHamburgerMenu"]),
	},
});
</script>

<style>
.link-mobile {
	@apply flex justify-center w-full items-center rounded-xl px-4 py-2 font-secondary border-[1px] border-transparent hover:bg-white/20 hover:border-white/5;
}
.link-desktop {
	@apply md:py-0;
}
.link-active {
	@apply bg-portfolio-accent hover:bg-portfolio-accent hover:opacity-80 hover:border-white/5;
}
</style>
