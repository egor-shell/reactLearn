export const SEND_MESSAGE = '@@message//SEND_MESSAGE'

export const sendMessage = (message, author, id, chatId) => ({
    type: SEND_MESSAGE,
    message,
    author,
    id,
    chatId
})