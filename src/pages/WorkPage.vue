<template>
  <q-page class="work-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-badge">{{ t('ourServices') }}</div>
        <h1 class="hero-title">{{ t('heroTitle') }}</h1>
        <p class="hero-subtitle">{{ t('heroSubtitle') }}</p>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="stats-container">
        <div class="stats-grid">
          <div class="stat-card" v-for="(stat, index) in stats" :key="index">
            <div class="stat-circle">
              <q-icon :name="stat.icon" size="36px" />
            </div>
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label">{{ t(stat.labelKey) }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services List Section - Alternating Layout -->
    <section class="services-about-section">
      <div class="services-about-container">
        <!-- Row 1: Image Left, Text Right -->
        <div class="services-row">
          <div class="services-image-side">
            <div class="services-image-card">
              <img src="../assets/dis4.jpeg" alt="Disinfection Service" />
            </div>
          </div>
          <div class="services-text-side">
            <div class="services-label">
              <q-icon name="search" size="20px" />
              <span>{{ t('inspectionLabel') }}</span>
            </div>
            <h2 class="services-row-title">{{ t('inspectionTitle') }}</h2>
            <p class="services-row-desc">{{ t('inspectionDesc') }}</p>
          </div>
        </div>

        <!-- Row 2: Text Left, Image Right -->
        <div class="services-row reverse">
          <div class="services-text-side">
            <div class="services-label">
              <q-icon name="support_agent" size="20px" />
              <span>{{ t('consultationLabel') }}</span>
            </div>
            <h2 class="services-row-title">{{ t('consultationTitle') }}</h2>
            <p class="services-row-desc">{{ t('consultationDesc') }}</p>
          </div>
          <div class="services-image-side">
            <div class="services-image-card">
              <img src="../assets/dis6.jpg" alt="Consultation Service" />
            </div>
          </div>
        </div>

        <!-- Row 3: Image Left, Text Right -->
        <div class="services-row">
          <div class="services-image-side">
            <div class="services-image-card">
              <img src="../assets/dis2.jpeg" alt="Treatment Service" />
            </div>
          </div>
          <div class="services-text-side">
            <div class="services-label">
              <q-icon name="verified_user" size="20px" />
              <span>{{ t('treatmentLabel') }}</span>
            </div>
            <h2 class="services-row-title">{{ t('treatmentTitle') }}</h2>
            <p class="services-row-desc">{{ t('treatmentDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pest Types Section -->
    <section class="pests-section">
      <div class="pests-container">
        <h2 class="section-title">{{ t('whatWeEliminate') }}</h2>
        <div class="pests-grid">
          <div class="pest-card">
            <div class="pest-icon">🪳</div>
            <span class="pest-name">{{ t('cockroach') }}</span>
          </div>
          <div class="pest-card">
            <div class="pest-icon">🐜</div>
            <span class="pest-name">{{ t('ant') }}</span>
          </div>
          <div class="pest-card">
            <div class="pest-icon">🪲</div>
            <span class="pest-name">{{ t('bedbug') }}</span>
          </div>
          <div class="pest-card">
            <div class="pest-icon">🦟</div>
            <span class="pest-name">{{ t('mosquito') }}</span>
          </div>
          <div class="pest-card">
            <div class="pest-icon">🪰</div>
            <span class="pest-name">{{ t('fly') }}</span>
          </div>
          <div class="pest-card">
            <div class="pest-icon">🐀</div>
            <span class="pest-name">{{ t('rat') }}</span>
          </div>
          <div class="pest-card">
            <div class="pest-icon">🦠</div>
            <span class="pest-name">{{ t('bacteria') }}</span>
          </div>
          <div class="pest-card">
            <div class="pest-icon">🕷️</div>
            <span class="pest-name">{{ t('flea') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
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
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

type LangCode = 'en' | 'ru' | 'uz';

const translations: Record<LangCode, Record<string, string>> = {
  uz: {
    ourServices: "BIZNING XIZMATLARIMIZ",
    heroTitle: "Professional Dezinfeksiya Xizmatlari",
    heroSubtitle: "Zararkunandalarga qarshi eng yaxshi va ishonchli xizmatlar 2 soat ichida, raqobatchilardan 35% arzon. 1 yillik kafolat, barcha hujjatlar, muhrlar va cheklar bilan.",
    whatClientsSay: "Mijozlarimiz nima deyishadi",
    testimonial1: "Juda tez va sifatli xizmat ko'rsatishdi. Tarakanlar butunlay yo'q bo'ldi. Rahmat!",
    testimonial2: "Professional jamoa, xavfsiz dorilar ishlatishadi. Bolalar va hayvonlar uchun xavfsiz.",
    testimonial3: "1 yillik kafolat berishdi va haqiqatan ham muammo qaytmadi. Tavsiya qilaman!",
    testimonial4: "Ofisimizda chumoli muammosi bor edi, bir marta ishlov berishdi va butunlay yo'q bo'ldi.",
    testimonial5: "Omborda sichqonlar bor edi. Mutaxassislar juda tez va samarali ishladilar. Minnatdorman!",
    testimonial6: "Mehmonxonamizga doimiy xizmat ko'rsatishadi. Har doim vaqtida va sifatli.",
    testimonial7: "Kloplardan azob chekyapman deb o'yladim. Bir kun ichida muammoni hal qilishdi!",
    testimonial8: "Restoranmizga oyiga bir marta profilaktika qilishadi. Hech qanday hasharot yo'q.",
    testimonial9: "Narxlari juda qulay, boshqa kompaniyalarga qaraganda ancha arzon. Sifat a'lo darajada.",
    client: "Mijoz",
    homeOwner: "Uy egasi",
    businessOwner: "Tadbirkor",
    restaurantOwner: "Restoran egasi",
    officeManager: "Ofis menejeri",
    warehouseOwner: "Ombor egasi",
    hotelOwner: "Mehmonxona egasi",
    apartmentOwner: "Kvartira egasi",
    cafeOwner: "Kafe egasi",
    completedOrders: "Bajarilgan buyurtmalar",
    yearsExperience: "Yillik tajriba",
    partners: "Hamkorlar",
    specialists: "Mutaxassislar",
    whatWeEliminate: "Nimalarni yo'q qilamiz",
    cockroach: "Tarakan",
    ant: "Chumoli",
    bedbug: "Klop (qandala)",
    mosquito: "Chivin",
    fly: "Pashsha",
    rat: "Sichqon/Kalamush",
    bacteria: "Virus va bakteriya",
    flea: "Burga",
    ourServicesList: "XIZMATLARIMIZ",
    servicesMainTitle: "Bizning Xizmatlarimiz",
    servicesMainDesc: "DEZ.CHIK kompaniyasi Toshkent va Toshkent viloyatida muvaffaqiyatli xizmat ko'rsatadi. Bizning jamoamizda 3 yildan ortiq tajribaga ega 8 nafar professional dezinfektor ishlaydi. Har bir mijozga tibbiy mutaxassis tomonidan bepul maslahat beriladi.",
    detailedService1Title: "Dezinfeksiya - Mikroorganizmlarni yo'q qilish",
    detailedService1Desc: "Viruslar, bakteriyalar va boshqa zararli mikroorganizmlarni professional uskunalar yordamida yo'q qilamiz. Sog'lom muhit yaratamiz.",
    detailedService2Title: "Dezinseksiya - Hasharotlar bilan kurash",
    detailedService2Desc: "Tarakanlar, chumolilar, kloplar, burgalar va boshqa hasharotlarni zamonaviy usullar bilan butunlay yo'q qilamiz. 1 yillik kafolat.",
    detailedService3Title: "Deratizatsiya - Kemiruvchilarni yo'q qilish",
    detailedService3Desc: "Sichqonlar va kalamushlarni xavfsiz va samarali usullar bilan yo'q qilamiz. Qaytib kelishining oldini olamiz.",
    detailedService4Title: "Akaritsid ishlov - Kanalarni yo'q qilish",
    detailedService4Desc: "Kanalar, chivinlar va pashshalarni tezkor va samarali yo'q qilamiz. Oila va uy hayvonlari uchun xavfsiz.",
    detailedService5Title: "Dezodoratsiya - Hidlarni bartaraf etish",
    detailedService5Desc: "Yoqimsiz hidlarni professional uskunalar bilan butunlay yo'q qilamiz. Toza va yoqimli muhit yaratamiz.",
    detailedService6Title: "Virus va bakteriyalarni yo'q qilish",
    detailedService6Desc: "Hidsiz preparatlar bilan qisqa muddatda ishlov beramiz. Bolalar va hayvonlar uchun mutlaqo xavfsiz.",
    featureAllObjects: "Barcha turdagi ob'ektlarda ishlaymiz - yotoqxonalar, xostellar, tijorat va davlat hududlari",
    featurePayment: "Naqd va naqdsiz to'lov usullari mavjud",
    featureContract: "Yuridik shaxslar bilan rasmiy shartnoma asosida ishlaymiz",
    servicesBadgeTitle: "DEZINFEKSIYA",
    servicesBadgeLocation: "TOSHKENT VA TOSHKENT VILOYATI",
    inspectionLabel: "Tekshirish",
    inspectionTitle: "Professional zararkunandalarni tekshirish",
    inspectionDesc: "Bizning mutaxassislarimiz mahalliy zararkunandalar turlarini bilishadi va infeksiya o'choqlarini aniqlashga o'rgatilgan, mavjud va potentsial muammolarni aniqlash, shuningdek, darhol ta'sir qiladigan eng yaxshi, eng kompleks yechimlarni taklif qilish.",
    consultationLabel: "Konsultatsiya",
    consultationTitle: "Individual ishlov berish rejalari",
    consultationDesc: "Biz sizga zararkunandalar bilan bog'liq muammoni oddiy tilda tushuntiramiz va sizning ehtiyojlaringizga mos individual yechimni ishlab chiqamiz, zararkunandalardan xalos bo'lish va ularning yil davomida qaytib kelishining oldini olish uchun.",
    treatmentLabel: "Ishlov berish",
    treatmentTitle: "Professional dezinfeksiya xizmati",
    treatmentDesc: "Professional uskunalar va xavfsiz preparatlar yordamida samarali ishlov beramiz. Barcha turdagi zararkunandalarni yo'q qilamiz va 1 yillik kafolat beramiz. Oila va uy hayvonlari uchun mutlaqo xavfsiz.",
    disinfection: "Dezinfeksiya",
    disinfectionDesc: "Mikroorganizmlarni yo'q qilish",
    disinsection: "Dezinseksiya",
    disinsectionDesc: "Hasharot-zararkunandalar bilan kurash",
    deratization: "Deratizatsiya",
    deratizationDesc: "Kemiruvchilarni yo'q qilish",
    acaricidal: "Akaritsid ishlov",
    acaricidalDesc: "Kanalar, chivinlar, pashshalarni yo'q qilish",
    deodorization: "Dezodoratsiya",
    deodorizationDesc: "Hidlarni bartaraf etish",
    virusBacteria: "Virus va bakteriyalar",
    virusBacteriaDesc: "Hidsiz va qisqa muddatda ishlov berish",
    howWeWork: "Qanday ishlaymiz",
    step1Title: "Ob'ektga chiqish",
    step1Desc: "Kvartiralar, kafelar, restoranlar, ofislarga boramiz",
    step2Title: "Tekshirish",
    step2Desc: "To'planish joylari va harakat yo'llarini qidiramiz",
    step3Title: "Dori tanlash",
    step3Desc: "Samaradorlik bo'yicha insektitsid tanlaymiz (qo'shimcha to'lovsiz)",
    step4Title: "Ishlov berish",
    step4Desc: "Professional uskunalar bilan ishlov beramiz",
    whyChooseUs: "Nega aynan biz",
    adv1Title: "Tezkor xizmat",
    adv1Desc: "Buyurtmangizga 1 soat ichida chiqamiz, haftada 7 kun, kuniga 24 soat",
    adv2Title: "Arzon narxlar",
    adv2Desc: "Raqobatchilardan 35% arzon narxlar",
    adv3Title: "Kafolat",
    adv3Desc: "1 yillik kafolat, barcha hujjatlar bilan",
    adv4Title: "Bepul maslahat",
    adv4Desc: "Tibbiy mutaxassis maslahati bepul",
    discountTitle: "Maxsus chegirmalar",
    discountText: "Pensionerlar, ko'p bolali oilalar, kam ta'minlangan oilalar va nogironlarga 20% chegirma",
    ctaTitle: "Xizmat buyurtma qiling",
    ctaText: "Bugun biz bilan bog'laning va professional dezinfeksiya xizmatidan foydalaning",
    callNow: "Hozir qo'ng'iroq qiling",
  },
  ru: {
    ourServices: "НАШИ УСЛУГИ",
    heroTitle: "Профессиональные услуги дезинфекции",
    heroSubtitle: "Лучшие и надёжные услуги по борьбе с вредителями за 2 часа на 35% дешевле конкурентов. Даём гарантию 1 год со всей документацией, печатями и чеками.",
    whatClientsSay: "Что говорят наши клиенты",
    testimonial1: "Очень быстро и качественно выполнили работу. Тараканы полностью исчезли. Спасибо!",
    testimonial2: "Профессиональная команда, используют безопасные препараты. Безопасно для детей и животных.",
    testimonial3: "Дали гарантию на 1 год и действительно проблема не вернулась. Рекомендую!",
    testimonial4: "В офисе была проблема с муравьями, обработали один раз и всё исчезло.",
    testimonial5: "На складе были мыши. Специалисты работали быстро и эффективно. Благодарю!",
    testimonial6: "Обслуживают нашу гостиницу регулярно. Всегда вовремя и качественно.",
    testimonial7: "Думала, что от клопов не избавлюсь. За один день решили проблему!",
    testimonial8: "В нашем ресторане проводят профилактику раз в месяц. Никаких насекомых.",
    testimonial9: "Цены очень доступные, намного дешевле других компаний. Качество отличное.",
    client: "Клиент",
    homeOwner: "Домовладелец",
    businessOwner: "Предприниматель",
    restaurantOwner: "Владелец ресторана",
    officeManager: "Офис-менеджер",
    warehouseOwner: "Владелец склада",
    hotelOwner: "Владелец гостиницы",
    apartmentOwner: "Владелец квартиры",
    cafeOwner: "Владелец кафе",
    completedOrders: "Выполненных заказов",
    yearsExperience: "Лет опыта",
    partners: "Партнёров",
    specialists: "Специалистов",
    whatWeEliminate: "Что мы уничтожаем",
    cockroach: "Тараканы",
    ant: "Муравьи",
    bedbug: "Клопы",
    mosquito: "Комары",
    fly: "Мухи",
    rat: "Мыши/Крысы",
    bacteria: "Вирусы и бактерии",
    flea: "Блохи",
    ourServicesList: "НАШИ УСЛУГИ",
    servicesMainTitle: "Наши Услуги",
    servicesMainDesc: "Компания DEZ.CHIK успешно оказывает услуги в Ташкенте и Ташкентской области. В нашей команде работает 8 профессиональных дезинфекторов с опытом более 3 лет. Каждому клиенту предоставляется бесплатная консультация медицинского специалиста.",
    detailedService1Title: "Дезинфекция - Уничтожение микроорганизмов",
    detailedService1Desc: "Уничтожаем вирусы, бактерии и другие вредные микроорганизмы с помощью профессионального оборудования. Создаём здоровую среду.",
    detailedService2Title: "Дезинсекция - Борьба с насекомыми",
    detailedService2Desc: "Полностью уничтожаем тараканов, муравьёв, клопов, блох и других насекомых современными методами. Гарантия 1 год.",
    detailedService3Title: "Дератизация - Уничтожение грызунов",
    detailedService3Desc: "Уничтожаем мышей и крыс безопасными и эффективными методами. Предотвращаем повторное появление.",
    detailedService4Title: "Акарицидная обработка - Уничтожение клещей",
    detailedService4Desc: "Быстро и эффективно уничтожаем клещей, комаров и мошек. Безопасно для семьи и домашних животных.",
    detailedService5Title: "Дезодорация - Устранение запахов",
    detailedService5Desc: "Полностью устраняем неприятные запахи профессиональным оборудованием. Создаём чистую и приятную среду.",
    detailedService6Title: "Уничтожение вирусов и бактерий",
    detailedService6Desc: "Обрабатываем препаратами без запаха в короткие сроки. Абсолютно безопасно для детей и животных.",
    featureAllObjects: "Работаем на всех типах объектов - общежития, хостелы, коммерческие и государственные территории",
    featurePayment: "Наличный и безналичный способы оплаты",
    featureContract: "Работаем с юридическими лицами на основании официального договора",
    servicesBadgeTitle: "ДЕЗИНФЕКЦИЯ",
    servicesBadgeLocation: "ТАШКЕНТ И ТАШКЕНТСКАЯ ОБЛАСТЬ",
    inspectionLabel: "Обследование",
    inspectionTitle: "Профессиональная проверка на вредителей",
    inspectionDesc: "Наши эксперты знают местные виды вредителей и обучены выявлять очаги заражения, обнаруживать существующие и потенциальные проблемы, а также предлагать лучшие, наиболее комплексные решения, которые начинают действовать мгновенно.",
    consultationLabel: "Консультация",
    consultationTitle: "Индивидуальные планы обработки",
    consultationDesc: "Мы объясним вашу проблему с вредителями простым языком и вместе с вами разработаем индивидуальное решение, чтобы избавиться от вредителей и не допустить их возвращения круглый год.",
    treatmentLabel: "Обработка",
    treatmentTitle: "Профессиональная дезинфекция",
    treatmentDesc: "Эффективно обрабатываем профессиональным оборудованием и безопасными препаратами. Уничтожаем все виды вредителей и даём гарантию 1 год. Абсолютно безопасно для семьи и домашних животных.",
    disinfection: "Дезинфекция",
    disinfectionDesc: "Уничтожение микроорганизмов",
    disinsection: "Дезинсекция",
    disinsectionDesc: "Борьба с насекомыми-вредителями",
    deratization: "Дератизация",
    deratizationDesc: "Уничтожение грызунов",
    acaricidal: "Акарицидная обработка",
    acaricidalDesc: "Уничтожение клещей, комаров, мошек",
    deodorization: "Дезодорация",
    deodorizationDesc: "Устранение запахов",
    virusBacteria: "Вирусы и бактерии",
    virusBacteriaDesc: "Обработка без запаха и в короткий срок",
    howWeWork: "Как мы работаем",
    step1Title: "Выезд на объект",
    step1Desc: "Квартиры, кафе, рестораны, офисы",
    step2Title: "Осмотр",
    step2Desc: "Поиск мест скопления и путей перемещения",
    step3Title: "Подбор препарата",
    step3Desc: "Подбор инсектицида по эффективности (без доплаты)",
    step4Title: "Обработка",
    step4Desc: "Обработка профессиональным оборудованием",
    whyChooseUs: "Почему выбирают нас",
    adv1Title: "Быстрый выезд",
    adv1Desc: "Выезжаем на заказ в течение 1 часа, 7 дней в неделю, 24 часа в сутки",
    adv2Title: "Выгодные цены",
    adv2Desc: "На 35% дешевле конкурентов",
    adv3Title: "Гарантия",
    adv3Desc: "1 год гарантии со всей документацией",
    adv4Title: "Бесплатная консультация",
    adv4Desc: "Консультация мед. специалиста бесплатно",
    discountTitle: "Специальные скидки",
    discountText: "Пенсионерам, многодетным семьям, малоимущим семьям и инвалидам 20% скидка",
    ctaTitle: "Заказать услугу",
    ctaText: "Свяжитесь с нами сегодня и воспользуйтесь профессиональной услугой дезинфекции",
    callNow: "Позвонить сейчас",
  },
  en: {
    ourServices: "OUR SERVICES",
    heroTitle: "Professional Disinfection Services",
    heroSubtitle: "Best and reliable pest control services in 2 hours, 35% cheaper than competitors. 1 year guarantee with all documentation, stamps and receipts.",
    whatClientsSay: "What our clients say",
    testimonial1: "Very fast and quality work. Cockroaches completely disappeared. Thank you!",
    testimonial2: "Professional team, they use safe products. Safe for children and pets.",
    testimonial3: "They gave a 1-year guarantee and the problem really didn't return. I recommend!",
    testimonial4: "We had ant problem in the office, they treated it once and everything disappeared.",
    testimonial5: "There were mice in the warehouse. Specialists worked quickly and effectively. Thank you!",
    testimonial6: "They service our hotel regularly. Always on time and with quality.",
    testimonial7: "I thought I'd never get rid of bedbugs. They solved the problem in one day!",
    testimonial8: "They do prevention in our restaurant once a month. No insects at all.",
    testimonial9: "Prices are very affordable, much cheaper than other companies. Excellent quality.",
    client: "Client",
    homeOwner: "Home Owner",
    businessOwner: "Business Owner",
    restaurantOwner: "Restaurant Owner",
    officeManager: "Office Manager",
    warehouseOwner: "Warehouse Owner",
    hotelOwner: "Hotel Owner",
    apartmentOwner: "Apartment Owner",
    cafeOwner: "Cafe Owner",
    completedOrders: "Completed Orders",
    yearsExperience: "Years Experience",
    partners: "Partners",
    specialists: "Specialists",
    whatWeEliminate: "What we eliminate",
    cockroach: "Cockroaches",
    ant: "Ants",
    bedbug: "Bedbugs",
    mosquito: "Mosquitoes",
    fly: "Flies",
    rat: "Mice/Rats",
    bacteria: "Viruses & bacteria",
    flea: "Fleas",
    ourServicesList: "OUR SERVICES",
    servicesMainTitle: "Our Services",
    servicesMainDesc: "DEZ.CHIK company successfully provides services in Tashkent and Tashkent region. Our team consists of 8 professional disinfectors with over 3 years of experience. Every client receives free consultation from a medical specialist.",
    detailedService1Title: "Disinfection - Destroying Microorganisms",
    detailedService1Desc: "We destroy viruses, bacteria and other harmful microorganisms with professional equipment. Creating a healthy environment.",
    detailedService2Title: "Disinsection - Fighting Insects",
    detailedService2Desc: "We completely eliminate cockroaches, ants, bedbugs, fleas and other insects using modern methods. 1 year guarantee.",
    detailedService3Title: "Deratization - Rodent Elimination",
    detailedService3Desc: "We eliminate mice and rats using safe and effective methods. We prevent their return.",
    detailedService4Title: "Acaricidal Treatment - Tick Elimination",
    detailedService4Desc: "We quickly and effectively eliminate ticks, mosquitoes and midges. Safe for family and pets.",
    detailedService5Title: "Deodorization - Odor Elimination",
    detailedService5Desc: "We completely eliminate unpleasant odors with professional equipment. Creating a clean and pleasant environment.",
    detailedService6Title: "Virus and Bacteria Elimination",
    detailedService6Desc: "We treat with odorless preparations in a short time. Absolutely safe for children and animals.",
    featureAllObjects: "We work on all types of objects - dormitories, hostels, commercial and government territories",
    featurePayment: "Cash and non-cash payment methods available",
    featureContract: "We work with legal entities on the basis of an official contract",
    servicesBadgeTitle: "DISINFECTION",
    servicesBadgeLocation: "TASHKENT AND TASHKENT REGION",
    inspectionLabel: "Inspection",
    inspectionTitle: "Professional pest inspection",
    inspectionDesc: "Our experts know local pest species and are trained to identify infestation hotspots, detect existing and potential problems, and offer the best, most comprehensive solutions that start working immediately.",
    consultationLabel: "Consultation",
    consultationTitle: "Individual treatment plans",
    consultationDesc: "We will explain your pest problem in simple terms and work with you to develop a customized solution to get rid of pests and prevent their return year-round.",
    treatmentLabel: "Treatment",
    treatmentTitle: "Professional disinfection service",
    treatmentDesc: "We effectively treat with professional equipment and safe preparations. We eliminate all types of pests and provide a 1-year guarantee. Absolutely safe for family and pets.",
    disinfection: "Disinfection",
    disinfectionDesc: "Destruction of microorganisms",
    disinsection: "Disinsection",
    disinsectionDesc: "Fighting insect pests",
    deratization: "Deratization",
    deratizationDesc: "Destruction of rodents",
    acaricidal: "Acaricidal Treatment",
    acaricidalDesc: "Destruction of ticks, mosquitoes, midges",
    deodorization: "Deodorization",
    deodorizationDesc: "Odor elimination",
    virusBacteria: "Viruses and Bacteria",
    virusBacteriaDesc: "Odorless treatment in short time",
    howWeWork: "How We Work",
    step1Title: "Site Visit",
    step1Desc: "Apartments, cafes, restaurants, offices",
    step2Title: "Inspection",
    step2Desc: "Finding gathering places and movement paths",
    step3Title: "Product Selection",
    step3Desc: "Selecting insecticide by effectiveness (no extra charge)",
    step4Title: "Treatment",
    step4Desc: "Treatment with professional equipment",
    whyChooseUs: "Why Choose Us",
    adv1Title: "Fast Response",
    adv1Desc: "We arrive within 1 hour, 7 days a week, 24 hours a day",
    adv2Title: "Best Prices",
    adv2Desc: "35% cheaper than competitors",
    adv3Title: "Guarantee",
    adv3Desc: "1 year guarantee with full documentation",
    adv4Title: "Free Consultation",
    adv4Desc: "Medical specialist consultation is free",
    discountTitle: "Special Discounts",
    discountText: "20% discount for pensioners, large families, low-income families and disabled people",
    ctaTitle: "Order Service",
    ctaText: "Contact us today and use our professional disinfection service",
    callNow: "Call Now",
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

const stats = [
  { icon: 'task_alt', number: '1500+', labelKey: 'completedOrders' },
  { icon: 'groups', number: '3+', labelKey: 'yearsExperience' },
  { icon: 'handshake', number: '15+', labelKey: 'partners' },
  { icon: 'engineering', number: '8', labelKey: 'specialists' },
];

const handleCall = () => {
  window.location.href = 'tel:+998887697275';
};

const handleTelegram = () => {
  window.open('https://t.me/dezenchik', '_blank');
};
</script>

<style scoped lang="scss">
.work-page {
  padding: 0 !important;
}

// Hero Section
.hero-section {
  background: linear-gradient(135deg, rgba(26, 95, 74, 0.75) 0%, rgba(45, 138, 110, 0.75) 100%),
              url('../assets/dis5.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 140px 24px 160px;
  text-align: center;
  color: #fff;
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 100px 16px 120px;
    min-height: 60vh;
    background-attachment: scroll;
  }

  @media (max-width: 480px) {
    padding: 80px 16px 100px;
    min-height: 55vh;
  }
}

.hero-container {
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}

.hero-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 10px 24px;
  border-radius: 30px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 28px;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.hero-title {
  font-size: 56px;
  font-weight: 900;
  margin-bottom: 24px;
  line-height: 1.15;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
}

.hero-subtitle {
  font-size: 20px;
  font-weight: 500;
  opacity: 0.95;
  line-height: 1.8;
  max-width: 750px;
  margin: 0 auto;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 17px;
    line-height: 1.7;
  }

  @media (max-width: 480px) {
    font-size: 15px;
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

.section-title {
  font-size: 32px;
  font-weight: 800;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 48px;

  &.light {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 32px;
  }
}

.testimonials-wrapper {
  overflow: hidden;
  margin-bottom: 32px;
}

.testimonials-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.testimonials-slide {
  min-width: 100%;
  flex-shrink: 0;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

.testimonial-card {
  padding: 32px;
  position: relative;
}

.quote-icon {
  font-size: 80px;
  font-family: Georgia, serif;
  color: #fbd5c0;
  line-height: 1;
  margin-bottom: -20px;
}

.testimonial-text {
  font-size: 16px;
  font-weight: 500;
  color: #444;
  line-height: 1.7;
  margin-bottom: 24px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-size: 16px;
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

// Stats Section
.stats-section {
  padding: 70px 24px;
  background: linear-gradient(135deg, rgba(248, 249, 250, 0.95) 0%, rgba(240, 242, 245, 0.95) 100%),
              url('../assets/dis6.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    padding: 45px 16px;
  }
}

.stats-container {
  max-width: 1000px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
}

.stat-card {
  text-align: center;
}

.stat-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #1a5f4a;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: #1a5f4a;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #7cc99e;
    transform: rotate(-45deg);
  }
}

.stat-number {
  font-size: 42px;
  font-weight: 900;
  color: #1a5f4a;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 15px;
  font-weight: 600;
  color: #666;
}

// Pests Section
.pests-section {
  padding: 70px 24px;
  background: #fff;

  @media (max-width: 768px) {
    padding: 45px 16px;
  }
}

.pests-container {
  max-width: 1200px;
  margin: 0 auto;
}

.pests-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

.pest-card {
  background: #f8f9fa;
  padding: 28px 20px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
}

.pest-icon {
  font-size: 48px;
  margin-bottom: 12px;

  @media (max-width: 600px) {
    font-size: 36px;
  }
}

.pest-name {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;

  @media (max-width: 600px) {
    font-size: 14px;
  }
}

// Services About Section - Alternating Layout
.services-about-section {
  padding: 80px 24px;
  background: #fff;

  @media (max-width: 768px) {
    padding: 50px 16px;
  }
}

.services-about-container {
  max-width: 1200px;
  margin: 0 auto;
}

.services-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  padding: 50px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }

  &.reverse {
    .services-image-side {
      order: 2;
    }
    .services-text-side {
      order: 1;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 40px 0;

    &.reverse {
      .services-image-side {
        order: 1;
      }
      .services-text-side {
        order: 2;
      }
    }
  }
}

.services-image-side {
  @media (max-width: 900px) {
    order: 1;
  }
}

.services-text-side {
  @media (max-width: 900px) {
    order: 2;
  }
}

.services-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 16px;

  .q-icon {
    color: #888;
  }
}

.services-row-title {
  font-size: 36px;
  font-weight: 900;
  color: #1a1a1a;
  margin: 0 0 20px 0;
  line-height: 1.25;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
}

.services-row-desc {
  font-size: 16px;
  font-weight: 500;
  color: #555;
  line-height: 1.8;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }
}

.services-image-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    min-height: 320px;
    max-height: 400px;

    @media (max-width: 768px) {
      min-height: 250px;
      max-height: 320px;
    }
  }
}

// How We Work Section
.how-we-work-section {
  padding: 70px 24px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.95) 100%),
              url('../assets/dis5.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    padding: 45px 16px;
  }
}

.how-we-work-container {
  max-width: 1000px;
  margin: 0 auto;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
}

.step-card {
  text-align: center;
  padding: 24px;
}

.step-number {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a5f4a 0%, #2d8a6e 100%);
  color: #fff;
  font-size: 20px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.step-title {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.step-description {
  font-size: 14px;
  font-weight: 500;
  color: #666;
  margin: 0;
}

// Advantages Section
.advantages-section {
  padding: 70px 24px;
  background: linear-gradient(135deg, rgba(26, 95, 74, 0.88) 0%, rgba(45, 138, 110, 0.88) 100%),
              url('../assets/diz6.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    padding: 45px 16px;
  }
}

.advantages-container {
  max-width: 1200px;
  margin: 0 auto;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
}

.advantage-card {
  text-align: center;
  color: #fff;
  padding: 24px;

  .q-icon {
    margin-bottom: 16px;
    opacity: 0.9;
  }

  h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.85;
    margin: 0;
    line-height: 1.6;
  }
}

// Discount Section
.discount-section {
  padding: 50px 24px;
  background: #fff8e7;

  @media (max-width: 768px) {
    padding: 35px 16px;
  }
}

.discount-container {
  max-width: 800px;
  margin: 0 auto;
}

.discount-content {
  text-align: center;
  position: relative;

  h2 {
    font-size: 28px;
    font-weight: 800;
    color: #1a1a1a;
    margin: 16px 0 12px;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 16px;
    font-weight: 500;
    color: #666;
    margin: 0;
  }

  .discount-badge {
    position: absolute;
    top: -20px;
    right: 10%;
    background: #f97316;
    color: #fff;
    font-size: 24px;
    font-weight: 900;
    padding: 12px 20px;
    border-radius: 12px;
    transform: rotate(12deg);

    @media (max-width: 600px) {
      position: static;
      display: inline-block;
      margin-top: 16px;
      transform: none;
    }
  }
}

// CTA Section
.cta-section {
  padding: 70px 24px;
  background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
  text-align: center;

  @media (max-width: 768px) {
    padding: 45px 16px;
  }
}

.cta-container {
  max-width: 700px;
  margin: 0 auto;
}

.cta-title {
  font-size: 36px;
  font-weight: 900;
  color: #fff;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
}

.cta-text {
  font-size: 18px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
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
