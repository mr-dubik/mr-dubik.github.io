import { Outlet } from 'react-router-dom'
import Player from '../../Player/Player/Player'
import refreshToken from '../../../utils/refreshToken'

export default function PlayerLayout() {
    refreshToken()

    return (
        <main>
            <Outlet />
            <Player />
        </main>
    )
}
