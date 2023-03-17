import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const musicApi = createApi({
    reducerPath: 'musicApi',
    tagTypes: ['Tracks'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://painassasin.online/',
        prepareHeaders: (headers, { getState }) => {
            const { token } = getState().auth
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        getAllTracks: builder.query({
            query: () => ({
                url: '/catalog/track/all',
            }),
            providesTags: ['Tracks'],
        }),

        getTrackById: builder.query({
            query: (id) => ({
                url: `/catalog/track/${id}`,
            }),
            providesTags: ['Tracks'],
        }),

        getPlaylists: builder.query({
            query: () => '/catalog/selection/',
        }),

        getFavoriteTracks: builder.query({
            query: () => ({
                url: '/catalog/track/favorite/all/',
            }),
            providesTags: ['Tracks'],
        }),

        getPlaylistById: builder.query({
            query: (id) => ({
                url: `/catalog/selection/${id}`,
            }),
            providesTags: ['Tracks'],
        }),

        userSignup: builder.mutation({
            query: ({ ...payload }) => ({
                url: '/user/signup/',
                method: 'POST',
                body: payload,
            }),
        }),

        userLogin: builder.mutation({
            query: ({ ...payload }) => ({
                url: '/user/login/',
                method: 'POST',
                body: payload,
            }),
        }),

        getToken: builder.mutation({
            query: ({ ...payload }) => ({
                url: '/user/token/',
                method: 'POST',
                body: payload,
            }),
        }),

        refreshToken: builder.mutation({
            query: ({ ...payload }) => ({
                url: '/user/token/refresh/',
                method: 'POST',
                body: payload,
            }),
        }),

        addFavoriteTrack: builder.mutation({
            query: (payload) => ({
                url: `/catalog/track/${payload}/favorite/`,
                method: 'POST',
            }),
            invalidatesTags: ['Tracks'],
        }),

        deleteFavoriteTrack: builder.mutation({
            query: (payload) => ({
                url: `/catalog/track/${payload}/favorite/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Tracks'],
        }),
    }),
})

export const {
    useGetAllTracksQuery,
    useGetTrackByIdQuery,
    useGetPlaylistByIdQuery,
    useGetPlaylistsQuery,
    useGetFavoriteTracksQuery,
    useUserSignupMutation,
    useUserLoginMutation,
    useGetTokenMutation,
    useRefreshTokenMutation,
    useAddFavoriteTrackMutation,
    useDeleteFavoriteTrackMutation,
} = musicApi
