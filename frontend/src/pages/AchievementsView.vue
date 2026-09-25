<template>
  <div class="achievements-page">
    <section class="page-header text-center">
      <h1 class="page-title">四年服務成果</h1>
      <p class="page-subtitle">共完成 {{ achievements.length }} 件鄉親陳情與服務</p>
    </section>

    <!-- Category filter -->
    <div class="filter-bar">
      <v-chip-group
        v-model="selectedCategory"
        mandatory
        selected-class="filter-chip-active"
        class="filter-group"
      >
        <v-chip value="all" class="filter-chip" variant="flat">
          全部 {{ achievements.length }}
        </v-chip>
        <v-chip
          v-for="category in categories"
          :key="category.key"
          :value="category.key"
          :prepend-icon="category.icon"
          class="filter-chip"
          variant="flat"
        >
          {{ category.label }} {{ countByCategory(category.key) }}
        </v-chip>
      </v-chip-group>
    </div>

    <v-container class="py-4" style="max-width: 760px;">
      <v-expansion-panels v-model="openYears" multiple variant="accordion">
        <v-expansion-panel
          v-for="group in yearGroups"
          :key="group.year"
          :value="group.year"
          class="year-panel"
        >
          <v-expansion-panel-title class="year-title">
            {{ group.label }}
            <span class="year-count">・{{ group.items.length }} 件</span>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <div
              v-for="item in group.items"
              :key="item.title"
              class="record"
            >
              <v-avatar :color="getCategory(item.category).color" size="36" class="record-icon">
                <v-icon :icon="getCategory(item.category).icon" color="white" size="20" />
              </v-avatar>
              <div class="record-body">
                <div class="record-title">{{ item.title }}</div>
                <div class="record-result">{{ item.result }}</div>
                <div class="record-meta">
                  {{ formatDate(item.date) }}・{{ getCategory(item.category).label }}
                </div>
              </div>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>

      <div class="text-center mt-8">
        <v-btn to="/" color="primary" variant="flat" size="large" rounded="pill" prepend-icon="mdi-arrow-left">
          回首頁看政見
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import {
  achievements,
  categories,
  countByCategory,
  formatDate,
  getCategory,
} from '@/data/achievementCategories'

const UNDATED = 'undated'

const selectedCategory = ref('all')

const filtered = computed(() =>
  selectedCategory.value === 'all'
    ? achievements
    : achievements.filter(a => a.category === selectedCategory.value),
)

// Group by year, newest year first; undated records go last.
const yearGroups = computed(() => {
  const groups = {}
  for (const item of filtered.value) {
    const year = item.date ? item.date.slice(0, 4) : UNDATED
    ;(groups[year] ??= []).push(item)
  }
  return Object.keys(groups)
    .sort((a, b) => (a === UNDATED ? 1 : b === UNDATED ? -1 : b.localeCompare(a)))
    .map(year => ({
      year,
      label: year === UNDATED ? '日期未記錄' : `${year} 年`,
      items: groups[year].slice().sort((a, b) => (b.date ?? '').localeCompare(a.date ?? '')),
    }))
})

const openYears = ref([])

// Expand only the newest year whenever the filter changes.
watch(yearGroups, groups => {
  openYears.value = groups.length ? [groups[0].year] : []
}, { immediate: true })
</script>

<style scoped>
.achievements-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #eefbff 0%, #dff5ff 45%, #ffe9f4 100%);
}

.page-header {
  padding: 32px 16px 20px;
  background: linear-gradient(135deg, rgba(87, 199, 255, 0.92) 0%, rgba(139, 224, 255, 0.88) 52%, rgba(255, 122, 184, 0.88) 100%);
}

.page-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #103a7a;
  margin: 0;
}

.page-subtitle {
  margin: 6px 0 0;
  color: #163d7a;
  font-weight: 600;
}

.filter-bar {
  position: sticky;
  top: 48px;
  z-index: 2;
  padding: 4px 8px;
  background: rgba(238, 251, 255, 0.96);
  box-shadow: 0 4px 12px rgba(87, 199, 255, 0.15);
}

.filter-chip {
  min-height: 40px;
  font-weight: 600;
  background: #ffffff;
  color: #1f4f82;
}

.filter-chip-active {
  background: #57c7ff !important;
  color: #ffffff !important;
}

.year-panel {
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.94);
}

.year-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1f4f82;
}

.year-count {
  font-weight: 500;
  color: #5a6b7c;
}

.record {
  display: flex;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(87, 199, 255, 0.18);
}

.record:last-child {
  border-bottom: none;
}

.record-icon {
  flex-shrink: 0;
}

.record-body {
  min-width: 0;
}

.record-title {
  font-weight: 700;
  line-height: 1.5;
  color: #24415d;
}

.record-result {
  margin-top: 2px;
  line-height: 1.5;
  color: #3a4a5a;
}

.record-meta {
  margin-top: 4px;
  font-size: 0.8rem;
  color: #7a8a9a;
}
</style>
