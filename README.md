# React Starter Code

React verison 18

## System Requirements

To get started with development, you need to install few tools

1. git

   `git` version 2.13.1 or higher. Download [git](https://git-scm.com/downloads) if you don't have it already.

   To check your version of git, run:

   ```shell
    git --version
   ```

2. node

   `node` version 16.15.1 or higher. Download [node](https://nodejs.org/en/download/) if you don't have it already.

   To check your version of node, run:

   ```shell
    node --version
   ```

3. npm

   `npm` version 5.6.1 or higher. You will have it after you install node.

   To check your version of npm, run:

   ```shell
    npm --version
   ```

## Setup

To set up a development environment, please follow these steps:

1. Clone the repo

   ```shell
    git clone https://gitlab.com/dtech9013045/school-uniform-react.git
   ```

2. Change directory to the project directory

   ```shell
   cd project1_team4_repository
   ```

3. Install the dependencies

   ```shell
    npm install
   ```

   If you get an error, please check the console for more information.

   If you don't get an error, you are ready to start development.

4. Run the app

   ```shell
   npm run dev
   ```

   Project will be running in the browser.

   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Pull Request

There are 2 main work flows when dealing with pull requests:

- Pull Request from a [forked repository](https://help.github.com/articles/fork-a-repo)
- Pull Request from a branch within a repository

Here we are going to focus on 2. Creating a Topical Branch:

1. First, we will need to create a branch from the latest commit on master. Make sure your repository is up to date first using

   ```bash
    git pull origin main
   ```

   _Note:_ `git pull` does a `git fetch` followed by a `git merge` to update the local repo with the remote repo. For a more detailed explanation, see [this stackoverflow post](http://stackoverflow.com/questions/292357/whats-the-difference-between-git-pull-and-git-fetch).

2. To create a branch, use `git checkout -b <new-branch-name> [<base-branch-name>]`,

#
