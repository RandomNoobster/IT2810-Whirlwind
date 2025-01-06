import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom';
import './App.css';
import { FavoritesProvider } from './contexts/FavoritesContext';
import { LocationProvider } from './contexts/LocationContext';
import Home from './pages/Home/Home';
import Location from './pages/Location/Location';

const queryClient = new QueryClient();

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <>
          {/* Need to put the LocationProvider here as it is dependent on the Router */}
          <LocationProvider>
            {/* ScrollRestoration will reset scroll position on navigation */}
            <ScrollRestoration />
            <Home />
          </LocationProvider>
        </>
      ),
    },
    {
      path: '/location/:locationName',
      element: (
        <>
          <LocationProvider>
            <ScrollRestoration />
            <Location />
          </LocationProvider>
        </>
      ),
    },
  ],
  {
    basename: '/whirlwind',
  },
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <RouterProvider router={router} />
      </FavoritesProvider>
    </QueryClientProvider>
  );
}

export default App;
