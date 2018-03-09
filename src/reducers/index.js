// import { combineReducers } from 'redux';
// import AuthReducer from './AuthReducer';
// import EmployeeFormReducer from './EmployeeFormReducer';
// import EmployeeReducer from './EmployeeReducer';

// export default combineReducers({
//   auth: AuthReducer,
//   employeeForm: EmployeeFormReducer,
//   employees: EmployeeReducer
// });

import { combineReducers } from "redux";

import data from "./data";

export default combineReducers({
  data
});
