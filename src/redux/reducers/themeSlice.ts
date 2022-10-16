import {createSlice} from '@reduxjs/toolkit'

export interface theme {
    theme: boolean
}

const initialState: theme = {
    theme: false
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.theme = !state.theme
        }
    }
})

export default themeSlice.reducer


