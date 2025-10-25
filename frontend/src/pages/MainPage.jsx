import { useState } from "react";
import MainPageHeader from "../components/MainPageHeader";
import TransactionContainer from "../components/TransactionContainer";
import TransactionInputBar from "../components/TransactionInputBar.jsx";

export default function MainPage() {
  // 전체 가계부 항목 컨트롤
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });
  const [selected, setSelected] = useState(null);

  // @TODO: ID는 백엔드에서 추가해줌 >> 반영!!

  const updateStorage = (list) =>
    localStorage.setItem("transactions", JSON.stringify(list));

  // 항목 추가
  const handleAdd = (item) => {
    setTransactions((prev) => {
      const next = [...prev, { id: Date.now(), ...item }];
      updateStorage(next);
      return next;
    });
  };

  // 항목 수정
  const handleEdit = (updatedItem) => {
    setTransactions((prev) => {
      const next = prev.map((t) => (t.id === updatedItem.id ? updatedItem : t));
      updateStorage(next);
      return next;
    });
    setSelected(null);
  };

  // 항목 삭제
  const handleDelete = (id) => {
    setTransactions((prev) => {
      const next = prev.filter((t) => t.id !== id);
      updateStorage(next);
      return next;
    });
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