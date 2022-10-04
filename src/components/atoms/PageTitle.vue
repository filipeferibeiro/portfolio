<template>
	<h1 class="flex gap-2 items-center text-4xl font-medium">
		<slot name="icon"></slot>
		{{ text }}
	</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	props: {
		text: {
			required: true,
			type: String,
		},
	},
});
</script>

<style></style>
