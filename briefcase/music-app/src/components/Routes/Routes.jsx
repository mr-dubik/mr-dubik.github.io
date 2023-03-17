import { Routes as ReactRoutes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Login from '../../pages/Login/Login'
import Signup from '../../pages/Signup/Signup'
import Tracks from '../../pages/Tracks/Tracks'
import SelectPlaylist from '../../pages/SelectPlaylist/SelectPlaylist'
import UserPlaylist from '../../pages/UserPlaylist/UserPlaylist'
import NotFound from '../../pages/NotFound/NotFound'
import ProtectedRoute from './ProtectedRoute'
import NavLayout from '../Layouts/NavLayout/NavLayout'
import PlayerLayout from '../Layouts/PlayerLayout/PlayerLayout'

export default function Routes() {
    const isLogin = useSelector((state) => state.auth.isLogin)

    return (
        <ReactRoutes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<NavLayout />}>
                <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/" element={<ProtectedRoute isLogin={isLogin} />}>
                <Route element={<NavLayout />}>
                    <Route element={<PlayerLayout />}>
                        <Route index element={<Tracks />} />
                        <Route path="/Tracks" element={<Tracks />} />
                        <Route
                            path="playlist/:id"
                            element={<SelectPlaylist />}
                        />
                        <Route path="my_playlist" element={<UserPlaylist />} />
                    </Route>
                </Route>
            </Route>
        </ReactRoutes>
    )
}
