import {ReactComponent as Grade} from '../../assets/images/svg/grade.svg';
import {ReactComponent as Gear} from '../../assets/images/svg/gear.svg';
import {ReactComponent as Hand} from '../../assets/images/svg/hand.svg';

import './Advantages.scss';

const Advantages = () => {
  return (
    <section className="advantages">
      <div className="container">
        <h2 className="title advantages__title">Что для нас важно</h2>
        <ul className="advantages__list">
          <li className="advantages__item">
            <Grade className="advantages__icon" />
            <h3 className="advantages__name">Качество</h3>
            <p className="text-md">Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества</p>
          </li>
          <li className="advantages__item">
            <Gear className="advantages__icon" />
            <h3 className="advantages__name">Скорость</h3>
            <p className="text-md">Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах</p>
          </li>
          <li className="advantages__item">
            <Hand className="advantages__icon" />
            <h3 className="advantages__name">Ответственность</h3>
            <p className="text-md">Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Advantages
