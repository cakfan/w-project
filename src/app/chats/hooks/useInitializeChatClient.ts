import { useSession } from "@/lib/auth/client";
import { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";

export default function useInitializeChatClient() {
  const { data } = useSession();
  const [chatClient, setChatClient] = useState<StreamChat | null>(null);

  useEffect(() => {
    if (!data?.user) return;

    const client = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_KEY!);

    client
      .connectUser(
        {
          id: data.user.id,
          name: data.user.name,
          username: data.user.username!,
          image: data.user.image,
        },
        async () => {
          const response = await fetch("/api/get-token");
          if (!response.ok) {
            throw Error("Failed to get token");
          }
          const body = await response.json();
          return body;
        },
      )
      .catch((error) => console.error("Failed to connect user", error))
      .then(() => setChatClient(client));

    return () => {
      setChatClient(null);
      client
        .disconnectUser()
        .catch((error) => console.error("Failed to disconnect user", error))
        .then(() => console.log("Connection closed"));
    };
  }, [data?.user]);

  return chatClient;
}
