import styles from './GreenButton.module.scss';

const GreenButton = ({children, className, ...props}) => {
  return (
    <button className={`${styles.root}${className ? ` ${className}` : ''}`} {...props}>
      {children}
    </button>
  );
};

export default GreenButton;