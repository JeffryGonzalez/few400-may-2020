# Redux

## Interactions are Actions

Whenever something interesting happens in my application, I will dispatch an action describing that thing.

Interesting things are things like:

- The user interacting with the application
  - clicking a button, changing a route, etc.
  - Anything that might change the 'state' of the application

- Stuff happening outside of our application that isn't a user.
  - the time changing
  - data coming from an API
  - A websocket telling us something. 
  - etc.

## There State is stored in an Immutable Private Object 

  We use **selector functions** to pull an observable of a slice of that application state. Usually for components.


## Changes Never Happen. If something happens, a new state is created. (Next).

It is the role of the **reducer** function to decide if a new state is created.

The Reducer gets the current state, the action, and returns a new state.

The reducer cannot change it's arguments (state, action), and it must return a new state, or just the old state, unchanged.
