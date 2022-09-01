const locale = 'en-IE'

export const getDateString = (date) => date.toLocaleString(locale, { weekday: "long", day: "numeric", month: "long" })
export const getTimeString = (date) => date.toLocaleString(locale, { hour: "2-digit", minute: "2-digit", second: "2-digit" })
