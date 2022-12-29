const Phone = ({className}) => {
  let changedClassName = className ? ' ' + className : '';
  
  return (
    <a href="tel:+74958235412" className={'animation-link' + changedClassName}>+7 (495) 823-54-12</a>
  )
}

export default Phone
