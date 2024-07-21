import React, { useContext, useRef, useState } from "react";
import styles from "./Form.module.scss";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import themeContext from "../../../../providers/theme/themeContext";
import Input from "../input/Input";
import Toastify from "../toastify/Toastify";

const Form = () => {
  const form = useRef();
  const [inputLastname, setInputLastname] = useState("");
  const [lastnameInputError, setLastnameInputError] = useState("");
  const [validinputLastname, setValidInputLastname] = useState(false);

  const [inputFirstname, setInputFirstname] = useState("");
  const [firstnameInputError, setFirstnameInputError] = useState("");
  const [validinputFirstname, setValidInputFirstname] = useState(false);

  const [inputObject, setInputObject] = useState("");
  const [objectInputError, setObjectInputError] = useState("");
  const [validinputObject, setValidInputObject] = useState(false);

  const [inputMessage, setInputMessage] = useState("");
  const [messageInputError, setMessageInputError] = useState("");
  const [validinputMessage, setValidInputMessage] = useState(false);

  const [inputEmail, setInputEmail] = useState("");
  const [emailInputError, setEmailInputError] = useState("");
  const [validinputEmail, setValidInputEmail] = useState(false);

  const [loading, setLoading] = useState(false);
  const { theme } = useContext(themeContext);

  const resetStateForm = () => {
    setInputLastname("");
    setLastnameInputError("");
    setValidInputLastname(false);
    setInputFirstname("");
    setFirstnameInputError("");
    setValidInputFirstname(false);
    setInputObject("");
    setObjectInputError("");
    setValidInputObject(false);
    setInputMessage("");
    setMessageInputError("");
    setValidInputMessage(false);
    setInputEmail("");
    setEmailInputError("");
    setValidInputEmail(false);
  };
  const sendEmail = (e) => {
    if (
      validinputEmail === true &&
      validinputFirstname === true &&
      validinputLastname === true &&
      validinputMessage === true &&
      validinputObject === true
    ) {
      e.preventDefault();
      setLoading(true);
      emailjs
        .sendForm("service_a05phxx", "template_bwxw41b", form.current, {
          publicKey: "3gjMNIxfUjL63jTRL",
        })
        .then(
          () => {
            setTimeout(() => {
              toast.success("Votre message a bien été envoyé", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                style: {
                  background: theme === "dark" ? "white" : "black",
                  color: theme === "dark" ? "black" : "white",
                },
              });
              resetStateForm();
              setLoading(false);
            }, 2000);
          },
          (error) => {
            setTimeout(() => {
              toast.error("Une erreur est survenue", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                style: {
                  background: theme === "dark" ? "white" : "black",
                  color: theme === "dark" ? "black" : "white",
                },
              });
              resetStateForm();
              setLoading(false);
            }, 2000);
          }
        );
    } else {
      if (validinputEmail === false) {
        if (inputEmail.length === 0) {
          setEmailInputError("Email : ne peut pas être vide");
        }
      }
      if (validinputFirstname === false) {
        if (inputFirstname.length === 0) {
          setFirstnameInputError("Prénom : ne peut pas être vide");
        }
      }
      if (validinputLastname === false) {
        if (inputLastname.length === 0) {
          setLastnameInputError("Nom de famille : ne peut pas être vide");
        }
      }
      if (validinputObject === false) {
        if (inputObject.length === 0) {
          setObjectInputError("Objet : ne peut pas être vide");
        }
      }
      if (validinputMessage === false) {
        if (inputMessage.length === 0) {
          setMessageInputError("Message : ne peut pas être vide");
        }
      }
      e.preventDefault();
    }
  };
  const handlerInput = (
    e,
    type,
    regex,
    setValidInput,
    setErrorMessage,
    setInput,
    errorMessage
  ) => {
    let removeDoubleSpace = e.target.value.replace(/\s\s+/g, " ");
    setInput(removeDoubleSpace);
    if (regex.test(removeDoubleSpace)) {
      setValidInput(true);
      setErrorMessage("");
    } else if (removeDoubleSpace.length === 0) {
      setValidInput(false);
      setErrorMessage("");
    } else {
      setValidInput(false);
      setErrorMessage(errorMessage);
    }
  };
  return (
    <>
      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <Input
          label={"Nom de famille"}
          value={inputLastname}
          id={"lastname"}
          type={"text"}
          placeholder={"Entrez votre nom de famille"}
          regex={/^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ ]{3,40}$/}
          onchange={(e) => {
            handlerInput(
              e,
              "lastname",
              /^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ ]{3,40}$/,
              setValidInputLastname,
              setLastnameInputError,
              setInputLastname,
              "Nom de famille : 3 lettres minimum"
            );
          }}
          validInput={validinputLastname}
          errorMessage={lastnameInputError}
          tab={false}
        />

        <Input
          label={"Prénom"}
          value={inputFirstname}
          id={"firstname"}
          type={"text"}
          placeholder={"Entrez votre prénom"}
          regex={/^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ ]{3,40}$/}
          onchange={(e) => {
            handlerInput(
              e,
              "firstname",
              /^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ ]{3,40}$/,
              setValidInputFirstname,
              setFirstnameInputError,
              setInputFirstname,
              "Prénom : 3 lettres minimum"
            );
          }}
          validInput={validinputFirstname}
          errorMessage={firstnameInputError}
          tab={false}
        />

        <Input
          label={"Email"}
          value={inputEmail}
          id={"user_email"}
          type={"email"}
          placeholder={"Entrez votre mail"}
          regex={/^([\w.-]+)@([\w-]+)((\.(\w){2,})+)$/}
          onchange={(e) => {
            handlerInput(
              e,
              "email",
              /^([\w.-]+)@([\w-]+)((\.(\w){2,})+)$/,
              setValidInputEmail,
              setEmailInputError,
              setInputEmail,
              "Email : doit avoir un format valide et contenir entre 5 et 50 caractères"
            );
          }}
          validInput={validinputEmail}
          errorMessage={emailInputError}
          tab={false}
        />

        <Input
          label={"Objet"}
          value={inputObject}
          id={"object"}
          type={"text"}
          placeholder={"Entrez l'objet de votre message"}
          regex={/^[A-Za-z0-9À-ÿ][A-Za-z0-9À-ÿ,()?!;:"'#@_. -]{1,50}$/}
          onchange={(e) => {
            handlerInput(
              e,
              "object",
              /^[A-Za-z0-9À-ÿ][A-Za-z0-9À-ÿ,()?!;:"'#@_. -]{1,50}$/,
              setValidInputObject,
              setObjectInputError,
              setInputObject,
              "Objet : doit contenir entre 2 et 50 caractères (lettres, chiffres, ponctuation) et ne peut pas commencer par une ponctuation"
            );
          }}
          validInput={validinputObject}
          errorMessage={objectInputError}
          tab={false}
        />

        <div className={styles.form__area}>
          <label
            className={`${styles.form__area__label} ${
              theme === "dark"
                ? styles.form__area__label__dark
                : styles.form__area__label__light
            }`}
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            rows={2}
            value={inputMessage}
            name="message"
            className={`${styles.form__area__textarea} modalOpen`}
            id="message"
            onChange={(e) => {
              handlerInput(
                e,
                "message",
                /^[A-Za-z0-9À-ÿ][A-Za-z0-9À-ÿ,()?!;:"'#@_. -]{1,}$/,
                setValidInputMessage,
                setMessageInputError,
                setInputMessage,
                "Message : doit contenir au moins 2 caractères (lettres, chiffres, ponctuation) et ne peut pas commencer par une ponctuation"
              );
            }}
            placeholder="Entrez votre message"
          ></textarea>
          {validinputMessage === false && (
            <div className={styles.form__area__error}>{messageInputError}</div>
          )}
        </div>

        <button
          className={`${styles.form__submit} ${
            theme === "dark"
              ? styles.form__submit__dark
              : styles.form__submit__light
          }`}
          aria-disabled={loading}
          disabled={loading}
        >
          {loading ? "Chargement ..." : "Envoyer"}
        </button>
      </form>
      <Toastify />
    </>
  );
};

export default Form;
