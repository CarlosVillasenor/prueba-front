import classes from "./transaction-item.module.css";

type TransactionItemProps = {
  id: number;
  created_at: string;
  company: string;
  amount: number;
};

export default function TransactionItem({ id, created_at, company, amount }: TransactionItemProps): React.JSX.Element {
  return (
    <div className={classes.container}>
      <div className={classes.text}>#{id}</div>
      <div className={classes.text}>#{created_at}</div>
      <div className={classes.text}>{company}</div>
      <div className={classes.text}>${amount}</div>
    </div>
  );
}
