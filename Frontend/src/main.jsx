import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import ShowListings from "./components/showListing/showListing"
import Home from "./components/Home/home"
import CreateListing from "./components/createListing/CreateListing"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/listings/:id" element={<ShowListings />} />
      <Route path="/listings/new" element={<CreateListing />} />
      <Route path="*" element={<div className="text-black text-center p-10">404 - Page Not Found</div>} />
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
