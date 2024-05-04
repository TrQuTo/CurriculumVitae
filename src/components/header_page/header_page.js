import EnumCommon from "@/EnumCommon";
export default {
  name: EnumCommon.ComponentsName.HEADER_PAGE,
  methods: {
    saveLocaleToStorage() {
      // Lưu giá trị locale vào localStorage với khóa 'locale'
      localStorage.setItem(EnumCommon.LocaleStorageKey, this.$i18n.locale);
    }
  },
  mounted() {
    // Kiểm tra xem có giá trị locale đã lưu trong localStorage hay không
    const storedLocale = localStorage.getItem(EnumCommon.LocaleStorageKey);
    if (storedLocale) {
      // Nếu có, gán giá trị locale cho biến được liên kết với v-model
      this.$i18n.locale = storedLocale;
    }
  }
};
