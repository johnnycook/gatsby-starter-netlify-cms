import React from "react";
import {
  Button,
  EmailInput,
  Form,
  TextArea,
  TextInput
} from "react-form-elements";
import { Maybe } from "../../graphql/types";
import styled, { SCP } from "../../styles/theme";

interface FormProps extends SCP {
  locale: Maybe<string>;
}

const ContactForm: React.FC<FormProps> = ({ className, locale }) => {
  return (
    // <form method="POST" className={className} data-netlify="true" data-netlify-recaptcha="true">
    //   <TextInput label={locale === "cs" ? "Vaše jméno" : "Name"} name="name" />
    //   <EmailInput label={locale === "cs" ? "Váš email" : "Email"} name="email" />
    //   <TextArea label={locale === "cs" ? "Váše zpráva" : "Your message"} name="text-area" />
    //   <div data-netlify-recaptcha="true"/>
    //   <div className="form-btn-wrap">
    //     <Button type="submit">{locale === "cs" ? "Odeslat" : "Send"}</Button>
    //   </div>
    // </form>

    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Your Role:{" "}
          <select name="role[]" multiple={true}>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};

const StyledContactForm = styled(ContactForm)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media ${props => props.theme.screen.laptop} {
    max-width: 570px;
  }

  .rfe-form__row {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    margin-bottom: 20px;

    input {
      height: 38px;
      outline: none;
      border: 1px solid ${props => props.theme.colors.inputBorder};
      box-sizing: border-box;
      border-radius: 1px;
    }
  }

  label {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 35px;
    color: #1c2b3b;
    margin-bottom: 10px;
  }

  textarea {
    resize: none;
    height: 181px;

    border: 1px solid ${props => props.theme.colors.inputBorder};
    box-sizing: border-box;
    border-radius: 1px;
    outline: none;
    margin-bottom: 20px;
  }

  .form-btn-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

    button {
      width: 197px;
      height: 44px;
      background: linear-gradient(252.14deg, #1b2631 -2.02%, #212f3f 103.08%);
      border-radius: 1px;
      color: ${props => props.theme.colors.white};
      outline: none;
      cursor: pointer;
      font-size: 18px;

      &:hover {
        background: #293d4c;
      }
    }
  }
`;

export default StyledContactForm;
