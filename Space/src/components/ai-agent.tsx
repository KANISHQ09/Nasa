import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

interface Message {
  role: "user" | "assistant";
  content: string;
}

function AiAgentPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const formatContent = useCallback((text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-semibold">{part.slice(2, -2)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  }, []);

  const handleSendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("https://agent-prod.studio.lyzr.ai/v3/inference/chat/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "sk-default-vaeODYHab23xkcK86nfzePj729EUooSp"
        },
        body: JSON.stringify({
          user_id: "kanishq0309@gmail.com",
          agent_id: "68e14d2d3637bc8ddc9ffd86",
          session_id: "68e14d2d3637bc8ddc9ffd86-4e2eovi62yk",
          message: content,
        }),
      });

      const data = await response.json();
      const assistantMessage: Message = {
        role: "assistant",
        content: data.response || "I received your message but couldn't generate a response."
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  return (
    <div 
      className="min-h-screen w-full flex flex-col text-white relative"
      style={{
        backgroundImage: `url('https://wallpapers.com/images/hd/space-aesthetic-colorful-galaxy-wxtxbwrpc88h3yny.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* Chat Messages */}
      <div
        className="flex-1 overflow-y-auto px-6 py-10 sm:px-12 sm:py-12 md:px-20 md:py-16 space-y-6 mb-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`::-webkit-scrollbar { display: none; }`}</style>

        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-6 px-4 mt-2">
            <h2 className="text-3xl font-bold text-white drop-shadow-lg">Welcome to Space AI</h2>
            <p className="text-white/70 text-lg max-w-md drop-shadow">
              Start a conversation and explore intelligent assistance.
            </p>
          </div>
        ) : (
          <>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                  "bg-black/40 backdrop-blur-md text-white border border-white/30"
                }`}>
                  <div className="leading-relaxed whitespace-pre-wrap">
                    {formatContent(message.content)}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Floating Input Bar */}
      <form 
        onSubmit={handleSubmit}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-[92%] max-w-3xl"
      >
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-3 shadow-lg">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1 resize-none bg-transparent text-white placeholder-white/60 outline-none px-4 py-2 text-base"
            rows={1}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="h-12 w-12 rounded-2xl bg-black hover:bg-neutral-900 flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-gray-600 text-gray-200"
         >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AiAgentPage;
