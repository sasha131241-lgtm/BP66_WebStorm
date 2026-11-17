import Header from "./components/Header";
import Footer from "./components/Footer";
import LibraryStats from "./components/LibraryStats";
import BookList from "./components/BookList";
import { books } from "./data/books";
import "./App.css";

const genres = [
  "Художественная литература",
  "Учебная литература",
  "Детская литература",
  "Публицистика",
  "Научно-популярная литература"
];

function App() {
  return (
      <div className="app-container">
            <Header />

            <main className="main-content">
                <LibraryStats books={books} />

                <section className="catalog-section">
                    <h2>Полный каталог книг</h2>
                    <BookList books={books} />
                </section>

              {genres.map((genre) => (
                  <section key={genre} className="genre-section">
                        <h2>{genre}</h2>
                        <BookList books={books} genre={genre} />
                    </section>
              ))}
            </main>

            <Footer />
        </div>
  );
}

export default App;