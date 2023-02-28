# Setup

* `docker-compose build` - to build the necessary images.
* `docker-compose run service npm i` - to add the local files to your node_module so you get vscode completion. 
* `docker-compose up` - to run the project. 
* `docker-compose run service npm i <YOUR_PACKAGE_NAME>` - If you want to install a new package, this ensure you install it using the correct package node version through docker using volume mounts. 
* `docker-compose run service npm test` - Run your tests in .spec.ts files.

Go to `http://localhost` on your browser to see your api.