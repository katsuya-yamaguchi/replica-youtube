const initialState = {
  hoge: 1
}

export default function reducer(state = initialState, action: any) {
  switch(action.type){
    case 'TEST':
      let value = state;
    default:
      return state
  }
}