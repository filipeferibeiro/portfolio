<template>
	<div class="flex flex-col items-center text-white px-4 md:max-w-4xl flex-1">
		<PageTitle text="Contact me" class="self-start">
			<template v-slot:icon>
				<ChatBubbleLeftRightIcon class="h-10 w-10" />
			</template>
		</PageTitle>
		<ul class="flex flex-col md:flex-row justify-evenly gap-4 self-stretch mt-6">
			<a
				v-for="contact in LINKS"
				:key="contact.name"
				class="social"
				:style="{ 'background-color': contact.color }"
				:href="contact.link"
				target="_blank"
			>
				{{ contact.name }}
			</a>
		</ul>
		<hr class="my-4 mx-auto w-96 h-1 rounded border-0 bg-portfolio-primary/30" />
		<form class="flex flex-col self-stretch gap-2">
			<label for="name" class="font-thin font-secondary">Name:</label>
			<InputField id="name" type="text" v-model="name" placeholder="What is your name?" required />
			<label for="email" class="font-thin font-secondary">Email:</label>
			<InputField id="email" type="email" v-model="email" placeholder="What is your e-mail?" required />
			<label for="message" class="font-thin font-secondary">Message:</label>
			<TextAreaField
				id="message"
				type="text"
				rows="10"
				v-model="message"
				placeholder="Send me a message..."
				required
			/>
			<button class="primary-button font-secondary mt-2" @click.prevent="sendEmail">
				<PaperAirplaneIcon class="h-6 h-6" />
				Send message
			</button>
		</form>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputField from "../components/atoms/InputField.vue";
import TextAreaField from "../components/atoms/TextAreaField.vue";
import { PaperAirplaneIcon, ChatBubbleLeftRightIcon } from "@heroicons/vue/24/outline";
import PageTitle from "../components/atoms/PageTitle.vue";
import LINKS from "../config/links";

export default defineComponent({
	components: {
		InputField,
		TextAreaField,
		PageTitle,
		PaperAirplaneIcon,
		ChatBubbleLeftRightIcon,
	},
	data() {
		return {
			LINKS,
			name: "",
			email: "",
			message: "",
		};
	},
	methods: {
		sendEmail() {
			const message = this.message.replace(/\r?\n/g, "%0D%0A");
			const mailto = `mailto:filipeferibeiro@gmail.com?subject=Contact ${this.name} - ${this.email}&body=${message}`;
			window.location.href = mailto;
		},
		cleanInputs() {
			this.name = "";
			this.email = "";
			this.message = "";
		},
	},
});
</script>

<style scoped>
.social {
	@apply flex-1 py-3 flex justify-center rounded-xl border-[1px] border-white/5 hover:opacity-50;
}
</style>
