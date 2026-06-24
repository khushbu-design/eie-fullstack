'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { getStrapiMedia } from '@/lib/strapi-media';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! 👋 I am EIE Assistant. Which instrument are you looking for?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState(''); 

  const [chatState, setChatState] = useState('IDLE');
  const [currentProducts, setCurrentProducts] = useState([]);

  const chatEndRef = useRef(null);

  const defaultMessage = [
    { type: 'bot', text: 'Hello! 👋 I am EIE Assistant. Which instrument are you looking for?' }
  ];

  // 1. Load initial session data safely on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('eie_chat_messages');
      localStorage.removeItem('eie_chat_username');
      localStorage.removeItem('eie_chat_isopen');

      const savedMessages = sessionStorage.getItem('eie_chat_messages');
      const savedName = sessionStorage.getItem('eie_chat_username');
      const savedIsOpen = sessionStorage.getItem('eie_chat_isopen');
      const savedState = sessionStorage.getItem('eie_chat_state');

      if (savedMessages) {
        try {
          setMessages(JSON.parse(savedMessages));
        } catch (e) {
          console.error("Session parse error", e);
        }
      }
      if (savedName) setUserName(savedName);
      if (savedIsOpen === 'true') setIsOpen(true);
      if (savedState) setChatState(savedState);
    }
  }, []);

  // 2. Sync messages to SessionStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (messages.length > 1) {
        sessionStorage.setItem('eie_chat_messages', JSON.stringify(messages));
      } else {
        sessionStorage.removeItem('eie_chat_messages');
      }
    }
  }, [messages]);

  // 3. Sync Username to SessionStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (userName) {
        sessionStorage.setItem('eie_chat_username', userName);
      } else {
        sessionStorage.removeItem('eie_chat_username');
      }
    }
  }, [userName]);

  // 4. Sync ChatState to SessionStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('eie_chat_state', chatState);
    }
  }, [chatState]);

  const handleClearChat = (e) => {
    if (e) e.stopPropagation();
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('eie_chat_messages');
      sessionStorage.removeItem('eie_chat_username');
      sessionStorage.removeItem('eie_chat_state');
      sessionStorage.setItem('eie_chat_isopen', 'true');
    }
    setMessages(defaultMessage);
    setUserName('');
    setChatState('IDLE');
    setCurrentProducts([]);
  };

  const toggleChat = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('eie_chat_isopen', nextState ? 'true' : 'false');
    }
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const searchProduct = async (cleanKeywords) => {
    if (!cleanKeywords || cleanKeywords.length === 0) return [];
    try {
      let baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://optimistic-friends-ed5888f6c2.strapiapp.com/api';
      baseUrl = baseUrl.endsWith('/api') ? `${baseUrl}/products` : `${baseUrl}/api/products`;

      let filterQuery = '';
      cleanKeywords.forEach((word, index) => {
        if (word && word.trim().length > 0) {
          filterQuery += `&filters[$and][${index}][name][$containsi]=${encodeURIComponent(word.trim())}`;
        }
      });

      const url = `${baseUrl}?populate=*${filterQuery}`;
      console.log("Fetching from Strapi:", url);

      const res = await fetch(url, { method: 'GET', headers: { 'Content-Type': 'application/json' } });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      
      const data = await res.json();
      return data.data || [];
    } catch (err) {
      console.error("Strapi Search API Error:", err);
      return [];
    }
  };

  const extractName = (text) => {
    const match = text.match(/(?:my\s+name\s+is|i\s+am)\s+([a-zA-Z]+)/i);
    return match ? match[1] : null;
  };

  const getCleanKeywords = (text) => {
    let cleanText = text.toLowerCase();
    
    cleanText = cleanText.replace(/(?:hello|hi|hey|good\s+morning|good\s+afternoon)/gi, '');
    cleanText = cleanText.replace(/(?:my\s+name\s+is|i\s+am)\s+([a-zA-Z]+)/gi, '');

    const filterRegex = /(?:i\s+want\s+to\s+know\s+about|i\s+want\s+to\s+know\s+abou|i\s+want\s+to\s+know|i\s+want\s+details\s+for|i\s+want\s+details|i\s+want\s+require|i\s+need\s+details|need\s+to\s+know\s+about|want\s+details\s+of|looking\s+for|details\s+about|give\s+me|show\s+me|require|details|please|about|know|find|need|want|tell)/gi;
    
    cleanText = cleanText.replace(filterRegex, ' ');

    const extraWords = ["the", "and", "for", "with", "an", "of", "to", "in|is"];
    extraWords.forEach(word => {
      cleanText = cleanText.replace(new RegExp(`\\b${word}\\b`, 'gi'), ' ');
    });

    const words = cleanText
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "")
      .trim()
      .split(/\s+/)
      .filter(w => w.length > 1); 

    console.log("Cleaned Clean Keywords Target:", words); 
    return words;
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { type: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    const lowerMsg = userMsg.toLowerCase().trim();
    
    const detectedName = extractName(userMsg);
    let currentName = userName;
    if (detectedName) {
      currentName = detectedName.charAt(0).toUpperCase() + detectedName.slice(1);
      setUserName(currentName);
    }

    if (lowerMsg === 'hi' || lowerMsg === 'hello' || lowerMsg === 'hey') {
      setMessages(prev => [...prev, {
        type: 'bot',
        text: currentName 
          ? `Hello ${currentName}, How May I Help You Today!! What is in your mind!!`
          : "Hello, How May I Help You Today!! What is in your mind!!"
      }]);
      setLoading(false);
      return;
    }

    if (chatState === 'AWAITING_SIZE') {
      const botGreeting = currentName 
        ? `Hello ${currentName}, below is your required instrument details:` 
        : "I found matching instrument(s) for your requirement:";

      setMessages(prev => [
        ...prev, 
        { type: 'bot', text: botGreeting, products: currentProducts },
        { type: 'bot', text: "Do you want quotation?" }
      ]);
      setChatState('AWAITING_QUOTATION_CONFIRM');
      setLoading(false);
      return;
    }

    if (chatState === 'AWAITING_QUOTATION_CONFIRM') {
      if (lowerMsg.includes('yes') || lowerMsg.includes('haa') || lowerMsg.includes('ha') || lowerMsg.includes('yeah')) {
        setMessages(prev => [...prev, {
          type: 'bot',
          text: "Place your inquiry on info@eieinstruments.com or contact us on 9227230010"
        }]);
      }
      
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'bot',
          text: "Would you like to discuss technical details with our technical expert? I can share the contact number if required. (Yes/No)"
        }]);
        setChatState('AWAITING_TECHNICAL_CONFIRM');
      }, 800);
      
      setLoading(false);
      return;
    }

    if (chatState === 'AWAITING_TECHNICAL_CONFIRM') {
      if (lowerMsg.includes('yes') || lowerMsg.includes('haa') || lowerMsg.includes('ha') || lowerMsg.includes('yeah')) {
        setMessages(prev => [...prev, {
          type: 'bot',
          text: "Here are the contact details for our technical experts: Dhara Sharma: +91 6357075370, Darshil Prajapati: +91 9773012266, Bhumika Sonvane: +91 6357075373. They will assist you with your requirements."
        }]);
      } else {
        setMessages(prev => [...prev, {
          type: 'bot',
          text: "Thank you! Let me know if you need anything else."
        }]);
      }
      setChatState('IDLE');
      setLoading(false);
      return;
    }
    const cleanKeywords = getCleanKeywords(userMsg);

    if (cleanKeywords.length === 0 && detectedName) {
      setMessages(prev => [...prev, {
        type: 'bot',
        text: `Hello ${currentName}, How May I Help You Today!! Which instrument are you looking for?`
      }]);
      setLoading(false);
      return;
    }

    if (cleanKeywords.length === 0) {
      setMessages(prev => [...prev, {
        type: 'bot',
        text: currentName 
          ? `Hello ${currentName}, I didn't quite get that. Could you please specify the instrument name?`
          : "I didn't quite get that. Could you please specify the instrument name?"
      }]);
      setLoading(false);
      return;
    }

    const products = await searchProduct(cleanKeywords);

    if (products.length > 0) {
      const firstProdAttrs = products[0].attributes || products[0];
      const hasVariants = firstProdAttrs.has_variants || firstProdAttrs.variants?.length > 0 || products.length > 1;

      if (hasVariants) {
        setMessages(prev => [...prev, {
          type: 'bot',
          text: "Which size you required??"
        }]);
        setCurrentProducts(products); 
        setChatState('AWAITING_SIZE');
      } else {
        const botGreeting = currentName 
          ? `Hello ${currentName}, below is your required instrument details:` 
          : "I found matching instrument(s) for your requirement:";

        setMessages(prev => [
          ...prev, 
          { type: 'bot', text: botGreeting, products: products },
          { type: 'bot', text: "Do you want quotation?" }
        ]);
        setChatState('AWAITING_QUOTATION_CONFIRM');
      }
    } else {
      const fallbackText = currentName
        ? `Hello ${currentName}, I couldn't find those exact details right now. Let me connect you with our technical expert team!`
        : "I couldn't find that exact instrument. Would you like me to connect you with our team?";
      
      setMessages(prev => [...prev, { type: 'bot', text: fallbackText }]);
      
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'bot',
          text: "Would you like to discuss technical details with our technical expert? I can share the contact number if required. (Yes/No)"
        }]);
        setChatState('AWAITING_TECHNICAL_CONFIRM');
      }, 800);
    }

    setLoading(false);
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-36 right-6 bg-gradient-to-r from-red-600 to-red-700 text-white w-14 h-14 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 z-50 flex items-center justify-center border-2 border-white"
      >
        {isOpen ? <span className="text-xl font-bold">✕</span> : <span className="text-2xl">💬</span>}
      </button>

      {isOpen && (
        <div className="fixed bottom-32 right-6 w-[380px] sm:w-[400px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col h-[540px] border border-gray-100 overflow-hidden">

          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-red-600 font-extrabold">E</div>
              <div>
                <p className="font-semibold text-sm tracking-wide">EIE Assistant</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <p className="text-xs text-red-100 opacity-90">Online • Instant Reply</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2.5">
              <button 
                onClick={(e) => handleClearChat(e)}
                className="text-xs bg-white/20 hover:bg-white/30 text-white px-2.5 py-1 rounded-md font-medium transition-all duration-200 border border-white/10 active:scale-95 cursor-pointer z-50"
              >
                Clear 🧹
              </button>
              <button onClick={toggleChat} className="text-white text-xl p-1 hover:opacity-80 transition-opacity">✕</button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/70">
            {messages.map((msg, i) => (
              <div key={`msg-${i}`} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.type === 'bot' ? (
                  <div className="max-w-[88%] w-full">
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-sm text-gray-800 leading-relaxed">
                      {msg.text}
                    </div>

                    {msg.products && msg.products.map((product, pIdx) => {
                      const attrs = product.attributes || product;
                      const industryId = attrs.industry?.id || "all";
                      const categoryId = attrs.category?.id || "all";
                      const slug = attrs.slug || product.id;
                      const imageUrl = attrs.image?.url;
                      const targetUrl = `/products/${industryId}/${categoryId}/${slug}`;

                      return (
                        <div key={`prod-${product.id || pIdx}`} className="mt-3 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                          {imageUrl && (
                            <div className="relative w-full h-36 bg-gray-100/50 border-b border-gray-100">
                              <Image
                                src={getStrapiMedia(imageUrl)}
                                alt={attrs.name || "Product"}
                                fill
                                className="object-contain p-2"
                              />
                            </div>
                          )}
                          <div className="p-3">
                            <p className="font-bold text-gray-900 text-sm truncate">{attrs.name}</p>
                            {attrs.model_number && (
                              <p className="text-xs font-semibold text-red-600 mt-0.5">Model: {attrs.model_number}</p>
                            )}
                            
                            <div className="grid grid-cols-2 gap-2 mt-3">
                              <a 
                                href={targetUrl}
                                className="text-center text-xs font-medium bg-red-600 hover:bg-red-700 text-white py-2 px-2 rounded-lg transition-colors"
                              >
                                View Details
                              </a>
                              <a 
                                href={`https://wa.me/919227230010?text=Interested in: ${encodeURIComponent(attrs.name || '')}`}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-center text-xs font-medium border border-green-600 text-green-600 hover:bg-green-50 py-2 px-2 rounded-lg transition-colors"
                              >
                                WhatsApp
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-2xl rounded-tr-none max-w-[80%] shadow-sm text-sm">
                    {msg.text}
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-1.5 text-gray-400 text-xs pl-1">
                <span className="flex space-x-1">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </span>
                <span>Searching instruments...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-3 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Search instrument (e.g. CTM, Oven...)"
                className="flex-1 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-red-500 bg-gray-50/50"
              />
              <button
                onClick={handleSend}
                className="bg-red-600 hover:bg-red-700 text-white font-medium text-sm px-4 rounded-xl transition-colors"
              >
                Send
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-3 text-[11px] font-medium text-center">
              <button onClick={() => window.open('https://wa.me/919227230010', '_blank')} className="bg-green-50 text-green-700 py-1.5 rounded-lg border border-green-100 hover:bg-green-100 transition-colors">💬 WhatsApp</button>
              <button onClick={() => window.location.href = 'tel:07966211234'} className="bg-blue-50 text-blue-700 py-1.5 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors">📞 Call Now</button>
              <button onClick={() => window.location.href = '/contact'} className="bg-red-50 text-red-700 py-1.5 rounded-lg border border-red-100 hover:bg-red-100 transition-colors">📋 Get Quote</button>
            </div>
          </div>

        </div>
      )}
    </>
  );
}