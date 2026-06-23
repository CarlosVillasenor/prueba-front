import TransactionItem from "./transaction-item";

export default function TransactionDisplayer(): React.JSX.Element {
  return (
    <div>
      <TransactionItem reference="REF001" company="Company A" amount="$100.00" />
      <TransactionItem reference="REF002" company="Company B" amount="$200.00" />
      <TransactionItem reference="REF003" company="Company C" amount="$300.00" />
    </div>
  );
}
