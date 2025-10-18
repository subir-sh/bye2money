import MainPageHeader from "../components/MainPageHeader";
import TransactionContainer from "../components/TransactionContainer";
import TransactionInputBar from "../components/TransactionInputBar.jsx";
import Background from "../components/Background.jsx";

export default function MainPage() {
  return (
    <div className="">
      <Background />
      <div className="relative w-[1440px] mx-auto">
        <MainPageHeader />  
        <TransactionInputBar />
        <main>
          <TransactionContainer />
        </main>
      </div>
    </div>
  );
}