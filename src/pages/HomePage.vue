<template>
  <q-page class="home-page">
    <!-- Booking Modal -->
    <q-dialog v-model="showBookingModal" persistent>
      <q-card class="booking-modal">
        <q-btn
          icon="close"
          flat
          round
          dense
          v-close-popup
          class="close-btn"
        />
        <div class="booking-content">
          <!-- Logo Side -->
          <div class="booking-logo-side">
            <img :src="brandLogo" alt="DEZ.CHIK Logo" class="booking-logo" />
            <div class="discount-badge">
              <span class="discount-percent">10%</span>
              <span class="discount-text">{{ t('discountText') }}</span>
            </div>
          </div>

          <!-- Form Side -->
          <div class="booking-form-side">
            <h2 class="booking-title">{{ t('bookingTitle') }}</h2>
            <p class="booking-subtitle">{{ t('bookingSubtitle') }}</p>

            <q-form @submit="submitBooking" class="booking-form">
              <q-input
                v-model="bookingForm.name"
                :label="t('nameLabel')"
                outlined
                dense
                class="booking-input"
                :rules="[val => !!val || t('nameRequired')]"
              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>

              <q-input
                v-model="bookingForm.address"
                :label="t('addressLabel')"
                outlined
                dense
                class="booking-input"
                :rules="[val => !!val || t('addressRequired')]"
              >
                <template v-slot:prepend>
                  <q-icon name="location_on" />
                </template>
              </q-input>

              <q-input
                v-model="bookingForm.phone"
                :label="t('phoneLabel')"
                outlined
                dense
                class="booking-input"
                mask="+998 ## ### ## ##"
                unmasked-value
                :rules="[val => !!val || t('phoneRequired'), val => val.length >= 9 || t('phoneInvalid')]"
              >
                <template v-slot:prepend>
                  <q-icon name="phone" />
                </template>
              </q-input>

              <q-btn
                type="submit"
                unelevated
                no-caps
                class="book-submit-btn"
                :label="t('bookNow')"
                :loading="isSubmitting"
              />
            </q-form>
          </div>
        </div>
      </q-card>
    </q-dialog>

    <!-- Hero Banner Section -->
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              {{ t('heroTitle') }}
            </h1>
            <p class="hero-subtitle">
              {{ t('heroSubtitle') }}
            </p>
            <div class="hero-features">
              <div class="feature-item">
                <q-icon name="verified" color="white" size="20px" />
                <span>{{ t('certified') }}</span>
              </div>
              <div class="feature-item">
                <q-icon name="schedule" color="white" size="20px" />
                <span>{{ t('fastService') }}</span>
              </div>
              <div class="feature-item">
                <q-icon name="workspace_premium" color="white" size="20px" />
                <span>{{ t('guarantee') }}</span>
              </div>
            </div>
            <div class="hero-buttons">
              <q-btn
                unelevated
                no-caps
                class="reserve-btn"
                icon="calendar_month"
                :label="t('reserveService')"
                @click="openBookingModal"
              />
              <q-btn
                outline
                no-caps
                class="telegram-btn"
                icon="near_me"
                label="Telegram"
                @click="handleTelegram"
              />
            </div>
          </div>
          <div class="hero-image">
            <div class="image-container">
              <img :src="heroImage" alt="Disinfection Service" />
              <div class="image-decoration decoration-dots"></div>
              <div class="image-decoration decoration-blob"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats/Services Section -->
    <section class="services-section">
      <div class="services-container">
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">
              <q-icon name="home" size="48px" />
            </div>
            <h3 class="service-title">{{ t('serviceArea') }}</h3>
            <div class="service-divider"></div>
            <p class="service-description">{{ t('serviceAreaDesc') }}</p>
          </div>

          <div class="service-card">
            <div class="service-icon">
              <q-icon name="handshake" size="48px" />
            </div>
            <h3 class="service-title">{{ t('qualityService') }}</h3>
            <div class="service-divider"></div>
            <p class="service-description">{{ t('qualityServiceDesc') }}</p>
          </div>

          <div class="service-card">
            <div class="service-icon">
              <q-icon name="engineering" size="48px" />
            </div>
            <h3 class="service-title">{{ t('experts') }}</h3>
            <div class="service-divider"></div>
            <p class="service-description">{{ t('expertsDesc') }}</p>
          </div>

          <div class="service-card">
            <div class="service-icon">
              <q-icon name="support_agent" size="48px" />
            </div>
            <h3 class="service-title">{{ t('support') }}</h3>
            <div class="service-divider"></div>
            <p class="service-description">{{ t('supportDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="about-section">
      <div class="about-container">
        <div class="about-content">
          <div class="about-text">
            <div class="about-badge">{{ t('whoWeAre') }}</div>
            <h2 class="about-title">{{ t('ourStory') }}</h2>
            <p class="about-description">{{ t('aboutDescription') }}</p>
            <div class="about-features">
              <div class="about-feature">
                <q-icon name="check_box" color="primary" size="24px" />
                <span>{{ t('feature1') }}</span>
              </div>
              <div class="about-feature">
                <q-icon name="check_box" color="primary" size="24px" />
                <span>{{ t('feature2') }}</span>
              </div>
              <div class="about-feature">
                <q-icon name="check_box" color="primary" size="24px" />
                <span>{{ t('feature3') }}</span>
              </div>
            </div>
          </div>
          <div class="about-image">
            <div class="image-frame">
              <img :src="aboutImage" alt="Disinfection Work" />
              <div class="frame-decoration frame-green"></div>
              <div class="frame-decoration frame-orange"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Locations Section -->
    <section class="locations-section">
      <div class="locations-container">
        <h2 class="section-title">{{ t('whereWeWork') }}</h2>
        <div class="locations-grid">
          <div class="location-item">
            <q-icon name="apartment" size="32px" />
            <span>{{ t('apartment') }}</span>
          </div>
          <div class="location-item">
            <q-icon name="house" size="32px" />
            <span>{{ t('house') }}</span>
          </div>
          <div class="location-item">
            <q-icon name="business" size="32px" />
            <span>{{ t('office') }}</span>
          </div>
          <div class="location-item">
            <q-icon name="storefront" size="32px" />
            <span>{{ t('shop') }}</span>
          </div>
          <div class="location-item">
            <q-icon name="restaurant" size="32px" />
            <span>{{ t('kitchen') }}</span>
          </div>
          <div class="location-item">
            <q-icon name="warehouse" size="32px" />
            <span>{{ t('warehouse') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="testimonials-container">
        <h2 class="section-title">{{ t('testimonialsTitle') }}</h2>
        <div class="testimonials-wrapper">
          <div class="testimonials-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div class="testimonials-slide" v-for="(slideGroup, slideIndex) in testimonialSlides" :key="slideIndex">
              <div class="testimonials-grid">
                <div class="testimonial-card" v-for="(testimonial, index) in slideGroup" :key="index">
                  <div class="quote-icon">"</div>
                  <p class="testimonial-text">{{ t(testimonial.textKey) }}</p>
                  <div class="testimonial-author">
                    <div class="author-avatar">
                      <q-icon :name="testimonial.icon" size="24px" />
                    </div>
                    <div class="author-info">
                      <span class="author-name">{{ testimonial.name }}</span>
                      <span class="author-role">{{ t(testimonial.roleKey) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="testimonial-nav">
          <q-btn round flat icon="chevron_left" class="nav-btn" @click="prevSlide" :disable="currentSlide === 0" />
          <q-btn round flat icon="chevron_right" class="nav-btn" @click="nextSlide" :disable="currentSlide >= testimonialSlides.length - 1" />
        </div>
        <div class="testimonial-dots">
          <span
            v-for="(_, index) in testimonialSlides"
            :key="index"
            class="dot"
            :class="{ active: currentSlide === index }"
            @click="goToSlide(index)"
          ></span>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <div class="cta-content">
          <h2 class="cta-title">{{ t('ctaTitle') }}</h2>
          <p class="cta-text">{{ t('ctaText') }}</p>
          <div class="cta-buttons">
            <q-btn
              unelevated
              no-caps
              class="cta-btn primary"
              icon="phone"
              :label="t('callNow')"
              @click="handleCall"
            />
            <q-btn
              unelevated
              no-caps
              class="cta-btn secondary"
              icon="near_me"
              label="Telegram"
              @click="handleTelegram"
            />
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, reactive } from 'vue';
import { useQuasar } from 'quasar';
import aboutImage from '../assets/dis2.jpeg';
import heroImage from '../assets/dis4.jpeg';
import brandLogo from '../assets/logo.png';
import { sendBookingToTelegram, openTelegramWithMessage } from '../utils/telegram';

const $q = useQuasar();

// Booking modal state
const showBookingModal = ref(false);
const isSubmitting = ref(false);
const bookingForm = reactive({
  name: '',
  address: '',
  phone: ''
});

const openBookingModal = () => {
  showBookingModal.value = true;
};

const submitBooking = async () => {
  isSubmitting.value = true;

  try {
    // Send booking data to Telegram
    const result = await sendBookingToTelegram({
      name: bookingForm.name,
      address: bookingForm.address,
      phone: bookingForm.phone
    });

    if (result.success) {
      showBookingModal.value = false;

      // Show success notification
      $q.notify({
        type: 'positive',
        message: t('bookingSuccess'),
        position: 'top',
        timeout: 4000,
        icon: 'check_circle'
      });

      // Reset form
      bookingForm.name = '';
      bookingForm.address = '';
      bookingForm.phone = '';
    } else {
      // If bot API fails, fallback to opening Telegram directly
      openTelegramWithMessage({
        name: bookingForm.name,
        address: bookingForm.address,
        phone: bookingForm.phone
      });

      showBookingModal.value = false;

      // Reset form
      bookingForm.name = '';
      bookingForm.address = '';
      bookingForm.phone = '';
    }
  } catch (error) {
    console.error('Booking submission error:', error);

    // Fallback: Open Telegram directly with message
    openTelegramWithMessage({
      name: bookingForm.name,
      address: bookingForm.address,
      phone: bookingForm.phone
    });

    showBookingModal.value = false;

    $q.notify({
      type: 'info',
      message: t('bookingTelegramRedirect'),
      position: 'top',
      timeout: 3000
    });
  } finally {
    isSubmitting.value = false;
  }
};

// Carousel state
const currentSlide = ref(0);

const allTestimonials = [
  { textKey: 'testimonial1', name: 'Aziz Karimov', roleKey: 'homeOwner', icon: 'person' },
  { textKey: 'testimonial2', name: 'Dilnoza Rashidova', roleKey: 'businessOwner', icon: 'person' },
  { textKey: 'testimonial3', name: 'Rustam Aliyev', roleKey: 'restaurantOwner', icon: 'person' },
  { textKey: 'testimonial4', name: 'Nodira Saidova', roleKey: 'officeManager', icon: 'person' },
  { textKey: 'testimonial5', name: 'Jamshid Tursunov', roleKey: 'warehouseOwner', icon: 'person' },
  { textKey: 'testimonial6', name: 'Gulnora Mirzayeva', roleKey: 'hotelOwner', icon: 'person' },
  { textKey: 'testimonial7', name: 'Sardor Yusupov', roleKey: 'apartmentOwner', icon: 'person' },
  { textKey: 'testimonial8', name: 'Madina Ergasheva', roleKey: 'cafeOwner', icon: 'person' },
  { textKey: 'testimonial9', name: 'Bekzod Rahimov', roleKey: 'businessOwner', icon: 'person' },
];

// Group testimonials into slides of 2
const testimonialSlides = computed(() => {
  const slides = [];
  for (let i = 0; i < allTestimonials.length; i += 2) {
    slides.push(allTestimonials.slice(i, i + 2));
  }
  return slides;
});

const nextSlide = () => {
  if (currentSlide.value < testimonialSlides.value.length - 1) {
    currentSlide.value++;
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  }
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
};

// Language system - synced with navbar
type LangCode = 'en' | 'ru' | 'uz';

const translations: Record<LangCode, Record<string, string>> = {
  uz: {
    heroTitle: "Professional Dezinfeksiya Xizmatlari",
    heroSubtitle: "Hasharotlar va zararkunandalarga qarshi ishonchli yechim! Tez, sifatli va kafolat bilan amalga oshiramiz.",
    certified: "Sertifikatlangan dorilar",
    fastService: "Tezkor xizmat",
    guarantee: "Kafolat beriladi",
    reserveService: "Xizmat buyurtma qilish",
    // Booking modal
    bookingTitle: "Xizmatni Buyurtma Qiling",
    bookingSubtitle: "Ma'lumotlaringizni qoldiring, biz siz bilan bog'lanamiz!",
    discountText: "Chegirma",
    nameLabel: "Ismingiz",
    addressLabel: "Manzilingiz",
    phoneLabel: "Telefon raqamingiz",
    nameRequired: "Ism kiritish majburiy",
    addressRequired: "Manzil kiritish majburiy",
    phoneRequired: "Telefon raqam kiritish majburiy",
    phoneInvalid: "Telefon raqam noto'g'ri",
    bookNow: "Buyurtma berish",
    bookingSuccess: "Buyurtmangiz qabul qilindi! Tez orada siz bilan bog'lanamiz.",
    bookingTelegramRedirect: "Telegram orqali buyurtma yuborilmoqda...",
    serviceArea: "Butun O'zbekiston bo'ylab",
    serviceAreaDesc: "Mamlakatning barcha hududlarida keng ko'lamli xizmatlar ko'rsatamiz.",
    qualityService: "Sifatli xizmat",
    qualityServiceDesc: "Har bir mijozga individual yondashuv, barcha nuanslarni hisobga olamiz.",
    experts: "Tajribali mutaxassislar",
    expertsDesc: "Bizning ekspertlar jamoasi sizga eng yaxshi xizmatni taklif qiladi.",
    support: "24/7 Qo'llab-quvvatlash",
    supportDesc: "Onlayn rejalashtirish va kunlik mijozlarga xizmat ko'rsatish.",
    whoWeAre: "BIZ HAQIMIZDA",
    ourStory: "Bizning Tarixmiz",
    aboutDescription: "DEZ.CHIK kompaniyasi Toshkent va Toshkent viloyatida muvaffaqiyatli xizmat ko'rsatadi. Bizning jamoamizda 3 yildan ortiq tajribaga ega 20 nafar professional dezinfektor ishlaydi. Har bir mijozga tibbiy mutaxassis tomonidan bepul maslahat beriladi.",
    feature1: "Barcha turdagi ob'ektlarda ishlaymiz - yotoqxonalar, xostellar, tijorat va davlat hududlari",
    feature2: "Naqd va naqdsiz to'lov usullari mavjud",
    feature3: "Yuridik shaxslar bilan rasmiy shartnoma asosida ishlaymiz",
    whereWeWork: "Qayerda ishlaymiz",
    apartment: "Kvartira",
    house: "Uy",
    office: "Ofis",
    shop: "Do'kon",
    kitchen: "Oshxona",
    warehouse: "Ombor",
    ctaTitle: "Zararkunandalardan xalos bo'ling!",
    ctaText: "Bugun biz bilan bog'laning va professional dezinfeksiya xizmatidan foydalaning.",
    callNow: "Hozir qo'ng'iroq qiling",
    testimonialsTitle: "Mijozlarimiz nima deyishadi",
    testimonial1: "Juda tez va sifatli xizmat ko'rsatishdi. Tarakanlar butunlay yo'q bo'ldi. Rahmat!",
    testimonial2: "Professional jamoa, xavfsiz dorilar ishlatishadi. Bolalar va hayvonlar uchun xavfsiz.",
    testimonial3: "1 yillik kafolat berishdi va haqiqatan ham muammo qaytmadi. Tavsiya qilaman!",
    testimonial4: "Ofisimizda chumoli muammosi bor edi, bir marta ishlov berishdi va butunlay yo'q bo'ldi.",
    testimonial5: "Omborda sichqonlar bor edi. Mutaxassislar juda tez va samarali ishladilar. Minnatdorman!",
    testimonial6: "Mehmonxonamizga doimiy xizmat ko'rsatishadi. Har doim vaqtida va sifatli.",
    testimonial7: "Kloplardan azob chekyapman deb o'yladim. Bir kun ichida muammoni hal qilishdi!",
    testimonial8: "Restoranmizga oyiga bir marta profilaktika qilishadi. Hech qanday hasharot yo'q.",
    testimonial9: "Narxlari juda qulay, boshqa kompaniyalarga qaraganda ancha arzon. Sifat a'lo darajada.",
    homeOwner: "Uy egasi",
    businessOwner: "Tadbirkor",
    restaurantOwner: "Restoran egasi",
    officeManager: "Ofis menejeri",
    warehouseOwner: "Ombor egasi",
    hotelOwner: "Mehmonxona egasi",
    apartmentOwner: "Kvartira egasi",
    cafeOwner: "Kafe egasi",
  },
  ru: {
    heroTitle: "Профессиональные услуги дезинфекции",
    heroSubtitle: "Надежное решение против насекомых и вредителей! Выполняем быстро, качественно и с гарантией.",
    certified: "Сертифицированные препараты",
    fastService: "Быстрый сервис",
    guarantee: "Гарантия качества",
    reserveService: "Заказать услугу",
    // Booking modal
    bookingTitle: "Заказать услугу",
    bookingSubtitle: "Оставьте свои данные, мы свяжемся с вами!",
    discountText: "Скидка",
    nameLabel: "Ваше имя",
    addressLabel: "Ваш адрес",
    phoneLabel: "Ваш телефон",
    nameRequired: "Имя обязательно",
    addressRequired: "Адрес обязательно",
    phoneRequired: "Телефон обязательно",
    phoneInvalid: "Неверный номер телефона",
    bookNow: "Заказать",
    bookingSuccess: "Ваш заказ принят! Мы скоро свяжемся с вами.",
    bookingTelegramRedirect: "Перенаправление в Telegram...",
    serviceArea: "По всему Узбекистану",
    serviceAreaDesc: "Мы охватываем все регионы страны, предоставляя широкий спектр услуг.",
    qualityService: "Качественный сервис",
    qualityServiceDesc: "Индивидуальная программа заботы, учитывая все нюансы вашего пространства.",
    experts: "Опытные специалисты",
    expertsDesc: "Наша команда экспертов постоянно совершенствуется, чтобы предложить вам лучшее.",
    support: "Поддержка 24/7",
    supportDesc: "Онлайн-планирование и круглосуточная клиентская поддержка.",
    whoWeAre: "О НАС",
    ourStory: "Наша История",
    aboutDescription: "Компания DEZ.CHIK успешно предоставляет свои услуги в Ташкенте и Ташкентской области. На нашу компанию работают 20 профессиональных дезинфекторов с опытом работы от 3 лет. Каждому клиенту предоставляется бесплатная консультация мед. специалиста.",
    feature1: "Работа на любых объектах - от общежитий и хостелов до коммерческих и государственных территорий",
    feature2: "Возможна оплата как наличным, так и безналичным расчетом",
    feature3: "Работаем с юридическими лицами на основе официального договора",
    whereWeWork: "Где мы работаем",
    apartment: "Квартира",
    house: "Дом",
    office: "Офис",
    shop: "Магазин",
    kitchen: "Кухня",
    warehouse: "Склад",
    ctaTitle: "Избавьтесь от вредителей!",
    ctaText: "Свяжитесь с нами сегодня и воспользуйтесь профессиональной услугой дезинфекции.",
    callNow: "Позвонить сейчас",
    testimonialsTitle: "Что говорят наши клиенты",
    testimonial1: "Очень быстро и качественно выполнили работу. Тараканы полностью исчезли. Спасибо!",
    testimonial2: "Профессиональная команда, используют безопасные препараты. Безопасно для детей и животных.",
    testimonial3: "Дали гарантию на 1 год и действительно проблема не вернулась. Рекомендую!",
    testimonial4: "В офисе была проблема с муравьями, обработали один раз и всё исчезло.",
    testimonial5: "На складе были мыши. Специалисты работали быстро и эффективно. Благодарю!",
    testimonial6: "Обслуживают нашу гостиницу регулярно. Всегда вовремя и качественно.",
    testimonial7: "Думала, что от клопов не избавлюсь. За один день решили проблему!",
    testimonial8: "В нашем ресторане проводят профилактику раз в месяц. Никаких насекомых.",
    testimonial9: "Цены очень доступные, намного дешевле других компаний. Качество отличное.",
    homeOwner: "Домовладелец",
    businessOwner: "Предприниматель",
    restaurantOwner: "Владелец ресторана",
    officeManager: "Офис-менеджер",
    warehouseOwner: "Владелец склада",
    hotelOwner: "Владелец гостиницы",
    apartmentOwner: "Владелец квартиры",
    cafeOwner: "Владелец кафе",
  },
  en: {
    heroTitle: "Professional Disinfection Services",
    heroSubtitle: "Reliable solution against insects and pests! We perform fast, quality work with guarantee.",
    certified: "Certified products",
    fastService: "Fast service",
    guarantee: "Guaranteed results",
    reserveService: "Book Service",
    // Booking modal
    bookingTitle: "Book Our Service",
    bookingSubtitle: "Leave your details and get 10% discount!",
    discountText: "Discount",
    nameLabel: "Your Name",
    addressLabel: "Your Address",
    phoneLabel: "Your Phone",
    nameRequired: "Name is required",
    addressRequired: "Address is required",
    phoneRequired: "Phone is required",
    phoneInvalid: "Invalid phone number",
    bookNow: "Book Now",
    bookingSuccess: "Your booking has been received! We will contact you soon.",
    bookingTelegramRedirect: "Redirecting to Telegram...",
    serviceArea: "All across Uzbekistan",
    serviceAreaDesc: "We cover all regions of the country, providing a wide range of services.",
    qualityService: "Quality Service",
    qualityServiceDesc: "Individual care program, taking into account all the nuances of your space.",
    experts: "Experienced Specialists",
    expertsDesc: "Our team of experts constantly improves to offer you the best.",
    support: "24/7 Support",
    supportDesc: "Online planning and round-the-clock customer support.",
    whoWeAre: "WHO WE ARE",
    ourStory: "Our Story",
    aboutDescription: "DEZ.CHIK company successfully provides its services in Tashkent and Tashkent region. Our company employs 20 professional disinfectors with over 3 years of experience. Each client receives a free consultation from a medical specialist.",
    feature1: "Work at any facility - from dormitories and hostels to commercial and government areas",
    feature2: "Payment available in both cash and non-cash",
    feature3: "We work with legal entities based on official contracts",
    whereWeWork: "Where we work",
    apartment: "Apartment",
    house: "House",
    office: "Office",
    shop: "Shop",
    kitchen: "Kitchen",
    warehouse: "Warehouse",
    ctaTitle: "Get rid of pests!",
    ctaText: "Contact us today and use our professional disinfection service.",
    callNow: "Call Now",
    testimonialsTitle: "What our clients say",
    testimonial1: "Very fast and quality work. Cockroaches completely disappeared. Thank you!",
    testimonial2: "Professional team, they use safe products. Safe for children and pets.",
    testimonial3: "They gave a 1-year guarantee and the problem really didn't return. I recommend!",
    testimonial4: "We had ant problem in the office, they treated it once and everything disappeared.",
    testimonial5: "There were mice in the warehouse. Specialists worked quickly and effectively. Thank you!",
    testimonial6: "They service our hotel regularly. Always on time and with quality.",
    testimonial7: "I thought I'd never get rid of bedbugs. They solved the problem in one day!",
    testimonial8: "They do prevention in our restaurant once a month. No insects at all.",
    testimonial9: "Prices are very affordable, much cheaper than other companies. Excellent quality.",
    homeOwner: "Home Owner",
    businessOwner: "Business Owner",
    restaurantOwner: "Restaurant Owner",
    officeManager: "Office Manager",
    warehouseOwner: "Warehouse Owner",
    hotelOwner: "Hotel Owner",
    apartmentOwner: "Apartment Owner",
    cafeOwner: "Cafe Owner",
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
.home-page {
  padding: 0 !important;
}

// Booking Modal Styles
.booking-modal {
  border-radius: 24px;
  overflow: hidden;
  max-width: 800px;
  width: 95vw;
  position: relative;

  @media (max-width: 600px) {
    max-width: 100%;
    margin: 8px;
    border-radius: 20px;
  }
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.1) !important;

  &:hover {
    background: rgba(0, 0, 0, 0.2) !important;
  }
}

.booking-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  min-height: 450px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
}

.booking-logo-side {
  background: linear-gradient(135deg, #f8d9c4 0%, #fce8dd 50%, #fff5f0 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 30px;
  position: relative;

  @media (max-width: 700px) {
    padding: 30px 20px;
  }
}

.booking-logo {
  width: 180px;
  height: auto;
  object-fit: contain;
  margin-bottom: 24px;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));

  @media (max-width: 700px) {
    width: 120px;
    margin-bottom: 16px;
  }
}

.discount-badge {
  background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
  color: #fff;
  padding: 16px 28px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);

  @media (max-width: 700px) {
    padding: 12px 20px;
  }
}

.discount-percent {
  display: block;
  font-size: 42px;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 4px;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 700px) {
    font-size: 32px;
  }
}

.discount-text {
  display: block;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0.9;

  @media (max-width: 700px) {
    font-size: 12px;
  }
}

.booking-form-side {
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 700px) {
    padding: 30px 24px;
  }
}

.booking-title {
  font-size: 28px;
  font-weight: 900;
  color: #1a1a1a;
  margin: 0 0 8px 0;

  @media (max-width: 700px) {
    font-size: 24px;
  }
}

.booking-subtitle {
  font-size: 15px;
  color: #666;
  margin: 0 0 28px 0;
  font-weight: 500;

  @media (max-width: 700px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
}

.booking-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.booking-input {
  :deep(.q-field__control) {
    border-radius: 12px;
  }

  :deep(.q-field__prepend) {
    color: #4F46E5;
  }
}

.book-submit-btn {
  background: linear-gradient(135deg, #4F46E5 0%, #6366F1 100%) !important;
  color: #fff !important;
  font-weight: 700;
  font-size: 16px;
  padding: 14px 28px;
  border-radius: 12px;
  margin-top: 8px;
  box-shadow: 0 4px 16px rgba(79, 70, 229, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(79, 70, 229, 0.4);
  }
}

// Hero Section
.hero-section {
  background: linear-gradient(135deg, #4F46E5 0%, #6366F1 50%, #818CF8 100%);
  min-height: 585px;
  padding: 40px 24px 55px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  @media (max-width: 768px) {
    min-height: auto;
    padding: 30px 16px 45px;
  }
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.hero-text {
  color: #fff;
}

.hero-title {
  font-size: 48px;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 20px;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
}

.hero-subtitle {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 28px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
}

.hero-features {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 32px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 10px 16px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;

  .q-icon {
    -webkit-text-stroke: 0.5px currentColor;
  }
}

.hero-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.reserve-btn {
  background: #fff !important;
  color: #4F46E5 !important;
  font-weight: 700;
  font-size: 16px;
  padding: 14px 28px;
  border-radius: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);
  }

  .q-icon {
    margin-right: 8px;
  }
}

.telegram-btn {
  color: #fff !important;
  border-color: rgba(255, 255, 255, 0.5) !important;
  font-weight: 700;
  font-size: 16px;
  padding: 14px 28px;
  border-radius: 30px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1) !important;
    border-color: #fff !important;
  }

  .q-icon {
    margin-right: 8px;
  }
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    order: -1;
  }
}

.image-container {
  position: relative;
  width: 100%;
  max-width: 450px;

  img {
    width: 100%;
    height: auto;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    object-fit: cover;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  }

  .decoration-dots {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 80px;
    height: 80px;
    background-image: radial-gradient(#FFA500 3px, transparent 3px);
    background-size: 15px 15px;

    @media (max-width: 768px) {
      width: 50px;
      height: 50px;
      top: -10px;
      right: -10px;
    }
  }

  .decoration-blob {
    position: absolute;
    bottom: -30px;
    left: 10%;
    width: 200px;
    height: 60px;
    background: #F43F5E;
    border-radius: 50px;
    z-index: -1;

    @media (max-width: 768px) {
      width: 120px;
      height: 40px;
      bottom: -20px;
    }
  }
}

// Services Section
.services-section {
  padding: 70px 24px;
  background: #f8f9fa;

  @media (max-width: 768px) {
    padding: 45px 16px;
  }
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.service-card {
  text-align: center;
  padding: 32px 24px;
  border-radius: 16px;
  transition: all 0.3s ease;
  background: #fff;

  &:hover {
    background: #fff;
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
}

.service-icon {
  margin-bottom: 20px;
  color: #1a1a1a;

  .q-icon {
    -webkit-text-stroke: 0.5px currentColor;
  }
}

.service-title {
  font-size: 20px;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 12px;
}

.service-divider {
  width: 40px;
  height: 3px;
  background: #F97316;
  margin: 0 auto 16px;
  border-radius: 2px;
}

.service-description {
  font-size: 15px;
  font-weight: 500;
  color: #666;
  line-height: 1.6;
}

// About Section
.about-section {
  padding: 70px 24px;
  background: #fff;

  @media (max-width: 768px) {
    padding: 45px 16px;
  }
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.about-badge {
  display: inline-block;
  color: #1a5f4a;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 12px;
}

.about-title {
  font-size: 42px;
  font-weight: 900;
  color: #1a1a1a;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
}

.about-description {
  font-size: 16px;
  font-weight: 500;
  color: #555;
  line-height: 1.7;
  margin-bottom: 28px;
}

.about-features {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.about-feature {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 15px;
  font-weight: 500;
  color: #444;

  .q-icon {
    flex-shrink: 0;
    margin-top: 2px;
    color: #1a5f4a;
  }
}

.about-image {
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    order: -1;
  }
}

.image-frame {
  position: relative;
  max-width: 400px;

  img {
    width: 100%;
    border-radius: 8px;
    position: relative;
    z-index: 2;
  }

  .frame-decoration {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 3px solid;
    border-radius: 8px;

    &.frame-green {
      top: -15px;
      right: -15px;
      border-color: #1a5f4a;
      z-index: 1;
    }

    &.frame-orange {
      bottom: -15px;
      left: -15px;
      border-color: #f97316;
      z-index: 0;
    }
  }
}

.section-title {
  font-size: 32px;
  font-weight: 800;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 32px;
  }
}

// Locations Section
.locations-section {
  padding: 70px 24px;
  background: #f5f6f8;

  @media (max-width: 768px) {
    padding: 45px 16px;
  }
}

.locations-container {
  max-width: 1000px;
  margin: 0 auto;
}

.locations-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.location-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px 16px;
  background: #f8f9fa;
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: #4F46E5;
    color: #fff;

    .q-icon {
      color: #fff;
    }
  }

  .q-icon {
    color: #4F46E5;
    transition: color 0.3s ease;
    -webkit-text-stroke: 0.5px currentColor;
  }

  span {
    font-size: 15px;
    font-weight: 700;
    text-align: center;
  }
}

// Testimonials Section
.testimonials-section {
  padding: 70px 24px;
  background: #fff;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 45px 16px;
  }
}

.testimonials-container {
  max-width: 1200px;
  margin: 0 auto;
}

.testimonials-wrapper {
  overflow: hidden;
  margin-bottom: 32px;
  position: relative;
}

.testimonials-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  will-change: transform;
}

.testimonials-slide {
  min-width: 100%;
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 0 8px;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;

    // Show only one card per slide on mobile
    .testimonial-card:nth-child(2) {
      display: none;
    }
  }
}

.testimonial-card {
  padding: 28px;
  position: relative;
  background: #fafafa;
  border-radius: 16px;
  border: 1px solid #eee;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
}

.quote-icon {
  font-size: 60px;
  font-family: Georgia, serif;
  color: #fbd5c0;
  line-height: 1;
  margin-bottom: -10px;
  flex-shrink: 0;
}

.testimonial-text {
  font-size: 15px;
  font-weight: 500;
  color: #444;
  line-height: 1.7;
  margin-bottom: 20px;
  flex-grow: 1;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  flex-shrink: 0;
}

.author-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  flex-shrink: 0;
}

.author-info {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.author-name {
  font-size: 15px;
  font-weight: 700;
  color: #1a1a1a;
}

.author-role {
  font-size: 13px;
  color: #888;
}

.testimonial-nav {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 0;
}

.nav-btn {
  border: 2px solid #1a5f4a !important;
  color: #1a5f4a !important;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: #1a5f4a !important;
    color: #fff !important;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
}

.testimonial-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ddd;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #aaa;
  }

  &.active {
    background: #1a5f4a;
    transform: scale(1.2);
  }
}

// CTA Section
.cta-section {
  padding: 70px 24px;
  background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);

  @media (max-width: 768px) {
    padding: 45px 16px;
  }
}

.cta-container {
  max-width: 800px;
  margin: 0 auto;
}

.cta-content {
  text-align: center;
  color: #fff;
}

.cta-title {
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
}

.cta-text {
  font-size: 18px;
  font-weight: 500;
  opacity: 0.85;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-btn {
  font-weight: 700;
  font-size: 16px;
  padding: 14px 32px;
  border-radius: 30px;
  transition: all 0.3s ease;

  .q-icon {
    margin-right: 8px;
  }

  &.primary {
    background: linear-gradient(135deg, #34C759 0%, #30D158 100%) !important;
    color: #fff !important;
    box-shadow: 0 4px 20px rgba(52, 199, 89, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 24px rgba(52, 199, 89, 0.4);
    }
  }

  &.secondary {
    background: linear-gradient(135deg, #0088cc 0%, #229ED9 100%) !important;
    color: #fff !important;
    box-shadow: 0 4px 20px rgba(0, 136, 204, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 24px rgba(0, 136, 204, 0.4);
    }
  }
}
</style>
