import { useEffect, useState } from "react";
import axios from "axios";

//imposting our api
const api = "http://localhost:4000/books";

export default function App() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: "", author: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  //Fetching
  const fetchBooks = async () => {
    try {
      const res = await axios.get(api);
      setBooks(res.data);
    } catch (error) {
      setError("Failed to fetch books");
    }
  };

  //Posting
  const handleAdd = async () => {
    if (!form.title.trim()) return setError("Title is required");
    setLoading(true);

    try {
      const res = await axios.post(api, form);
      setBooks((prev) => [...prev, res.data]); //
      setForm({ title: "", author: "" });
    } catch (error) {
      setError("Failed to load books");
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book Collection</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Author"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
          className="border p-2 mr-2"
        />
        <button
          onClick={handleAdd}
          disabled={loading}
          className={`bg-blue-500 text-white p-2 ${
            loading ? "opacity-50" : ""
          }`}
        >
          {loading ? "Adding..." : "Add Book"}
        </button>
      </div>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="border-b py-2">
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
