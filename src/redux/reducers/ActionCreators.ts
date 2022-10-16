import { AppDispatch } from "../store/store";
import axios from 'axios'
import { IUser } from "../../models/IUser";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jonplaceholder.typicode.com/users')
            return response.data
            } catch (e) {
            return thunkAPI.rejectWithValue('Не удались загрузить')
        }
    }
)