# Contributing to React-Tocas

## Develop react-tocas

### 1. Clone repo

``` bash
git clone https://github.com/gocreating/react-tocas.git
cd react-tocas
npm install
```

### 2. Link package(Optional)

If you want to use your version of react-tocas in your own project, you should use `npm link` to expose this package to global. Then you can `import { ... } from 'react-tocas'` in your project.

``` bash
npm link
```

### 3. Develop and watch files

``` bash
npm install -g gulp
gulp
```

> The file watching does not detect newly created files, you should re-run `gulp` command when every time you create or copy files.

## Develop doc-site

### 1. Up and running

The doc site is built with the great `create-react-app`.

``` bash
npm install -g create-react-app
cd docs/
npm install
npm start
```

### 2. Develop

Now you can start updating source code of doc-site, and the web page will refresh on save.

When you finish your work, there is no need to run `npm run build` to build static files yourself. These built files are maintained and hosted on another repo [react-tocas.github.io](https://github.com/react-tocas/react-tocas.github.io), so it's our business to publish.
