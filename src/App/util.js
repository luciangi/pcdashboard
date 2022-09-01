export const getWinHwMetrics = async () => {
    const url = process.env.REACT_APP_WIN_HW_METRICS_URL
    if (!url) {
        throw new Error(`REACT_APP_WIN_HW_METRICS_URL is undefined! REACT_APP_WIN_HW_METRICS_URL="${url}"`)
    }

    return (await fetch(url, { mode: "cors" })).json()
}
