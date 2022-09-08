const locale = 'en-IE'

export const getDateString = (now) => new Date(now).toLocaleString(locale, { weekday: "long", day: "numeric", month: "long" })
export const getTimeString = (now) => new Date(now).toLocaleString(locale, { hour: "2-digit", minute: "2-digit", second: "2-digit" })
