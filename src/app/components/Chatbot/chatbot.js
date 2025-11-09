"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion"; // 🌀 Framer Motion import
import styles from "./styles.module.css";

const ChatWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null); 

  // LocalStorage-dən chat tarixini yüklə
  useEffect(() => {
    const saved = localStorage.getItem("chatMessages");
    if (saved) setMessages(JSON.parse(saved));
  }, []);

  // Chat deyisende yadda saxla
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  // 👇 Auto-scroll function
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  // Send Message
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("/api/chat", { message: input });
      const botReply = res.data.reply || "Xəta baş verdi 😅";

      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
        setLoading(false);
      }, 800); 
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Serverle elaqe qurulmadı ❌" },
      ]);
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {isOpen ? (
        <div className={styles.chatBox}>
          <div className={styles.header}>
            <h4>Chatbot</h4>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          <div ref={chatRef} className={styles.messages}>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: msg.sender === "user" ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`${styles.message} ${
                  msg.sender === "user" ? styles.user : styles.bot
                }`}
              >
                {msg.text}
              </motion.div>
            ))}

            {/* Typing Dots effect */}
            {loading && (
              <div className={styles.typing}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>

          <div className={styles.inputArea}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Sualınızı yazın..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Göndər</button>
          </div>
        </div>
      ) : (
        <button className={styles.openBtn} onClick={() => setIsOpen(true)}>
          💬 Chat
        </button>
      )}
    </div>
  );
};

export default ChatWindow;