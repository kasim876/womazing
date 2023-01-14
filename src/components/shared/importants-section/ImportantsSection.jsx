import {ReactComponent as GradeIcon} from '../../../assets/images/svg/grade.svg';
import {ReactComponent as GearIcon} from '../../../assets/images/svg/gear.svg';
import {ReactComponent as HandIcon} from '../../../assets/images/svg/hand.svg';

import styles from './ImportantsSection.module.scss';

const ImportantsSection = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={`title ${styles.title}`}>Что для нас важно</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <GradeIcon className={styles.icon} />
            <h3 className={`subtitle ${styles.subtitle}`}>Качество</h3>
            <p className="text-md">
              Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества
            </p>
          </li>
          <li className={styles.item}>
            <GearIcon className={styles.icon} />
            <h3 className={`subtitle ${styles.subtitle}`}>Скорость</h3>
            <p className="text-md">
              Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах
            </p>
          </li>
          <li className={styles.item}>
            <HandIcon className={styles.icon} />
            <h3 className={`subtitle ${styles.subtitle}`}>Ответственность</h3>
            <p className="text-md">
              Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ImportantsSection;
