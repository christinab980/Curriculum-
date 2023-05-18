# Redux (What the f%&k is this?)

## What is redux? 
- Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark. It is not linear which means you have to build everything before you can see if it works no baby steps. 

## Vocab
- DataFlow: may hold the state for the flow of the data, goes only one way, so the ui goes to dispatch, that goes to action creater and so on. 

- Action Object: 
- Action Creator:
- Dispatch:
- UI:
- Store: under the app folder
- Deucer: Like an event listener 


- Selector: Slice of state?? (may or may not be in the dataflow)

## Modal View Controller Architecture 

- Model–view–controller is a software design pattern commonly used for developing user interfaces that divides the related program logic into three interconnected elements. This is done to separate internal representations of information from the ways information is presented to and accepted from the user. 

## Set Up 
- useSelector and useDispatch from react-redux 
- (component)Slice is the reducer // this is where we capture state. 
  - in this file there is a reducer key which can capture the action object and state 
  - createSlice from @redux.js/toolkit on 
- Store.js file holds the name of our key inside of state. 
  - needs to be into your entry point with the wrap of <Provider >