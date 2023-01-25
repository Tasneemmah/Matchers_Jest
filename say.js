function welcomeToOurProgram(name) {
    if (name === undefined) {
        name = "unknown"
        return name
    } else {
        return name +" your name starts with "+name[0]
    }
}


module.exports = welcomeToOurProgram