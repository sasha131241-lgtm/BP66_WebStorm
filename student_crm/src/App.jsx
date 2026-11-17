import Header from "./components/Header";
import StudentsList from "./components/StudentList";
import Footer from "./components/Footer";
import { students } from "./data/students";
import "./App.css";

function App() {
  return (
      <div className="app-container">
      <Header />
      <main>
        <StudentsList students={students} />
      </main>
      <Footer />
    </div>
  );
}

export default App;