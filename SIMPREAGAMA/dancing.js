function dancing(str){
    // let result=''
    // for(let i=0;i<str.length;i++){
    //   if(str[i]===' '){
    //     result+=str[i]
    //   }else if(i%2===0){
    //     result+=str[i].toUpperCase()
    //   }else{
    //     result+=str[i].toLowerCase()
    //   }
    // }
    // return result
  let result =''
    for( let i =0; i<str.length; i++){
        if(i%2 === 0){
            //console.log(str[i]) 
            result += (str[i]).toUpperCase()
        }else{
            result += (str[i]).toLowerCase()
        }
    }
    return result
}
  console.log(dancing('This is a dancing sentence'))//ThIs iS A DaNcInG SeNtEnCe