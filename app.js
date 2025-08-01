
const challenges = [
  
  "اكتب 3 أشياء تحبها في نفسك",
  "ابتسم لشخص غريب اليوم",
  "خذ 5 دقائق للتنفس العميق",
  "اكتب إنجازاً صغيراً حققته",
  "ارسل رسالة شكر لصديق",
  "خصص 10 دقائق للتأمل",
  "أرسل رسالة شكر لشخص دعمك سابقًا",
  "ارسم مشاعرك اليوم في ورقة",
  "اقرأ شيئًا يلهمك لمدة 5 دقائق"
];

function generateChallenge() {
  const index = Math.floor(Math.random() * challenges.length);
  const challengeBox = document.getElementById('challenge');
  challengeBox.classList.remove('show');
  setTimeout(() => {
    challengeBox.innerText = challenges[index];
    challengeBox.classList.add('show');
  }, 200);
}

// إشعار ترحيبي عند فتح الموقع أول مرة
if ('Notification' in window && navigator.serviceWorker) {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      navigator.serviceWorker.register('sw.js').then(reg => {
        reg.showNotification('✨ أهلاً بك في تحدي اليوم!', {
          body: 'كل يوم تحدي بسيط يقوي نفسك ✨',
          icon: 'icons/512x512-5cb2.png'
        });
      });
    }
  });
}
