import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, X, Send } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! Je suis l'assistant ArtisanConnect. Comment puis-je vous aider aujourd'hui ?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const simulatedResponses = [
    "Je peux vous aider à trouver un artisan qualifié dans votre région.",
    "Tous nos artisans sont vérifiés et certifiés.",
    "Vous pouvez consulter les avis clients avant de faire votre choix.",
    "N'hésitez pas à demander plusieurs devis pour comparer.",
    "Nos artisans sont disponibles 7j/7 pour les urgences.",
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const randomResponse =
        simulatedResponses[Math.floor(Math.random() * simulatedResponses.length)];
      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="fixed bottom-8 left-8 z-[999] h-14 w-14 rounded-full bg-gradient-primary shadow-lg hover:opacity-90 transition-opacity"
          aria-label="Ouvrir le chat"
        >
          <MessageSquare className="w-6 h-6" />
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-8 left-8 z-[999] w-96 shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 bg-gradient-primary text-primary-foreground rounded-t-lg">
            <CardTitle className="text-lg font-semibold">Assistant ArtisanConnect</CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 hover:bg-primary-dark"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-4">
            <ScrollArea className="h-96 pr-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        message.sender === "user"
                          ? "bg-gradient-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <span className="text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString("fr-FR", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="flex gap-2 mt-4">
              <Input
                placeholder="Tapez votre message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="bg-gradient-primary hover:opacity-90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
