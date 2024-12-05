import { baseApi } from "@/redux/base/baseApi";
import { tagTypes } from "@/redux/tag-types";
import { ICategory, IMeta } from "@/types";
import { reqTypes } from "../req-types";

const CATEGORY_URL = "/categories";

export const CategoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all Category
    categories: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: CATEGORY_URL,
          method: reqTypes.get,
          params: arg,
        };
      },
      transformResponse: (response: ICategory[], meta: IMeta) => {
        return {
          categories: response,
          meta,
        };
      },
      providesTags: [tagTypes.category],
    }),
    // get single Category
    category: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${CATEGORY_URL}/${id}`,
        method: reqTypes.get,
      }),
      providesTags: [tagTypes.category],
    }),
    // create a new Category
    addCategory: build.mutation({
      query: (data) => ({
        url: CATEGORY_URL,
        method: reqTypes.post,
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.category],
    }),
    // update existing Category
    updateCategory: build.mutation({
      query: (data) => ({
        url: `${CATEGORY_URL}/${data.id}`,
        method: reqTypes.patch,
        data: data.body,
      }),
      invalidatesTags: [tagTypes.category],
    }),
    // delete existing Category
    deleteCategory: build.mutation({
      query: (id) => ({
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
