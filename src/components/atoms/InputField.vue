<template>
	<input
		class="bg-portfolio-primary/30 border-white/5 border-[1px] px-4 py-2 rounded-xl"
		v-bind="$attrs"
		v-model="value"
	/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	props: ["modelValue"],
	emits: ["update:modelValue"],
	computed: {
		value: {
			get(): String {
				return this.modelValue;
			},
			set(value: String) {
				this.$emit("update:modelValue", value);
			},
		},
	},
});
</script>

<style></style>
