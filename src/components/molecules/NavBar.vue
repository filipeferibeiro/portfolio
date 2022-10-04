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
				ref="toggleMenu"
				class="h-10 w-10 flex items-center justify-center rounded-xl"
				:class="{ 'button-hover': !mobileNav, 'button-active': mobileNav }"
				@click="toggleMobileMenu"
			>
				<Bars3Icon class="h-6 h-6" />
			</button>
		</transition>

		<transition name="grow">
			<ul
				v-show="isMobile && mobileNav"
				class="nav-mobile"
				v-closable="{ exclude: ['toggleMenu'], handler: closeMobileMenu }"
			>
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
import { defineComponent, DirectiveBinding } from "vue";
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
	directives: {
		closable: {
			mounted(el, binding: DirectiveBinding): void {
				const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
					e.stopPropagation();

					const { handler, exclude } = binding.value;

					let clickedOnExcludedEl = false;
					exclude.forEach((refName: string) => {
						if (!clickedOnExcludedEl) {
							const excludedEl: any = binding.instance?.$refs[refName];

							if (excludedEl) {
								clickedOnExcludedEl = excludedEl.contains(e.target);
							}
						}
					});

					if (!el.contains(e.target) && !clickedOnExcludedEl) {
						handler();
					}
				};

				document.addEventListener("click", handleOutsideClick);
				document.addEventListener("touchstart", handleOutsideClick);
			},
		},
	},
});
</script>

<style scoped>
.nav-mobile {
	@apply absolute top-16 right-0 flex gap-2 flex-col bg-portfolio-primary/30 border-white/5 border-[1px] rounded-2xl p-2 z-10 backdrop-blur-lg;
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

.grow-enter-active {
	animation: grow-in 0.5s ease;
}
.grow-leave-active {
	animation: grow-out 0.5s ease;
}

.slide-enter-active {
	animation: slide-in 0.5s ease-in-out;
}
.slide-leave-active {
	animation: slide-out 0.3s ease-in-out;
}
</style>
