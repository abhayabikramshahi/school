import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onRegisterError(error) {
    console.error('SW registration failed:', error)
  },
  onNeedRefresh() {
    if (confirm('New content available. Reload?')) {
      updateSW()
    }
  },
  onOfflineReady() {
    console.log('App ready to work offline')
  }
})
