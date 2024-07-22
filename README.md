# Star Wars APP

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.1.

## Project Structure

- **`app` folder**: Contains all the application-specific code.
- **`core` folder**: Contains code shared across the entire application, such as services, models, guards, and interceptors. The `core.module.ts` file is responsible for importing and exporting these shared items.
- **`shared` folder**: Contains shared components, directives, and pipes used across the application. The `shared.module.ts` file is responsible for importing and exporting shared items.
- **`modules` folder**: Contains the feature modules of the application. Each feature module is organized into its own folder, containing all the components, services, and routing information for that feature. The naming convention for feature modules is typically `[feature-name].module.ts`.
- **`assets` folder**: Contains static files used in the application, such as images, fonts, and stylesheets. The `config.json` file can also be stored here to hold any configuration data.
- **`environments` folder**: Contains environment-specific configuration files, such as `environment.prod.ts` and `environment.ts`. These files hold environment-specific variables and settings.

## Files

- **`index.html`**: The main entry point of the application, includes the application's root component.
- **`main.ts`**: The entry point of the application, bootstraps the `AppModule`.
- **`styles.scss`**: Contains global styles for the application.
- **`package.json`**: Lists all the dependencies of the application.
- **`tsconfig.json`**: Specifies the TypeScript compiler options for the application.
- **`angular.json`**: Contains the configuration for the Angular CLI.

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running End-to-End Tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further Help

To get more help on the Angular CLI, use `ng help` or check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
