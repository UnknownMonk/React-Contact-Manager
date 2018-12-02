import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  // action is an object with a type
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Bobby Jay',
        phone: '111-222-3333',
        email: 'bobbyjay@gmail.com'
      },
      {
        id: 2,
        name: 'Lady Bee',
        phone: '444-555-3344',
        email: 'ladybee@gmail.com'
      },
      {
        id: 3,
        name: 'Jon Doe',
        phone: '444-555-3344',
        email: 'jdoe@gmail.com'
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
