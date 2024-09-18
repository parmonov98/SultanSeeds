const introSendMessage = document.querySelector(".intro-content__button");
const featuresSendMessage = document.querySelector(".features__item-link");
const productSendMessage = document.querySelector(".products-order__button");
const orderSendMessage = document.querySelector(".order .order-form button");
const contactSendMessage = document.querySelector(".contact-us__button");

const botToken = "7059505881:AAHlU_yTsaa6_XwS9yg7MCmLjIv8rsoKEhE";

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
  const botToken = "7059505881:AAHlU_yTsaa6_XwS9yg7MCmLjIv8rsoKEhE";

  // Guruh chat ID sini bu yerga qo'ying (masalan, -1001234567890)
  const chatId = "-1002477600463";

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

        const selected = selectInput.textContent;
        if (inputValidate()) {
          const now = new Date(); // Hozirgi vaqtni oladi

          const year = now.getFullYear(); // Yil
          const month = now.getMonth() + 1; // Oyning raqami (0 dan boshlanadi, shuning uchun 1 qo'shiladi)
          const date = now.getDate(); // Kun
          const hours = now.getHours(); // Soat
          const minutes = now.getMinutes(); // Daqiqa
          const seconds = now.getSeconds(); // Sekund
          message = `New message: \n\n\n Email: ${emailInput.value.trim()}, \n Selected: ${selected} \n Phone: ${phoneInput.value.trim()} \n Message: ${messageInput.value.trim()} \n\n\n ${year}-${month}-${date} - ${hours}:${minutes}:${seconds}`;
          console.log("Input valid, form can be submitted");
          sendMessageToTelegram();

          modalEl.classList.remove("show", "introSendMessage");
          document.body.classList.remove("no-scroll");

          emailInput.value = "";
          phoneInput.value = "";

          const htmlElement = document.documentElement;

          const langAttribute = htmlElement.getAttribute("lang");

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
          emailInput.style.borderBottom = "1px solid red";
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
      const now = new Date(); // Hozirgi vaqtni oladi

      const year = now.getFullYear(); // Yil
      const month = now.getMonth() + 1; // Oyning raqami (0 dan boshlanadi, shuning uchun 1 qo'shiladi)
      const date = now.getDate(); // Kun
      const hours = now.getHours(); // Soat
      const minutes = now.getMinutes(); // Daqiqa
      const seconds = now.getSeconds(); // Sekund

      message = `New message: \n\n\n Email: ${emailInput.value.trim()}, \n Selected: ${selected} \n Phone: ${phoneInput.value.trim()} \n Message: ${messageInput.value.trim()} \n\n\n ${year}-${month}-${date} - ${hours}:${minutes}:${seconds}`;
      console.log("Input valid, form can be submitted");
      sendMessageToTelegram();

      emailInput.value = "";
      emailInput.style.borderBottom = "";
      phoneInput.value = "";
      phoneInput.style.borderBottom = "";
      const htmlElement = document.documentElement;

      const langAttribute = htmlElement.getAttribute("lang");

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
      const now = new Date(); // Hozirgi vaqtni oladi

      const year = now.getFullYear(); // Yil
      const month = now.getMonth() + 1; // Oyning raqami (0 dan boshlanadi, shuning uchun 1 qo'shiladi)
      const date = now.getDate(); // Kun
      const hours = now.getHours(); // Soat
      const minutes = now.getMinutes(); // Daqiqa
      const seconds = now.getSeconds(); // Sekund

      message = `New contact message: \n\n\n Name: ${contactName.value.trim()}, \n Selected: ${selected} \n Phone: ${contactPhone.value.trim()} \n Email: ${contactEmail.value.trim()} \n\n\n ${year}-${month}-${date} - ${hours}:${minutes}:${seconds}`;
      console.log("Input valid, form can be submitted");
      sendMessageToTelegram();

      contactEmail.value = "";
      contactEmail.style.borderBottom = "";
      contactPhone.value = "";
      contactPhone.style.borderBottom = "";
      const htmlElement = document.documentElement;

      const langAttribute = htmlElement.getAttribute("lang");

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
