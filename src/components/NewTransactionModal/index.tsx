import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { Container, TransationTypeContainer, RadioBox } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";
import { useTransactions } from "../../hooks/useTransactions";

interface newTransactionModalProps {
  isOpen: boolean;
  onRequestClose(): void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: newTransactionModalProps) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("deposit");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const { createTransaction } = useTransactions();

  const handleCreateNewTransaction = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await createTransaction({
        title,
        amount,
        category,
        type,
      });
      setTitle("");
      setType("deposit");
      setAmount(0);
      setCategory("");
      onRequestClose(); //Close Modal
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      //Documentacao do react-modal tem as especificacoes - os estilos dessas classes estao no globalStyles, lembra q o modal ta na root do html
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transacao</h2>
        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <TransationTypeContainer>
          <RadioBox
            type="button"
            isActive={type === "deposit"}
            activeColor="green"
            onClick={() => {
              setType("deposit");
            }}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={type === "withdraw"}
            activeColor="red"
            onClick={() => {
              setType("withdraw");
            }}
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransationTypeContainer>
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
