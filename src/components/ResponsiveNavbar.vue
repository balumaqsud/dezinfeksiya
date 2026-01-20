<template>
  <header class="responsive-navbar sticky-navbar">
    <!-- Desktop Navbar -->
    <nav class="navbar-desktop">
      <div class="navbar-content">
        <!-- Logo/Icon -->
        <router-link to="/home" class="navbar-brand">
          <div class="navbar-logo">
            <img :src="logoImage" alt="Logo" class="logo-image" />
          </div>
          <div class="brand-text">DEZ.CHIK</div>
        </router-link>

        <!-- Navigation Links -->
        <div class="navbar-links">
          <q-btn
            flat
            no-caps
            class="nav-link"
            :class="{ active: $route.name === 'home' }"
            :label="t('home')"
            to="/home"
          />
          <q-btn
            flat
            no-caps
            class="nav-link"
            :class="{ active: $route.name === 'work' }"
            :label="t('work')"
            to="/work"
          />
          <q-btn
            flat
            no-caps
            class="nav-link"
            :class="{ active: $route.name === 'prices' }"
            :label="t('prices')"
            to="/prices"
          />
        </div>

        <!-- Action Buttons -->
        <div class="navbar-actions">
          <!-- Language Selector -->
          <q-btn-dropdown
            flat
            dense
            no-caps
            class="lang-btn"
            :label="currentLangLabel"
            content-class="lang-dropdown"
          >
            <q-list dense padding class="lang-list">
              <q-item
                v-for="lang in languages"
                :key="lang.code"
                clickable
                v-close-popup
                @click="setLanguage(lang.code)"
                :active="currentLang === lang.code"
                dense
                class="lang-item"
              >
                <q-item-section side class="lang-item-flag">
                  <span class="lang-flag-small">{{ lang.flag }}</span>
                </q-item-section>
                <q-item-section class="lang-item-text">
                  {{ lang.shortName }}
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <q-btn
            flat
            no-caps
            class="action-btn telegram-btn"
            icon="near_me"
            :label="t('telegram')"
            @click="handleTelegram"
          />
          <q-btn
            flat
            no-caps
            class="action-btn call-btn"
            icon="phone"
            :label="t('call')"
            @click="handleCall"
          />
        </div>
      </div>
    </nav>

    <!-- Mobile Navbar -->
    <nav class="navbar-mobile">
      <div class="mobile-header">
        <router-link to="/home" class="navbar-brand">
          <div class="navbar-logo">
            <img :src="logoImage" alt="Logo" class="logo-image" />
          </div>
          <div class="brand-text">DEZ.CHIK</div>
        </router-link>
        <q-btn
          flat
          round
          dense
          :icon="menuOpen ? 'close' : 'menu'"
          @click="toggleMenu"
          class="menu-toggle"
        />
      </div>

      <!-- Mobile Dropdown Menu -->
      <transition name="slide-down">
        <div v-if="menuOpen" class="mobile-menu">
          <q-btn
            flat
            no-caps
            class="mobile-nav-link"
            :class="{ active: $route.name === 'home' }"
            :label="t('home')"
            to="/home"
            @click="closeMenu"
          />
          <q-btn
            flat
            no-caps
            class="mobile-nav-link"
            :class="{ active: $route.name === 'work' }"
            :label="t('work')"
            to="/work"
            @click="closeMenu"
          />
          <q-btn
            flat
            no-caps
            class="mobile-nav-link"
            :class="{ active: $route.name === 'prices' }"
            :label="t('prices')"
            to="/prices"
            @click="closeMenu"
          />

          <!-- Mobile Language Selector -->
          <div class="mobile-lang-selector">
            <q-btn
              v-for="lang in languages"
              :key="lang.code"
              flat
              no-caps
              dense
              class="mobile-lang-btn"
              :class="{ active: currentLang === lang.code }"
              @click="setLanguage(lang.code); closeMenu()"
            >
              <span class="lang-flag">{{ lang.flag }}</span>
              <span class="lang-code">{{ lang.shortName }}</span>
            </q-btn>
          </div>

          <div class="mobile-actions">
            <q-btn
              flat
              no-caps
              class="action-btn telegram-btn"
              icon="near_me"
              :label="t('telegram')"
              @click="handleTelegram"
            />
            <q-btn
              flat
              no-caps
              class="action-btn call-btn"
              icon="phone"
              :label="t('call')"
              @click="handleCall"
            />
          </div>
        </div>
      </transition>

      <!-- Copy Notification -->
      <q-banner
        v-if="showNotification"
        class="copy-notification"
        rounded
      >
        <template v-slot:avatar>
          <q-icon name="check_circle" color="positive" />
        </template>
        Copied ✔
        <template v-slot:action>
          <q-btn
            flat
            dense
            icon="close"
            @click="showNotification = false"
          />
        </template>
      </q-banner>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import logoImage from '../assets/logo.png';

const menuOpen = ref(false);
const showNotification = ref(false);

// Language system
type LangCode = 'en' | 'ru' | 'uz';

const translations: Record<LangCode, Record<string, string>> = {
  en: {
    home: 'Home',
    work: 'Work',
    prices: 'Prices',
    telegram: 'Telegram',
    call: 'Call',
  },
  ru: {
    home: 'Главная',
    work: 'Услуги',
    prices: 'Цены',
    telegram: 'Telegram',
    call: 'Позвонить',
  },
  uz: {
    home: 'Bosh sahifa',
    work: 'Xizmatlar',
    prices: 'Narxlar',
    telegram: 'Telegram',
    call: "Qo'ng'iroq",
  },
};

const languages = [
  { code: 'uz' as LangCode, name: "O'zbek", shortName: 'UZ', flag: '🇺🇿' },
  { code: 'ru' as LangCode, name: 'Русский', shortName: 'RU', flag: '🇷🇺' },
  { code: 'en' as LangCode, name: 'English', shortName: 'EN', flag: '🇬🇧' },
];

// Get saved language or default to 'uz'
const savedLang = localStorage.getItem('lang') as LangCode | null;
const currentLang = ref<LangCode>(savedLang && ['en', 'ru', 'uz'].includes(savedLang) ? savedLang : 'uz');

const currentLangLabel = computed(() => {
  const lang = languages.find(l => l.code === currentLang.value);
  return lang ? `${lang.flag} ${lang.shortName}` : '🇺🇿 UZ';
});

const t = (key: string): string => {
  return translations[currentLang.value][key] || key;
};

const setLanguage = (code: LangCode) => {
  currentLang.value = code;
  localStorage.setItem('lang', code);
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};

const handleCall = () => {
  // Main phone: +998 88 769 72 75, Backup: +998 88 279 72 75
  window.location.href = 'tel:+998887697275';
  closeMenu();
};

const handleTelegram = () => {
  // Telegram: @dezenchik
  window.open('https://t.me/dezenchik', '_blank');
  closeMenu();
};
</script>

<style scoped lang="scss">
.responsive-navbar {
  width: 100%;
}

.sticky-navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: transparent;
}

.navbar-desktop {
  display: none;
}

.navbar-mobile {
  display: block;
}

@media (min-width: 768px) {
  .navbar-desktop {
    display: block;
  }

  .navbar-mobile {
    display: none;
  }
}

// Desktop Styles
.navbar-desktop {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 32px;
  padding: 8px 12px;
  margin: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  position: relative;

  .navbar-content {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 26px;
  }

  .navbar-brand {
    display: flex;
    align-items: center;
    gap: 13px;
    grid-column: 1;
    text-decoration: none;
    cursor: pointer;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.85;
    }
  }

  .navbar-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 50%;
    flex-shrink: 0;
    overflow: hidden;
    padding: 6px;
  }

  .logo-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  .brand-text {
    font-size: 26px;
    font-weight: 900;
    font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    color: #1a1a1a;
    letter-spacing: 1.5px;
    text-shadow:
      1px 1px 0px rgba(255, 255, 255, 0.3),
      -1px -1px 0px rgba(0, 0, 0, 0.2),
      0px 1px 2px rgba(0, 0, 0, 0.1);
    line-height: 1;
  }

  .navbar-links {
    display: flex;
    align-items: center;
    gap: 9px;
    justify-content: center;
    grid-column: 2;
  }

  .nav-link {
    color: #333 !important;
    font-weight: 700;
    font-size: 15px;
    padding: 11px 21px;
    border-radius: 20px;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }

    &.active {
      background: rgba(33, 150, 243, 0.15);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      color: #2196f3 !important;
      font-weight: 800;
    }
  }

  .navbar-actions {
    display: flex;
    align-items: center;
    gap: 11px;
    justify-content: flex-end;
    grid-column: 3;
  }

  .lang-btn {
    background: rgba(255, 255, 255, 0.6) !important;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    padding: 5px 8px;
    font-size: 13px;
    font-weight: 700;
    color: #333 !important;
    transition: all 0.3s ease;
    min-height: 33px;

    &:hover {
      background: rgba(255, 255, 255, 0.9) !important;
      border-color: rgba(0, 0, 0, 0.15);
    }
  }

  .action-btn {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: none;
    height: 44px;
    padding: 0 20px;
    border-radius: 22px;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.3px;
    transition: all 0.3s ease;

    .q-icon {
      font-size: 20px;
      margin-right: 6px;
      -webkit-text-stroke: 0.5px currentColor;
    }

    &.call-btn {
      background: linear-gradient(135deg, #34C759 0%, #30D158 100%) !important;
      color: #fff !important;
      box-shadow: 0 4px 12px rgba(52, 199, 89, 0.3);

      &:hover {
        background: linear-gradient(135deg, #30B350 0%, #2BC34D 100%) !important;
        box-shadow: 0 6px 16px rgba(52, 199, 89, 0.4);
        transform: scale(1.03);
      }
    }

    &.telegram-btn {
      background: linear-gradient(135deg, #0088cc 0%, #229ED9 100%) !important;
      color: #fff !important;
      box-shadow: 0 4px 12px rgba(0, 136, 204, 0.3);

      &:hover {
        background: linear-gradient(135deg, #0077b3 0%, #1E8DC4 100%) !important;
        box-shadow: 0 6px 16px rgba(0, 136, 204, 0.4);
        transform: scale(1.03);
      }
    }
  }
}

// Mobile Styles
.navbar-mobile {
  .mobile-header {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 28px;
    padding: 13px 20px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  }

  .navbar-brand {
    display: flex;
    align-items: center;
    gap: 11px;
    flex: 1;
    text-decoration: none;
    cursor: pointer;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.85;
    }
  }

  .navbar-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 43px;
    height: 43px;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 50%;
    overflow: hidden;
    padding: 5px;
    flex-shrink: 0;
  }

  .logo-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  .brand-text {
    font-size: 21px;
    font-weight: 900;
    font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    color: #1a1a1a;
    letter-spacing: 1.5px;
    text-shadow:
      1px 1px 0px rgba(255, 255, 255, 0.3),
      -1px -1px 0px rgba(0, 0, 0, 0.2),
      0px 1px 2px rgba(0, 0, 0, 0.1);
    line-height: 1;
  }

  .menu-toggle {
    color: #333 !important;

    .q-icon {
      font-size: 26px;
      -webkit-text-stroke: 1px currentColor;
    }
  }

  .mobile-menu {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 28px;
    margin: 0 10px 10px 10px;
    padding: 21px;
    display: flex;
    flex-direction: column;
    gap: 11px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  }

  .mobile-nav-link {
    width: 100%;
    color: #333 !important;
    font-weight: 700;
    font-size: 16px;
    padding: 15px 21px;
    border-radius: 20px;
    text-align: left;
    justify-content: flex-start;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }

    &.active {
      background: rgba(33, 150, 243, 0.15);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      color: #2196f3 !important;
      font-weight: 800;
    }
  }

  .mobile-lang-selector {
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 11px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    margin-top: 6px;
  }

  .mobile-lang-btn {
    background: rgba(255, 255, 255, 0.5) !important;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    padding: 8px 14px;
    font-size: 14px;
    font-weight: 700;
    color: #333 !important;
    transition: all 0.3s ease;

    .lang-flag {
      font-size: 16px;
      margin-right: 5px;
    }

    .lang-code {
      font-size: 13px;
      font-weight: 700;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.8) !important;
    }

    &.active {
      background: rgba(33, 150, 243, 0.15) !important;
      border-color: rgba(33, 150, 243, 0.3);
      color: #2196f3 !important;
      font-weight: 800;
    }
  }

  .mobile-actions {
    display: flex;
    flex-direction: column;
    gap: 11px;
    margin-top: 11px;
    padding-top: 19px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }

  .action-btn {
    width: 100%;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 15px 21px;
    font-weight: 700;
    font-size: 15px;
    transition: all 0.3s ease;
    justify-content: center;

    .q-icon {
      font-size: 22px;
      -webkit-text-stroke: 1px currentColor;
    }

    &.call-btn {
      background: linear-gradient(135deg, #34C759 0%, #30D158 100%) !important;
      color: #fff !important;
      border-color: rgba(52, 199, 89, 0.3);

      &:hover {
        background: linear-gradient(135deg, #30B350 0%, #2BC34D 100%) !important;
        border-color: rgba(52, 199, 89, 0.5);
      }
    }

    &.telegram-btn {
      background: linear-gradient(135deg, #0088cc 0%, #229ED9 100%) !important;
      color: #fff !important;
      border-color: rgba(0, 136, 204, 0.3);

      &:hover {
        background: linear-gradient(135deg, #0077b3 0%, #1E8DC4 100%) !important;
        border-color: rgba(0, 136, 204, 0.5);
      }
    }
  }

  .copy-notification {
    position: fixed;
    top: 80px;
    right: 16px;
    background: rgba(255, 255, 255, 0.9) !important;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    color: #333;
    z-index: 9999;
    max-width: 200px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  }
}

// Slide down animation
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}

.lang-flag {
  font-size: 18px;
}
</style>

<style lang="scss">
// Global styles for dropdown (not scoped)
.lang-dropdown {
  min-width: 80px !important;
  border-radius: 12px !important;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12) !important;

  .lang-list {
    padding: 4px !important;
  }

  .lang-item {
    min-height: 32px !important;
    padding: 6px 10px !important;
    border-radius: 8px;
    margin: 2px 0;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    &.q-item--active {
      background: rgba(33, 150, 243, 0.12);
      color: #2196f3;
    }
  }

  .lang-item-flag {
    min-width: 20px !important;
    padding-right: 6px !important;
  }

  .lang-flag-small {
    font-size: 14px;
  }

  .lang-item-text {
    font-size: 13px;
    font-weight: 700;
  }
}
</style>
