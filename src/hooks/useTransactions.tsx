import {
  createContext,
  useEffect,
  ReactNode,
  useState,
  useContext,
} from "react";
import { api } from "../services/api";

interface TransactionContextData {
  transactions: Transaction[];
  isLoading: boolean;
  createTransaction: (transaction: TypeTransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}
interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TypeTransactionInput = Omit<Transaction, "id" | "createdAt">; //Msm coisa que o codigo abaixo

// interface TransactionInput {
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
// }

//type TransactionInput = Pick<Transaction, "title" | "amount" | "type" | "category" >; //Msm coisa que o codigo acima

const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const callApi = async () => {
      try {
        const response = await api.get("transactions");
        setTransactions(response.data.transactions);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        return console.log(error);
      }
    };
    // api
    //   .get("transactions")
    //   .then((response) => setTransactions(response.data.transactions));

    // api.get("transactions").then((response) => setTransactions(response.data.transations))

    //   //Isso aqui e dentro do corpo da function
    //   // const { transactions } = response.data;
    //   // return setTransactions(transactions);
    callApi();
  }, []);

  const createTransaction = async (transactionInput: TypeTransactionInput) => {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  };

  return (
    <TransactionsContext.Provider
      value={{ transactions, createTransaction, isLoading }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

//Hook customizado

const useTransactions = () => {
  const context = useContext(TransactionsContext);
  return context;
};

export { TransactionsProvider, useTransactions };
