"use client";

import "stream-chat-react/dist/css/v2/index.css";
import { useSession } from "@/lib/auth/client";
import useInitializeChatClient from "../hooks/useInitializeChatClient";
import { Loader2, Menu, X } from "lucide-react";
import { Chat as StreamChat } from "stream-chat-react";
import Sidebar from "./sidebar";
import ChatChannel from "./channel";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import useWindowSize from "@/hooks/useWindowSize";
import { mdBreakpoint } from "@/lib/tailwind";
import { UserType } from "@/db/schema";

export default function Chat({ you }: { you: UserType }) {
  const { data } = useSession();
  const chatClient = useInitializeChatClient();
  const [chatSidebarOpen, setChatSidebarOpen] = useState<boolean>(false);
  const windowSize = useWindowSize();

  const isLargeScreen = windowSize.width >= mdBreakpoint;

  if (!chatClient || !data) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <main className="relative w-full overflow-hidden rounded-2xl shadow-sm">
      <div className="h-screen">
        <StreamChat client={chatClient}>
          {/* <div className="flex justify-center border-b p-3 md:hidden">
            <Button onClick={() => setChatSidebarOpen(!chatSidebarOpen)}>
              {!chatSidebarOpen ? <Menu /> : <X />}
            </Button>
          </div> */}
          <div className="flex h-full flex-row">
            <Sidebar
              userId={data.user.id}
              show={isLargeScreen || chatSidebarOpen}
            />
            <ChatChannel
              chatClient={chatClient}
              you={you}
              userId={data.user.id}
              show={isLargeScreen || !chatSidebarOpen}
            />
          </div>
        </StreamChat>
      </div>
    </main>
  );
}
