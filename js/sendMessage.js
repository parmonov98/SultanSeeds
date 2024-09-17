// Bot tokeningizni bu yerga joylashtiring
const botToken = "7059505881:AAHlU_yTsaa6_XwS9yg7MCmLjIv8rsoKEhE";

// Guruh chat ID sini bu yerga qo'ying (masalan, -1001234567890)
const chatId = "-1002477600463";

// Yuboriladigan xabar
const message = "Salom";

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

sendMessageToTelegram();
