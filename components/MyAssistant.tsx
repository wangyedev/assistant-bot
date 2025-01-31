import { Thread } from "@assistant-ui/react";
import { makeMarkdownText } from "@assistant-ui/react-markdown";

const MarkdownText = makeMarkdownText();

export function MyAssistant() {
  return (
    <div className="h-full">
      <Thread assistantMessage={{ components: { Text: MarkdownText } }} />
    </div>
  );
}
