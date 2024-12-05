/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/base/base-api";
import { tagTypes } from "@/redux/tag-types";
import { ISubCategory, IMeta } from "@/types";
import { reqTypes } from "../req-types";

const SUB_CATEGORY_URL = "/sub-categories";

export interface ISubCategoryResponse {
  subCategories: ISubCategory[];
  meta: IMeta;
}

export const SubCategoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all SubCategory
    subCategories: build.query<ISubCategoryResponse, Record<string, any>>({
      query: (arg: any) => ({
        url: SUB_CATEGORY_URL,
        method: reqTypes.get,
        params: arg,
      }),
      transformResponse: (
        response: ISubCategory[],
        meta: IMeta
      ): ISubCategoryResponse => {
        return {
          subCategories: response,
          meta,
        };
      },
      providesTags: [tagTypes.subCategory],
    }),
    // get single SubCategory
    SubCategory: build.query<ISubCategory, string | string[] | undefined>({
      query: (id: any) => ({
        url: `${SUB_CATEGORY_URL}/${id}`,
        method: reqTypes.get,
      }),
      providesTags: [tagTypes.subCategory],
    }),
    // create a new SubCategory
    addSubCategory: build.mutation<ISubCategory, FormData>({
      query: (data: any) => ({
        url: SUB_CATEGORY_URL,
        method: reqTypes.post,
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.subCategory],
    }),
    // update existing SubCategory
    updateSubCategory: build.mutation<
      ISubCategory,
      { id: string; body: Partial<ISubCategory> }
    >({
      query: (data: { id: any; body: any }) => ({
        url: `${SUB_CATEGORY_URL}/${data.id}`,
        method: reqTypes.patch,
        data: data.body,
      }),
      invalidatesTags: [tagTypes.subCategory],
    }),
    // delete existing SubCategory
    deleteSubCategory: build.mutation<void, string>({
      query: (id: any) => ({
        url: `${SUB_CATEGORY_URL}/${id}`,
        method: reqTypes.delete,
      }),
      invalidatesTags: [tagTypes.subCategory],
    }),
  }),
});

export const {
  useAddSubCategoryMutation,
  useDeleteSubCategoryMutation,
  useSubCategoryQuery,
  useSubCategoriesQuery,
  useUpdateSubCategoryMutation,
} = SubCategoryApi;
