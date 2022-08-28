const locale = 'en-IE'

const getDateString = (date) => date.toLocaleString(locale, { weekday: "long", day: "numeric", month: "long" })

const getTimeString = (date) => date.toLocaleString(locale, { hour: "2-digit", minute: "2-digit", second: "2-digit" })

export {
    getDateString,
    getTimeString
}
