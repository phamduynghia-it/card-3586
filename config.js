/**
 * ==============================================================================
 * CẤU HÌNH QUÀ TẶNG 20/10 (LOCAL CONFIG & AUTO-DEPLOY ENGINE)
 * ==============================================================================
 * File này hứng các placeholder __VARIABLE__ được sinh tự động từ Builder.
 * Đồng thời chứa giá trị fallback an toàn khi chạy test nội bộ hoặc xem trước.
 */

const parseBool = (val, fallback) => {
  if (val === true || val === "true") return true;
  if (val === false || val === "false") return false;
  return fallback;
};

const parseNum = (val, fallback) => {
  const n = Number(val);
  return isNaN(n) ? fallback : n;
};

const parseStr = (val, fallback) => {
  if (typeof val === 'string' && !val.startsWith('__') && val.trim().length > 0) return val;
  return fallback;
};

// Cố gắng parse các danh sách mảng được inject bởi Auto Deploy
let rawMorphTexts = null;
try { rawMorphTexts = ["Chúc Mừng 20/10","Gửi Em Yêu"]; } catch (e) { rawMorphTexts = null; }

let rawSphereImages = null;
try { rawSphereImages = []; } catch (e) { rawSphereImages = null; }

let rawFlyingCaptions = null;
try { rawFlyingCaptions = ["Yêu em ♥","Nụ cười của em","Mãi bên nhau nhé"]; } catch (e) { rawFlyingCaptions = null; }

let rawFinaleTexts = null;
try { rawFinaleTexts = ["20.10","Yêu Em","I LOVE YOU"]; } catch (e) { rawFinaleTexts = null; }

window.LOCAL_GIFT_CONFIG = {
  // --- 1. TIÊU ĐỀ & BIỂU TƯỢNG TRANG WEB ---
  appTitle: parseStr(`Happy birthday`, "Món Quà Nhỏ - 20/10"),
  appIcon: "./assets/images/icons/couple.png",

  // --- 2. TÊN NGƯỜI NHẬN ---
  recipientName: parseStr(`Bá Lâm`, "Em"),
  heartName: parseStr(`Bá Lâm`, "Em Yêu"),

  // --- 3. ÂM NHẠC NỀN ---
  bgMusic: parseStr(`./assets/user_bgMusic.mp3`, "./assets/musics/givemeyourforever.mp3"),
  bgVolume: parseNum(`__BGVOLUME__`, 0.55),

  // --- 4. MẬT KHẨU (NẾU MUỐN KHÓA BẰNG 4 SỐ) ---
  enablePasscode: parseBool(`false`, false),
  passcode: parseStr(``, ""),
  passcodeTitle: parseStr(`Nhập mật khẩu`, "Nhập mật khẩu"),
  passcodeSubtitle: parseStr(`Mở món quà đặc biệt`, "Mở món quà đặc biệt"),

  // --- 5. HIỆU ỨNG TỜ LỊCH (CALENDAR) ---
  enableCalendar: parseBool(`true`, true),
  calendar: {
    year: parseNum(`0`, 0),
    day: parseNum(`30`, 20),
    month: parseNum(`10`, 10),
    title: parseStr(`Happy birthday`, "Ngày Phụ nữ Việt Nam"),
    caption: parseStr(`Ngày của anh`, "Ngày của em")
  },

  // --- 6. HIỆU ỨNG CHỮ BIẾN HÌNH BẰNG HẠT SÁNG (MORPH TEXTS) ---
  enableMorphEffect: parseBool(`false`, true),
  morphTexts: (Array.isArray(rawMorphTexts) && rawMorphTexts.length > 0) ? rawMorphTexts : [
    "Chúc Mừng 20/10",
    "Gửi Em Yêu"
  ],
  particleImage: parseStr(``, "./assets/images/gift/particleImage.png"),
  particleImageShape: parseStr(`heart`, "heart"),

  // --- 7. BÓ HOA HỒNG 3D ---
  enableBouquet: parseBool(`false`, true),
  bouquet: {
    color: parseStr(`red`, "red"),
    count: parseNum(`11`, 11),
    title: parseStr(`Tặng em bó hoa không bao giờ tàn`, "Tặng em bó hoa không bao giờ tàn"),
    subtitle: parseStr(`Hoa thật rồi sẽ héo, nhưng bó hoa này sẽ nở mãi — như cách anh thương em mỗi ngày.`, "Hoa thật rồi sẽ héo, nhưng bó hoa này sẽ nở mãi — như cách anh thương em mỗi ngày.")
  },

  // --- 8. QUẢ CẦU ẢNH 3D (PHOTO SPHERE) ---
  enableSphere: parseBool(`false`, true),
  enableSphereFlyingImages: parseBool(`false`, true),
  sphereImages: (Array.isArray(rawSphereImages) && rawSphereImages.length > 0 && rawSphereImages[0]) ? rawSphereImages : [
    "./assets/images/gift/sphere-0.jpeg",
    "./assets/images/gift/sphere-1.jpeg",
    "./assets/images/gift/sphere-2.jpeg",
    "./assets/images/gift/sphere-3.jpeg",
    "./assets/images/gift/sphere-4.jpeg",
    "./assets/images/gift/sphere-5.jpeg"
  ],
  flyingCaptions: (Array.isArray(rawFlyingCaptions) && rawFlyingCaptions.length > 0) ? rawFlyingCaptions : [
    "Yêu em ♥",
    "Nụ cười của em",
    "Mãi bên nhau nhé"
  ],

  // --- 9. BỨC THƯ TAY (LETTER) ---
  enableLetter: parseBool(`true`, true),
  letter: {
    title: parseStr(`Chào anh yêu`, "Gửi em yêu"),
    text: parseStr(`Chào anh yêu!
Ngày 30/10 là ngày đặc biệt của anh nhưng nó đặc biệt với em nhiều hơn. Cám ơn anh vẫn đồng hành cùng em đến tận bây giờ để em được nói lời chúc mừng sinh nhật nhạt anh. Chúc anh luôn vui - khoẻ, bình an, thành công trong mọi việc. Chúc anh luôn là người đàn ông mà em chọn gắn bó lâu dài luôn dịu dàng và đồng hành cùng em trong mọi việc cũng như cho em cảm giác bình yẻn khi bên cạnh anh. Thương anh thật nhiều!
Happy birthday anh!`, "Hôm nay là ngày của em — ngày anh được nói lời cảm ơn nhiều hơn một chút.\n\nCảm ơn em vì đã luôn dịu dàng, kiên nhẫn và rạng rỡ như những bông hoa đẹp nhất. Cảm ơn em vì những ngày bình thường bỗng trở nên đáng nhớ chỉ vì có em ở đó.\n\nChúc em luôn xinh đẹp, bình an và được yêu thương thật nhiều — không chỉ hôm nay mà là mỗi ngày.\n\nAnh yêu em."),
    signature: parseStr(`Love you`, "Anh của em"),
    image: parseStr(`./assets/user_letterImage.jpg`, "./assets/images/gift/letter.png"),
    caption: parseStr(`__LETTERCAPTION__`, "")
  },

  // --- 10. HỘP QUÀ / THẺ CÀO ---
  enableGiftBox: parseBool(`false`, false),
  giftBox: {
    image: parseStr(``, "./assets/images/gift/giftbox.jpeg"),
    message: parseStr(`Tối 20/10, 7 giờ — anh đón em đi ăn tối nhé! 🌹`, "Tối 20/10, 7 giờ — anh đón em đi ăn tối nhé! 🌹")
  },

  // --- 11. PHÁO HOA & BỘ ĐẾM NGÀY ---
  enableFinale: parseBool(`false`, false),
  finale: {
    texts: (Array.isArray(rawFinaleTexts) && rawFinaleTexts.length > 0) ? rawFinaleTexts : ["20.10", "Yêu Em", "I LOVE YOU"],
    message: parseStr(`Cảm ơn em vì đã đến bên anh`, "Cảm ơn em vì đã đến bên anh"),
    loveStart: parseStr(`2023-06-01`, "2023-06-01"),
    counterLabel: parseStr(`Mình đã bên nhau`, "Mình đã bên nhau")
  },

  // --- 12. CÁC CÀI ĐẶT BỔ SUNG KHÁC ---
  enableWebsiteInfo: false,
  productType: "20-10"
};
