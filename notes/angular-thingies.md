# Angular Thingies

## NgModules (Angular Modules)

A typescript class decorated with the @NgModule({...}) decorator.

A way to encapsulate a group of related Angular functionality.

### External

Angular Modules that are created outside of a project that then are included in a regular angular application.

some examples:
- Angular Material (UI widgets)
- NGRX/* (all the NGRX stuff are angular modules that we can install and use)
- A custom set of UI widgets that you might want to share across projects, etc.


### Internal
  Other NgModules that *we* create in our angular application.
  They provide a sort of "namespacing" for our application.
  They can have components, services, etc. that are particular to that module and are sort of private in the application.

  `ng generate module features/shopping`


### AppModule (root module)

Is the "root" of your angular application. Like .exe in C# applications.

the one that has the bootstrap property on the metadata.

Root meaning "everything else the user sees is a child of this module"

### Module Metadata

- declarations - the components that are part of module.
- imports - other modules (internal or external) to use as part of this application. (like setting a reference to a DLL in C#) Convention is: If it ends in the word Module it goes in the imports.
- providers - are providers for services that are used in this module.
- exports - for feature modules, etc. they allow us to export components, services, etc. that are used by the module that imports it.


## Components

They are the unit of user interface. They belong to a module.

They are the result of the compilation of the TypeScript component class, the metadata associated with it, and the compiled template.

Can have child components. They can pass data to a child component 
if that child has an `@Input()`

An `@Input()` is a field (property) of the component class that you will accept a value from the parent for.

When a parent assigns a value to that child component's input:


It can do it as a literal value like this:
```
<app-footer footerMessage="Hello, World!">
```

Or it can refer to some data that the parent "owns" and wants to share with the child:

```
<app-footer [footerMessage]="someVariable">
```

#### Outputs

Outputs are a way for a child component to inform it's parent component that something interesting happened.

(Note: We don't do a ton of these in angular when using redux because there "something interesting" is always an action being dispatched)


Components do two things:

- The display the application state in an accurate, meaningful, and timely way.
- The provide affordances through which the user can change the application state.

(Application state - "The value of all meaningful variables in your application")
