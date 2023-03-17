/* eslint-disable no-console */
import { useSelector } from 'react-redux'
import { ReactComponent as LikeIcon } from '../../../img/icon/like.svg'
import { ReactComponent as DislikeIcon } from '../../../img/icon/dislike.svg'
import {
    useAddFavoriteTrackMutation,
    useDeleteFavoriteTrackMutation,
} from '../../../api/musicApi'
import * as S from './styles'

export default function FavoriteButtons() {
    const currentTrackId = useSelector((state) => state.player.id)

    const [addTrack, { isError, error }] = useAddFavoriteTrackMutation()
    const [deleteTrack, { isError: isDeleteError, error: deleteError }] =
        useDeleteFavoriteTrackMutation()

    const onAddTrack = () => {
        addTrack(currentTrackId)
    }

    const onDeleteTrack = () => {
        deleteTrack(currentTrackId)
    }

    if (isError) {
        console.log(error)
    }

    if (isDeleteError) {
        console.log(deleteError)
    }

    return (
        <S.Wrapper>
            <S.LikeButton onClick={onAddTrack}>
                <S.LikeIconWrapper>
                    <LikeIcon aria-label="like" />
                </S.LikeIconWrapper>
            </S.LikeButton>
            <S.DislikeButton onClick={onDeleteTrack}>
                <S.LikeIconWrapper>
                    <DislikeIcon aria-label="dislike" />
                </S.LikeIconWrapper>
            </S.DislikeButton>
        </S.Wrapper>
    )
}
