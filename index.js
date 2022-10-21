// Code your solution here
function findMatching(drivers, name) {
    let matchingDrivers = drivers.filter(driver => {
        return driver.toLowerCase() === name.toLowerCase()
    })
    return matchingDrivers
}

function fuzzyMatch(drivers, string) {
    let matchingDrivers
    if (string.length === 1) {
        matchingDrivers = drivers.filter(driver => {
            return driver[0] === string
        })
    }
    else {
        matchingDrivers = drivers.filter(driver => {
            return driver.slice(0,string.length) === string
        })
    }
    return matchingDrivers
}

function matchName(drivers, string) {
    let matchingDrivers
    matchingDrivers = drivers.filter(driver => {
        return driver.name === string
    })
    return matchingDrivers
}