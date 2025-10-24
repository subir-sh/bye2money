import { useState } from "react";
import { useModal } from "../context/ModalContext";
import PaymentAddModal from "./PaymentAddModal";
import { ChevronDown } from "lucide-react";

export default function PaymentDropdown({ value, onSelect }) {
  const { openModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);
  const [payments, setPayments] = useState(() => {
    const saved = localStorage.getItem("payments");
    return saved ? JSON.parse(saved) : [];
  });

  const updateStorage = (list) =>
    localStorage.setItem("payments", JSON.stringify(list));

  const handleAdd = (newPayment) => {
    setPayments((prev) => {
      const next = [...prev, newPayment];
      updateStorage(next);
      return next;
    });
    setIsModalOpen(false);
  };

  const handleDelete = (item) => {
    setPayments((prev) => {
      const next = prev.filter((p) => p !== item);
      updateStorage(next);
      return next;
    });
    if (value === item) onSelect("");
  };

  return (
    <div className="relative inline-block">
      <div 
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between cursor-pointer select-none"
      >
        <span className="font-sans font-semibold text-xs text-neutral-text-weak">
          {value || "선택하세요"}
        </span>
        <ChevronDown
          size={14}
          className={`ml-1 transition-transform duration-150 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {isOpen && (
        <div className="w-34 absolute top-full mt-5 bg-white translate-x-[-16px] border-[0.5px] border-t-0 flex divide-y flex-col items-center">
          {payments.map((p) => (
            <div 
              key={p}
              className="w-30 flex items-center justify-between gap-2 p-4"
            >
              <span
                className="font-sans font-light text-xs"
                onClick={() => {
                  onSelect(p);
                  setIsOpen(false);
                }}
              >
                {p}
              </span>
              <button
                onClick={() => handleDelete(p)}
                className="font-sans font-light text-xs text-red-500"
              >
                X
              </button>
            </div>
          ))}

          <button
            className="w-30 font-sans font-light text-xs text-left gap-2 p-4"
            type="button"
            onClick={() => {
              setIsOpen(false);
              openModal(<PaymentAddModal onAdd={handleAdd} />);
            }}
          >
            추가하기
          </button>
        </div>
      )}
    </div>
  );
}