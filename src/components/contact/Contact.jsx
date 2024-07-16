import React, { useContext } from "react";
import styles from "./Contact.module.scss";
import { useNavigate } from "react-router-dom";
import themeContext from "../../providers/theme/themeContext";

const Contact = () => {
  const { theme, setTheme } = useContext(themeContext);
  let navigate = useNavigate();
  return (
    <>
      <div className={styles.contact}>
        <a
          className={styles.contact__a}
          href="mailto:thomas.dss@protonmail.com"
        >
          <img
            className={styles.contact__img}
            width={30}
            height={30}
            src={`../assets/icone/mail.png`}
            alt=""
          />
        </a>
        <a
          className={styles.contact__a}
          href="link/to/your/download/file"
          download
        >
          <img
            className={styles.contact__img}
            width={30}
            height={30}
            src={`../assets/icone/link.png`}
            alt=""
          />
        </a>
        <img
          className={styles.contact__img}
          width={30}
          height={30}
          src={`../assets/icone/linkedin.png`}
          alt=""
          onClick={() => {
            navigate("www.linkedin.com/in/thomas-da-silva-seabra");
          }}
        />
      </div>
    </>
  );
};

export default Contact;
