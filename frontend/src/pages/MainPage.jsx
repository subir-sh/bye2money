import { useState, useEffect } from "react";
import MainPageHeader from "../components/MainPageHeader";
import TransactionContainer from "../components/TransactionContainer";
import TransactionInputBar from "../components/TransactionInputBar.jsx";
import {
  getTransactions,
  addTransaction,
  updateTransaction,
  deleteTransaction,
} from "../api/transactions";

export default function MainPage() {
  // 전체 가계부 항목 컨트롤
  const [transactions, setTransactions] = useState([]);
  const [selected, setSelected] = useState(null);

  // 서버에서 데이터 가져오기
  useEffect(() => {
    getTransactions()
      .then((data) => setTransactions(data))
      .catch((err) => console.error(err));
  }, []);

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
    <div>
      {/* Background: 원래는 메인 페이지의 모든 구성 요소를 컴포넌트화하는 게 맞지 않나 하는 생각이었는데, 정적이어서 굳이 그럴 필요 없는 것 같습니다*/}
      <div className="w-full h-50 bg-pastel-jordyBlue absolute top-0" />
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