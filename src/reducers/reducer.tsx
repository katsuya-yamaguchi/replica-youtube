const initialState = {
  hoge: 1,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case "TEST":
      const value = state;
    default:
      return state;
  }
}
