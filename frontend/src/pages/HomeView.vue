<template>
  <div class="home-page">
    <!-- Hero -->
    <section class="hero d-flex flex-column align-center justify-center text-center">
      <v-avatar size="96" color="white" class="mb-4 elevation-4">
        <v-icon icon="mdi-account" size="64" color="primary" />
      </v-avatar>
      <div class="hero-eyebrow">2026 萬巒鄉鄉民代表候選人</div>
      <h1 class="hero-name">林政宏</h1>
      <p class="hero-tagline">
        腳踏實地・為萬巒做事<br class="d-sm-none">用心陪伴每一個角落
      </p>
    </section>

    <!-- Platform sections -->
    <v-container class="py-8" style="max-width: 960px;">
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
    <footer class="footer text-center py-6">
      <div class="mb-1">萬巒鄉鄉民代表候選人 林政宏 服務團隊</div>
      <div class="text-caption">聯絡方式與競選辦公室資訊 敬請期待公告</div>
    </footer>
  </div>
</template>

<script setup>
const platformGroups = [
  {
    title: '動物與長者福祉',
    icon: 'mdi-paw',
    color: '#1B5E20',
    items: [
      '持續推動貓狗節育，從源頭改善流浪動物問題',
      '推動長輩愛心手環，守護獨居與高齡長輩安全',
      '補助家用煙霧警報器，強化居家消防安全',
    ],
  },
  {
    title: '公共空間活化',
    icon: 'mdi-tree',
    color: '#2E7D32',
    items: [
      '推動寵物樹葬區，讓毛孩善終、安心送別',
      '第一公墓公園化＋停車場推動，改善周邊環境與停車問題',
      '舊萬巒分駐所轉型為遊客中心，活化閒置公有空間',
    ],
  },
  {
    title: '交通建設',
    icon: 'mdi-road-variant',
    color: '#EF6C00',
    items: [
      '推動中正路、褒忠路標線行人道，還給行人安全的步行空間',
    ],
  },
  {
    title: '產業與觀光',
    icon: 'mdi-storefront',
    color: '#6D4C41',
    items: [
      '萬巒零售市場再生與活化，重振在地買氣',
      '協助農村再生，結合地方文化發展深度旅行',
    ],
  },
  {
    title: '智慧防災與便民服務',
    icon: 'mdi-robot-outline',
    color: '#1565C0',
    badge: '規劃中',
    items: [
      'AI 賦能＋LineBot：即時提供台電停電、台水停水、公務單位道路施工等消息，同步發布於 Line 群組與官方宣導管道',
      '結合即時災情訊息，建立 Google Map 萬巒防災地圖，讓鄉親第一時間掌握狀況',
    ],
  },
]
</script>

<style scoped>
.hero {
  min-height: 46vh;
  padding: 48px 24px;
  background: linear-gradient(135deg, #1B5E20 0%, #2E7D32 55%, #F9A825 100%);
  color: #fff;
}

.hero-eyebrow {
  letter-spacing: 0.08em;
  font-size: 0.95rem;
  opacity: 0.9;
  margin-bottom: 4px;
}

.hero-name {
  font-size: clamp(2.5rem, 8vw, 3.5rem);
  font-weight: 700;
  margin: 4px 0 12px;
}

.hero-tagline {
  font-size: 1.05rem;
  line-height: 1.6;
  opacity: 0.95;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1B5E20;
}

.platform-card {
  border-radius: 16px;
}

.platform-title {
  font-weight: 700;
  white-space: normal;
}

.platform-list {
  margin: 0;
  padding-left: 1.1rem;
}

.platform-list li {
  margin-bottom: 6px;
  line-height: 1.5;
}

.footer {
  background: #F5F5F5;
  color: #555;
}
</style>
