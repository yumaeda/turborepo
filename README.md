# turborepo
Monorepo for all the frontend (Next.js) projects

## Setup
### Node.js
- First, you can check which versions of Node.js are available for installation:
```zsh
nodenv install -l
```
- To install a specific version of Node.js, use the following command (replace <version> with the desired version):
```zsh
nodenv install <version>
```
- To set the installed version globally:
```zsh
nodenv global <version>
```
- Updates nodenv's shims for the new version you just set, making sure the correct version of the Node.js binary is used.
```zsh
nodenv rehash
```

### Turporepo
```
npx create-turbo@latest
```
