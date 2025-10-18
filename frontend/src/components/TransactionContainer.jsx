import TransactionSummaryBar from "./TransactionSummaryBar";
import TransactionList from "./TransactionList";

export default function TransactionContainer() {
  return (
    <section className="w-full flex flex-col items-center">
      <TransactionSummaryBar income={123456} expense={31214} />
      <TransactionList />
    </section>
  );
}