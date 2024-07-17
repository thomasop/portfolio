import React, { useState } from "react";
import styles from "./Collapse.module.scss";
import PropTypes from "prop-types";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={styles.collapse}>
        <h1
          className={styles.collapse__h1}
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          {title}
        </h1>
        <img
          className={`${styles.collapse__img} ${
            isOpen === false
              ? styles.collapse__img__close
              : styles.collapse__img__open
          }`}
          src="./assets/icone/chevron-left-solid.svg"
          alt=""
        />
        {isOpen && (
          <>
            {typeof content === "string" || content instanceof String ? (
              <>
                <p className={styles.collapse__content}>{content}</p>
              </>
            ) : (
              <>
                <ul className={styles.collapse__content}>
                  {content.map((item, index) => (
                    <li key={index}>
                      {item.url === undefined ? (
                        <>{item}</>
                      ) : (
                        <>
                          <a href={item.url} target="_blank">
                            {item.name}
                          </a>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Collapse;

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};
