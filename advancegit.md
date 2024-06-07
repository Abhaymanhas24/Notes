### Git clone

- git clone "url"

### Git Stash

- `git stash ` is used to save code temporarly
- to get from stash
  - git stash apply

## Git Rebase

- we use git rebase to stash all the commits
- `git rebase -i HEAD~<no of commit to be added>`
- we do rebase to maintain the history in a strsight line for fast forward merge
- we want straight line to maintaine diciple so that we can find bug easily

# Key Terms:

## Configuration Management

- System - code
- CI ->Git - Files
- Release Management -> Branching Strategy -> master staging  
   -> CI |CD -> netlify

![alt text](https://i.imgur.com/90YBIz2.png)

#### Key Benifits

- Easy Traceability - who? why?
- Maintain the code quality and consistency
- Reduces the risks and error
- Change Management is smooth

## Release Management

- planning - branching strategy
- governance - access level
- Scheduling - Sprints , Agile
- Automation - CI | CD , No human error
- Contingegency - roll back (odd version)

![alt text](https://i.imgur.com/gft0CkB.png)

#### IAAS

#### PAAS

#### SAAS

![alt text](https://i.imgur.com/kBE3V4j.png)
