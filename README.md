# vite-bug-repro
## How I generated this repo
1.

```bash
npm create vite@latest vite-bug-repro -- --template react-ts
cd vite-bug-repro
npm i @twurple/auth @twurple/api @twurple/eventsub-ws
```

2. Edited App.tsx to its current state

## To run this project
1. Using vscode, download the [devcontainers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
2. Ctrl/Cmd+Shift+P Launch in devcontainer
3. npm run dev