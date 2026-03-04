import React from "react";
import Accordion from "./components/Accordion";

const FAQS = [
  {
    id: 1,
    question: "What is the difference between a Class and an Object in C#?",
    answer:
      "A Class is a blueprint or template that defines data and behavior. An Object is a specific instance of that Class created in memory.",
  },
  {
    id: 2,
    question: "What is the purpose of Encapsulation in OOP?",
    answer:
      "Encapsulation hides the internal implementation details of an object and only exposes necessary components, ensuring data integrity.",
  },
  {
    id: 3,
    question: "What does the 'static' keyword mean?",
    answer:
      "The 'static' keyword defines a member that belongs to the class itself rather than to a specific instance of the class.",
  },
  {
    id: 4,
    question: "How does a Linked List differ from an Array?",
    answer:
      "An Array has a fixed size and contiguous memory, while a Linked List consists of nodes connected by pointers, allowing for dynamic sizing.",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-xl flex flex-col gap-8">
        {/* כותרת האפליקציה עם גרדיאנט ו-Tracking */}
        <header className="text-center">
          <h1 className="text-6xl font-black tracking-tighter bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent pb-2">
            Accordion App
          </h1>
          <p className="text-slate-500 font-medium">
            Full-Stack Development Guide
          </p>
        </header>

        {/* רשימת האקורדיונים עם ריווח (Gap) נכון */}
        <div className="flex flex-col gap-4 w-full">
          {FAQS.map((item) => (
            <Accordion
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
