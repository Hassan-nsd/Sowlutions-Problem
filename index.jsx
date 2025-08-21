import React, { useState } from "react";

const articles = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    content: "Machine learning is a field of artificial intelligence that focuses on building systems that learn from data."
  },
  {
    id: 2,
    title: "Deep Learning Advances",
    content: "Deep learning uses neural networks with many layers to analyze complex patterns in data."
  },
  {
    id: 3,
    title: "Applications of AI",
    content: "AI is applied in healthcare, finance, and transportation to improve efficiency and decision-making."
  }
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const highlightText = (text, query) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, i) =>
      regex.test(part) ? <mark key={i}>{part}</mark> : part
    );
  };

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Search Articles</h1>
      <input
        type="text"
        placeholder="Search..."
        className="border rounded p-2 w-full mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredArticles.length > 0 ? (
        filteredArticles.map((article) => (
          <div key={article.id} className="mb-6 p-4 border rounded shadow-sm">
            <h2 className="text-xl font-semibold">
              {highlightText(article.title, searchTerm)}
            </h2>
            <p>{highlightText(article.content, searchTerm)}</p>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}
