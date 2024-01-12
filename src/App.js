import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrameOne from './frames/FrameOne';
import FrameTwo from './frames/FrameTwo';
import FrameThree from './frames/FrameThree';
import FrameFour from './frames/FrameFour';
import FrameFive from './frames/FrameFive';
import FrameSix from './frames/FrameSix';
import FrameSeven from './frames/FrameSeven';
import FrameEight from './frames/FrameEight';
import FrameNine from './frames/FrameNine';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<FrameOne />} />
        <Route path="/FrameTwo" element={<FrameTwo />} />
        <Route path="/FrameThree" element={<FrameThree />} />
        <Route path="/FrameFour" element={<FrameFour />} />
        <Route path="/FrameFive" element={<FrameFive />} />
        <Route path="/FrameSix" element={<FrameSix />} />
        <Route path="/FrameSeven" element={<FrameSeven />} />
        <Route path="/FrameEight" element={<FrameEight />} />
        <Route path="/FrameNine" element={<FrameNine />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
