import TypeScriptTypes from './components/TypescriptTypes'
import './App.css'
import { EvenNumbers, ColorList, UserList } from './components/ArrayManipulationDataRendering';
function App() {
  return (
    <div>
      <TypeScriptTypes />
      <ColorList />
      <EvenNumbers />
      <UserList />
    </div>
  );
}

export default App
