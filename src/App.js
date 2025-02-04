import Header from "./components/Header/index";
import Counter from "./components/Counter/counter";
import Message from "./components/Message/message";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Header appName='Página de Noticias'/>
      <Counter />
      <Message />
      <Footer />
    </div>
  );
}

export default App;
