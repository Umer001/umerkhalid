import "./App.css";
import AppRoutes from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { store } from "./store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <Toaster />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
