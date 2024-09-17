// Bot tokeningizni bu yerga joylashtiring
const botToken = "7059505881:AAHlU_yTsaa6_XwS9yg7MCmLjIv8rsoKEhE";

// Guruh chat ID sini bu yerga qo'ying (masalan, -1001234567890)
const chatId = "-1002477600463";

// malumotlarni yig'ish
// Form elementlarini olish
const form = document.querySelector(".order-form");
const emailInput = form.querySelector('input[name="email"]');
const selectButton = form.querySelector("#select__menu");
const phoneInput = form.querySelector('input[name="phone"]');
const messageInput = form.querySelector('textarea[name="message"]');
const privacyCheckbox = form.querySelector('input[name="privacy-policy"]');
const dataConsentCheckbox = form.querySelector('input[name="data-consent"]');

// 3 ta tugma - bu yerda siz har bir tugmani olayotganingizni faraz qilaman
const button1 = document.querySelector(".order-form button"); // Tugma 1

// Form ma'lumotlarini ob'ektga yig'ish funksiyasi
function collectFormData() {
  const formData = {
    email: emailInput.value,
    selectedOption: selectButton.querySelector(".select-menu__button-text")
      .innerText,
    phone: phoneInput.value,
    message: messageInput.value,
    privacyPolicyAgreed: privacyCheckbox.checked,
    dataConsentGiven: dataConsentCheckbox.checked,
  };
  return formData;
}

const getMessage = (formData) => {
  const {
    email,
    selectedOption,
    phone,
    message,
    privacyPolicyAgreed,
    dataConsentGiven,
  } = formData;
  return `Email: ${email}\nSelected Option: ${selectedOption}\nPhone: ${phone}\nMessage: ${message}\nPrivacy Policy Agreed: ${privacyPolicyAgreed}\nData Consent Given: ${dataConsentGiven}`;
};

// Yuboriladigan xabar

// Xabarni yuborish uchun fetch API dan foydalanish
function sendMessageToTelegram(message) {
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

// Tugma 1 bosilganda
button1.addEventListener("click", function () {
  const formData = collectFormData();
  console.log("Form data from Button 1:", formData);
  // Bu yerda form ma'lumotlarini serverga yuborish yoki boshqa amallarni bajarasiz
  const message = getMessage(formData);
  sendMessageToTelegram(message);
});
