import { Container, Paragraph, Section } from "./layout";
import * as React from "react";
import { useState } from "react";
import { formUrl } from "../../site-config";
import { GlobalStyles } from "twin.macro";

export const OpenCall = () => {
  const form = {
    post: "",
    email: "",
    gaveConsent: false
  };
  const [formData, setFormData] = useState(form);
  const [isFormSubmitted, submitForm] = useState(false);

  const payload = {
    "entry.845892413": formData.post ?? "No message",
    "entry.335473875": formData.email ?? "No Email address",
    "entry.377939158": formData.gaveConsent ? "Ja" : "Nein",
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
                  <h3 tw="text-lg font-medium leading-6 text-gray-900">Open Call</h3>
                  <p tw="mt-1 text-sm text-gray-600">
                    This information will be displayed publicly so be careful what you share.
                  </p>
                </div>
              </div>
              <div tw="mt-5 md:mt-0 md:col-span-2">
                {!isFormSubmitted && <form>
                  <div tw="shadow sm:rounded-md sm:overflow-hidden">
                    <div tw="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <div tw="grid grid-cols-3 gap-6">
                        <div tw="col-span-3 sm:col-span-2">
                          <label htmlFor="company_website" tw="block text-sm font-medium text-gray-700">
                            Thema
                          </label>
                          <div tw="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="text"
                              name="email"
                              value={formData.email || ""}
                              onChange={handleChange}
                              tw="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="about" tw="block text-sm font-medium text-gray-700">
                          Stellungenahme
                        </label>
                        <div tw="mt-1">
                      <textarea
                        name="post"
                        rows={3}
                        onChange={handleChange}
                        tw="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Deine Story ..."
                        value={formData.post || ""}
                      />
                        </div>
                        <p tw="mt-2 text-sm text-gray-500">
                          Erzähl uns wie es dir ergangen ist und worüber du dringend sprechen möchtest.
                        </p>
                      </div>
                    </div>

                    <div tw="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        onClick={submitPost}
                        tw="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                      >
                        Stellungnahme abschicken
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
