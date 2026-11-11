# githubactions-learning

A small, dependency-free Node.js project for learning and testing GitHub Actions.

## Run locally

Requires Node.js 20 or newer.

```sh
npm test
```

The `CI` workflow runs the same test command on every push and pull request. It
can also be started manually with **Run workflow** in the Actions tab and runs
automatically every Monday at 00:00 UTC.
