import { FETCHING_SMURFS, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAILURE, ADD_SMURF, ADDING_SMURF_SUCCESS, ADDING_SMURF_FAILURE } from "../actions";


 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

 const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {...state, fetchingSmurfs: true};

    case FETCHING_SMURFS_SUCCESS:
      return {...state, smurfs: action.payload, fetchingSmurfs: true};

    case FETCHING_SMURFS_FAILURE:
      return {...state, error: action.payload};

    case ADD_SMURF:
      return {...state, addingSmurf: true};

    case ADDING_SMURF_SUCCESS:
      return {...state, smurfs: action.payload, addingSmurf: true};

    case ADDING_SMURF_FAILURE:
      return {...state, error: action.payload};

    default:
      return {...state};
  }
}

export default smurfsReducer;