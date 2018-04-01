# Sao node basic template

```
# Install sao if you haven't already
yarn global add sao

# Create a new project based on this template
sao juanber84/node-basic-template my-project

# Move into the folder
cd my-project

# Generate parameters files
cp ./src/parameters.json.dist ./src/parameters.json
cp ./test/extra/parameters.json.dist ./test/extra/parameters.json

# Install dependencies
yarn install

# Run test
yarn test
```
