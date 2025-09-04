# Oncorp Task Tracker Interview

Simple Task Tracking app that runs on a local enviornment. Nx project utilizing Nest.js and Angular.

## Run tasks

First run `npm install`

### Frontend

To run the dev server for your app, use:

```sh
npx nx serve task-tracker
```

This runs the frontend on localhost:4200. The frontend by default targets localhost:3000. Eventually this will be set via a runtime property.

To create a production bundle:

```sh
npx nx build task-tracker
```

TODO: setup bulid step to bundle backend and frontend.

To see all available targets to run for a project, run:

```sh
npx nx show project task-tracker
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

### Backend

```sh
npx nx serve task-tracker-nest
```

By default runs on localhost:3000
