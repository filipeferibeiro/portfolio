<template>
	<textarea
		class="bg-portfolio-primary/30 border-white/5 border-[1px] px-4 py-2 rounded-xl"
		v-bind="$attrs"
		v-model="value"
	/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "TextAreaField",
	props: ["modelValue"],
	emits: ["update:modelValue"],
	computed: {
		value: {
			get(): string | number | string[] | undefined {
				return this.modelValue;
			},
			set(value: string | number | string[] | undefined) {
				this.$emit("update:modelValue", value);
			},
		},
	},
});
</script>

<style></style>
