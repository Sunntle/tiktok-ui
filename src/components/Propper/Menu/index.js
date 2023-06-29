import className from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import { Wrapper as PropperWrapper } from '~/components/Propper';
import MenuItem from './MenuItem';
const cx = className.bind(styles);
function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item}></MenuItem>);
  };
  return (
    <Tippy
      interactive
      placement="bottom-end"
      delay={[0, 700]}
      render={(attrs) => (
        <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
          <PropperWrapper classNames={cx('menu-propper')}>{renderItems()}</PropperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
