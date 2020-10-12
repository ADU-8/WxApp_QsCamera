import {
  HTTP
}
from '../util/http.js'

class MessageModel extends HTTP {
  async SendMsg(num,code) {
    const temp = await this.request({
      name: "SendMsg",
      data:{
        num:num,
        code:code
      }
    })
    console.log(temp)
    return temp
  }
  async SendMsg_Modify(num,code) {
    const temp = await this.request({
      name: "SendMsg_Modify",
      data:{
        num:num,
        code:code
      }
    })
    console.log(temp)
    return temp
  }

  async SendTipMsg(myphone,borrowman,equip,returntime,nowtime) {
    const temp = await this.request({
      name: "SendReturntips",
      data:{
        myphone,
        borrowman,
        equip,
        returntime,
        nowtime
      }
    })
    console.log(temp)
    return temp
  }
}

export {
  MessageModel
}