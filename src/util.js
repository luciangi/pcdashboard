export const getCssVariable = (cssVar) => getComputedStyle(document.documentElement).getPropertyValue(cssVar)

export const getColors = () => (
    {
        colorPrimary: getCssVariable("--color-primary"),
        colorSecondary: getCssVariable("--color-secondary"),
        colorAlert: getCssVariable("--color-alert"),
        colorBackground: getCssVariable("--background-color")
    }
)

export const getRawData = (data) => Number(data.replace(/[^\d.-]/g, ""))
