import './Breadcrumbs.scss';

const Breadcrumbs = ({list}) => {
  return (
    <ul className="breadcrumbs">
      {
        list.map(item => <li className="text-md breadcrumbs__item" key={item}>{item}</li>
      )}
    </ul>
  )
}

export default Breadcrumbs
