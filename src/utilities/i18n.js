import { en, zh } from '@locales';

const i18n = (locale) => {
  switch (locale) {
    case 'en':
      return { trans: en, locale, cx: (e) => `en-font ${e}` };
    case 'zh':
      return { trans: zh, locale, cx: (e) => `zh-font ${e}` };
    default:
      return { locale: en, cx: `zh` };
  }
};

export default i18n;
