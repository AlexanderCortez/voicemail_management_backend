# How to start?

[TOC]

## Heroku Domains:

__Production:__ https://voicemail-management.herokuapp.com/


## Running Locally

* Clone repo from [github](https://github.com/AlexanderCortez/voicemail_management_backend)
* Create a `.env` file at the root of the project, replacing XXX values with user specific

```sh
PORT=3001
ACCOUNT_ID=XXX
VMBOX_ID=XXX
CREDENTIALS=XXX
SERVER_URL=XXX
```

This is an example of variables required

```sh
PORT=3001
ACCOUNT_ID=5e577aa71d911e3a3a1cdd48
VMBOX_ID=5e577aa71d911e3a3a1cdd48
CREDENTIALS=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9ehU1R3bzYSDR1xU2TDO5_mtWsB3ftCo_2OMFFjghhOI=
SERVER_URL=https://sandbox.2600hz.com:8443/v2
```

**_NOTE_** : Someone with a known good local setup should be able to provide required values

* In the project root folder, you need to run the following command on the console:

1. Run `npm install`

It will install the dependencies and devdependecies listed in package.json.

2. Run `npm start`

It starts the server in the development mode.

[http://localhost:3001](http://localhost:3001)

The server will reload if you make edits.

## Deploying to Heroku (You will need to be added to heroku app)

__The production branch used is__: `production`

Follow the next step to create an implementation:

1. Move to production branch in voicemail_management_backend.
2. If you want to retrieve changes from frontend do the following:
  - Remove files on path /client.
  - Go to the root of the project [voicemail_management_frontend](https://github.com/AlexanderCortez/voicemail_management_frontend).
  - Update the master branch, with its new features.
  - Run the npm run build command, this command creates the minified files.
  - In the `/build` path of the `voicemail_management_frontend` project we can find the minified files, copy and paste them into the `voicemail_management_backend` project at the path /client.
  - In the index.html of `/client`, remane the title from React App to "VoiceMail Management"
3. Stage your changes
4. run command git push origin production, to generate an update the production branch.

5. Set up the various variables

```sh
$ git remote add prod https://git.heroku.com/voicemail-management.git
```

6. Run a git push with the name of the heroku remote

```sh
$ git push [remote] [branch-to-push]:master

Examples:

$ git push prod <current_branch>:master

$ git push prod production:master