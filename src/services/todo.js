import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todo",
      providesTags: ["Todo"],
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/todo",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todo"],
    }),
    updateTodo: builder.mutation({
      query: (id, completed) => ({
        url: `/todo/${id}`,
        method: "PATCH",
        body: completed,
      }),
      invalidatesTags: ["Todo"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todo/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
