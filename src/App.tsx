import { greet } from "./utils/greet";

function App(): JSX.Element {
  return <h1>{greet("Welcome to Pupvote")}</h1>;
}

export default App;
