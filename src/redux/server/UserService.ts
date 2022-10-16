import { build } from "@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from "../../models/IUser";



// Работа с rtkQuery, получение данных

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/'}),
    tagTypes: ['User'],
    endpoints: (build) => ({
        fetchAllUsers: build.query<IUser[], number>({
            query: (limit: number) => ({
                url: 'users',
                params:{
                    _limit: limit
                }
            }),
            providesTags: result => ['User']
        }),
    })
})