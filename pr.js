let ar=[4,3,2,1]
let rs=[]
fun(0,4,ar,rs)
function fun(s,e,len,rs) {
    if(rs.length==0){}
    if(rs.length>0){
        let tp=[]
        let od=0
        for (let i = 0; i < rs.length; i++) {
           if(rs[i]%2!==0){
               od++
           }
        }
       if(od>=2){console.log(rs)}
    }
    if(s==len.length){
        return
    }
    for (let i = s; i < len.length; i++) {
        rs.push(len[i])
        fun(i+1,e,len,rs)
        rs.pop()
    }
}

