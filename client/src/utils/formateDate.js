export const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Phnom_Penh'
    })
}