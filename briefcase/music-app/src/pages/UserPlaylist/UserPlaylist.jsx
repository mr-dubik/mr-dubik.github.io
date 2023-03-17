import Search from '../../components/Search/Search'
import FavoritePlaylistContent from '../../components/Playlist/FavoritePlaylistContent/FavoritePlaylistContent'
import watch from '../../img/icon/watch.svg'
import * as S from './styles'

export default function UserPlaylist() {
    return (
        <div>
            <S.CenterBlock>
                <S.CenterBlockContent>
                    <Search />
                    <S.CenterBlockTitle>Мой плейлист</S.CenterBlockTitle>
                    <S.TitleWrapper>
                        <S.TitleTrack>ТРЕК</S.TitleTrack>
                        <S.TitleAuthor>ИСПОЛНИТЕЛЬ</S.TitleAuthor>
                        <S.TitleAlbum>АЛЬБОМ</S.TitleAlbum>
                        <S.TitleTime>
                            <S.WatchIcon src={watch} alt="time" />
                        </S.TitleTime>
                    </S.TitleWrapper>
                    <FavoritePlaylistContent />
                </S.CenterBlockContent>
            </S.CenterBlock>
        </div>
    )
}
