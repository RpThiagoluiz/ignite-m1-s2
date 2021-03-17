import Modal from "react-modal";
import { useState } from "react";
import { TransactionsProvider } from "./hooks/useTransactions";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
//Styles
import { GlobalStyles } from "./styles/GlobalStyles";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root"); //acessibildidade

export const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  };
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyles />
    </TransactionsProvider>
  );
};

export default App;
