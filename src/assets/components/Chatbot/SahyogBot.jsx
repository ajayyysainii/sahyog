
import ChatbotIcon from "./chatbot.jsx"  // Add file extension
import ChatForm from "./ChatForm.jsx"
import ChatMessage from "./ChatMessage.jsx";
import { useRef,  useState } from "react";
import { useEffect } from "react";
import {CircleX} from "lucide-react"
import {Bot} from "lucide-react"
import { findBestMatch } from "./donationKnowledgeBase.js";
const SahyogBot = () => {   

  const [chatHistory, setChatHistory] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef()

  const generateBotResponse = async (history) =>{
    const updateHistory =(text) => {
      setChatHistory(prev => [...prev.filter(msg => msg.text !== "Thinking..."), {role: "model",text}]);
    }
    const userMessage = history[history.length - 1].text;
    
    // Check if we have a pre-defined response for this query
    const knowledgeBaseResponse = findBestMatch(userMessage);
    
    if (knowledgeBaseResponse) {
      // If we have a matching response in our knowledge base, use it
      setTimeout(() => {
        updateHistory(knowledgeBaseResponse);
      }, 500); // Small delay to make it feel natural
      return;
    }

    history = history.map(({role,text}) => ({role, parts: [{text}]}));
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({contents: history})
    }
    try{
      const response = await fetch(import.meta.env.VITE_API_URL,requestOptions);
      const data =await response.json();
      if(!response.ok) throw new Error(data.error.message || "Something Went Wrong");
      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(apiResponseText);

    } catch(error){
      console.log(error);
      
    }
  };

  useEffect(() => {
    chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behaviour: "smooth"});    
  }, [chatHistory]);
  return (
    <div className={`container ${showChatbot ? "show-chatbot" : "" }`}>
      <button onClick={() => setShowChatbot(prev => !prev)} id="chatbot-toggler">
        <span className="material-symbols-rounded"><Bot /></span>
        <span className="material-symbols-rounded">close</span>
      </button>

      <div className="chatbot-popup">

        <div className="chat-header">

          <div className="header-info">
            <ChatbotIcon />

            <h2 className="logo-text">SahyogBot</h2>

          </div>

          <button onClick={() => setShowChatbot(prev => !prev)} className="material-symbols-rounded">
          <CircleX />
          </button>

        </div>

        <div ref={chatBodyRef}className="chat-body">

          <div className="message bot-message">

            <ChatbotIcon />

            <p className="message-text">
              Hey there <br /> How can I help you today?
            </p>

          </div>
          {chatHistory.map((chat,index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
          

        </div>

        <div className="chat-footer">
          <ChatForm chatHistory ={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse}/>
        </div>
      </div>
    </div>
  ) 
}

export default SahyogBot