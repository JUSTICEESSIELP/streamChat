import { createContext, ReactNode, useContext, useEffect } from "react";
import { client } from "../utils/streamChatConfig";
import { Alert } from "react-native";

// Define the type of your context
type ChatContextType = {
  honey: string;
};

// Create the context and set its type
export const ChatContext = createContext<ChatContextType>({ honey: "hi" });

type ChildrenType = {
  children: ReactNode;
};

export const ChatProvider = ({ children }: ChildrenType) => {
  return (
    <ChatContext.Provider value={{ honey: "hi" }}>
      {children}
    </ChatContext.Provider>
  );
};
