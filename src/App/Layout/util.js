const findValuesByKeyStartsWith = (o, startsWith) => o && Object.entries(o).find(e => e[0].startsWith(startsWith))

const findValueByKeyStartsWith = (o, startsWith) => findValuesByKeyStartsWith(o, startsWith)[1];

export const generateSensorsHelpers = (sensors) => ({
    getSensorData: (label, removeSpaces = true) => {
        const value = findValueByKeyStartsWith(sensors.find((s) => findValueByKeyStartsWith(s, "Label") === label), "Value");
        if (!removeSpaces) {
            return value
        }

        return value.replace(" ", "");
    },
    getSensorRawData: (label) => Number(findValueByKeyStartsWith(sensors.find((s) => findValueByKeyStartsWith(s, "Label") === label), "ValueRaw"))
})
