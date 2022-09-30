<template>
	<nav class="h-full flex items-center relative">
		<transition name="slide" mode="out-in">
			<ul v-if="!isMobile" class="nav-desktop">
				<li class="nav-item"><NavItem text="Home" to="/" /></li>
				<li class="nav-item"><NavItem text="Projects" to="/projects" /></li>
				<li class="nav-item"><NavItem text="Experiences" to="/experiences" /></li>
				<li class="nav-item"><NavItem text="Contact" to="/contact" /></li>
			</ul>
			<button
				v-else
				class="h-10 w-10 flex items-center justify-center rounded-xl"
				:class="{ 'button-hover': !mobileNav, 'button-active': mobileNav }"
				@click="toggleMobileMenu"
			>
				<Bars3Icon class="h-6 h-6" />
			</button>
		</transition>

		<transition name="grow">
			<ul v-if="isMobile && mobileNav" class="nav-mobile">
				<li class="nav-item">
					<NavItem @item-clicked="closeMobileMenu" text="Home" to="/" />
				</li>
				<li class="nav-item">
					<NavItem @item-clicked="closeMobileMenu" text="Projects" to="/projects" />
				</li>
				<li class="nav-item">
					<NavItem @item-clicked="closeMobileMenu" text="Experiences" to="/experiences" />
				</li>
				<li class="nav-item">
					<NavItem @item-clicked="closeMobileMenu" text="Contact" to="/contact" />
				</li>
			</ul>
		</transition>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavItem from "../atoms/NavItem.vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";
export default defineComponent({
	components: { NavItem, Bars3Icon },
	data() {
		return {
			isMobile: false,
			mobileNav: false,
		};
	},
	created() {
		window.addEventListener("resize", this.checkIsMobile);
		this.checkIsMobile();
	},
	methods: {
		toggleMobileMenu() {
			this.mobileNav = !this.mobileNav;
		},
		closeMobileMenu() {
			this.mobileNav = false;
		},
		checkIsMobile() {
			const windowWidth = window.innerWidth;
			if (windowWidth <= 768) {
				this.isMobile = true;
				return;
			}
			this.isMobile = false;
			this.mobileNav = false;
		},
	},
});
</script>

<style scoped>
.nav-mobile {
	@apply absolute top-16 right-0 flex gap-2 flex-col bg-[#4d4b51]/40 border-white/5 border-[1px] rounded-2xl p-2;
}
.nav-desktop {
	@apply flex h-full gap-2;
}
.nav-item {
	@apply md:h-full flex;
}
.button-hover {
	@apply hover:bg-[#4d4b51] hover:border-[#57555d];
}
.button-active {
	@apply bg-[#6462f3] hover:bg-[#6462f3] hover:border-[#7e7cf7];
}

@keyframes grow-in {
	from {
		opacity: 0;
		transform: translateY(-30px);
	}
	to {
		opacity: 1;
		transform: translateY(0px);
	}
}
@keyframes grow-out {
	from {
		opacity: 1;
		transform: translateY(0px);
	}
	to {
		opacity: 0;
		transform: translateY(-30px);
	}
}

@keyframes slide-in {
	from {
		opacity: 0;
		transform: translateX(-100%);
	}
	to {
		opacity: 1;
		transform: translateX(0px);
	}
}
@keyframes slide-out {
	from {
		opacity: 1;
		transform: translateX(0px);
	}
	to {
		opacity: 0;
		transform: translateX(100%);
	}
}

.grow-enter-active {
	animation: grow-in 0.5s ease;
}
.grow-leave-active {
	animation: grow-out 0.5s ease;
}

.slide-enter-active {
	animation: slide-in 0.2s ease;
}
.slide-leave-active {
	animation: slide-out 0.2s ease;
}
</style>
