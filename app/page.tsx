"use client";

import { MyAssistant } from "@/components/MyAssistant";
import {
  AssistantModal,
  AssistantRuntimeProvider,
  useEdgeRuntime,
} from "@assistant-ui/react";

export default function Home() {
  const runtime = useEdgeRuntime({ api: "/api/chat" });
  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {/* your app */}
      <main className="h-dvh">
        <div className="h-full">
          <MyAssistant />
          <AssistantModal />
        </div>
      </main>
    </AssistantRuntimeProvider>
  );
}
