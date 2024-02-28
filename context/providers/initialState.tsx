export type DispatchArgs = {
    type: string;
    payload: any;
  }
  
export type State = {
    test: number;
    home: number;
}

const initialState: State = {
    test: 0,
    home: 0,
};

export default initialState;
