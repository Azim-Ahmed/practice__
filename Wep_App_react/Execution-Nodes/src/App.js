import {
  ReactFlowProvider
} from "react-flow-renderer";
import { FlowCanvas } from './Pages';
import { ThemeProvider } from '@mui/system';
import theme from './assets/Theme';
import Counter from './Pages/NewState';

function App() {
  return (
    <ReactFlowProvider>
      <ThemeProvider theme={theme}>
        {/* <FlowCanvas /> */}
        <Counter />
      </ThemeProvider>

    </ReactFlowProvider>
  );
}

export default App;
