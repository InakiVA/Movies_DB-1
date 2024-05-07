import { RouteObject, createBrowserRouter } from "react-router-dom";

import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import {ROUTES} from "./constants";
import { Home, MyFavorites, NowPlaying, Popular, TopRated, Show, Upcoming } from "../pages";




const routes: RouteObject[] = [
    {
        path: ROUTES.HOME, element: <PrivateRouter/>,
        children: [
            {path: ROUTES.HOME, element: <Home/>},
            {path: ROUTES.POPULAR, element: <Popular/>},
            {path: ROUTES.TOPRATED, element: <TopRated/>},
            {path: ROUTES.NOWPLAYING,element: <NowPlaying/>},
            {path: ROUTES.MYFAVORITES, element: <MyFavorites/>},
            {path: `${ROUTES.SHOW}:id`,element:<Show/>}, //show:/id
            {path: ROUTES.UPCOMING, element: <Upcoming/>}
        ]
    },
    {
        path: '/',element:<PublicRouter/>,
        children: [
            {path: '/', element: <Home/>}
            
        ]
         
        
    }
]

export const router = createBrowserRouter(routes);