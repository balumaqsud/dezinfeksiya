<template>
  <q-page class="prices-page">
    <!-- Contact Section -->
    <section class="contact-section">
      <div class="contact-container">
        <div class="contact-content">
          <div class="contact-text">
            <div class="contact-icon">
              <q-icon name="support_agent" size="64px" color="primary" />
            </div>
            <h2 class="contact-title">{{ t('contactManager') }}</h2>
            <p class="contact-description">{{ t('description') }}</p>

            <div class="benefits-list">
              <div class="benefit-item">
                <q-icon name="check_circle" color="positive" size="24px" />
                <span>{{ t('benefit1') }}</span>
              </div>
              <div class="benefit-item">
                <q-icon name="check_circle" color="positive" size="24px" />
                <span>{{ t('benefit2') }}</span>
              </div>
              <div class="benefit-item">
                <q-icon name="check_circle" color="positive" size="24px" />
                <span>{{ t('benefit3') }}</span>
              </div>
              <div class="benefit-item">
                <q-icon name="check_circle" color="positive" size="24px" />
                <span>{{ t('benefit4') }}</span>
              </div>
            </div>

            <div class="contact-buttons">
              <q-btn
                unelevated
                no-caps
                size="lg"
                class="call-btn"
                icon="phone"
                :label="t('callNow')"
                @click="handleCall"
              />
              <q-btn
                outline
                no-caps
                size="lg"
                class="telegram-btn"
                icon="send"
                label="Telegram"
                @click="handleTelegram"
              />
            </div>

            <div class="working-hours">
              <q-icon name="schedule" size="20px" />
              <span>{{ t('workingHours') }}</span>
            </div>
          </div>

          <div class="contact-logo">
            <img :src="logoImage" alt="DEZ.CHIK Logo" />
          </div>
        </div>
      </div>
    </section>

    <!-- Why Contact Section -->
    <section class="why-section">
      <div class="why-container">
        <h2 class="section-title">{{ t('whyContact') }}</h2>
        <div class="reasons-grid">
          <div class="reason-card">
            <div class="reason-icon">
              <q-icon name="tune" size="40px" />
            </div>
            <h3>{{ t('reason1Title') }}</h3>
            <p>{{ t('reason1Desc') }}</p>
          </div>
          <div class="reason-card">
            <div class="reason-icon">
              <q-icon name="savings" size="40px" />
            </div>
            <h3>{{ t('reason2Title') }}</h3>
            <p>{{ t('reason2Desc') }}</p>
          </div>
          <div class="reason-card">
            <div class="reason-icon">
              <q-icon name="handshake" size="40px" />
            </div>
            <h3>{{ t('reason3Title') }}</h3>
            <p>{{ t('reason3Desc') }}</p>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import logoImage from '../assets/dislogo.jpeg';

type LangCode = 'uz' | 'ru' | 'en';

const translations: Record<LangCode, Record<string, string>> = {
  uz: {
    title: 'Narxlar',
    subtitle: 'Har bir buyurtma individual baholanadi',
    contactManager: 'Menejerimiz bilan bog\'laning!',
    description: 'Bizning xizmatlarimiz narxi ob\'ekt hajmi, zararkunanda turi va boshqa omillarga qarab belgilanadi. Eng yaxshi narx va shart-sharoitlar uchun menejerimiz bilan muzokaralar olib boring.',
    benefit1: 'Bepul maslahat',
    benefit2: 'Individual yondashuv',
    benefit3: 'Moslashuvchan narxlar',
    benefit4: 'Maxsus takliflar',
    callNow: 'Hozir qo\'ng\'iroq qiling',
    workingHours: 'Biz 24/7 ishlaymiz',
    whyContact: 'Nima uchun biz bilan bog\'lanish kerak?',
    reason1Title: 'Individual narxlar',
    reason1Desc: 'Har bir ob\'ekt uchun alohida narx - siz faqat kerakli xizmat uchun to\'laysiz.',
    reason2Title: 'Chegirmalar',
    reason2Desc: 'Doimiy mijozlar va katta buyurtmalar uchun maxsus chegirmalar.',
    reason3Title: 'Kafolat',
    reason3Desc: 'Barcha ishlarimizga 1 yilgacha kafolat beramiz.',
  },
  ru: {
    title: 'Цены',
    subtitle: 'Каждый заказ оценивается индивидуально',
    contactManager: 'Свяжитесь с нашим менеджером!',
    description: 'Стоимость наших услуг зависит от размера объекта, типа вредителей и других факторов. Для лучших цен и условий свяжитесь с нашим менеджером для переговоров.',
    benefit1: 'Бесплатная консультация',
    benefit2: 'Индивидуальный подход',
    benefit3: 'Гибкие цены',
    benefit4: 'Специальные предложения',
    callNow: 'Позвонить сейчас',
    workingHours: 'Мы работаем 24/7',
    whyContact: 'Почему стоит связаться с нами?',
    reason1Title: 'Индивидуальные цены',
    reason1Desc: 'Отдельная цена для каждого объекта - вы платите только за нужную услугу.',
    reason2Title: 'Скидки',
    reason2Desc: 'Специальные скидки для постоянных клиентов и крупных заказов.',
    reason3Title: 'Гарантия',
    reason3Desc: 'Предоставляем гарантию до 1 года на все работы.',
  },
  en: {
    title: 'Prices',
    subtitle: 'Each order is evaluated individually',
    contactManager: 'Contact our manager!',
    description: 'The cost of our services depends on the size of the facility, type of pests, and other factors. For the best prices and conditions, contact our manager for negotiation.',
    benefit1: 'Free consultation',
    benefit2: 'Individual approach',
    benefit3: 'Flexible pricing',
    benefit4: 'Special offers',
    callNow: 'Call Now',
    workingHours: 'We work 24/7',
    whyContact: 'Why contact us?',
    reason1Title: 'Individual pricing',
    reason1Desc: 'Separate price for each facility - you only pay for the service you need.',
    reason2Title: 'Discounts',
    reason2Desc: 'Special discounts for regular customers and large orders.',
    reason3Title: 'Guarantee',
    reason3Desc: 'We provide up to 1 year guarantee on all work.',
  },
};

const getStoredLang = (): LangCode => {
  const lang = localStorage.getItem('lang') as LangCode | null;
  return lang && ['en', 'ru', 'uz'].includes(lang) ? lang : 'uz';
};

const currentLang = ref<LangCode>(getStoredLang());

const checkLang = () => {
  const lang = getStoredLang();
  if (currentLang.value !== lang) {
    currentLang.value = lang;
  }
};

let langCheckInterval: ReturnType<typeof setInterval>;

onMounted(() => {
  langCheckInterval = setInterval(checkLang, 100);
});

onUnmounted(() => {
  if (langCheckInterval) {
    clearInterval(langCheckInterval);
  }
});

const t = (key: string): string => {
  return translations[currentLang.value][key] || key;
};

const handleCall = () => {
  window.location.href = 'tel:+998887697275';
};

const handleTelegram = () => {
  window.open('https://t.me/dezenchik', '_blank');
};
</script>

<style scoped lang="scss">
.prices-page {
  padding: 0 !important;
}

// Contact Section
.contact-section {
  padding: 60px 24px;
  background: #f8fafc;

  @media (max-width: 768px) {
    padding: 40px 16px;
  }
}

.contact-container {
  max-width: 1100px;
  margin: 0 auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.contact-text {
  text-align: left;

  @media (max-width: 900px) {
    text-align: center;
  }
}

.contact-icon {
  margin-bottom: 24px;
}

.contact-title {
  font-size: 32px;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 16px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
}

.contact-description {
  font-size: 17px;
  color: #555;
  line-height: 1.7;
  margin: 0 0 32px;
  max-width: 500px;
}

.contact-logo {
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 400px;
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
    object-fit: contain;
  }

  @media (max-width: 900px) {
    order: -1;

    img {
      max-height: 280px;
    }
  }
}

.benefits-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 36px;
  max-width: 300px;

  @media (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;
  }
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  text-align: left;
}

.contact-buttons {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;

  @media (max-width: 900px) {
    justify-content: center;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
}

.call-btn {
  background: #22c55e !important;
  color: #fff !important;
  font-weight: 700;
  font-size: 16px;
  padding: 14px 32px;
  border-radius: 30px;
  transition: all 0.3s ease;

  &:hover {
    background: #16a34a !important;
    transform: translateY(-2px);
  }

  .q-icon {
    margin-right: 8px;
  }
}

.telegram-btn {
  background: #0088cc !important;
  color: #fff !important;
  font-weight: 700;
  font-size: 16px;
  padding: 14px 32px;
  border-radius: 30px;
  transition: all 0.3s ease;

  &:hover {
    background: #006699 !important;
    transform: translateY(-2px);
  }

  .q-icon {
    margin-right: 8px;
  }
}

.working-hours {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 15px;
  font-weight: 500;

  @media (max-width: 900px) {
    justify-content: center;
  }
}

// Why Section
.why-section {
  padding: 60px 24px 80px;
  background: #fff;

  @media (max-width: 768px) {
    padding: 40px 16px 60px;
  }
}

.why-container {
  max-width: 1000px;
  margin: 0 auto;
}

.section-title {
  font-size: 32px;
  font-weight: 800;
  color: #1a1a1a;
  text-align: center;
  margin: 0 0 48px;

  @media (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 32px;
  }
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

.reason-card {
  background: #f8fafc;
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 20px;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 12px;
  }

  p {
    font-size: 15px;
    color: #555;
    line-height: 1.6;
    margin: 0;
  }
}

.reason-icon {
  width: 72px;
  height: 72px;
  background: linear-gradient(135deg, #4F46E5 0%, #6366F1 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: #fff;
}
</style>
