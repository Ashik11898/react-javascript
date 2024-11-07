import MyRoutes from './MyRoutes';
import AuthProvider from './context/AuthProvider';
import './App.css';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <MyRoutes/>
      </AuthProvider>
    </div>
  );
}

export default App;
