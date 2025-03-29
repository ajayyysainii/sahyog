import { useRef } from "react";

const ChatForm = ({chatHistory, setChatHistory, generateBotResponse}) => {
    const inputRef = useRef();   
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage) return;
        inputRef.current.value ="";

        setChatHistory((history) => [...history, { role: "user", text: userMessage}]);

        setTimeout(() => {
            setChatHistory((history) => [...history, { role: "model", text: "Thinking..."}]);

            generateBotResponse([...chatHistory, { role: "user", text: userMessage}]);
    }, 1000);
};
  return (
    <form action="#" className="chart-form flex" onSubmit={handleFormSubmit}>
        <input id="inputbox" ref = {inputRef}  type="text" placeholder="Type your Query & Hit Enter" className="message-input  w-full rounded-xl h-9 pl-10 select-none" required />
    </form>
  );
};

export default ChatForm