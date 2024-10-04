import { sendAction } from './utils/sendAction.js';

export default {
	label: 'Tasks',
	submenu: [
		{
			label: 'New Task',
			accelerator: 'CommandOrControl+N',
			click: () => sendAction('new-task'),
		},
	],
};
