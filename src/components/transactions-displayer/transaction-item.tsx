import classes from "./transaction-item.module.css";

type TransactionItemProps = {
  reference: string;
  company: string;
  amount: string;
};

export default function TransactionItem({ reference, company, amount }: TransactionItemProps): React.JSX.Element {
  return (
    <div className={classes.container}>
      <div className={classes.reference}>#{reference}</div>
      <div className={classes.company}>{company}</div>
      <div className={classes.amount}>{amount}</div>
    </div>
  );
}
