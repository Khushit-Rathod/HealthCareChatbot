import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessage] = useState([]);
  const messageEndRef = useRef(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!input) return;
    setMessage((prevMessage) => [
      ...prevMessage,
      { user: "You", text: input, type: "user" },
    ]);
    setInput("");
    const query = input.replace(/\s+/g, "+");
    try {
      const response = await fetch(
        `http://d3d8-34-106-175-95.ngrok.io/query/${query}`
      );
      const data = await response.json();
      const message = await data.top.res;
      console.log({ message });
      setMessage((prevMessages) => [
        ...prevMessages,
        { user: "Chatbot", text: message, type: "bot" },
      ]);
    } catch (err) {
      console.log("error ", err);
    }
  };

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          flex: 1,
          overflow: "hidden", // Hide the scrollbar
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent:
                message.type === "user" ? "flex-end" : "flex-start",
              margin: "5px",
            }}
          >
            <div
              className={message.type === "user" ? "user-message" : "bot-message"}
            >
              {message.type === "user" ? (
                <>
                  <strong style={{ marginRight: "10px" }}>You:</strong>
                  <span>{message.text}</span>
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faRobot} style={{ marginRight: "10px" }} />
                  <span>{message.text}</span>
                </>
              )}
            </div>
          </div>
        ))}
        <div ref={messageEndRef}></div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Write a message..."
          style={{
            position: "sticky",
            bottom: 0,
            padding: "10px",
            width: "96%",
            textAlign: "right",
            backgroundColor: "#073826", // Dark green background color
            border: "none", // Remove the border
            borderRadius: "15px", // Add border-radius for rounded corners
            color: "white", // Text color
          }}
        />
        <button type="submit" style={{ display: "none" }}>
          send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
