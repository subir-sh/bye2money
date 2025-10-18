import { useState, useEffect } from "react";
import MainPageHeader from "../components/MainPageHeader";
import TransactionContainer from "../components/TransactionContainer";
import TransactionInputBar from "../components/TransactionInputBar.jsx";
import Background from "../components/Background.jsx";

export default function MainPage() {
  // 전체 가계부 항목 컨트롤
  const [transactions, setTransactions] = useState([]);
  const [selected, setSelected] = useState(null);

  // localStorage에서 불러오기 
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(saved);
  }, []);

  // 변경될 때마다 localStorage 동기화
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // 항목 추가
  const handleAdd = (item) => {
    setTransactions((prev) => [...prev, { id: Date.now(), ...item }]);
  };

  // 항목 수정
  const handleEdit = (updatedItem) => {
    setTransactions((prev) =>
      prev.map((t) => (t.id === updatedItem.id ? updatedItem : t))
    );
    setSelected(null);
  };

  // 항목 삭제
  const handleDelete = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div>
      <Background />
      <div className="relative w-[1440px] mx-auto flex flex-col items-center">
        <MainPageHeader />  
        <TransactionInputBar
          onAdd={handleAdd}
          onEdit={handleEdit}
          selected={selected}
        />
        <main>
          <TransactionContainer
            transactions={transactions}
            onSelect={setSelected}
            onDelete={handleDelete}
            selected={selected}
          />
        </main>
      </div>
    </div>
  );
}