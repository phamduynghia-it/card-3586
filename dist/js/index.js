// Tải cấu hình từ config.js cục bộ
window.APP_CONFIG = window.LOCAL_GIFT_CONFIG || window.DEFAULT_APP_CONFIG || {};
window.APP_CONFIG_PROMISE = Promise.resolve(window.APP_CONFIG);
