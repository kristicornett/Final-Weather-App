
// using a Map to hold key value pairs
const ICON_Map = new Map()

//helper function to loop through icon codes on api

function addMap(values, icon) {
    values.forEach(value => {
        ICON_Map.set(value, icon)
    })
}

//using helper function to set codes from api. ICON_Map.set(0, 'sun')

addMap([0, 1], 'sun')
addMap([2], 'cloud-sun')
addMap([3], 'cloud')
addMap([45, 48], 'smog')
addMap([51, 53, 55, 56, 67, 61, 63, 65, 66, 67, 80, 81, 82], 'cloud-showers-heavy')
addMap([71, 73, 75, 77, 85, 86], 'snowflake')
addMap([95, 96, 99], 'cloud-bolt')