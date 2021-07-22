// selectors
export const getCars = ({cars}) => cars;

export const getCar = ({cars}, id) => {
  const filtered = cars.filter(car => car.id === id)
  return filtered[0]
};

// action name creator
const reducerName = 'cars';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CAR = createActionName('ADD_CAR');

// action creators
export const addCar = payload => ({ payload, type: ADD_CAR,});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CAR:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}