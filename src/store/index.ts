import { createStore } from "vuex";

const store = createStore({
	state() {
		return {
			hamburgerMenuOpen: false,
		};
	},
	mutations: {
		toggleHamburgerMenu(state) {
			state.hamburgerMenuOpen = !state.hamburgerMenuOpen;
		},
		closeHamburgerMenu(state) {
			state.hamburgerMenuOpen = false;
		},
	},
});

export default store;
