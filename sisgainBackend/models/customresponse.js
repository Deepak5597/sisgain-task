module.exports.customResponse = function(messageType,messageCode,message,data){
    return {
        messageType: messageType,
        messageCode: messageCode,
        message: message,
        data: data
    }
}