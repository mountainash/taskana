import { Menu } from 'electron';

import edit from './edit.js';
import help from './help.js';
import main from './main.js';
import tasks from './tasks.js';
import window from './window.js';

const template = [main, tasks, edit, window, help];

export default Menu.buildFromTemplate(template);
