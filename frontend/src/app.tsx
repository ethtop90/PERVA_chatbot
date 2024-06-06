import React, { useMemo } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import { createRouter } from './router'
import { Provider } from 'react-redux' // Import Provider from react-redux
import store from './store'; // Import your Redux store


export default function App() {
  const queryClient = useMemo(() => new QueryClient({}), [])
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={createRouter()} />
      </Provider>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  )
}
