import React from 'react';
import styles from './styles.module.css';
import '../../index.css';
import home from '../../assets/home.svg';
import homeSelect from '../../assets/home_select.svg';
import client from '../../assets/cliente_menu.svg';
import clientSelect from '../../assets/clientes_selected.svg';
import charge from '../../assets/cobranca_menu.svg';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';


const MenuSidebar = () => {
  const navigate = useNavigate();

  const { selected, setSelected } = useContext(MyContext);

  return (
    <ul className={styles.container}>
      <li
        className={
          selected === 1 ? `${styles.home}  ${styles.selected}` : styles.home
        }
        onClick={() => {
          setSelected(1);
          navigate("/Home");
        }}
      >
        <div>
          <img src={selected === 1 ? homeSelect : home} alt="Button-home" />
        </div>
        <a
          className={selected === 1 ? styles.link : styles.no_link}
          href="/home"
        >
          Home
        </a>
      </li>
      <li
        className={
          selected === 2
            ? `${styles.clients}  ${styles.selected}`
            : styles.clients
        }
        onClick={() => {
          setSelected(2);
          navigate("/Client");
        }}
      >
        <div>
          <img
            src={selected === 2 ? clientSelect : client}
            alt="Button-client"
          />
        </div>
        <a
          className={selected === 2 ? styles.link : styles.no_link}
          href="/clients"
        >
          Clientes
        </a>
      </li>
      <li
        className={
          selected === 3
            ? `${styles.charges}  ${styles.selected}`
            : styles.charges
        }
        onClick={() => {
          setSelected(1);
          navigate("/home");
        }}
      >
        <div>
          <img src={selected === 3 ? charge : charge} alt="Button-charge" />
        </div>
        <a
          className={selected === 3 ? styles.link : styles.no_link}
          href="/charges"
        >
          Cobranças
        </a>
      </li>
    </ul>
  );
};

export default MenuSidebar;
