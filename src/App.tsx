import { greet } from "./utils/greet";
import Header from "./components/header";
import Main from "./components/main"
import Footer from "./components/footer";


function App(): JSX.Element {
  return <>
  <h1>{greet("Welcome to Pupvote")}</h1>;
  <Header/>;
  <Main/>;
  <Footer/>;
  </>
}

export default App;
