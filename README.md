# Game (AngularFrontVGMS)

Angular front-end for a video game management system.

![TypeScript](https://img.shields.io/badge/language-TypeScript-blue)

## What it does

This is an Angular single-page app for managing a catalog of video games. It provides screens to list, add, and update games, products, and genres (`game`, `add-game`, `update-game`, `update-produit`, `liste-genre`, `update-genre`), search by name or category (`nomrechercher`, `recherche-par-categorie`), and manage users and roles (`liste-ofusers`, `add-role-for-user`, `register`). Authentication is handled via login/JWT (`login`, `game.guard.ts`, `@auth0/angular-jwt`), with a `forbidden` route for unauthorized access. Alerts/confirmations use SweetAlert2 and layout uses Bootstrap.

## Tech stack

- Angular 13 (`@angular/core`, `@angular/router`, `@angular/forms`, `@angular/common/http`)
- RxJS
- `@auth0/angular-jwt` for JWT-based auth
- Bootstrap for styling
- SweetAlert2 for alerts/dialogs
- Karma + Jasmine for unit testing

## Getting started

```bash
npm install
npm start        # ng serve, then open http://localhost:4200/
```

Build for production:

```bash
npm run build     # ng build, output in dist/
```

Run unit tests:

```bash
npm test          # ng test, via Karma
```

<!-- TODO: add a screenshot -->

## License

No license file is present in this repository.
