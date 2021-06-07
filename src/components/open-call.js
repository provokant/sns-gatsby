import { Container, Paragraph, Section } from "./layout";
import * as React from "react";
import { useState } from "react";
import { formUrl, themeColor } from "../../site-config";
import { GlobalStyles } from "twin.macro";

export const OpenCall = () => {
  const form = {
    post: "",
  };
  const [formData, setFormData] = useState(form);
  const [isFormSubmitted, submitForm] = useState(false);

  const payload = {
    "entry.513669972": formData.post ?? "No message",
  }

  const submitPost = (event) => {
    event.preventDefault();
    console.log(payload, formData);
    // debugger;
    fetch(formUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
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
    <>
      <GlobalStyles/>
      <Section>
        <Container>
          <div>
            <div tw="md:grid md:grid-cols-3 md:gap-6">
              <div tw="md:col-span-1">
                <div tw="px-4 sm:px-0">
                  <h3 tw="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl">Open Call</h3>
                  <Paragraph>
                    Und was ist mit dir? Wir als Initiator*innen sind Studierende. Und damit selbst direkt von den verschiedenen Einschränkungen betroffen. Aber was ist mit dir? Was ist deine Geschichte? Wie ging es dir während Corona?
                    Schreib uns deine Geschichte. Anonym. Wir posten Sie hier.<br/><br/>
                    Je mehr wir sind, desto lauter hört man unsere Forderungen!
                  </Paragraph>
                </div>
              </div>
              <div tw="mt-5 md:mt-0 md:col-span-2">
                {!isFormSubmitted && <form>
                  <div tw="shadow sm:rounded-md sm:overflow-hidden">
                    <div tw="bg-white">
                      <textarea
                        name="post"
                        rows={14}
                        onChange={handleChange}
                        tw="shadow-sm p-4 block w-full sm:text-sm border-gray-300 focus:border-gray-500 rounded-md focus:outline-none"
                        placeholder="Deine Story ..."
                        value={formData.post || ""}
                      />
                    </div>

                    <div tw="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        onClick={submitPost}
                        style={{backgroundColor: themeColor}}
                        tw="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                      >
                        Abschicken
                      </button>
                    </div>
                  </div>
                </form>}
                {isFormSubmitted && <Paragraph>Danke für deine Bemührungen!</Paragraph>}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
