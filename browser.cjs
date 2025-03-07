const { ipcRenderer } = require('electron');

ipcRenderer.on('new-task', () => {
	document.querySelector('.Omnibutton').click();
	document.querySelector('.Omnibutton-task').click();
});

ipcRenderer.on('show-preferences', () => {
	document.querySelector('.TopbarSettingsMenuButton')?.click();
	document.querySelector('.TopbarSettingsMenu-settings')?.click();
});
