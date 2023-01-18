const Nav = ({className, children, ...props}) => {
  return (
    <nav className={className} {...props}>
      {children}
    </nav>
  );
};

export default Nav;