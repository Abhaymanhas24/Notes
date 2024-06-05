# Git command

![alt text](https://i.imgur.com/8fZpxc2.png)

![alt text](https://i.imgur.com/v7WZ3Ur.png)

![alt text](https://i.imgur.com/jgtcECA.png)

- git init
- git add .
- git add ./hello.js ./fun.js
- git commit -m "Start of my git fundamentals"
- git uncommit

![git status](https://i.imgur.com/WHyeDjM.png)

![git address](https://i.imgur.com/KwqWcmh.png)

- to check git commit history
  ![log](https://i.imgur.com/KxnCPYO.png)

- to quit press q
- git checkout to switch to the commit id
  ![alt text](https://i.imgur.com/YHkiv9R.png)

- if we want to back to previous commit we use `git checkout -`

- `git checkout master` moves us to the main branch

- `git log --author=any name`
  we can write any name to search with

- `git log -p` shows the changes we have done in evey new commit

- git commit -m "Testing with console"
- git log
- git status
- git aa
- git cm "Git notes"
- git log
- git checkout 601253fb4d
- git checkout -
- git log
- git d60b04b716
- git checkout d60b04b716
- git checkout 601253fb4d
- git checkout -
- git checkout -
- git checkout -
- git checkout master
- git checkout 601253fb4d
- git checkout master
- git log -1
- git log -2
- git log --author=raga
- pick axe commond in git
  `git log -S<word> -p`
  - /<word> -highlight search
  - <space> -page down
  - n -next match
  - N -prev match
- `git log -p` after pressing enter press "/" and then type <word> in patches press 'n' to go to next match and press 'n' to go to previous match

## Git Log

- log filter
  - --author ->filter by author
  - -2 -> last commit
- -p -> patch
- -s -> **pick-axe** - Search

- Git staging area is needed because we can commit a single file 'A' once but also we can commit file 'A' with a group of files again.

![alt text](https://i.imgur.com/9kNzm84.png)

- git branch -a

- branch ahead or behind
  ![alt text](https://i.imgur.com/QetsUaX.png)
