import React from "react";
import { BrowserRouter,createBrowserRouter, Route, Routes, Link, RouterProvider } from "react-router-dom"

import PaginaInicial from "../Pages/PaginaInicial";
import Cadastro from "../Pages/Cadastro";
import Login from "../Pages/Login";
import RootLayout from "../Pages/Root";
import Fichas from "../Pages/Fichas";
import Aulas from "../Pages/Aulas";
import PoliticadePrivacidade from "../Pages/PoliticadePrivacidade";
import PoliticadeAulaePagamento from "../Pages/PoliticadeAulaePagamento";

//path: caminho após o domínio
//element: nome do arquivo em que está a página que deve ser carregada 
//RootLayout: elementos que serão carregados em todas as páginas (navbar, footer...)
//children: páginas que serão carregadas a partir dos links
const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {path: '/', element: <PaginaInicial />},
            {path: '/login', element: <Login />},
            {path: '/cadastro', element: <Cadastro />},
            {path: '/fichas', element: <Fichas />},
            {path: '/aulas', element: <Aulas />},
            {path: '/politica-de-privacidade', element: <PoliticadePrivacidade />},
            {path: '/politica-de-trocas-e-devolucoes', element: <PoliticadeAulaePagamento/>},
        ],
    },
]);

//o valor aplicado a 'RouterProvider' deve ser de mesmo nome que a constante que define 'createBrowserRouter'
function App(){
    return <RouterProvider router={router} />;
}


export default App;