import MainPageHeader from "../components/MainPageHeader";
import TransactionContainer from "../components/TransactionContainer";
import TransactionInputBar from "../components/TransactionInputBar.jsx";

export default function MainPage() {
  return (
    <div className="w-[1440px] h-[1024px]">
      <MainPageHeader />
      <main>
        <TransactionContainer />
      </main>
    </div>
  );
}