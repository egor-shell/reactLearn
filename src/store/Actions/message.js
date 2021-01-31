export const SEND_MESSAGE = '@@message//SEND_MESSAGE'
export const sender = (message, author, chatId) => ({
    type: SEND_MESSAGE,
    payload: message, author, chatId
})