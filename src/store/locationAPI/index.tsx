import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../api";
import { Response } from "../genericInterface";
import { IUser } from "./interface";

export const locationAPI = createApi({
  reducerPath: "locationAPI",
  baseQuery: baseQuery,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getUserLocation: builder.query<any, void>({
      query: () => ({
        url: "https://api.ipdata.co/?api-key=9e7a0c0f96aab5b83275c554e8a30970b697f9056568eb10707d6e0d",
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),

    

  }),
});

export const {
  useGetUserLocationQuery
} = locationAPI;
