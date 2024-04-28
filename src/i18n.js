import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import vn from "./locales/vn.json";

function loadLocaleMessage() {
  const locales = [{ en: en }, { vn: vn }];
  const messages = {};
  locales.forEach((lang) => {
    const key = Object.keys(lang);
    messages[key] = lang[key];
  });
  return messages;
}

export default createI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: loadLocaleMessage()
})
