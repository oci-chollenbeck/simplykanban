
# Appworks 1.4 Core Project Template
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3 and uses **Angular 8.x Core**. The Admin template behind the UX design can be found here: [https://wrapbootstrap.com/theme/appwork-bootstrap-4-template-ui-kit-WB0C668T3](https://wrapbootstrap.com/theme/appwork-bootstrap-4-template-ui-kit-WB0C668T3).

## Purpose
This repo is set as a template to allow the quick spinup of additional applications.

## TODO
- Add version data to environment config
- Add version hash to footer
- Add npm script to update version hash in compiled documents
- Add polling service to check local version hash against server


---

## Specs
- Angular: 8
- Typescript: 3
- Linter: eslint
- Auth: none

## Theme Changes
- Replaced tslint with eslint
- Added route alias to tsconfig.json
- Replaced default routing with lazy load modules
- Added preProcessorOptions to angular.json and updated all style references to remove ~ character
