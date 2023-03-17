export default function formatDuration(durationInSeconds) {
    const minutes = (durationInSeconds / 60).toFixed(0)
    const seconds = +(durationInSeconds / 60).toFixed(2).slice(-2) * 60

    return `${minutes}:${seconds}`
}
