"use client";

import { UserType } from "@/db/schema";
import { cn } from "@/lib/utils";
import { DefaultGenerics, StreamChat } from "stream-chat";
import {
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Window,
} from "stream-chat-react";

export default function ChatChannel({
  show,
  chatClient,
  you,
  userId,
}: {
  show: boolean;
  chatClient: StreamChat<DefaultGenerics>;
  you: UserType;
  userId: string;
}) {
  const channel = chatClient.channel("messaging", {
    members: [userId, you.id],
  });

  return (
    <div className={cn("h-full w-full", show ? "block" : "hidden")}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
      </Channel>
    </div>
  );
}
