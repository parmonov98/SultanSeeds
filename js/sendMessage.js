const introSendMessage = document.querySelector(".intro-content__button");
const featuresSendMessage = document.querySelector(".features__item-link");
const productSendMessage = document.querySelector(".products-order__button");
const orderSendMessage = document.querySelector(".order .order-form button");
const contactSendMessage = document.querySelector(".contact-us__button");
const faqSendQuestion = document.querySelector(".faq__button");
const sendNewsLetter = document.querySelector(".newsletter__button");

const botToken = "7223048769:AAGMEnq7qqd04_wj_9gCKbnPfLIN8cr-rss";

const chatId = "-1002280125655";

let message = "";

function sendMessageToTelegram() {
  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) {
        console.log("Xabar muvaffaqiyatli yuborildi:", data);
      } else {
        console.error("Xatolik yuz berdi:", data);
      }
    })
    .catch((error) => {
      console.error("Fetch API xatosi:", error);
    });
}

const sendMessage = (sendMessageEl, modalWrapper, modalName) => {
  // Bot tokeningizni bu yerga joylashtiring
  const botToken = "7223048769:AAGMEnq7qqd04_wj_9gCKbnPfLIN8cr-rss";

  // Guruh chat ID sini bu yerga qo'ying (masalan, -1001234567890)
  const chatId = "-1002280125655";

  // Yuboriladigan xabar
  let message = "";

  // Xabarni yuborish uchun fetch API dan foydalanish
  function sendMessageToTelegram() {
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          console.log("Xabar muvaffaqiyatli yuborildi:", data);
        } else {
          console.error("Xatolik yuz berdi:", data);
        }
      })
      .catch((error) => {
        console.error("Fetch API xatosi:", error);
      });
  }

  if (sendMessageEl) {
    sendMessageEl.addEventListener("click", () => {
      message = "";

      const modal = document.querySelector(`.${modalWrapper}`);
      modal.classList.add("show", `${modalName}`);

      document.body.classList.add("no-scroll");
      document.addEventListener("click", (e) => {
        if (e.target.classList.contains("show")) {
          modal.classList.remove("show", `${modalName}`);
          document.body.classList.remove("no-scroll");
        }
      });

      const sendMessageBTn = modal.querySelector(`.${modalName} button`);

      const modalEl = document.querySelector(`.${modalName}`);

      const emailInput = modalEl.querySelector("input[type=email]");
      const selectInput = modalEl.querySelector(".select-menu__button-text");
      const phoneInput = modalEl.querySelector("input[type='tel']");
      const messageInput = modalEl.querySelector("textarea");
      const privacyPolicy = modalEl.querySelector("#privacy-policy");
      const dataConsent = modalEl.querySelector("#data-consent");

      function inputValidate() {
        let isValid = true;

        // Email inputda real vaqtda tekshirish
        emailInput.addEventListener("input", (e) => {
          if (!e.target.value) {
            isValid = false;
            emailInput.style.borderBottom = "1px solid red";
          } else {
            isValid = true;
            emailInput.style.borderBottom = "1px solid green";
          }
        });

        // Har safar funksiya chaqirilganda inputni to'ldirilganligini tekshirish
        if (!emailInput.value) {
          isValid = false;
          emailInput.style.borderBottom = "1px solid red";
        }

        // tel input validation
        phoneInput.addEventListener("input", (e) => {
          if (!e.target.value) {
            isValid = false;
            phoneInput.style.borderBottom = "1px solid red";
          } else {
            isValid = true;
            phoneInput.style.borderBottom = "1px solid green";
          }
        });

        // Har safar funksiya chaqirilganda inputni to'ldirilganligini tekshirish
        if (!phoneInput.value) {
          isValid = false;
          phoneInput.style.borderBottom = "1px solid red";
        }

        // texariea input validation
        messageInput.addEventListener("input", (e) => {
          if (!e.target.value) {
            isValid = false;
            messageInput.style.borderBottom = "1px solid red";
          } else {
            isValid = true;
            messageInput.style.borderBottom = "1px solid green";
          }
        });

        // Har safar funksiya chaqirilganda inputni to'ldirilganligini tekshirish
        if (!messageInput.value) {
          isValid = false;
          messageInput.style.borderBottom = "1px solid red";
        }

        // checkbox input validation
        privacyPolicy.addEventListener("change", (e) => {
          if (privacyPolicy.checked) {
            isValid = false;
          } else {
            isValid = true;
          }
        });

        // Har safar funksiya chaqirilganda inputni to'ldirilganligini tekshirish
        if (!privacyPolicy.checked) {
          isValid = false;
        }
        dataConsent.addEventListener("change", (e) => {
          if (dataConsent.checked) {
            isValid = false;
          } else {
            isValid = true;
          }
        });

        // Har safar funksiya chaqirilganda inputni to'ldirilganligini tekshirish
        if (!dataConsent.checked) {
          isValid = false;
        }

        return isValid;
      }

      // Tugma bosilganda tekshirish
      sendMessageBTn.addEventListener("click", (e) => {
        e.preventDefault();

        const htmlElement = document.documentElement;

        const langAttribute = htmlElement.getAttribute("lang");

        const selected = selectInput.textContent;
        if (inputValidate()) {
          const now = new Date(); // Hozirgi vaqtni oladi

          const year = now.getFullYear(); // Yil
          const month = now.getMonth() + 1; // Oyning raqami (0 dan boshlanadi, shuning uchun 1 qo'shiladi)
          const date = now.getDate(); // Kun
          const hours = now.getHours(); // Soat
          const minutes = now.getMinutes(); // Daqiqa
          const seconds = now.getSeconds(); // Sekund
          message = `Sultanseeds.uz dan yangi #xabar Til: ${
            langAttribute === "en" ? "English" : "Russian"
          }:\n\n\nEmail: ${emailInput.value.trim()}\nMaqsad: ${selected}\nTelefon: ${phoneInput.value.trim()}\nMatn: ${messageInput.value.trim()}\n\n\n${date}-${month}-${year} - ${hours}:${minutes}:${seconds}`;
          console.log("Input valid, form can be submitted");
          sendMessageToTelegram();

          modalEl.classList.remove("show", "introSendMessage");
          document.body.classList.remove("no-scroll");

          emailInput.value = "";
          phoneInput.value = "";

          if (langAttribute === "en") {
            selectInput.textContent =
              "I am interested in receiving offer (MOQ is 20tons)";
          } else {
            selectInput.textContent =
              "Я заинтересован в получении предложения (Минимальный заказ — 20 тонн)";
          }

          messageInput.value = "";
          privacyPolicy.checked = false;
          dataConsent.checked = false;
        } else {
          console.log("Input invalid, please fill the required fields");
        }
      });
    });
  }
};

sendMessage(introSendMessage, "modal-wrapper", "introSendMessage");
sendMessage(featuresSendMessage, "modal-wrapper", "featuresSendMessage");
sendMessage(productSendMessage, "modal-wrapper", "productSendMessage");

if (orderSendMessage) {
  orderSendMessage.addEventListener("click", (e) => {
    e.preventDefault();
    const orderModal = document.querySelector(".order .order-form");

    const emailInput = orderModal.querySelector("input[type=email]");
    const selectInput = orderModal.querySelector(".select-menu__button-text");
    const phoneInput = orderModal.querySelector("input[type='tel']");
    const messageInput = orderModal.querySelector("textarea");
    const privacyPolicy = orderModal.querySelector("#privacy-policy-el");
    const dataConsent = orderModal.querySelector("#data-consent-el");

    function inputValidate() {
      let isValid = true;

      // Email inputda real vaqtda tekshirish
      emailInput.addEventListener("input", (e) => {
        if (!e.target.value) {
          isValid = false;
          emailInput.style.borderBottom = "1px solid red";
        } else {
          isValid = true;
          emailInput.style.borderBottom = "1px solid green";
        }
      });

      // Har safar funksiya chaqirilganda inputni to'ldirilganligini tekshirish
      if (!emailInput.value) {
        isValid = false;
        emailInput.style.borderBottom = "1px solid red";
      }

      // tel input validation
      phoneInput.addEventListener("input", (e) => {
        if (!e.target.value) {
          isValid = false;
          phoneInput.style.borderBottom = "1px solid red";
        } else {
          isValid = true;
          phoneInput.style.borderBottom = "1px solid green";
        }
      });

      // Har safar funksiya chaqirilganda inputni to'ldirilganligini tekshirish
      if (!phoneInput.value) {
        isValid = false;
        phoneInput.style.borderBottom = "1px solid red";
      }

      // texariea input validation
      messageInput.addEventListener("input", (e) => {
        if (!e.target.value) {
          isValid = false;
          messageInput.style.borderBottom = "1px solid red";
        } else {
          isValid = true;
          messageInput.style.borderBottom = "1px solid green";
        }
      });

      // Har safar funksiya chaqirilganda inputni to'ldirilganligini tekshirish
      if (!messageInput.value) {
        isValid = false;
        messageInput.style.borderBottom = "1px solid red";
      }

      // checkbox input validation
      privacyPolicy.addEventListener("change", (e) => {
        if (privacyPolicy.checked) {
          isValid = false;
        } else {
          isValid = true;
        }
      });

      // Har safar funksiya chaqirilganda inputni to'ldirilganligini tekshirish
      if (!privacyPolicy.checked) {
        isValid = false;
      }
      dataConsent.addEventListener("change", (e) => {
        if (dataConsent.checked) {
          isValid = false;
        } else {
          isValid = true;
        }
      });

      // Har safar funksiya chaqirilganda inputni to'ldirilganligini tekshirish
      if (!dataConsent.checked) {
        isValid = false;
      }

      return isValid;
    }

    // Tugma bosilganda tekshirish

    const selected = selectInput.textContent;
    if (inputValidate()) {
      const htmlElement = document.documentElement;

      const langAttribute = htmlElement.getAttribute("lang");

      const now = new Date(); // Hozirgi vaqtni oladi

      const year = now.getFullYear(); // Yil
      const month = now.getMonth() + 1; // Oyning raqami (0 dan boshlanadi, shuning uchun 1 qo'shiladi)
      const date = now.getDate(); // Kun
      const hours = now.getHours(); // Soat
      const minutes = now.getMinutes(); // Daqiqa
      const seconds = now.getSeconds(); // Sekund

      message = `Sultanseeds.uz dan yangi #xabar Til: ${
        langAttribute === "en" ? "English" : "Russian"
      }:\n\n\nEmail: ${emailInput.value.trim()}\nMaqsad: ${selected}\nTelefon: ${phoneInput.value.trim()}\nMatn: ${messageInput.value.trim()}\n\n\n${date}-${month}-${year} - ${hours}:${minutes}:${seconds}`;
      console.log("Input valid, form can be submitted");
      sendMessageToTelegram();

      emailInput.value = "";
      emailInput.style.borderBottom = "";
      phoneInput.value = "";
      phoneInput.style.borderBottom = "";

      if (langAttribute === "en") {
        selectInput.textContent =
          "I am interested in receiving offer (MOQ is 20tons)";
      } else {
        selectInput.textContent =
          "Я заинтересован в получении предложения (Минимальный заказ — 20 тонн)";
      }
      messageInput.value = "";
      messageInput.style.borderBottom = "";
      privacyPolicy.checked = false;
      dataConsent.checked = false;
    } else {
      console.log("Input invalid, please fill the required fields");
      emailInput.style.borderBottom = "1px solid red";
    }
  });
}

if (contactSendMessage) {
  contactSendMessage.addEventListener("click", (e) => {
    e.preventDefault();
    const contactForm = document.querySelector(".contact-us__form");
    const contactName = contactForm.querySelector("#contact-name");
    const contactEmail = contactForm.querySelector("#contact-email");
    const contactPhone = contactForm.querySelector("#contact-phone");
    const contactSelect = contactForm.querySelector(
      ".select-menu__button-text"
    );

    function inputValidate() {
      let isValid = true;

      // Email inputda real vaqtda tekshirish
      contactEmail.addEventListener("input", (e) => {
        if (!e.target.value) {
          isValid = false;
          contactEmail.style.borderBottom = "1px solid red";
        } else {
          isValid = true;
          contactEmail.style.borderBottom = "1px solid green";
        }
      });

      if (!contactEmail.value) {
        isValid = false;
        contactEmail.style.borderBottom = "1px solid red";
      }

      // tel input validation
      contactPhone.addEventListener("input", (e) => {
        if (!e.target.value) {
          isValid = false;
          contactPhone.style.borderBottom = "1px solid red";
        } else {
          isValid = true;
          contactPhone.style.borderBottom = "1px solid green";
        }
      });

      if (!contactPhone.value) {
        isValid = false;
        contactPhone.style.borderBottom = "1px solid red";
      }

      // name input validation
      contactName.addEventListener("input", (e) => {
        if (!e.target.value) {
          isValid = false;
          contactName.style.borderBottom = "1px solid red";
        } else {
          isValid = true;
          contactName.style.borderBottom = "1px solid green";
        }
      });

      if (!contactName.value) {
        isValid = false;
        contactName.style.borderBottom = "1px solid red";
      }

      return isValid;
    }

    // Tugma bosilganda tekshirish

    const selected = contactSelect.textContent.trim();
    if (inputValidate()) {
      const htmlElement = document.documentElement;

      const langAttribute = htmlElement.getAttribute("lang");

      const now = new Date(); // Hozirgi vaqtni oladi

      const year = now.getFullYear(); // Yil
      const month = now.getMonth() + 1; // Oyning raqami (0 dan boshlanadi, shuning uchun 1 qo'shiladi)
      const date = now.getDate(); // Kun
      const hours = now.getHours(); // Soat
      const minutes = now.getMinutes(); // Daqiqa
      const seconds = now.getSeconds(); // Sekund

      message = `Sultanseeds.uz dan yangi kontakt #kontakt  Til: ${
        langAttribute === "en" ? "English" : "Russian"
      }: \n\n\nFISH: ${contactName.value.trim()}\nMaqsad: ${selected}\nTelifon: ${contactPhone.value.trim()}\nEmail: ${contactEmail.value.trim()} \n\n\n ${date}-${month}-${year} - ${hours}:${minutes}:${seconds}`;
      console.log("Input valid, form can be submitted");
      sendMessageToTelegram();

      contactEmail.value = "";
      contactEmail.style.borderBottom = "";
      contactPhone.value = "";
      contactPhone.style.borderBottom = "";

      if (langAttribute === "en") {
        contactSelect.textContent = "Select your option";
      } else {
        contactSelect.textContent = "Выберите свой вариант";
      }
      contactName.value = "";
      contactName.style.borderBottom = "";
    } else {
      console.log("Input invalid, please fill the required fields");
    }
  });
}

if (faqSendQuestion) {
  faqSendQuestion.addEventListener("click", () => {
    message = "";

    const modal = document.querySelector(`.ask-modal`);

    modal.classList.add("show");
    document.body.classList.add("no-scroll");
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("show")) {
        modal.classList.remove("show");
        document.body.classList.remove("no-scroll");
      }
    });

    const sendMessageBTn = modal.querySelector(`.ask-modal button`);

    const modalEl = document.querySelector(`.ask-modal form`);

    const emailInput = modalEl.querySelector("#company-email");
    const fullName = modalEl.querySelector("#user-name");
    const messageInput = modalEl.querySelector("textarea");
    const companyName = modalEl.querySelector("#company-name");
    console.log("Email", emailInput);
    console.log("FullName", fullName);
    console.log("message", messageInput);
    console.log("Company name", companyName);

    function inputValidate() {
      let isValid = true;

      // Email inputda real vaqtda tekshirish
      emailInput.addEventListener("input", (e) => {
        if (!e.target.value) {
          isValid = false;
          emailInput.style.borderBottom = "1px solid red";
        } else {
          isValid = true;
          emailInput.style.borderBottom = "1px solid green";
        }
      });

      // Har safar funksiya chaqirilganda inputni to'ldirilganligini tekshirish
      if (!emailInput.value) {
        isValid = false;
        emailInput.style.borderBottom = "1px solid red";
      }

      // tel input validation
      fullName.addEventListener("input", (e) => {
        if (!e.target.value) {
          isValid = false;
          fullName.style.borderBottom = "1px solid red";
        } else {
          isValid = true;
          fullName.style.borderBottom = "1px solid green";
        }
      });

      // Har safar funksiya chaqirilganda inputni to'ldirilganligini tekshirish
      if (!fullName.value) {
        isValid = false;
        fullName.style.borderBottom = "1px solid red";
      }

      // texariea input validation
      messageInput.addEventListener("input", (e) => {
        if (!e.target.value) {
          isValid = false;
          messageInput.style.borderBottom = "1px solid red";
        } else {
          isValid = true;
          messageInput.style.borderBottom = "1px solid green";
        }
      });

      // Har safar funksiya chaqirilganda inputni to'ldirilganligini tekshirish
      if (!messageInput.value) {
        isValid = false;
        messageInput.style.borderBottom = "1px solid red";
      }

      companyName.addEventListener("input", (e) => {
        if (!e.target.value) {
          isValid = false;
          companyName.style.borderBottom = "1px solid red";
        } else {
          isValid = true;
          companyName.style.borderBottom = "1px solid green";
        }
      });

      // Har safar funksiya chaqirilganda inputni to'ldirilganligini tekshirish
      if (!companyName.value) {
        isValid = false;
        companyName.style.borderBottom = "1px solid red";
      }

      return isValid;
    }

    // Tugma bosilganda tekshirish
    sendMessageBTn.addEventListener("click", (e) => {
      e.preventDefault();

      if (inputValidate()) {
        const htmlElement = document.documentElement;

        const langAttribute = htmlElement.getAttribute("lang");

        const now = new Date(); // Hozirgi vaqtni oladi

        const year = now.getFullYear(); // Yil
        const month = now.getMonth() + 1; // Oyning raqami (0 dan boshlanadi, shuning uchun 1 qo'shiladi)
        const date = now.getDate(); // Kun
        const hours = now.getHours(); // Soat
        const minutes = now.getMinutes(); // Daqiqa
        const seconds = now.getSeconds(); // Sekund
        message = `Sultanseeds.uz dan yangi #savol Til: ${
          langAttribute === "en" ? "English" : "Russian"
        }:\n\n\nFIO: ${fullName.value.trim()}\nEmail: ${emailInput.value.trim()}\nKampaniya: ${companyName.value.trim()}\nMatn: ${messageInput.value.trim()} \n\n\n ${date}-${month}-${year} - ${hours}:${minutes}:${seconds}`;
        console.log("Input valid, form can be submitted");
        sendMessageToTelegram();

        modal.classList.remove("show", "introSendMessage");
        document.body.classList.remove("no-scroll");

        emailInput.value = "";
        companyName.value = "";
        messageInput.value = "";
      } else {
        console.log("Input invalid, please fill the required fields");
      }
    });
  });
}

if (sendNewsLetter) {
  sendNewsLetter.addEventListener("click", () => {
    const htmlElement = document.documentElement;

    const langAttribute = htmlElement.getAttribute("lang");
    const newsLetterInput = document.querySelector(
      "#newsletter__form-email-input"
    );
    const subscription = document.querySelector("#newsletter__terms");

    function inputValidate() {
      let isValid = true;

      newsLetterInput.addEventListener("input", (e) => {
        if (!e.target.value) {
          isValid = false;
          newsLetterInput.style.borderBottom = `1px solid red`;
        } else {
          isValid = true;
          newsLetterInput.style.borderBottom = `1px solid green`;
        }
      });

      if (!newsLetterInput.value.trim()) {
        isValid = false;
        newsLetterInput.style.borderBottom = `1px solid red`;
      }

      subscription.addEventListener("change", () => {
        if (!subscription.checked) {
          isValid = false;
          langAttribute === "en"
            ? alert(
                "Confirm that you want to receive emails from Sultanseeds.uz!"
              )
            : alert(
                "Подтвердите, что хотите получать электронные письма от Sultanseeds.uz!"
              );
        } else {
          isValid = true;
        }
      });

      if (!subscription.checked) {
        isValid = false;
        langAttribute === "en"
          ? alert(
              "Confirm that you want to receive emails from Sultanseeds.uz!"
            )
          : alert(
              "Подтвердите, что хотите получать электронные письма от Sultanseeds.uz!"
            );
      }

      return isValid;
    }

    if (inputValidate()) {
      message = `Yangi obunachi #obunachi Til: ${
        langAttribute === "en" ? "English" : "Russian"
      } \n\n\n Email: ${newsLetterInput.value.trim()}`;

      sendMessageToTelegram();
    }
  });
}
