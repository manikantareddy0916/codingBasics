//print not duplicate / repeted 
const str = 'dct academy'
//console.log('d',str.lastIndexOf('c'))
let data = ''
for (let i=0; i<str.length; i++){
    console.log('jk',i,str[i],'jj',str.lastIndexOf(str[i]))
    if(str.indexOf(str[i]) == str.lastIndexOf(str[i])){
      //console.log('jd',str.lastIndexOf(str[i]))
      //console.log('j',str[i])
       data += str[i]
    }else{
        
    }
}
console.log('data',data)
const a = 'abcxayz'
console.log('l',a.lastIndexOf('a'))
console.log('l',a.indexOf('a'))
