import React from "react";
import PeopleList from "./components/PeopleList";
import AddPersonForm from "./components/AddPersonForm";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const initialState = {
  contacts: ['si A', 'si B', 'Maccaa'],
}

//Reducer function
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_PERSON':
      return {...state,
        contacts: [...state.contacts, action.data]}
    default:
      return state;
  }
}

const store = configureStore({reducer: reducer});

function ReduxContactManager() {
  return (
    <Provider store={store}>
      <AddPersonForm />
      <PeopleList />
    </Provider>
  )
}

export default ReduxContactManager;