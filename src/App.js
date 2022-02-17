import { Routes, Route } from 'react-router-dom';
import { DynamicLink, GrabData, StateExample, Welcome } from './routes';


const App = () => (
    <Routes>
      <Route path="/dynamic/:dynamic" element={<DynamicLink />} />
      <Route path="/grabData" element={<GrabData />} />
      <Route path="/state" element={<StateExample />} />
      <Route path="*" element = {<Welcome />} />
    </Routes>
  );

export default App;
