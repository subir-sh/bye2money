import MainPageHeader from "../components/MainPageHeader";
import TransactionContainer from "../components/TransactionContainer";

export default function MainPage() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-gray-800">
      <MainPageHeader />
      <main className="max-w-5xl mx-auto mt-8 px-4 pb-24">
        <TransactionContainer />
      </main>
    </div>
  );
}