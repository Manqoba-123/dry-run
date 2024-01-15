import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import FrameTwo from "./components/FrameTwo";
import GlobalStyles from "./components/styles/Global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrameThree from "./components/FrameThree";

const theme = {
  colors:{
    body: "#a0a0a0",
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Router>
          <GlobalStyles />
          <Routes>
              <Route path='/' element={<Header />} />
              <Route path='/FrameTwo' element={<FrameTwo />} />
              <Route path='/FrameThree' element={<FrameThree />} />
          </Routes>
        </Router>
    </>
    </ThemeProvider>
  );
}

export default App;
