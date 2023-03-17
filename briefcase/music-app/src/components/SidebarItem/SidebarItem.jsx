import { useDispatch } from 'react-redux'
import { getPlaylistId } from '../../store/slices/playlistSlice'
import * as S from './styles'

export default function SidebarItem({ src, isLoading, id }) {
    const dispatch = useDispatch()

    const onPlaylistId = (e) => {
        dispatch(getPlaylistId(e.target.id))
    }

    return (
        <div>
            <S.SidebarItem>
                {isLoading && <S.Skeleton />}
                {!isLoading && (
                    <S.SidebarImage
                        src={src}
                        id={id}
                        onClick={(e) => onPlaylistId(e)}
                    />
                )}
            </S.SidebarItem>
        </div>
    )
}
