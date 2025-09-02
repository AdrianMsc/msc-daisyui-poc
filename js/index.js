const applyAuthState = (isLoggedIn) => {
	const loggedOutEls = document.querySelectorAll('.logged-out');
	const loggedInEls = document.querySelectorAll('.logged-in');
	const notiEls = document.querySelectorAll('.badge-noti');

	// Show/hide based on state
	loggedOutEls.forEach((el) => el.classList.toggle('hidden', !isLoggedIn));
	loggedInEls.forEach((el) => el.classList.toggle('hidden', isLoggedIn));
	notiEls.forEach((el) => el.classList.toggle('hidden', !isLoggedIn));

	// Persist as string
	localStorage.setItem('isLoggedIn', isLoggedIn ? 'true' : 'false');
};

const loginLogout = () => {
	// Flip current state (default to logged out when missing)
	const current = localStorage.getItem('isLoggedIn') === 'true';
	applyAuthState(!current);
};

// Initialize UI from storage on first load
document.addEventListener('DOMContentLoaded', () => {
	const stored = localStorage.getItem('isLoggedIn');
	const isLoggedIn = stored === 'true'; // defaults to false when not set
	applyAuthState(isLoggedIn);
});
