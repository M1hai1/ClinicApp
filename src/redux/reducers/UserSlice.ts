import { IUser } from "../../models/IUser";

import {createSlice} from '@reduxjs/toolkit'
import { fetchUsers } from "./ActionCreators";

interface userState {
    users: IUser[],
    isLoading: boolean,
    isError: string,
}

const initialState: userState = {
    users: [],
    isLoading: false,
    isError: '',
}

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
        extraReducers: {
            [fetchUsers.fulfilled.type]: (state, action) => {
                state.isLoading = false;
                state.isError = '';
                state.users = action.payload;
            },
            [fetchUsers.pending.type]: (state) => {
                state.isLoading = true

            },
            [fetchUsers.rejected.type]: (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            },
        }
    
    }
)

export default userReducer.reducer