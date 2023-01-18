import styles from './OutlinedButton.module.scss';

const OutlinedButton = ({children, className, ...props}) => {
  return (
    <button className={`${styles.root}${className ? ` ${className}` : ''}`} {...props}>
      {children}
    </button>
  );
};

export default OutlinedButton;