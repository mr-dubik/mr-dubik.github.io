const getUsername = () => {
    const userName = document.cookie.split(';')[0].split('=')[1]
    return userName
}

export const getFavoriteTracks = (tracks) =>
    tracks.filter((track) =>
        track.stared_user.find((el) => el.username === getUsername())
    )

export const checkFavoriteTrack = (id, arr = []) => {
    let isFavorite = false

    arr.forEach((el) => {
        if (el.id === id) {
            isFavorite = true
        }
    })

    return isFavorite
}
