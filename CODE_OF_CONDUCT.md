<h2 align="center">Contributing</h2>

- Fork the repository
- Clone the fork: `git clone https://github.com/username/FireGold-Bot.git`
- Create your changes branch: `git checkout -b my-changes`
- Stage changes `git add .`
- Commit your changes: `cz` OR `npm run commit` do not use `git commit`
- Push to the branch: `git push origin my-changes`
- Submit a pull request

<h2 align="center">While contributing</h2>

- If you are adding a new command, be sure to use the proper syntax:
```js
module.exports = {
    name: "commandName",
    aliases: ["cmdName", "CMD"],
    code: `
    //Your code for the command here!
    `
}
```

- If you are making a bug fix, please be sure that the bug can no longer be reproduced. If the fix is temporary, Mark the PR as [TEMPORARY_FIX]. 
