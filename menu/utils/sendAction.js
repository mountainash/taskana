import { BrowserWindow } from 'electron';

export function sendAction(action) {
	const [win] = BrowserWindow.getAllWindows();
	if (process.platform === 'darwin') win.restore();
	win.webContents.send(action);
}