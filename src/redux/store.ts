// import {configureStore} from "@reduxjs/toolkit";
//
//
// let setupStore = configureStore({
//     reducer:rootReducer
// });
//
// type RootState = ReturnType<typeof rootReducer>
// type AppStore = ReturnType<typeof setupStore>
// type AppDispatch = AppStore['dispatch']
//
// export {
//     setupStore
// }
//
// export type {
//     RootState,
//     AppStore,
//     AppDispatch
// }
//
//

export interface IState {
    trigger: boolean,

}