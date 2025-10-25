import TransactionListPage from "./pages/TransactionListPage.jsx";
import { ModalProvider } from "./shared/context/ModalContext.jsx";

function App() {
  // 아직 라우팅을 안 배워서, 메인 페이지만 
  return (
    <ModalProvider>
      <TransactionListPage />
    </ModalProvider>
  )
}

export default App
