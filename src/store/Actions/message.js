export const SEND_MESSAGE = '@@message//SEND_MESSAGE'
export const sendMessage = (message, author, chatId) => ({
    type: SEND_MESSAGE,
    message,
    author,
    chatId
})