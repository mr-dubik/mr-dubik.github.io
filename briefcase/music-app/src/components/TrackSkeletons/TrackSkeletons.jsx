import note from '../../img/icon/note.svg'
import getSkeletonArray from '../../utils/getSkeletonArray'
import * as S from './styles'

export default function TrackSkeletons() {
    const skeletonArray = getSkeletonArray()

    return (
        <S.ContentWrapper>
            {skeletonArray.map((track) => (
                <S.TrackSkeletonWrapper key={track}>
                    <S.SkeletonImageWrapper>
                        <S.TrackImageSkeleton src={note} alt="music" />
                    </S.SkeletonImageWrapper>
                    <S.TrackTitleSkeleton />
                    <S.TrackAuthorSkeleton />
                    <S.TrackAlbumSkeleton />
                    <S.TrackTimeSkeleton />
                </S.TrackSkeletonWrapper>
            ))}
        </S.ContentWrapper>
    )
}
