import { cn } from "@/lib/utils";
import { ChannelList } from "stream-chat-react";

export default function Sidebar({
  userId,
  show,
}: {
  userId: string;
  show: boolean;
}) {
  return (
    <div
      className={cn(
        "w-full flex-col md:max-w-[360px]",
        show ? "flex" : "hidden",
      )}
    >
      <ChannelList
        filters={{
          type: "messaging",
          members: { $in: [userId] },
        }}
        sort={{ last_message_at: -1 }}
        options={{
          state: true,
          presence: true,
          limit: 10,
        }}
      />
    </div>
  );
}
