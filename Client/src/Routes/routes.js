import React from "react";
import { BrowserRouter,createBrowserRouter, Route, Routes, Link, RouterProvider } from "react-router-dom"

import PaginaInicial from "../Pages/PaginaInicial";
import Cadastro from "../Pages/Cadastro";
import Login from "../Pages/Login";
import RootLayout from "../Pages/Root";

//path: caminho após o domínio
//element: nome do arquivo em que está a página que deve ser carregada 
const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {path: '/', element: <PaginaInicial />},
            {path: '/login', element: <Login />},
            {path: '/cadastro', element: <Cadastro />},
        ],
    },
]);

//o valor aplicado a 'RouterProvider' deve ser de mesmo nome que a constante que define 'createBrowserRouter'
function App(){
    return <RouterProvider router={router} />;
}


export default App;