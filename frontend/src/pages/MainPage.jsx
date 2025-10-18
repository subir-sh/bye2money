import MainPageHeader from "../components/MainPageHeader";
import TransactionContainer from "../components/TransactionContainer";
import TransactionInputBar from "../components/TransactionInputBar.jsx";
import Background from "../components/Background.jsx";

export default function MainPage() {
  return (
    <div>
      <Background />
      <div className="relative w-[1440px] mx-auto flex justify-center">
        <MainPageHeader />  
        <TransactionInputBar />
        <main>
          <TransactionContainer />
        </main>
      </div>
    </div>
  );
}