# Data Security Maturity Model (DSMM)


## About

This project is built using [VuePress 2](https://v2.vuepress.vuejs.org/).

Markdown documents can be found in the following folder:

    /docs/

## Run with Docker

To run the project in development mode with live edit support run the following command from the project directory.

**Note**: Requires Docker to be installed.

     docker run -p 8080:8080 --rm -v $(pwd):/dsmm node:18 bash -c "cd /dsmm && yarn && npm run docs:dev"

This will enable you to live update Markdown documents and preview changes in realtime from the local webserver:

[http://localhost:8080](http://localhost:8080)

## Run Locally

To run and build the project locally you must have the following dependencies installed on your system:

- [NdoeJS](https://nodejs.org/en/) to run the project locally and build to static document site. 
- [Yarn](https://yarnpkg.com/getting-started/install) package manager to install dependence.

### Development Run

    yarn
    npm run docs:dev

### Production build

    yarn
    npm run docs:build
