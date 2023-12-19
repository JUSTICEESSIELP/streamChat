import { StreamChat } from "stream-chat";
const STREAM_CHAT_API_KEY = process.env.EXPO_PUBLIC_STREAM_CHAT_API_KEY!;
console.log(STREAM_CHAT_API_KEY);

export const client = StreamChat.getInstance(STREAM_CHAT_API_KEY);
