import { useState } from "react";
import { Check, MinusIcon } from "lucide-react";
import PaymentDropdown from "./PaymentDropdown";

export default function TransactionInputBar() {
  const [date, setDate] = useState("2025-10-19");
  const [amount, setAmount] = useState(0);
  const [content, setContent] = useState("");
  const [payment, setPayment] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { date, amount, content, payment, category };
    // 실제 저장 로직 추가 예정
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-[894px] h-[76px] mt-[176px] border-[0.5px] bg-white flex items-center justify-center">
        <div className="flex items-center divide-x">
          <div className="flex flex-col gap-1 px-4">
            <label className="w-22 font-sans font-light text-xs">일자</label>
            {/* 사실 이 date 입력 부분은 헤더에서 넘어가는 거고, 여기서는 표시만 되는 것 같은데, 일단 이렇게 구현*/}
            <input
              className="font-sans font-semibold text-xs"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1 px-4">
            <label className="font-sans font-light text-xs">금액</label>
            <div className="flex items-center gap-1">
              <MinusIcon size={16} />
              <input
                className="w-33 text-right font-sans font-semibold text-xs text-neutral-text-weak"
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
              <span>원</span>
            </div>
          </div>

          <div className="flex flex-col gap-1 px-4">
            <div className="flex items-center justify-between gap-2">
              <label className="w-40 font-sans font-light text-xs">내용</label>
              <span className="w-8 text-right font-sans font-light text-xs text-neutral-text-weak">{content.length}/32</span>
            </div>
            <input
                className="w-full font-sans font-semibold text-xs text-neutral-text-weak"
                type="text"
                placeholder="입력하세요"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
          </div>

          <div className="flex flex-col gap-1 px-4">
            <label className="w-26 font-sans font-light text-xs">결제수단</label>
            <PaymentDropdown value={payment} onSelect={setPayment} />
          </div>
          
          {/*이거, select 대신 list로 해야하나?*/}
          <div className="flex flex-col gap-1 px-4">
            <label className="w-26 font-sans font-light text-xs">분류</label>
            <select className="font-sans font-semibold text-xs text-neutral-text-weak" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">선택하세요</option>
              <option value="food">식비</option>
              <option value="traffic">교통</option>
              <option value="culture">문화</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100"
        >
          <Check size={20} />
        </button>
      </div>
    </form>
  );
}
