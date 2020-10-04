import React from "react"
import {PageHeaderCommon} from "../pageHeader"
import {TITLE} from "../constants";


export function CourseRegistration() {
  document.title = `Registrace | ${TITLE}`

  return (
    <div role="main" className="main">
      <PageHeaderCommon/>

      <SectionRegistrationForm/>

    </div>
  )
}

function SectionRegistrationForm() {
  let i = 1

  function submitForm(event) {
    event.preventDefault()
    i += 1
    console.log(i)
  }

  return (
    <section className="section bg-color-white m-0 border-0">
      <div className="container">
        <div className="row pb-4 mt-2 justify-content-md-center">
          <div className="col-md-8">

            <div className="overflow-hidden mb-1">
              <h2 className="font-weight-normal text-7 mb-0"><strong
                className="font-weight-extra-bold">Contact</strong> Us</h2>
            </div>
            <div className="overflow-hidden mb-4 pb-3">
              <p className="mb-0">Feel free to ask for details, don't save any questions!</p>
            </div>

            <form className="contact-form" onSubmit={submitForm} noValidate="true">
              <div className="contact-form-success alert alert-success d-none mt-4">
                <strong>Success!</strong> Your message has been sent to us.
              </div>

              <div className="contact-form-error alert alert-danger d-none mt-4">
                <strong>Error!</strong> There was an error sending your message.
                <span className="mail-error-message text-1 d-block"/>
              </div>

              <div className="form-row">
                <div className="form-group col">
                  <label className="font-weight-bold text-dark text-2">Jmeno *</label>
                  <input type="text" value="" data-msg-required="Please enter the subject." maxLength="100"
                         className="form-control" name="subject" required="false"/>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col">
                  <label className="font-weight-bold text-dark text-2">E-mail *</label>
                  <input type="text" value="" data-msg-required="Please enter the subject." maxLength="100"
                         className="form-control" name="subject" required="true"/>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col">
                  <label className="font-weight-bold text-dark text-2">Kurz</label>
                  <input type="text" value="Úvod do datové analýzy a vizualizace"
                         data-msg-required="Please enter the subject." maxLength="100"
                         className="form-control" name="subject" disabled="true"/>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col">
                  <label className="font-weight-bold text-dark text-2">Termin</label>
                  <input type="text" value="3.10.2020"
                         data-msg-required="Please enter the subject." maxLength="100"
                         className="form-control" name="subject" disabled="true"/>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col">
                  <label className="required font-weight-bold text-dark text-2">Poznamky k registraci</label>
                  <textarea maxLength="5000" data-msg-required="Please enter your message." rows="8"
                            className="form-control" name="message" required=""/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <input type="submit" value="Prihlasit ke kurzu" className="btn btn-primary btn-modern"
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
