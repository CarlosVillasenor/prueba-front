import classes from "./transaction-item.module.css";

type TransactionItemProps = {
  created_at: string;
  company: string;
  amount: number;
};

export default function TransactionItem({ created_at, company, amount }: TransactionItemProps): React.JSX.Element {
  return (
    <div className={classes.container}>
      <div className={classes.reference}>#{created_at}</div>
      <div className={classes.company}>{company}</div>
      <div className={classes.amount}>{amount}</div>
    </div>
  );
}
