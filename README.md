# Micro Frontend Architecture ShellApp using Angular Elements

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.

This project shows my knowledge about micro frontend architecture, This is a shellApp using 2 projects inside it via custom elements. Its a simple app showing communication between App1 to ShellApp, App2 to ShellApp as well as App1 to App2 and vice versa, all scenarios handled.
This project uses dispatchEvent to send customEvents which are then consumed via an Observable using rxjs fromEvent to a signal placeholder.
Please find the other applications namely ng-v18-mfeApp1 and ng-v18-mfeApp2 in the repository
both the project builds are hosted locally via http-server on port 5001 and port 5002 respectively
