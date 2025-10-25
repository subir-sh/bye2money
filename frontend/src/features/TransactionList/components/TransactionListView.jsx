import { useState } from "react";
import TransactionContainer from "./transaction/TransactionContainer.jsx";
import TransactionInputBar from "./transaction/TransactionInputBar.jsx";
import {
  addTransaction,
  updateTransaction,
  deleteTransaction,
} from "../../../shared/api/transactions.js";

export default function TransactionListView({ transactions, setTransactions }) {
  // 여기서는 선택하는 항목만 컨트롤
  const [selected, setSelected] = useState(null);

  // 항목 추가
  const handleAdd = async (item) => {
    try {
      const newItem = await addTransaction(item);
      setTransactions((prev) => [...prev, newItem]);
    } catch (err) {
      console.error(err);
    }
  };

  // 항목 수정
  const handleEdit = async (item) => {
    try {
      const updatedItem = await updateTransaction(item);
      setTransactions((prev) =>
        prev.map((t) => (t.id === updatedItem.id ? updatedItem : t))
      );
      setSelected(null);
    } catch (err) {
      console.error(err);
    }
  };

  // 항목 삭제
  const handleDelete = async (id) => {
    try {
      await deleteTransaction(id);
      setTransactions((prev) => prev.filter((t) => t.id !== id));
      if (id == selected.id) setSelected(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="mx-auto flex flex-col items-center">
      <TransactionInputBar
        onAdd={handleAdd}
        onEdit={handleEdit}
        selected={selected}
      />
      <TransactionContainer
        transactions={transactions}
        onSelect={setSelected}
        onDelete={handleDelete}
        selected={selected}
      />
    </main>
  );
}