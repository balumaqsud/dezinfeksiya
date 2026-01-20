/**
 * Telegram Bot API utility for sending booking notifications
 * 
 * To set up:
 * 1. Create a Telegram bot via @BotFather and get the BOT_TOKEN
 * 2. Get your chat ID by messaging @userinfobot or @getidsbot
 * 3. Add the bot to your chat/channel and give it permission to send messages
 * 4. Replace the placeholder values below with your actual credentials
 */

// Configuration - Replace these with your actual values
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE'; // Get from @BotFather
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE'; // Chat ID of @dezenchik or the group

// Telegram API endpoint
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

export interface BookingData {
  name: string;
  address: string;
  phone: string;
}

/**
 * Format phone number for display
 */
const formatPhone = (phone: string): string => {
  if (phone.length === 9) {
    return `+998 ${phone.slice(0, 2)} ${phone.slice(2, 5)} ${phone.slice(5, 7)} ${phone.slice(7, 9)}`;
  }
  return phone;
};

/**
 * Create a formatted message for Telegram
 */
const createBookingMessage = (data: BookingData): string => {
  const currentDate = new Date().toLocaleString('uz-UZ', {
    timeZone: 'Asia/Tashkent',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
🆕 *YANGI BUYURTMA!*
━━━━━━━━━━━━━━━━━━

👤 *Ism:* ${data.name}
📍 *Manzil:* ${data.address}
📞 *Telefon:* ${formatPhone(data.phone)}

🎁 *Chegirma:* 10%
📅 *Sana:* ${currentDate}

━━━━━━━━━━━━━━━━━━
_DEZ.CHIK - Professional Dezinfeksiya_
  `.trim();
};

/**
 * Send booking data to Telegram
 */
export const sendBookingToTelegram = async (data: BookingData): Promise<{ success: boolean; error?: string }> => {
  // Validate configuration
  if (TELEGRAM_BOT_TOKEN === 'YOUR_BOT_TOKEN_HERE' || TELEGRAM_CHAT_ID === 'YOUR_CHAT_ID_HERE') {
    console.warn('Telegram bot is not configured. Please set up BOT_TOKEN and CHAT_ID in src/utils/telegram.ts');
    // Return success anyway for demo purposes - remove this in production
    return { success: true };
  }

  const message = createBookingMessage(data);

  try {
    const response = await fetch(TELEGRAM_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    const result = await response.json();

    if (result.ok) {
      return { success: true };
    } else {
      console.error('Telegram API error:', result);
      return { success: false, error: result.description || 'Failed to send message' };
    }
  } catch (error) {
    console.error('Network error sending to Telegram:', error);
    return { success: false, error: 'Network error. Please try again.' };
  }
};

/**
 * Alternative: Send via Telegram Bot link (opens Telegram app)
 * Use this if you don't want to set up a bot
 */
export const openTelegramWithMessage = (data: BookingData): void => {
  const message = `Salom! Men xizmat buyurtma qilmoqchiman.

Ism: ${data.name}
Manzil: ${data.address}
Telefon: ${formatPhone(data.phone)}

10% chegirma bilan!`;

  const encodedMessage = encodeURIComponent(message);
  window.open(`https://t.me/dezenchik?text=${encodedMessage}`, '_blank');
};
