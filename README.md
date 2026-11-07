
# Airport Search with Autocomplete
## Technology Stack
- Angular
- TypeScript
- Reactive Forms
- RxJS
- HTML
- CSS

## Why I chose Angular
I chose Angular because I have practical experience working on Angular projects and feel comfortable using it. Angular provides useful features like two-way data binding, reactive forms, reusable components, and dependency injection, which make development easier and more maintainable.

## Installation

```bash
npm install
```
## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### 3. Understand these three interview questions

| Question | Concepts to understand |
|---|---|
| 1. How does your autocomplete avoid filtering on every keystroke? | I used RxJS debounceTime(300) to wait for 300 milliseconds after the user stops typing. Then distinctUntilChanged() avoids duplicate searches, and switchMap() performs the latest search. This improves performance by avoiding unnecessary filtering on every keystroke.` |
| 2. How is keyboard navigation kept in sync with mouse hover? | I used a shared highlightedIndex variable to keep keyboard and mouse navigation in sync. Arrow keys update the index, and mouse hover updates it using the item's index. The same index controls the highlighted CSS class, so both interactions show the same selected item. |
| 3. If we support 10,000 airports instead of 34, what ONE change would you make first? | Search optimization and indexing |








# AirportSearch

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.4.



## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
