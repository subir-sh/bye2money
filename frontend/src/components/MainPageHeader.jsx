import TransactionForm from "./TransactionForm.jsx";

export default function Header() {
  return (
    <header className="bg-blue-100 py-8 shadow-sm">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-serif font-bold text-blue-900">
            Wise Wallet
          </h1>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-blue-200 rounded-full">
              ‹ {/* 화살표는 이미지로 넣을 수도 있는데, 일단 이렇게 처리 */}
            </button>
            <div className="text-center">
              <p className="text-sm text-gray-500">2025</p>
              <p className="text-lg font-semibold">October</p>
            </div>
            <button className="p-2 hover:bg-blue-200 rounded-full">
              ›
            </button>
          </div>
        </div>
        <TransactionForm />
      </div>
    </header>
  );
}