import React, {useEffect, useRef, useState} from "react"
import {Link, useParams} from "react-router-dom"
import {PageHeaderCommon} from "../pageHeader"
import {TITLE} from "../constants";
import emailjs from 'emailjs-com';

import 'emailjs-com';


const userID = "user_f4Lq5nkwdpz1oNeEg6mhw"
const serviceID = "service_vhkkh3j"
const templateID = "template_ah7bx9m"
emailjs.init(userID)


export function CourseRegistration() {
  document.title = `Registrace | ${TITLE}`
  const {date, key} = useParams()
  console.log(date + "|" + key)

  return (
    <div role="main" className="main">
      <PageHeaderCommon/>

      <SectionRegistrationForm dateStr={date} couseKey={key}/>

    </div>
  )
}

function SectionRegistrationForm({dateStr, couseKey}) {
  const [success, setSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const ref = useRef(null)
  const date = new Date(dateStr)
  let title = courseTitles[couseKey]
  if (title === undefined) {
    title = "Kurz nenalezen"
  }

  function submitForm(event) {
    event.preventDefault()
    window.scrollTo(0, ref.current.offsetTop)

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      course: event.target.course.value,
      date: event.target.date.value,
      message: event.target.message.value,
    }

    emailjs.send(serviceID, templateID, data)
      .then(response => {
        setSuccess(true)
        setErrorMsg(null)
        document.getElementById("inputName").value = ""
        document.getElementById("inputEmail").value = ""
        document.getElementById("inputMessage").value = ""
      })
      .catch(error => {
        setSuccess(false)
        setErrorMsg(error)
      })
  }

  useEffect(() => {
    window.scrollTo(0, ref.current.offsetTop)
  })


  return (
    <section className="section bg-color-white m-0 border-0" ref={ref}>
      <div className="container">
        <div className="row pb-4 mt-2 justify-content-md-center">
          <div className="col-md-8">

            <div className="overflow-hidden mb-1">
              <h2 className="font-weight-normal text-7 mb-0"><strong
                className="font-weight-extra-bold">Přihláška</strong> ke kurzu</h2>
            </div>
            <div className="overflow-hidden mb-4 pb-3">
              <p className="mb-0">
                Odesíláte nezávaznou přihlášku ku kurzu. Příhláška bude kompletní až po zaplacení zálohy nebo celé
                částky. Informace o platbě obdržíte e-mailem po přihlášení.
              </p>
            </div>

            <form className="contact-form" onSubmit={submitForm}>
              {success &&
              <div className="contact-form-success alert alert-success mt-4">
                Přihláška byla úspěšně odeslána. Přejít zpět na <Link to="/kurzy-pro-verejnost">seznam kurzů</Link>.
              </div>
              }
              {errorMsg !== null &&
              <div className="contact-form-error alert alert-danger mt-4">
                Během odesílání přihlášky došlo k chybě. Kontaktujte mě prosím na <a
                href="mailto:jan.kislinger@gmail.com">jan.kislinger@gmail.com</a>.
                <span className="mail-error-message text-1 d-block"/>
              </div>
              }

              <div className="form-row">
                <div className="form-group col">
                  <label className="required font-weight-bold text-dark text-2">Jméno</label>
                  <input type="text" data-msg-required="Please enter the name." maxLength="100"
                         className="form-control" name="name" id="inputName" required="true"/>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col">
                  <label className="required font-weight-bold text-dark text-2">E-mail</label>
                  <input type="text" data-msg-required="Please enter the email." maxLength="100"
                         className="form-control" name="email" id="inputEmail" required="true"/>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col">
                  <label className="font-weight-bold text-dark text-2">Kurz</label>
                  <input type="text" value={title}
                         data-msg-required="Please enter the subject." maxLength="100"
                         className="form-control" name="course" disabled="true"/>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col">
                  <label className="font-weight-bold text-dark text-2">Termín</label>
                  <input type="text" value={date.toLocaleDateString("cs-CZ")}
                         data-msg-required="Please enter the subject." maxLength="100"
                         className="form-control" name="date" disabled="true"/>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col">
                  <label className="font-weight-bold text-dark text-2">Poznamky k registraci</label>
                  <textarea maxLength="5000" data-msg-required="Please enter your message." rows="5"
                            className="form-control" name="message" id="inputMessage"
                            placeholder="Vaše zkušenosti s R, co od kurzu očekáváte, případné dotazy, ..."/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <input type="submit" value="Přihlásit ke kurzu" className="btn btn-primary btn-modern"
                         data-loading-text="Loading..."/>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  )
}

function testSend() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      var didSucceed = true
      didSucceed ? resolve(null) : reject('Error');
    }, 100);
  })
}

const courseTitles = {
  "uvod-do-datove-analyzy-a-vizualizace": "Úvod do datové analýzy a vizualizace",
  "uvod-do-machine-learningu": "Úvod do machine learningu",
  "pokrocila-datova-analyza-a-vizualizace": "Pokročilá datová analýza a vizualizace",
}
