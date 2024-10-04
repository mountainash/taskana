import { Menu } from 'electron';

import main from './main.js';
import tasks from './tasks.js';
import edit from './edit.js';
import window from './window.js';
import help from './help.js';

const template = [main, tasks, edit, window, help];

export default Menu.buildFromTemplate(template);