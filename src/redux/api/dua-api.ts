/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/base/base-api";
import { tagTypes } from "@/redux/tag-types";
import { IDua, IMeta } from "@/types";
import { reqTypes } from "../req-types";

const DUA_URL = "/duas";

export interface IDuaResponse {
  duas: IDua[];
  meta: IMeta;
}

export const DuaApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all Dua
    duas: build.query<IDuaResponse, Record<string, any>>({
      query: (arg: any) => ({
        url: DUA_URL,
        method: reqTypes.get,
        params: arg,
      }),
      transformResponse: (
        response: IDua[],
        meta: IMeta
      ): IDuaResponse => {
        return {
          duas: response,
          meta,
        };
      },
      providesTags: [tagTypes.dua],
    }),
    // get single Dua
    Dua: build.query<IDua, string | string[] | undefined>({
      query: (id: any) => ({
        url: `${DUA_URL}/${id}`,
        method: reqTypes.get,
      }),
      providesTags: [tagTypes.dua],
    }),
    // create a new Dua
    addDua: build.mutation<IDua, FormData>({
      query: (data: any) => ({
        url: DUA_URL,
        method: reqTypes.post,
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.dua],
    }),
    // update existing Dua
    updateDua: build.mutation<
      IDua,
      { id: string; body: Partial<IDua> }
    >({
      query: (data: { id: any; body: any }) => ({
        url: `${DUA_URL}/${data.id}`,
        method: reqTypes.patch,
        data: data.body,
      }),
      invalidatesTags: [tagTypes.dua],
    }),
    // delete existing Dua
    deleteDua: build.mutation<void, string>({
      query: (id: any) => ({
        url: `${DUA_URL}/${id}`,
        method: reqTypes.delete,
      }),
      invalidatesTags: [tagTypes.dua],
    }),
  }),
});

export const {
  useAddDuaMutation,
  useDeleteDuaMutation,
  useDuaQuery,
  useDuasQuery,
  useUpdateDuaMutation,
} = DuaApi;
