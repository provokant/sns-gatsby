import { useState } from "react";
import * as React from "react";
import tw from "twin.macro";
// import Confetti from "react-dom-confetti";
import { Paragraph } from "./layout";
import { formUrl, themeColor } from "../../site-config";


export const CustomForm = () => {
  const form = {
    message: "",
  };
  const [formData, setFormData] = useState(form);
  const [isFormSubmitted, submitForm] = useState(false);
  const [hasFormError, formError] = useState(undefined);

  const submitPost = (event) => {
    event.preventDefault();

    fetch(formUrl, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((result) => {
      submitForm(true);
      console.log("Post sent perfectly", result);
    })
    .catch((err) => console.log("Something went wrong ... Please, check your internet connection.", err))
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    const meshedFormData = { ...formData, [name]: value };
    setFormData(meshedFormData);
  }

  return (
    <div>
      <div tw="md:grid md:grid-cols-3 md:gap-6">
        <div tw="md:col-span-1">
          <div tw="px-4 sm:px-0">
            <h2 tw="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl">Open Call</h2>
            <Paragraph>
              Wir als Initiator*innen sind Studierende. Und damit selbst direkt von den verschiedenen Einschränkungen betroffen<br/><br/>
              Aber was ist mit dir? Was ist deine Geschichte? Wie ging es dir während Corona?<br/><br/>
              <span tw={"font-bold"}>Schreib uns deine Geschichte. Anonym. Wir posten Sie hier.</span><br/><br/>
              Je mehr wir sind, desto lauter hört man unsere Forderungen!
            </Paragraph>
          </div>
        </div>
        <div tw="mt-5 md:mt-0 md:col-span-2">
          {hasFormError ? <>
            <div tw="shadow sm:rounded-md sm:overflow-hidden">
              <Paragraph>Da is wat schief jelaufen -.-'</Paragraph>
            </div>

          </> : <>
            {!isFormSubmitted && <form onSubmit={submitPost}>
              <div tw="shadow sm:rounded-md sm:overflow-hidden">
                <div tw="bg-white">
                  <textarea
                    name="message"
                    rows={14}
                    onChange={handleChange}
                    tw="shadow-sm p-4 block w-full text-2xl border-gray-300 focus:border-gray-500 rounded-md focus:outline-none"
                    placeholder="Und was ist mit dir? "
                    value={formData.message || ""}
                  />
                </div>

                <div tw="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    tw="inline-flex justify-center py-2 px-4 bg-magenta border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    Abschicken
                  </button>
                </div>
              </div>
            </form>}
            {isFormSubmitted && <Paragraph>Danke für deine Bemührungen!</Paragraph>}
          </>}
        </div>
      </div>
    </div>
  )
}
