/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/base/base-api";
import { tagTypes } from "@/redux/tag-types";
import { ICategory, IMeta } from "@/types";
import { reqTypes } from "../req-types";

const CATEGORY_URL = "/categories";

export interface ICategoryResponse {
  categories: ICategory[];
  meta: IMeta;
}

export const CategoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all Category
    categories: build.query<ICategoryResponse, Record<string, any>>({
      query: (arg: any) => ({
        url: CATEGORY_URL,
        method: reqTypes.get,
        params: arg,
      }),
      transformResponse: (
        response: ICategory[],
        meta: IMeta
      ): ICategoryResponse => {
        return {
          categories: response,
          meta,
        };
      },
      providesTags: [tagTypes.category],
    }),
    // get single Category
    category: build.query<ICategory, string | string[] | undefined>({
      query: (id: any) => ({
        url: `${CATEGORY_URL}/${id}`,
        method: reqTypes.get,
      }),
      providesTags: [tagTypes.category],
    }),
    // create a new Category
    addCategory: build.mutation<ICategory, FormData>({
      query: (data: any) => ({
        url: CATEGORY_URL,
        method: reqTypes.post,
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.category],
    }),
    // update existing Category
    updateCategory: build.mutation<
      ICategory,
      { id: string; body: Partial<ICategory> }
    >({
      query: (data: { id: any; body: any; }) => ({
        url: `${CATEGORY_URL}/${data.id}`,
        method: reqTypes.patch,
        data: data.body,
      }),
      invalidatesTags: [tagTypes.category],
    }),
    // delete existing Category
    deleteCategory: build.mutation<void, string>({
      query: (id: any) => ({
        url: `${CATEGORY_URL}/${id}`,
        method: reqTypes.delete,
      }),
      invalidatesTags: [tagTypes.category],
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useCategoryQuery,
  useCategoriesQuery,
  useUpdateCategoryMutation,
} = CategoryApi;
