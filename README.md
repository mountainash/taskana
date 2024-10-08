# Taskana

## Asana Official Version

There is now an official Asana for Desktop app available for MacOS & Windows... but Taskana is still _*actively maintained*_.

The [official version](https://forum.asana.com/t/asana-for-desktop-now-available-for-early-access/120008) also runs inside Election. Some of the difference are:

- _Taskana_ handles file downloads better
- _Asana_ for Desktop has Native OS notifications
- _Asana_ for Desktop has a Windows executable
- _Asana_ for Desktop uses "In-browser authentication" every session (you need to bounce between the app & your default browser) - Taskana logs you in directly
- _Asana_ for Desktop is over 400 MB in size - Taskana is almost half that
- _Taskana_ is Open Source!

![Taskana Tasks sample image](https://raw.githubusercontent.com/mountainash/taskana/develop/build/screenshot.png)

See website for usage tips:

- <https://mountainash.github.io/taskana/>

## Download

- <https://github.com/mountainash/taskana/releases>

## Develop

Clone the repository into a folder on your system and be sure to have [Node.js](https://nodejs.org/) installed.

```sh
npm install
```

### Run

To run Taskana in development mode:

```sh
npm start
```

### Build

To build a Taskana macOS executable application:

```sh
npm run build
```

See [electron-builder](https://github.com/electron-userland/electron-builder) instructions to build for Linux and Windows.

## Resources

- [electron](https://www.electronjs.org/)
- [electron-builder](https://www.electron.build/)
- [electron-updater](https://www.electron.build/auto-update)
- [keytar](https://atom.github.io/node-keytar/) Node module to manage system keychain
- [electron-store](https://github.com/sindresorhus/electron-store#readme)
- [electron-context-menu](https://github.com/sindresorhus/electron-context-menu#readme)
- [Biome Rules](https://biomejs.dev/linter/rules/)

## License

MIT

## Credits

Originally forked from <https://github.com/kreativgebiet/taskana> (now archived).
