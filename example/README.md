# Example for @carlosv2/adapter-node-ws

Simple example, run with `npm run dev`

Run full e2e tests with `npm run test`

Run dev server tests with `npm run test:dev`
Run built server tests with `npm run test:prod`


with e2e test suite to test both dev and prod versions of this library

### Bugs
    [x] Using vite preview does not allow websocket connections. Workaround: instead of `npm run vite preview` use `node ./build/index.js`
    [] changing hooks.server.ts doesnt clean up old connections (dublicate init messages)

### TODO
    [] Refactor logic into a store

