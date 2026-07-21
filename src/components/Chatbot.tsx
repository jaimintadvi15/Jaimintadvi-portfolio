import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, X, MessageSquare, Bot, User, Sparkles, RefreshCw } from 'lucide-react';
import { personalInfo } from '../data';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hi! I'm Jaimin's AI Assistant. Ask me anything about his projects, skills, experience, or education, and I'll be happy to help!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Automatically scroll to the bottom of the chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const systemPrompt = `You are the personal AI assistant for Jaimin Tadvi, a 2nd-year Computer Science Engineering student at MSU Baroda.
Your goal is to answer questions about Jaimin's portfolio, background, experience, projects, skills, and contact details.

Here is Jaimin's background info:
- Name: Jaimin Tadvi
- Title: Computer Science Engineering Student
- University: The Maharaja Sayajirao University of Baroda (MSU Baroda)
- Degree: B.E. Computer Science & Engineering
- Location: Vadodara, Gujarat, India
- Bio: Passionate 2nd-year student interested in building functional, high-performance, and visually gorgeous web applications. Web Team Member at the Code Vimarsh Club.
- Core Skills:
  - Languages: C++, C, Java, Python, JavaScript, HTML5, CSS3
  - Frameworks: React.js, Node.js, Express.js, Tailwind CSS, Bootstrap
  - Tools: Git, GitHub, VS Code, Postman, Figma
- Experience:
  - Web Team Member at Code Vimarsh Club (2024 - Present): Maintain responsive web projects, assist in bootcamps and hackathons.
  - Open Source Contributor (2024 - Present): Contribute patches and layouts.
- Projects:
  - Portfolio Website (Futuristic dark glassmorphism theme, Framer Motion)
  - E-Commerce UI Clone (Vibrant product cards, Context API, Tailwind)
  - Student Management System (Node.js, Express, MongoDB, React CRUD)
  - Real-Time Weather Dashboard (Interactive panel using OpenWeatherMap API)
- Achievements:
  - Web Team Induction at Code Vimarsh Club
  - Hackathon Top Contributor (developed decentralized resource sharing prototype)
  - MSU Coding Showdown - Rank 12
  - Responsive Web Design Certification
- Contact Details:
  - Email: jaimintadvi15@gmail.com
  - GitHub: https://github.com/jaimintadvi
  - LinkedIn: https://linkedin.com/in/jaimintadvi

Guidelines:
1. Be polite, friendly, and professional.
2. Keep answers concise (under 2-3 sentences) and focused.
3. If asked about Jaimin's contact details, provide his email (jaimintadvi15@gmail.com) and links.
4. If asked about unrelated things, politely steer back to Jaimin's career/portfolio.`;

  const getLocalResponse = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes('project') || q.includes('work') || q.includes('portfolio') || q.includes('build')) {
      return "Jaimin has built several awesome web projects, including this portfolio, an E-Commerce UI Clone, a Student Management app, and a Weather Dashboard. Check out the 'Projects' section below for live demos!";
    }
    if (q.includes('skill') || q.includes('tech') || q.includes('language') || q.includes('c++') || q.includes('react')) {
      return "Jaimin is skilled in C++, C, Java, Python, and JavaScript. For web development, he uses React.js, Node.js, Express.js, and Tailwind CSS. You can see the full list in the 'Core Skills' section.";
    }
    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('social') || q.includes('linkedin') || q.includes('github')) {
      return "You can reach Jaimin directly by email at jaimintadvi15@gmail.com. You can also connect with him on LinkedIn (linkedin.com/in/jaimintadvi) or check out his code on GitHub (github.com/jaimintadvi).";
    }
    if (q.includes('experience') || q.includes('club') || q.includes('vimarsh') || q.includes('job')) {
      return "Jaimin is a Web Team Member at the Code Vimarsh Club at MSU Baroda, where he maintains responsive club portals and coordinates coding bootcamps. He is also a GitHub open-source contributor.";
    }
    if (q.includes('education') || q.includes('university') || q.includes('college') || q.includes('msu') || q.includes('study')) {
      return "Jaimin is a B.E. Computer Science & Engineering student in his 2nd year at The Maharaja Sayajirao University of Baroda (MSU Baroda) in Vadodara, Gujarat.";
    }
    return "Thanks for asking! I'm Jaimin's AI Assistant. I can tell you about his projects, skills, education, and how to get in touch. What would you like to explore?";
  };

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Access key from environment or fallback
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
      
      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        // Fallback to local rule-based responder if no key is configured
        setTimeout(() => {
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: getLocalResponse(textToSend),
            timestamp: new Date()
          };
          setMessages((prev) => [...prev, botMessage]);
          setIsLoading(false);
        }, 800);
        return;
      }

      // API request to Gemini 1.5 Flash
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: systemPrompt }]
            },
            contents: [
              {
                role: 'user',
                parts: [{ text: textToSend }]
              }
            ]
          })
        }
      );

      const data = await response.json();
      const botText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't process that query. Please try again.";

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botText,
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Gemini API call failed:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: getLocalResponse(textToSend), // Use intelligent fallback on network/API failure
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSend(suggestion);
  };

  const suggestions = [
    "What projects has he built?",
    "What are his core skills?",
    "Tell me about his university.",
    "How do I contact him?"
  ];

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-4 rounded-2xl bg-gradient-to-tr from-emerald-600 via-green-600 to-teal-600 hover:from-emerald-500 hover:via-green-500 hover:to-teal-500 text-white shadow-[0_8px_30px_rgba(34,197,94,0.4)] hover:shadow-[0_8px_35px_rgba(34,197,94,0.6)] transition-all duration-300 hover:scale-105 group border border-emerald-500/30 cursor-pointer"
          aria-label="Toggle chat"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 text-[10px] font-bold text-slate-950 border-2 border-slate-950 shadow-md">
              1
            </span>
          )}
        </button>
      </div>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="fixed bottom-24 right-6 w-[350px] sm:w-[400px] h-[500px] rounded-3xl glass-card border border-[#22c55e]/30 bg-[#040806]/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden z-50 font-sans"
          >
            {/* Header with Aurora radial glow */}
            <div className="relative px-6 py-4 border-b border-white/5 flex items-center justify-between bg-[#060c09]">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-green-500/10 opacity-70 -z-10" />
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 shadow-md">
                  <Sparkles className="h-5 w-5 text-white animate-pulse" />
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-slate-950" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white tracking-tight">Jaimin's AI Assistant</span>
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Online & Ready
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 scrollbar-thin">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start gap-2.5 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                      msg.sender === 'user' ? 'bg-emerald-600/35 border border-emerald-500/30' : 'bg-[#060c09] border border-emerald-500/20'
                    }`}>
                      {msg.sender === 'user' ? <User className="h-4 w-4 text-emerald-300" /> : <Bot className="h-4 w-4 text-emerald-400" />}
                    </div>
                    <div className={`rounded-2xl px-4 py-2.5 text-sm ${
                      msg.sender === 'user' 
                        ? 'bg-emerald-600 text-white rounded-tr-none' 
                        : 'bg-white/5 border border-white/5 text-slate-200 rounded-tl-none leading-relaxed'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-2.5 max-w-[80%]">
                    <div className="h-8 w-8 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-xs flex-shrink-0">
                      <Bot className="h-4 w-4 text-emerald-400 animate-spin" />
                    </div>
                    <div className="rounded-2xl rounded-tl-none px-4 py-2.5 bg-white/5 border border-white/5 text-slate-400 text-sm flex items-center gap-1.5">
                      Thinking
                      <span className="flex gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-500 animate-bounce delay-100" />
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-500 animate-bounce delay-200" />
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-500 animate-bounce delay-300" />
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            <div className="px-6 py-2 flex flex-wrap gap-1.5 bg-slate-950/20 border-t border-white/5">
              {suggestions.map((sug) => (
                <button
                  key={sug}
                  onClick={() => handleSuggestionClick(sug)}
                  className="text-[10px] font-medium text-indigo-300 hover:text-white px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 hover:border-indigo-400/40 hover:bg-indigo-500/20 transition-all cursor-pointer"
                >
                  {sug}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-4 border-t border-white/5 flex items-center gap-2 bg-slate-950/40"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 focus:border-indigo-500 focus:bg-slate-900/80 rounded-xl px-4 py-2 text-sm text-slate-100 placeholder-slate-400 outline-none transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-medium shadow-md transition-all hover:scale-105 flex items-center justify-center cursor-pointer"
                aria-label="Send query"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
