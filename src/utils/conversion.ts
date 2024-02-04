export function secondsToTime(seconds: number) {
    return new Date(seconds * 1000).toISOString().substring(11, 19)
}