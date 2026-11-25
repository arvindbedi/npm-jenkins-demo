# npm-jenkins-demo

A tiny Node.js project for practising npm builds in Jenkins (the npm equivalent of a Maven project).

## Maven -> npm cheat sheet

| Maven            | npm                         |
|------------------|-----------------------------|
| `pom.xml`        | `package.json`              |
| `mvn dependency:resolve` | `npm install` / `npm ci` |
| `mvn test`       | `npm test`                  |
| `mvn package`    | `npm run build`             |
| `~/.m2`          | `node_modules/`             |
| `target/`        | `dist/`                     |

## Run locally

    npm install
    npm run lint
    npm test
    npm run build
    npm start

## Run in Jenkins

1. Install the **NodeJS** plugin (Manage Jenkins -> Plugins).
2. Manage Jenkins -> Tools -> NodeJS installations -> Add, name it `node-20`, pick Node 20+.
3. Push this folder to a Git repo.
4. New Item -> **Pipeline** -> "Pipeline script from SCM" -> your repo URL, script path `Jenkinsfile`.
5. Build Now. Check Test Results and the archived `dist/` artifacts.

## Things to try

- Break a test in `test/math.test.js` and watch the Test stage fail.
- Add an unused variable to trigger the Lint stage.
- Run `npm install` locally, commit `package-lock.json`, then change `npm install` to `npm ci` in the Jenkinsfile.
- Add a `parameters {}` block, or use a Docker agent (`agent { docker { image 'node:20' } }`) instead of the NodeJS plugin.
- Add `npm audit` as a stage.
