function welcomeToOurProgram(name) {
  if(name.startsWith('a')){
    return " your name starts with a"
  }
  else{
    return "your name starts with "+name[0]
  }
}


module.exports = welcomeToOurProgram