const { ipcRenderer } = require('electron');

const keyStore = import('./src/keystore.js');

ipcRenderer.on('new-task', () => {
	document.querySelector('.Omnibutton').click();
	document.querySelector('.Omnibutton-task').click();
});

ipcRenderer.on('show-preferences', () => {
	document.querySelector('.TopbarSettingsMenuButton')?.click();
	document.querySelector('.TopbarSettingsMenu-settings')?.click();
});

document.addEventListener('readystatechange', async () => {
	const DomHooks = {
		loginform: '.LoginEmailPasswordForm',
		loginusername: 'input[name=e]',
		loginpassword: 'input[name=p]',
		loginbutton: '[role=button]',
	};

	if (document.location.pathname.endsWith('/login')) {
		const loginform = document.querySelector(DomHooks.loginform);
		const loginusername = loginform.querySelector(DomHooks.loginusername);
		const loginpassword = loginform.querySelector(DomHooks.loginpassword);

		// try using saved login
		const loginkeys = await keyStore.getKey();

		// Trigger the attached `change` event to get the values into the Virtual DOM (as Asana runs React/Nuxt.js)
		const event = new Event('HTMLEvents');
		event.initEvent('change', true, false);

		if (loginkeys?.username) {
			loginusername.value = loginkeys.username;
			loginusername.dispatchEvent(event);
		}

		if (loginkeys?.password) {
			loginpassword.value = loginkeys.password;
			loginpassword.dispatchEvent(event);
		}

		const loginsubmitted = async () => {
			const username = loginusername.value;
			const password = loginpassword.value;

			if (username && password) {
				await keyStore.deleteKeys(); // delete any exiting logins
				await keyStore.addKey(username, password); // store the users details for auto-login next time
			}
		};

		// add a listener to the form to capture login details and store them
		// would be nice to add to just the <FORM> submit event, but React/Nuxt (used by Asana) captures the events lower in the DOM
		// loginform.addEventListener('submit', loginsubmitted);
		loginform
			.querySelector(DomHooks.loginbutton)
			.addEventListener('click', loginsubmitted);
		loginusername.addEventListener('keyup', (e) => {
			if (e.code === 'Enter') loginsubmitted();
		});
		loginpassword.addEventListener('keyup', (e) => {
			if (e.code === 'Enter') loginsubmitted();
		});
	}
});
