function sumOfNumber(...OUR_NUMBERS){
    return OUR_NUMBERS.reduce((pv,cv)=> pv+cv,null)
}

module.exports=sumOfNumber