import Search from '../../components/Search/Search'
import Filter from '../../components/Filter/Filter/Filter'
import Playlist from '../../components/Playlist/Playlist/Playlist'
import Sidebar from '../../components/Sidebar/Sidebar'
import watch from '../../img/icon/watch.svg'
import * as S from './styles'

export default function Tracks() {
    return (
        <>
            <S.CenterBlock>
                <S.CenterBlockContent>
                    <Search />
                    <S.CenterBlockTitle>Треки</S.CenterBlockTitle>
                    <Filter />
                    <S.TitleWrapper>
                        <S.TitleTrack>ТРЕК</S.TitleTrack>
                        <S.TitleAuthor>ИСПОЛНИТЕЛЬ</S.TitleAuthor>
                        <S.TitleAlbum>АЛЬБОМ</S.TitleAlbum>
                        <S.TitleTime>
                            <S.WatchIcon src={watch} alt="time" />
                        </S.TitleTime>
                    </S.TitleWrapper>
                    <Playlist />
                </S.CenterBlockContent>
            </S.CenterBlock>
            <Sidebar />
        </>
    )
}
