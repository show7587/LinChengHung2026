<template>
  <div class="home-page">
    <div class="background-bubbles" aria-hidden="true">
      <span class="bubble bubble-1"></span>
      <span class="bubble bubble-2"></span>
      <span class="bubble bubble-3"></span>
      <span class="bubble bubble-4"></span>
      <span class="bubble bubble-5"></span>
      <span class="bubble bubble-6"></span>
      <span class="bubble bubble-7"></span>
      <span class="bubble bubble-8"></span>
    </div>

    <!-- Hero -->
    <section class="hero d-flex flex-column align-center justify-center text-center">
      <v-avatar size="96" color="white" class="mb-4 elevation-4">
        <v-icon icon="mdi-account" size="64" color="primary" />
      </v-avatar>
      <div class="hero-eyebrow">2026 萬巒鄉鄉民代表候選人</div>
      <h1 class="hero-name">林成宏</h1>
      <p class="hero-tagline">
        腳踏實地・為萬巒做事<br class="d-sm-none">用心陪伴每一個角落
      </p>
    </section>

    <!-- Platform sections -->
    <v-container class="py-8 content-layer" style="max-width: 960px;">
      <h2 class="section-title text-center mb-6">政見主張</h2>

      <v-row>
        <v-col
          v-for="group in platformGroups"
          :key="group.title"
          cols="12"
          md="6"
        >
          <v-card class="platform-card h-100" elevation="2">
            <v-card-item>
              <template #prepend>
                <v-avatar :color="group.color" size="44">
                  <v-icon :icon="group.icon" color="white" />
                </v-avatar>
              </template>
              <v-card-title class="platform-title">{{ group.title }}</v-card-title>
              <template v-if="group.badge" #append>
                <v-chip size="small" color="secondary" variant="flat">{{ group.badge }}</v-chip>
              </template>
            </v-card-item>
            <v-card-text>
              <ul class="platform-list">
                <li v-for="item in group.items" :key="item">{{ item }}</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Footer -->
    <footer class="footer text-center py-6 content-layer">
      <div class="mb-1">萬巒鄉鄉民代表候選人 林成宏 服務團隊</div>
      <div class="text-caption">聯絡方式與競選辦公室資訊 敬請期待公告</div>
    </footer>
  </div>
</template>

<script setup>
const platformGroups = [
  {
    title: '動物與長者福祉',
    icon: 'mdi-paw',
    color: '#57C7FF',
    items: [
      '持續推動貓狗節育，從源頭改善流浪動物問題',
      '推動長輩愛心手環，守護獨居與高齡長輩安全',
      '補助家用煙霧警報器，強化居家消防安全',
    ],
  },
  {
    title: '公共空間活化',
    icon: 'mdi-tree',
    color: '#7BD8FF',
    items: [
      '推動寵物樹葬區，讓毛孩善終、安心送別',
      '第一公墓公園化＋停車場推動，改善周邊環境與停車問題',
      '舊萬巒分駐所轉型為遊客中心，活化閒置公有空間',
    ],
  },
  {
    title: '交通建設',
    icon: 'mdi-road-variant',
    color: '#FF7AB8',
    items: [
      '推動中正路、褒忠路標線行人道，還給行人安全的步行空間',
    ],
  },
  {
    title: '產業與觀光',
    icon: 'mdi-storefront',
    color: '#FF4FA3',
    items: [
      '萬巒零售市場再生與活化，重振在地買氣',
      '協助農村再生，結合地方文化發展深度旅行',
    ],
  },
  {
    title: '智慧防災與便民服務',
    icon: 'mdi-robot-outline',
    color: '#4A90E2',
    badge: '規劃中',
    items: [
      'AI 賦能＋LineBot：即時提供台電停電、台水停水、公務單位道路施工等消息，同步發布於 Line 群組與官方宣導管道',
      '結合即時災情訊息，建立 Google Map 萬巒防災地圖，讓鄉親第一時間掌握狀況',
    ],
  },
]
</script>

<style scoped>
.home-page {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #f4fcff 0%, #eaf8ff 42%, #fff4fa 100%);
}

.content-layer {
  position: relative;
  z-index: 1;
}

.background-bubbles {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.bubble {
  position: absolute;
  display: block;
  border-radius: 50%;
  opacity: 0.45;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.35) 35%, rgba(87, 199, 255, 0.18) 70%, rgba(255, 79, 163, 0.12) 100%);
  box-shadow: inset -10px -14px 28px rgba(87, 199, 255, 0.12), 0 14px 30px rgba(87, 199, 255, 0.12);
  animation: floatUp 15s ease-in-out infinite;
}

.bubble-1 {
  width: 180px;
  height: 180px;
  top: 80px;
  left: -40px;
  animation-delay: 0s;
}

.bubble-2 {
  width: 120px;
  height: 120px;
  top: 180px;
  right: 8%;
  animation-delay: 2s;
}

.bubble-3 {
  width: 220px;
  height: 220px;
  top: 420px;
  left: 6%;
  animation-delay: 4s;
}

.bubble-4 {
  width: 140px;
  height: 140px;
  top: 520px;
  right: -20px;
  animation-delay: 1s;
}

.bubble-5 {
  width: 100px;
  height: 100px;
  bottom: 240px;
  left: 18%;
  animation-delay: 3s;
}

.bubble-6 {
  width: 160px;
  height: 160px;
  bottom: 120px;
  right: 10%;
  animation-delay: 5s;
}

.bubble-7 {
  width: 90px;
  height: 90px;
  top: 300px;
  left: 50%;
  animation-delay: 2.5s;
}

.bubble-8 {
  width: 200px;
  height: 200px;
  bottom: -40px;
  left: 55%;
  animation-delay: 6s;
}

@keyframes floatUp {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  25% {
    transform: translate3d(10px, -18px, 0) scale(1.03);
  }
  50% {
    transform: translate3d(-12px, -36px, 0) scale(0.98);
  }
  75% {
    transform: translate3d(8px, -20px, 0) scale(1.02);
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
}

.hero {
  position: relative;
  z-index: 1;
  min-height: 46vh;
  padding: 48px 24px;
  background: linear-gradient(135deg, #57c7ff 0%, #8be0ff 52%, #ff7ab8 100%);
  color: #ffffff;
}

.hero-eyebrow {
  letter-spacing: 0.08em;
  font-size: 0.95rem;
  opacity: 0.92;
  margin-bottom: 4px;
}

.hero-name {
  font-size: clamp(2.5rem, 8vw, 3.5rem);
  font-weight: 700;
  margin: 4px 0 12px;
  text-shadow: 0 8px 24px rgba(47, 106, 170, 0.18);
}

.hero-tagline {
  font-size: 1.05rem;
  line-height: 1.6;
  opacity: 0.96;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2b6cb0;
}

.platform-card {
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(87, 199, 255, 0.18);
  box-shadow: 0 12px 32px rgba(87, 199, 255, 0.08);
}

.platform-title {
  font-weight: 700;
  white-space: normal;
  color: #1f4f82;
}

.platform-list {
  margin: 0;
  padding-left: 1.1rem;
  color: #3a4a5a;
}

.platform-list li {
  margin-bottom: 6px;
  line-height: 1.5;
}

.footer {
  background: linear-gradient(180deg, rgba(223, 245, 255, 0.8) 0%, rgba(255, 217, 236, 0.9) 100%);
  color: #5b4b5b;
}
</style>
