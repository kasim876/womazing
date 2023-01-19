const Phone = ({className, ...props}) => {
  return (
    <a
      href="tel:+74958235412"
      className={`animation-link${className ? ` ${className}` : ''}`}
      {...props}
    >
      +7 (495) 823-54-12
    </a>
  );
};

export default Phone;