import * as React from "react";
import { useState } from "react";
import Confetti from "react-dom-confetti";
import tw from "twin.macro";
import { Paragraph } from "./layout";
import { formUrl } from "../../site-config";


export const CustomForm = () => {
  const form = {
    message: "",
  };
  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };
  const [formData, setFormData] = useState(form);
  const [isFormSubmitted, submitForm] = useState(false);
  const [hasFormError, setFormError] = useState(undefined);

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
    .catch((err) => {
      setFormError(true);
      console.log("Something went wrong ... Please, check your internet connection.", err);
    })
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
              Aber was ist mit dir? Was ist deine Geschichte? Wie ging es dir während der Maßnahmen?<br/><br/>
              <span tw={"font-bold"}>Schreib uns deine Geschichte. Anonym. Wir posten Sie hier.</span><br/><br/>
              Je mehr wir sind, desto lauter hört man unsere Forderungen!
            </Paragraph>

            <Confetti active={isFormSubmitted}/>
            {isFormSubmitted && <Paragraph ts={"font-bold"}>Danke!</Paragraph>}
          </div>
        </div>
        <div tw="mt-5 md:mt-0 md:col-span-2 relative">
          <form onSubmit={submitPost}>
            <div tw="border-magenta border-4 shadow sm:rounded-md sm:overflow-hidden">
              <div tw="bg-white">
                {hasFormError
                  ? <div tw={"text-center p-6 text-xl text-magenta font-semibold"}>Da is wat schief jelaufen -.-'</div>
                  : isFormSubmitted
                    ? <div tw={"text-center p-6 text-xl text-magenta font-semibold"}>Danke für deine Bemühungen!</div>
                    : <textarea
                        name="message"
                        rows={14}
                        onChange={handleChange}
                        tw="shadow-sm p-4 block w-full text-2xl border-gray-300 focus:border-gray-500 rounded-md focus:outline-none"
                        placeholder="Und was ist mit dir? "
                        value={formData.message || ""}
                      />
                }
              </div>

              {!hasFormError && !isFormSubmitted && <div tw="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  tw="inline-flex justify-center py-2 px-4 bg-magenta border border-transparent shadow-sm text-lg font-semibold rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Abschicken
                </button>
              </div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
