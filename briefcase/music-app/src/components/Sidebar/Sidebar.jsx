import { Link } from 'react-router-dom'
import { useGetPlaylistsQuery } from '../../api/musicApi'
import SidebarItem from '../SidebarItem/SidebarItem'
import playlist1 from '../../img/playlist01.png'
import playlist2 from '../../img/playlist02.png'
import playlist3 from '../../img/playlist03.png'
import * as S from './styles'

export default function Sidebar() {
    const playlistArr = [playlist1, playlist2, playlist3]

    const { data, isSuccess, isLoading } = useGetPlaylistsQuery('')

    return (
        <S.Sidebar>
            <S.SidebarBlock>
                <S.SidebarList>
                    {isSuccess &&
                        data.map(({ id }) => (
                            <Link to={`/playlist/${id}`} key={id}>
                                <SidebarItem
                                    id={id}
                                    src={playlistArr[id - 1]}
                                    isLoading={isLoading}
                                />
                            </Link>
                        ))}
                </S.SidebarList>
            </S.SidebarBlock>
        </S.Sidebar>
    )
}
