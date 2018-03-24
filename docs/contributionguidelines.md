Thanks for joining the GWG Women Techmakers team!

## Issues
Assign yourself an issue you're interested in helping with.

## Branches

We're all working off of the "dev" branch.

Click the "Fork" button. Once you've done that, you can use your favorite git client to clone your repository or just head straight to the command line:

Clone your fork to your local machine
`git clone https://github.com/<YOUR-USERNAME>/gwg-women-techmakers.git`

To keep your fork up to date by tracking the original "upstream" repository that you forked. To do this, you'll need to add a remote:
`git remote add upstream https://github.com/gwg-women/gwg-women-techmakers.git`

After you've set up your local environment and assigned yourself an issue, follow these steps for contributing to the project:
1. Always pull in new updates from "dev" branch before getting started and pull and push to sync your local repository:
`git checkout dev`
`git pull upstream dev`
`git push origin dev`.

2. Create a new branch for our particular issue: `git checkout -b <my-issue>`
3. Make your changes to solve that issue.
4. Commit early, commit often! If you have a large issue that takes time, it's best to save your work on your machine and on Github often. For Github:
    - `git add -A'
    - 'git commit -m "I did these things during this save"`
    - `git push`
    - The first push will ask you to create that branch to your fork on Github. Just follow it's instructions.
5. When you're ready to submit your changes, create a pull request in the branch containing your changes from your forked repository. For more details refer :[GitHub : Creating the Pull Request](https://help.github.com/articles/creating-a-pull-request/)
6. Fill out the pull request with these questions in mind:
    - What issue does it solve? Identify it with a `#` and the number, which will connect your issue and pull request automatically.
    - What did you do to solve the issue? Just a brief list of updates is good.
    - How can we test this to be sure it works?
7. Assign a couple teammates to review your pull request and submit.
8. Once it has been approved and merged, please delete your branch.
