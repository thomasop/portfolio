import React, { useContext, useEffect } from "react";
import stylesForm from "./Input.module.scss";
import PropTypes from "prop-types";
import themeContext from "../../../../providers/theme/themeContext";

const Input = ({
  label,
  value,
  id,
  type,
  placeholder,
  onchange,
  validInput,
  errorMessage,
  image,
  alt,
  position,
  tab,
  style,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [tabIndex, setTabIndex] = React.useState(-1);
  const { theme } = useContext(themeContext);
  useEffect(() => {
    if (type === "password") {
      setTabIndex(0);
    } else {
      setTabIndex(-1);
    }
  }, [type]);

  const ref = React.useRef();
  useEffect(() => {
    if (type === "password") {
      if (value.length > 0) {
        if (ref && ref.current) {
          ref.current.addEventListener("keydown", (e) => {
            if (e.keyCode === 13) {
              setShowPassword(!showPassword);
            }
          });
        }
      }
    }
  }, [showPassword, tab, type, value.length]);
  return (
    <div style={style} className={stylesForm.div}>
      <label
        className={`${
          value.length > 0
            ? theme === "dark"
              ? stylesForm.div__label__value__dark
              : stylesForm.div__label__value__light
            : stylesForm.div__label
        } ${
          theme === "dark"
            ? stylesForm.div__label__dark
            : stylesForm.div__label__light
        }`}
        htmlFor={id}
      >
        {label}
      </label>
      <div className={`${!image ? stylesForm.div__div : stylesForm.div__div}`}>
        <input
          autoFocus={position === "first" ? true : false}
          value={value}
          className={`${stylesForm.div__div__input} ${
            tab === false ? "modalOpen" : ""
          } ${
            theme === "dark"
              ? stylesForm.div__div__input__dark
              : stylesForm.div__div__input__light
          }`}
          type={type !== "password" ? type : showPassword ? "text" : "password"}
          name={id}
          id={id}
          placeholder={placeholder}
          onChange={(e) => {
            onchange(e);
          }}
        />
        {image && type === "password" && value.length > 0 && (
          <img
            ref={ref}
            tabIndex={tabIndex}
            className={`${stylesForm.div__div__img} ${
              type === "password" ? stylesForm.div__div__img__password : ""
            }`}
            src={`${
              !showPassword
                ? `/assets/icone/${image}.svg`
                : `/assets/icone/eye-slash-solid.svg`
            }`}
            alt={`${!showPassword ? alt : "icone cacher mot de passe"}`}
            width={20}
            height={20}
            onClick={(e) => {
              if (e.keyCode === 13) {
                setShowPassword(!showPassword);
              }
              if (type === "password") {
                if (value.length > 0) {
                  setShowPassword(!showPassword);
                }
              }
            }}
          />
        )}
        {image && type === "password" && value.length === 0 && (
          <img
            className={`${stylesForm.div__div__img} ${
              type === "password" ? stylesForm.div__div__img__password : ""
            }`}
            src={`/assets/icone/${image}.svg`}
            alt={alt}
            width={20}
            height={20}
          />
        )}
        {image && type !== "password" && (
          <img
            className={`${stylesForm.div__div__img}`}
            src={`/assets/icone/${image}.svg`}
            alt={alt}
            width={20}
            height={20}
          />
        )}
      </div>

      {validInput === false && (
        <div className={stylesForm.div__error}>{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onchange: PropTypes.func,
  validInput: PropTypes.bool,
  errorMessage: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  position: PropTypes.string,
  tab: PropTypes.bool,
  style: PropTypes.object,
};
