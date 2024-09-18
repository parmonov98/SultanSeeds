// Bot tokeningizni bu yerga joylashtiring
const botToken = "7059505881:AAHlU_yTsaa6_XwS9yg7MCmLjIv8rsoKEhE";

// Guruh chat ID sini bu yerga qo'ying (masalan, -1001234567890)
const chatId = "-1002477600463";

const introSendMessage = document.querySelector(".intro-content__button");
const featuresSendMessage = document.querySelector(".features__item-link");
const productSendMessage = document.querySelector(".products-order__button");
const orderSendMessage = document.querySelector(".order .order-form button");

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

// formValidation

// sendMessageToTelegram();
if (introSendMessage) {
  introSendMessage.addEventListener("click", () => {
    message = "";

    const modal = document.querySelector(".modal-wrapper");
    modal.classList.add("show", "introSendMessage");

    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("show")) {
        modal.classList.remove("show", "introSendMessage");
      }
    });

    const sendMessageBTn = modal.querySelector(".introSendMessage button");

    const introModal = document.querySelector(".introSendMessage");

    const emailInput = introModal.querySelector("input[type=email]");
    const selectInput = introModal.querySelector(".select-menu__button-text");
    const phoneInput = introModal.querySelector("input[type='tel']");
    const messageInput = introModal.querySelector("textarea");
    const privacyPolicy = introModal.querySelector("#privacy-policy");
    const dataConsent = introModal.querySelector("#data-consent");

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
        message = `Intro sectiondan xabar: \n\n\n Foydalanuvchi email manzili: ${emailInput.value.trim()}, Tanladi: ${selected} \n Foydalanuvchi telifon raqami: ${phoneInput.value.trim()} \n Foydalanuvchi xabari: ${messageInput.value.trim()}, Shaxsiy ma'lumotlarni himoya qilish siyosati roziligi holati: ${true}`;
        console.log("Input valid, form can be submitted");
        sendMessageToTelegram();

        introModal.classList.remove("show", "introSendMessage");
        document.body.classList.remove("no-scroll");

        emailInput.value = "";
        phoneInput.value = "";
        selectInput.textContent =
          "I am interested in receiving offer (MOQ is 20tons)";
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

if (featuresSendMessage) {
  featuresSendMessage.addEventListener("click", () => {
    const modal = document.querySelector(".modal-wrapper");
    modal.classList.add("show", "featuresSendMessage");

    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("show")) {
        modal.classList.remove("show", "featuresSendMessage");
      }
    });

    const sendMessageBTn = modal.querySelector(".featuresSendMessage button");

    const featureModal = document.querySelector(".featuresSendMessage");

    const emailInput = featureModal.querySelector("input[type=email]");
    const selectInput = featureModal.querySelector(".select-menu__button-text");
    const phoneInput = featureModal.querySelector("input[type='tel']");
    const messageInput = featureModal.querySelector("textarea");
    const privacyPolicy = featureModal.querySelector("#privacy-policy");
    const dataConsent = featureModal.querySelector("#data-consent");

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
        message = `Features sectiondan xabar: \n\n\n Foydalanuvchi email manzili: ${emailInput.value.trim()}, Tanladi: ${selected} \n Foydalanuvchi telifon raqami: ${phoneInput.value.trim()} \n Foydalanuvchi xabari: ${messageInput.value.trim()}, Shaxsiy ma'lumotlarni himoya qilish siyosati roziligi holati: ${true}`;
        console.log("Input valid, form can be submitted");
        sendMessageToTelegram();

        featureModal.classList.remove("show", "introSendMessage");
        document.body.classList.remove("no-scroll");

        emailInput.value = "";
        phoneInput.value = "";
        selectInput.textContent =
          "I am interested in receiving offer (MOQ is 20tons)";
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

if (productSendMessage) {
  productSendMessage.addEventListener("click", () => {
    const modal = document.querySelector(".modal-wrapper");
    modal.classList.add("show", "productSendMessage");

    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("show")) {
        modal.classList.remove("show", "productSendMessage");
      }
    });

    const sendMessageBTn = modal.querySelector(".productSendMessage button");

    const productModal = document.querySelector(".productSendMessage");

    const emailInput = productModal.querySelector("input[type=email]");
    const selectInput = productModal.querySelector(".select-menu__button-text");
    const phoneInput = productModal.querySelector("input[type='tel']");
    const messageInput = productModal.querySelector("textarea");
    const privacyPolicy = productModal.querySelector("#privacy-policy");
    const dataConsent = productModal.querySelector("#data-consent");

    console.log(selectInput);

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
        message = `Product sectiondan xabar: \n\n\n Foydalanuvchi email manzili: ${emailInput.value.trim()}, Tanladi: ${selected} \n Foydalanuvchi telifon raqami: ${phoneInput.value.trim()} \n Foydalanuvchi xabari: ${messageInput.value.trim()}, Shaxsiy ma'lumotlarni himoya qilish siyosati roziligi holati: ${true}`;
        console.log("Input valid, form can be submitted");
        sendMessageToTelegram();

        productModal.classList.remove("show", "introSendMessage");
        document.body.classList.remove("no-scroll");

        emailInput.value = "";
        emailInput.style.borderBottom = "";
        phoneInput.value = "";
        phoneInput.style.borderBottom = "";
        selectInput.textContent =
          "I am interested in receiving offer (MOQ is 20tons)";
        messageInput.value = "";
        messageInput.style.borderBottom = "";
        privacyPolicy.checked = false;
        dataConsent.checked = false;
      } else {
        console.log("Input invalid, please fill the required fields");
        emailInput.style.borderBottom = "1px solid red";
      }
    });
  });
}

if (orderSendMessage) {
  orderSendMessage.addEventListener("click", (e) => {
    e.preventDefault();
    const orderModal = document.querySelector(".order .order-form");

    const emailInput = orderModal.querySelector("input[type=email]");
    const selectInput = orderModal.querySelector(".select-menu__button-text");
    const phoneInput = orderModal.querySelector("input[type='tel']");
    const messageInput = orderModal.querySelector("textarea");
    const privacyPolicy = orderModal.querySelector("#privacy-policy");
    const dataConsent = orderModal.querySelector("#data-consent");

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
    // orderSendMessage.addEventListener("click", (e) => {
    // e.preventDefault();

    const selected = selectInput.textContent;
    if (inputValidate()) {
      message = `Main order sectiondan xabar: \n\n\n Foydalanuvchi email manzili: ${emailInput.value.trim()}, Tanladi: ${selected} \n Foydalanuvchi telifon raqami: ${phoneInput.value.trim()} \n Foydalanuvchi xabari: ${messageInput.value.trim()}, Shaxsiy ma'lumotlarni himoya qilish siyosati roziligi holati: ${true}`;
      console.log("Input valid, form can be submitted");
      sendMessageToTelegram();

      emailInput.value = "";
      emailInput.style.borderBottom = "";
      phoneInput.value = "";
      phoneInput.style.borderBottom = "";
      selectInput.textContent =
        "I am interested in receiving offer (MOQ is 20tons)";
      messageInput.value = "";
      messageInput.style.borderBottom = "";
      privacyPolicy.checked = false;
      dataConsent.checked = false;
    } else {
      console.log("Input invalid, please fill the required fields");
      emailInput.style.borderBottom = "1px solid red";
    }
    // });
  });
}
