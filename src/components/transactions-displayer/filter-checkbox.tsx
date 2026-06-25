import classes from './filter-checkbox.module.css';

type FilterCheckboxProps = {
  checked: boolean;
  onChange: () => void;
};

export default function FilterCheckbox({ checked, onChange }: FilterCheckboxProps): React.JSX.Element {
  return (
    <div className={classes.container}>
      <input type="checkbox" className={classes.checkbox} checked={checked} onChange={onChange} />
      <label className={classes.label}>Solo remesas cobradas</label>
    </div>
  );
}
