import { createApi } from '@reduxjs/toolkit/query/react';
import { imageBaseQuery as baseQuery } from './baseQuery';
import {
  UploadImageResponseType,
  ImageUrlType,
  DeleteImageResponseType,
  DeleteImageRequestType,
} from '@/app/travel-reviews/types';

const imageApi = createApi({
  reducerPath: 'imageApi',
  baseQuery,
  endpoints: build => ({
    uploadImage: build.mutation<ImageUrlType, FormData>({
      query: image => ({
        url: 'images/upload',
        method: 'POST',
        body: image,
      }),
      transformResponse: (response: UploadImageResponseType) => {
        const uploaded_url = response.uploaded_url;
        return { uploaded_url };
      },
    }),
    deleteImage: build.mutation<DeleteImageResponseType, DeleteImageRequestType>({
      query: image => ({
        url: 'images/upload',
        method: 'DELETE',
        body: image,
      }),
    }),
  }),
});

export const { useUploadImageMutation, useDeleteImageMutation } = imageApi;

export default imageApi;
