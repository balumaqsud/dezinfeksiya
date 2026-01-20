<template>
  <q-layout view="lHh Lpr lff" class="bg-grey-1">
    <ResponsiveNavbar />

    <q-page-container>
      <router-view />

      <!-- Footer inside page container so it scrolls with content -->
      <footer class="app-footer">
      <div class="footer-container">
        <div class="footer-content">
          <!-- Company Info -->
          <div class="footer-section company-section">
            <div class="footer-brand">
              <img :src="logoImage" alt="Logo" class="footer-logo" />
              <span class="footer-brand-text">DEZ.CHIK</span>
            </div>
            <p class="company-description">
              {{ t('companyDescription') }}
            </p>
            <!-- Social Links -->
            <div class="social-links">
              <q-btn
                flat
                round
                class="social-btn telegram-btn"
                icon="near_me"
                @click="openTelegram"
              />
              <q-btn
                flat
                round
                class="social-btn instagram-btn"
                @click="openInstagram"
              >
                <q-icon name="img:https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" size="20px" />
              </q-btn>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="footer-section contact-section">
            <h4 class="section-title">{{ t('contact') }}</h4>
            <div class="contact-item">
              <q-icon name="phone" size="18px" />
              <div class="contact-text">
                <a href="tel:+998887697275">+998 88 769 72 75</a>
                <span class="contact-label">{{ t('mainPhone') }}</span>
              </div>
            </div>
            <div class="contact-item">
              <q-icon name="phone" size="18px" />
              <div class="contact-text">
                <a href="tel:+998882797275">+998 88 279 72 75</a>
                <span class="contact-label">{{ t('backupPhone') }}</span>
              </div>
            </div>
            <div class="contact-item">
              <q-icon name="location_on" size="18px" />
              <div class="contact-text">
                <span>{{ t('address') }}</span>
              </div>
            </div>
          </div>

          <!-- License & QR Code -->
          <div class="footer-section license-section">
            <h4 class="section-title">{{ t('license') }}</h4>
            <div class="license-info">
              <div class="license-badge">
                <q-icon name="verified" size="20px" color="positive" />
                <span>{{ t('licensedBusiness') }}</span>
              </div>
              <p class="license-details">
                STIR: 305219268<br />
                {{ t('registrationDate') }}: 15.01.2018
              </p>
            </div>
            <div class="qr-code-container">
              <img :src="qrCodeImage" alt="QR Code" class="qr-code" />
              <span class="qr-label">{{ t('scanQR') }}</span>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <div class="footer-divider"></div>
          <div class="footer-bottom-content">
            <p class="copyright">© 2024 DEZ.CHIK. {{ t('allRightsReserved') }}</p>
          </div>
        </div>
      </div>
      </footer>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import ResponsiveNavbar from 'components/ResponsiveNavbar.vue';
import logoImage from '../assets/logo.png';
import qrCodeImage from '../assets/qr-code.png';

// Language system - synced with navbar
type LangCode = 'en' | 'ru' | 'uz';

const translations: Record<LangCode, Record<string, string>> = {
  en: {
    companyDescription: 'Professional disinfection and sanitation services. We ensure a clean and safe environment for your home and business.',
    contact: 'Contact',
    mainPhone: 'Main',
    backupPhone: 'Backup',
    address: 'Tashkent region, Chirchik city, A.Temur street, 22',
    license: 'Licensed Business',
    licensedBusiness: 'Officially Registered',
    registrationDate: 'Reg. date',
    scanQR: 'Scan to verify',
    allRightsReserved: 'All rights reserved.',
  },
  ru: {
    companyDescription: 'Профессиональные услуги дезинфекции и санитарной обработки. Мы обеспечиваем чистую и безопасную среду для вашего дома и бизнеса.',
    contact: 'Контакты',
    mainPhone: 'Основной',
    backupPhone: 'Резервный',
    address: 'Ташкентская область, г. Чирчик, ул. А.Темура, 22',
    license: 'Лицензия',
    licensedBusiness: 'Официально зарегистрирован',
    registrationDate: 'Дата рег.',
    scanQR: 'Сканируйте для проверки',
    allRightsReserved: 'Все права защищены.',
  },
  uz: {
    companyDescription: "Professional dezinfeksiya va sanitariya xizmatlari. Biz uyingiz va biznesingiz uchun toza va xavfsiz muhitni ta'minlaymiz.",
    contact: 'Aloqa',
    mainPhone: 'Asosiy',
    backupPhone: 'Zaxira',
    address: "Toshkent viloyati, Chirchiq shahri, A.Temur ko'chasi, 22-uy",
    license: 'Litsenziya',
    licensedBusiness: "Rasmiy ro'yxatdan o'tgan",
    registrationDate: "Ro'yxat sanasi",
    scanQR: 'Tekshirish uchun skanerlang',
    allRightsReserved: 'Barcha huquqlar himoyalangan.',
  },
};

// Get saved language or default to 'uz'
const getStoredLang = (): LangCode => {
  const lang = localStorage.getItem('lang') as LangCode | null;
  return lang && ['en', 'ru', 'uz'].includes(lang) ? lang : 'uz';
};

const currentLang = ref<LangCode>(getStoredLang());

// Watch for language changes from localStorage
const checkLang = () => {
  const lang = getStoredLang();
  if (currentLang.value !== lang) {
    currentLang.value = lang;
  }
};

// Use interval to sync with navbar language changes
let langCheckInterval: ReturnType<typeof setInterval>;

onMounted(() => {
  langCheckInterval = setInterval(checkLang, 100);
});

onUnmounted(() => {
  if (langCheckInterval) {
    clearInterval(langCheckInterval);
  }
});

// Translation function - reactive because it uses currentLang.value
const t = (key: string): string => {
  return translations[currentLang.value][key] || key;
};

const openTelegram = () => {
  window.open('https://t.me/dezenchik', '_blank');
};

const openInstagram = () => {
  window.open('https://www.instagram.com/invites/contact/?igsh=12srjy1s89w44&utm_content=o1as9xq', '_blank');
};
</script>

<style scoped lang="scss">
.app-footer {
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding: 0;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px 24px;
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 48px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

.footer-section {
  display: flex;
  flex-direction: column;
}

// Company Section
.company-section {
  .footer-brand {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  .footer-logo {
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 16px;
    padding: 8px;
    background: rgba(0, 0, 0, 0.03);
  }

  .footer-brand-text {
    font-size: 20px;
    font-weight: 800;
    color: #1a1a1a;
    letter-spacing: 0.5px;
  }

  .company-description {
    color: #666;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .social-links {
    display: flex;
    gap: 12px;
  }

  .social-btn {
    width: 40px;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &.telegram-btn {
      color: #0088cc;

      &:hover {
        background: rgba(0, 136, 204, 0.1);
        border-color: #0088cc;
      }
    }

    &.instagram-btn {
      &:hover {
        background: rgba(225, 48, 108, 0.1);
        border-color: #E1306C;
      }
    }
  }
}

// Contact Section
.contact-section {
  .section-title {
    font-size: 14px;
    font-weight: 600;
    color: #1a1a1a;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 20px;
  }

  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 16px;
    color: #666;

    .q-icon {
      margin-top: 2px;
      color: #999;
    }

    .contact-text {
      display: flex;
      flex-direction: column;
      gap: 2px;

      a {
        color: #1a1a1a;
        text-decoration: none;
        font-weight: 500;
        font-size: 14px;

        &:hover {
          color: #0088cc;
        }
      }

      span {
        font-size: 14px;
      }

      .contact-label {
        font-size: 12px;
        color: #999;
      }
    }
  }
}

// License Section
.license-section {
  .section-title {
    font-size: 14px;
    font-weight: 600;
    color: #1a1a1a;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 20px;
  }

  .license-info {
    margin-bottom: 20px;
  }

  .license-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-weight: 500;
    color: #1a1a1a;
    font-size: 14px;
  }

  .license-details {
    color: #666;
    font-size: 13px;
    line-height: 1.5;
  }

  .qr-code-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .qr-code {
    width: 80px;
    height: 80px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 4px;
    background: #fff;
  }

  .qr-label {
    font-size: 11px;
    color: #999;
  }
}

// Footer Bottom
.footer-bottom {
  margin-top: 40px;
}

.footer-divider {
  height: 1px;
  background: rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
}

.footer-bottom-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.copyright {
  color: #999;
  font-size: 13px;
  text-align: center;
}
</style>
