import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import Input from "../components/Input";
import Button from "../components/Button";
import styles from "./Home.module.scss";

const getRandomQuestion = () => {
  const questions = [
    "What's your favorite hobby and why?",
    "Where is your dream vacation destination?",
    "If you could have dinner with any historical figure, who would it be?",
    "What book has influenced you the most?",
    "What's the most interesting fact you know?",
    "What would you do if you won the lottery tomorrow?",
    "If you could learn any skill instantly, what would it be?",
    "What's your earliest childhood memory?",
    "If you could live in any era, which one would you choose?",
    "What's the best piece of advice you've ever received?",
  ];

  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
};

const Home = () => {
  const { user } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (!message) return;
    setMessages((prevMessages) => [
      ...prevMessages,
      { message, sender: user.email },
    ]);
    setMessage("");

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: getRandomQuestion(), sender: "AI" },
      ]);
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.chatContainer}>
        <div className={styles.messages}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={
                message.sender === user.email
                  ? styles.myMessage
                  : styles.receivedMessage
              }
            >
              {message.message}
            </div>
          ))}
        </div>
        <div className={styles.inputContainer}>
          <Input
            type="text"
            name="message"
            placeholder="Write a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
