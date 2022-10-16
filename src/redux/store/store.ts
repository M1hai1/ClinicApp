import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from '../reducers/UserSlice'
import themeReducer from '../reducers/themeSlice'
import { userAPI } from "../server/UserService";
const rootReducer = combineReducers({
    userReducer,
    themeReducer,
    [userAPI.reducerPath]: userAPI.reducer,

})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,

    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']