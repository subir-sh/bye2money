import { useState, useEffect, useMemo } from "react";
import PageHeader from "../features/PageHeader.jsx";
import TransactionListView from "../features/TransactionList/components/TransactionListView.jsx";
import { getTransactions } from "../shared/api/transactions.js";

export default function MainPage() {
  const [transactions, setTransactions] = useState([]);
  const [currentYM, setCurrentYM] = useState(() => {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() + 1 }; // 1 ~ 12
  });

  // 서버에서 데이터 가져오기
  const refreshTransactions = async () => {
    try {
      const data = await getTransactions();
      setTransactions(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    refreshTransactions();
  }, []);

  // 연/월 이동
  const handleYMChange = (month) => {
    setCurrentYM((prev) => {
        const date = new Date(prev.year, prev.month - 1 + month);
        return { year: date.getFullYear(), month: date.getMonth() + 1 };
      }
    );
  }

  // 현재 연/월에 해당하는 아이템만 필터링 (YYYY-MM-DD)
  // 불필요한 렌더링 방지를 위해 useMemo 사용
  const filteredTransactions = useMemo(() => {
    return transactions.filter((t) => {
      if (!t?.date) return false;
      const d = new Date(t.date.replaceAll("-", "/"));
      return (
        d.getFullYear() === currentYM.year && d.getMonth() + 1 === currentYM.month
      );
    });
  }, [transactions, currentYM]);


  // 같은 데이터를 토대로 3개의 다른 방식으로 보여주는 거라, 라우팅을 사용하지 않음
  return (
    <div>
      {/* Background: 원래는 메인 페이지의 모든 구성 요소를 컴포넌트화하는 게 맞지 않나 하는 생각이었는데, 정적이어서 그냥 이렇게 처리*/}
      <div className="w-full h-50 bg-pastel-jordyBlue absolute top-0" />
      <div className="relative w-[1440px] mx-auto flex flex-col items-center">
        <PageHeader year={currentYM.year} month={currentYM.month} handleYM={handleYMChange} /> {/* @TODO: View 변경*/}
        <TransactionListView transactions={filteredTransactions} setTransactions={setTransactions} refreshTransactions={refreshTransactions}/>
      </div>
    </div>
  );
}