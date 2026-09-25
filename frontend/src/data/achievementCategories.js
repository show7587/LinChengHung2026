import achievements from './achievements.json'

export const categories = [
  { key: 'traffic', label: '交通安全', icon: 'mdi-traffic-light', color: '#57C7FF' },
  { key: 'road', label: '道路排水', icon: 'mdi-road-variant', color: '#4A90E2' },
  { key: 'animal', label: '動物保護', icon: 'mdi-paw', color: '#FF4FA3' },
  { key: 'environment', label: '環境整潔', icon: 'mdi-leaf', color: '#4CC38A' },
  { key: 'facility', label: '公共設施', icon: 'mdi-office-building-outline', color: '#8E7CFF' },
  { key: 'service', label: '為民服務', icon: 'mdi-hand-heart', color: '#FF9F43' },
]

const categoryMap = Object.fromEntries(categories.map(c => [c.key, c]))

export function getCategory (key) {
  return categoryMap[key] ?? categoryMap.service
}

export function countByCategory (key) {
  return achievements.filter(a => a.category === key).length
}

export function formatDate (date) {
  if (!date) return '日期未記錄'
  const [y, m, d] = date.split('-')
  return `${y}/${m}/${d}`
}

export { achievements }
