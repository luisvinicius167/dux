import { Provider } from './providers'
import create from './updateState'
 
 /**
  * @name createStore
  * @description Sets the store state
  * @param {Object} data Simple Object that contain the State
  * @param {Function} reducers The action reducers
  */
  export default ( state, ...reducers ) => {
    reducers.forEach( ( reducer, index ) => Provider._reducers[index] = reducer )
    Provider._updateState = create(state)
  }