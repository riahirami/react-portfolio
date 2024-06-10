import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";
import { EMAIL, PHONE } from "utils/constants";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <div>
          <p>Ready to get started on your project?</p>
          <p>You have an interesting opportunity for me ?</p>
          <p>Let's discuss ...</p>
        </div>
      </header>
      <div className="contacts">
        <div>
          <a href={`mailto:${EMAIL}`}>
            <img src={emailIcon} alt="Email address" />
          </a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
        <div>
          <a href={`tel:${PHONE}`}>
            <img src={phoneIcon} alt="Phone Number" />
          </a>
          <a href={`tel:${PHONE}`}>{PHONE}</a>
        </div>

      </div>
      <Form></Form>
    </Container>
  )
}
