
import './styles/App.min.css';
import MainBox from './components/MainBox';
import InputBar from './components/InputBar';
import ChatContextProvider from './context/ChatContext';

function App() {
  return (
    <div className="App"
        <ChatContextProvider>
        <MainBox/>
        <InputBar/>
        </ChatContextProvider>
    </div>
  );
}

export default App;
