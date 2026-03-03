
<style scoped>
.bg-grid {
  --bg: #0a0a0f;
  --bg-elevated: #12121a;
  --card: #18181f;
  --border: #2a2a35;
  --fg: #e8e8ed;
  --muted: #6b6b7a;
  --accent: #00d4aa;
  --accent-dim: rgba(0, 212, 170, 0.15);
  --code-bg: #0d0d12;
  --error: #ff4d6a;
  --warning: #ffb84d;
  background-color: var(--bg);
  color: var(--fg);
  overflow-x: hidden;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

.bg-grid {
  background-image: 
    linear-gradient(rgba(0, 212, 170, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 170, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
  pointer-events: none;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
  top: -200px;
  right: -100px;
  animation: float 20s ease-in-out infinite;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #4d4dff 0%, transparent 70%);
  bottom: -150px;
  left: -100px;
  animation: float 25s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.05); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
}

.panel {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
}

.panel-header {
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 10px;
}

.input-field {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px 16px;
  color: var(--fg);
  font-size: 14px;
  width: 100%;
  transition: all 0.2s ease;
}

.input-field:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-dim);
}

.select-field {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px 16px;
  color: var(--fg);
  font-size: 14px;
  width: 100%;
  cursor: pointer;
  appearance: none;
  transition: all 0.2s ease;
}

.select-field:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-dim);
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent), #00b894);
  color: var(--bg);
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 212, 170, 0.3);
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-secondary {
  background: var(--card);
  color: var(--fg);
  font-weight: 500;
  padding: 10px 18px;
  border-radius: 8px;
  border: 1px solid var(--border);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  border-color: var(--accent);
  background: var(--accent-dim);
}

.btn-secondary.active {
  border-color: var(--accent);
  background: var(--accent-dim);
  color: var(--accent);
}

.btn-icon {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--muted);
}

.btn-icon:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-dim);
}

.color-picker-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}

.color-picker {
  width: 44px;
  height: 44px;
  border: 2px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  padding: 0;
}

.range-slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: var(--border);
  outline: none;
}

.range-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--accent);
  cursor: pointer;
}

.tab-btn {
  padding: 10px 20px;
  background: transparent;
  border: none;
  color: var(--muted);
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: color 0.2s ease;
}

.tab-btn.active {
  color: var(--accent);
}

.tab-btn.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent);
}

.code-block {
  background: var(--code-bg);
  border-radius: 8px;
  padding: 16px;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--fg);
}

.preview-container {
  border-radius: 8px;
  padding: 32px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.category-card {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}

.category-card:hover, .category-card.selected {
  border-color: var(--accent);
  background: var(--accent-dim);
}

.category-card.selected svg {
  color: var(--accent);
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid var(--bg);
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.toast {
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  transform: translateY(100px);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1000;
}

.toast.show {
  transform: translateY(0);
  opacity: 1;
}

.stagger-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
}

@keyframes fadeInUp {
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 1024px) {
  .main-grid {
    grid-template-columns: 1fr !important;
  }
}
</style>

<template>
  <div class="bg-grid min-h-screen p-4 md:p-8 relative z-10">
    <!-- Gradient Orbs -->
    <div class="gradient-orb orb-1"></div>
    <div class="gradient-orb orb-2"></div>

    <!-- Header -->
    <header class="max-w-7xl mx-auto mb-8 stagger-in" style="animation-delay: 0.1s;">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-3">
            <svg class="w-8 h-8 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            UI Template Generator
          </h1>
          <p class="text-[var(--muted)] mt-1">Create production-ready components with full customization</p>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto">
      <div class="main-grid grid grid-cols-[340px_1fr] gap-6">
        <!-- Controls Panel -->
        <aside class="space-y-4 stagger-in" style="animation-delay: 0.2s;">
          <!-- Template Type -->
          <div class="panel">
            <div class="panel-header">
              <svg class="w-5 h-5 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span class="font-semibold">Template Type</span>
            </div>
            <div class="p-4">
              <div class="grid grid-cols-3 gap-2">
                <div v-for="cat in categories" :key="cat" @click="selectCategory(cat)" :class="['category-card', { selected: category === cat }]" :data-category="cat">
                  <svg class="w-5 h-5 mx-auto mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <template v-if="cat === 'button'">
                      <rect x="4" y="7" width="16" height="10" rx="3"></rect>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </template>
                    <template v-else-if="cat === 'card'">
                      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                      <line x1="4" y1="9" x2="20" y2="9"></line>
                    </template>
                    <template v-else-if="cat === 'input'">
                      <rect x="3" y="7" width="18" height="10" rx="2"></rect>
                      <circle cx="18" cy="12" r="1"></circle>
                    </template>
                    <template v-else-if="cat === 'navbar'">
                      <line x1="4" y1="7" x2="20" y2="7"></line>
                      <line x1="4" y1="12" x2="14" y2="12"></line>
                      <line x1="4" y1="17" x2="20" y2="17"></line>
                    </template>
                    <template v-else-if="cat === 'pricing'">
                      <rect x="5" y="4" width="14" height="16" rx="2"></rect>
                      <path d="M12 8v8"></path>
                      <path d="M9.5 10.5c0-1 1-1.5 2.5-1.5s2.5.5 2.5 1.5-1 1.5-2.5 1.5-2.5.5-2.5 1.5 1 1.5 2.5 1.5 2.5-.5 2.5-1.5"></path>
                    </template>
                    <template v-else-if="cat === 'hero'">
                      <path d="M4 17l5-6 4 3 3-4 4 7"></path>
                      <circle cx="8" cy="7" r="1.5"></circle>
                    </template>
                    <template v-else-if="cat === 'features'">
                      <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                      <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                      <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                      <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                    </template>
                    <template v-else-if="cat === 'testimonial'">
                      <path d="M6 9h5v4H8l-2 2V9z"></path>
                      <path d="M13 9h5v4h-3l-2 2V9z"></path>
                    </template>
                    <template v-else-if="cat === 'alert'">
                      <path d="M12 4l8 14H4L12 4z"></path>
                      <line x1="12" y1="10" x2="12" y2="13"></line>
                      <circle cx="12" cy="16" r="0.8" fill="currentColor" stroke="none"></circle>
                    </template>
                  </svg>
                  <span class="text-xs font-medium capitalize">{{ cat }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Style Options -->
          <div class="panel">
            <div class="panel-header">
              <svg class="w-5 h-5 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
              <span class="font-semibold">Style Options</span>
              <button @click="randomizeSettings" class="ml-auto btn-icon" title="Randomize">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>
              </button>
            </div>
            <div class="p-4 space-y-5">
	              <div>
	                <label class="text-sm text-[var(--muted)] mb-2 block">Primary Color</label>
	                <div class="color-picker-wrapper">
	                  <input type="color" v-model="primaryColor" class="color-picker">
	                  <input type="text" v-model="primaryColor" class="input-field font-mono text-sm flex-1">
	                </div>
	              </div>

	              <div>
	                <label class="text-sm text-[var(--muted)] mb-2 block">Text Color</label>
	                <div class="color-picker-wrapper">
	                  <input type="color" v-model="textColor" class="color-picker">
	                  <input type="text" v-model="textColor" class="input-field font-mono text-sm flex-1">
	                </div>
	              </div>

	              <div>
	                <label class="text-sm text-[var(--muted)] mb-2 block">Font Family</label>
	                <select v-model="fontFamily" class="select-field">
	                  <option v-for="font in fontOptions" :key="font.label" :value="font.value">{{ font.label }}</option>
	                </select>
	              </div>

	              <div>
	                <label class="text-sm text-[var(--muted)] mb-2 block">Border Radius: <span>{{ borderRadius }}px</span></label>
	                <input type="range" v-model.number="borderRadius" class="range-slider" min="0" max="24">
	              </div>

              <div>
                <label class="text-sm text-[var(--muted)] mb-2 block">Style Preset</label>
                <select v-model="stylePreset" class="select-field">
                  <option v-for="preset in presets" :key="preset" :value="preset">{{ preset.charAt(0).toUpperCase() + preset.slice(1) }}</option>
                </select>
              </div>

              <div>
                <label class="text-sm text-[var(--muted)] mb-2 block">Preview Theme</label>
                <div class="flex gap-2">
                  <button @click="previewTheme = 'light'" :class="['btn-secondary flex-1', { active: previewTheme === 'light' }]">Light</button>
                  <button @click="previewTheme = 'dark'" :class="['btn-secondary flex-1', { active: previewTheme === 'dark' }]">Dark</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Custom Prompt -->
          <div class="panel">
            <div class="panel-header">
              <svg class="w-5 h-5 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>

          </div>

          <!-- Action Buttons -->
          <div class="space-y-2">
            <button @click="generateTemplate" :disabled="isGenerating" class="btn-primary btn-generate w-full flex items-center justify-center gap-2 text-base">
              <svg v-if="!isGenerating" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              <div v-else class="spinner"></div>
              {{ isGenerating ? 'Generating...' : 'Generate Template' }}
            </button>
            <div class="flex gap-2">
              <button @click="exportAsHtml" class="btn-secondary flex-1 flex items-center justify-center gap-2">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Export
              </button>
              <button @click="clearAll" class="btn-secondary flex-1 flex items-center justify-center gap-2">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                Clear
              </button>
            </div>
          </div>
        </aside>

        <!-- Preview & Code Panel -->
        <div class="space-y-4 stagger-in" style="animation-delay: 0.3s;">
          <!-- Preview -->
          <div class="panel">
            <div class="panel-header justify-between">
              <div class="flex items-center gap-3">
                <div class="flex gap-1.5">
                  <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <span class="font-semibold">Live Preview</span>
              </div>
              <div class="flex gap-2">
                <button @click="copyHtml" class="btn-secondary text-sm flex items-center gap-2">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  Copy HTML
                </button>
                <button @click="copyCss" class="btn-secondary text-sm flex items-center gap-2">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  Copy CSS
                </button>
              </div>
            </div>
            <div class="p-4">
              <div class="preview-container transition-all duration-300" :style="previewStyle">
                <div v-if="!generatedHtml" class="text-gray-400">Click "Generate Template" to create a component</div>
                <div v-else v-html="generatedHtml + '<style>' + generatedCss + '</style>'"></div>
              </div>
            </div>
          </div>

          <!-- Code Output -->
          <div class="panel">
            <div class="panel-header">
              <div class="flex">
                <button v-for="tab in ['html', 'css']" :key="tab" @click="activeTab = tab" :class="['tab-btn', { active: activeTab === tab }]">{{ tab.toUpperCase() }}</button>
              </div>
            </div>
            <div class="p-4">
              <div class="code-block max-h-80 overflow-auto" v-html="currentCode"></div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Toast -->
    <div :class="['toast', { show: showToast }, toastType]">
      <svg class="w-5 h-5 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>{{ toastMessage }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UITemplateGenerator',
	  data() {
	    return {
	      categories: ['button', 'card', 'input', 'navbar', 'pricing', 'hero', 'features', 'testimonial', 'alert'],
	      presets: ['modern', 'minimal', 'neumorphic', 'glassmorphism', 'gradient', 'outline', 'brutalist', 'retro'],
	      fontOptions: [
	        { label: 'Inter', value: "'Inter', 'Segoe UI', sans-serif" },
	        { label: 'Poppins', value: "'Poppins', 'Segoe UI', sans-serif" },
	        { label: 'Montserrat', value: "'Montserrat', 'Segoe UI', sans-serif" },
	        { label: 'Roboto Mono', value: "'Roboto Mono', 'Courier New', monospace" },
	        { label: 'Georgia', value: "Georgia, 'Times New Roman', serif" }
	      ],
	      category: 'button',
	      primaryColor: '#00d4aa',
	      textColor: '#e8e8ed',
	      fontFamily: "'Inter', 'Segoe UI', sans-serif",
	      borderRadius: 8,
	      stylePreset: 'modern',
	      previewTheme: 'light',
      customPrompt: '',
      generatedHtml: '',
      generatedCss: '',
      isGenerating: false,
      activeTab: 'html',
      showToast: false,
      toastMessage: '',
      toastType: 'success',
      apiKey: ''
    };
  },
	  computed: {
	    previewStyle() {
	      const isDark = this.previewTheme === 'dark';
	      return {
	        background: isDark ? 'linear-gradient(135deg, #1a1a2e 0%, #0d0d12 100%)' : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
	      };
	    },
	    currentCode() {
	      let code = this.activeTab === 'html' ? this.generatedHtml : this.generatedCss;
	      if (!code) code = '// No code generated yet';
	      if (this.activeTab === 'css') code = this.formatCss(code);
	      return this.syntaxHighlight(code, this.activeTab);
	    }
	  },
	  watch: {
	    primaryColor() { this.updateLivePreview(); },
	    textColor() { this.updateLivePreview(); },
	    fontFamily() { this.updateLivePreview(); },
	    borderRadius() { this.updateLivePreview(); },
	    stylePreset() { this.updateLivePreview(); },
	    category() { this.updateLivePreview(); }
	  },
	  methods: {
	    getTemplateGenerator() {
	      const generators = {
	        button: this.generateButtonTemplate,
	        card: this.generateCardTemplate,
	        input: this.generateInputTemplate,
	        navbar: this.generateNavbarTemplate,
	        pricing: this.generatePricingTemplate,
	        hero: this.generateHeroTemplate,
	        features: this.generateFeaturesTemplate,
	        testimonial: this.generateTestimonialTemplate,
	        alert: this.generateAlertTemplate
	      };
	      return generators[this.category] || null;
	    },
	    updateLivePreview() {
	      if (!this.generatedHtml) return;
	      const generator = this.getTemplateGenerator();
	      if (!generator) return;
	      const result = generator.call(this);
	      this.generatedHtml = result.html;
	      this.generatedCss = result.css;
	    },
	    selectCategory(cat) {
	      this.category = cat;
	    },
    getContrastColor(hex) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      return luminance > 0.5 ? '#1a1a2e' : '#ffffff';
    },
    adjustColor(hex, amount) {
      const num = parseInt(hex.slice(1), 16);
      const r = Math.min(255, Math.max(0, (num >> 16) + amount));
      const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount));
      const b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount));
      return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
    },
	    hexToRgba(hex, alpha) {
	      const r = parseInt(hex.slice(1, 3), 16);
	      const g = parseInt(hex.slice(3, 5), 16);
	      const b = parseInt(hex.slice(5, 7), 16);
	      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
	    },
	    getBaseFontCss() {
	      return `font-family: ${this.fontFamily};`;
	    },
	    getBaseTextCss() {
	      return `color: ${this.textColor};`;
	    },
	    randomHexColor() {
	      return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
	    },
	    showNotification(message, type = 'success') {
	      this.toastMessage = message;
	      this.toastType = type;
	      this.showToast = true;
	      setTimeout(() => { this.showToast = false; }, 3000);
	    },
	    escapeHtml(code) {
	      return code
	        .replace(/&/g, '&amp;')
	        .replace(/</g, '&lt;')
	        .replace(/>/g, '&gt;');
	    },
	    formatCss(css) {
	      return css
	        .replace(/\s*{\s*/g, ' {\n  ')
	        .replace(/;\s*/g, ';\n  ')
	        .replace(/\s*}\s*/g, '\n}\n')
	        .replace(/\n\s*\n/g, '\n')
	        .replace(/\n  \}/g, '\n}')
	        .trim();
	    },
	    syntaxHighlight(code, language) {
	      if (language === 'html') {
	        code = this.escapeHtml(code)
	          .replace(/(".*?")/g, '<span style="color:#a5d6a7">$1</span>')
	          .replace(/(&lt;\/?)([\w-]+)/g, '$1<span style="color:#ff8a65">$2</span>')
	          .replace(/(\s)(class|id|href|type|placeholder)(=)/g, '$1<span style="color:#80cbc4">$2</span>$3');
	      } else if (language === 'css') {
	        code = this.escapeHtml(code);
	      }
	      return code;
	    },
	    generateButtonTemplate() {
	      const { primaryColor, textColor, borderRadius } = this;
	      const html = `<button class="btn-generated">Get Started</button>`;
	      const css = `.btn-generated { ${this.getBaseFontCss()} display: inline-flex; align-items: center; justify-content: center; padding: 12px 24px; font-size: 16px; font-weight: 600; color: ${textColor}; background: ${primaryColor}; border: none; border-radius: ${borderRadius}px; cursor: pointer; box-shadow: 0 4px 14px ${this.hexToRgba(primaryColor, 0.4)}; transition: all 0.2s ease; } .btn-generated:hover { background: ${this.adjustColor(primaryColor, -10)}; transform: translateY(-2px); }`;
	      return { html, css };
	    },
	    generateCardTemplate() {
	      const { primaryColor, borderRadius } = this;
	      const html = `<div class="card-generated"><div class="card-content"><h3>Card Title</h3><p>A versatile card component</p><button>Learn More</button></div></div>`;
	      const css = `.card-generated { ${this.getBaseFontCss()} ${this.getBaseTextCss()} width: 300px; background: #fff; border-radius: ${borderRadius}px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); padding: 20px; } .card-content h3 { margin: 0 0 8px; } .card-content p { color: #666; margin: 0 0 16px; } .card-content button { padding: 10px 20px; background: ${primaryColor}; color: #fff; border: none; border-radius: 8px; cursor: pointer; }`;
	      return { html, css };
	    },
	    generateInputTemplate() {
	      const { primaryColor, borderRadius } = this;
	      const html = `<div class="input-group"><label>Email Address</label><input type="email" placeholder="Enter your email"></div>`;
	      const css = `.input-group { ${this.getBaseFontCss()} ${this.getBaseTextCss()} width: 320px; } .input-group label { display: block; margin-bottom: 8px; font-weight: 500; } .input-group input { width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: ${borderRadius}px; outline: none; } .input-group input:focus { border-color: ${primaryColor}; }`;
	      return { html, css };
	    },
	    generateNavbarTemplate() {
	      const { primaryColor } = this;
	      const html = `<nav class="navbar"><div>Brand</div><ul><li><a href="#">Home</a></li><li><a href="#">Products</a></li></ul><button>Get Started</button></nav>`;
	      const css = `.navbar { ${this.getBaseFontCss()} ${this.getBaseTextCss()} display: flex; justify-content: space-between; align-items: center; padding: 12px 24px; background: #fff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); } .navbar ul { list-style: none; display: flex; gap: 8px; } .navbar a { text-decoration: none; color: #666; } .navbar button { background: ${primaryColor}; color: #fff; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; }`;
	      return { html, css };
	    },
	    generatePricingTemplate() {
	      const { primaryColor } = this;
	      const html = `<div class="pricing-card"><h3>Pro Plan</h3><div class="price">$29<span>/mo</span></div><ul><li>Unlimited projects</li><li>Priority support</li></ul><button>Subscribe</button></div>`;
	      const css = `.pricing-card { ${this.getBaseFontCss()} ${this.getBaseTextCss()} width: 280px; padding: 28px; background: #fff; border: 2px solid ${primaryColor}; border-radius: 8px; text-align: center; } .pricing-card h3 { margin-top: 0; } .price { font-size: 48px; font-weight: 700; margin: 16px 0; } .price span { font-size: 14px; } .pricing-card ul { list-style: none; text-align: left; margin: 20px 0; } .pricing-card button { width: 100%; padding: 14px; background: ${primaryColor}; color: #fff; border: none; border-radius: 8px; cursor: pointer; }`;
	      return { html, css };
	    },
	    generateHeroTemplate() {
	      const { primaryColor } = this;
	      const html = `<section class="hero"><h1>Build something amazing</h1><p>Create beautiful interfaces</p><button>Get Started Free</button></section>`;
	      const css = `.hero { ${this.getBaseFontCss()} ${this.getBaseTextCss()} text-align: center; padding: 40px; } .hero h1 { font-size: 32px; margin: 0 0 16px; } .hero p { color: #666; margin: 0 0 28px; } .hero button { background: ${primaryColor}; color: #fff; border: none; padding: 14px 28px; border-radius: 8px; cursor: pointer; }`;
	      return { html, css };
	    },
	    generateFeaturesTemplate() {
	      const { primaryColor } = this;
	      const html = `<div class="features-grid"><div class="feature"><h3>Fast</h3><p>Optimized for speed</p></div><div class="feature"><h3>Secure</h3><p>Enterprise security</p></div></div>`;
	      const css = `.features-grid { ${this.getBaseFontCss()} ${this.getBaseTextCss()} display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; } .feature { padding: 24px; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); } .feature h3 { color: ${primaryColor}; }`;
	      return { html, css };
	    },
	    generateTestimonialTemplate() {
	      const { primaryColor } = this;
	      const html = `<div class="testimonial"><p>This tool is amazing!</p><span>Jane Doe</span></div>`;
	      const css = `.testimonial { ${this.getBaseFontCss()} ${this.getBaseTextCss()} padding: 28px; background: #fff; border-radius: 8px; border: 1px solid #ddd; } .testimonial span { color: ${primaryColor}; font-weight: 600; }`;
	      return { html, css };
	    },
	    generateAlertTemplate() {
	      const { primaryColor } = this;
	      const html = `<div class="alert"><strong>Success!</strong><p>Your changes have been saved.</p></div>`;
	      const css = `.alert { ${this.getBaseFontCss()} ${this.getBaseTextCss()} padding: 16px; background: ${this.hexToRgba(primaryColor, 0.1)}; border: 1px solid ${primaryColor}; border-radius: 8px; }`;
	      return { html, css };
	    },
	    async generateTemplate() {
	      if (this.isGenerating) return;
	      
	      this.isGenerating = true;

	      const generator = this.getTemplateGenerator();
	      if (generator) {
	        const result = generator.call(this);
	        this.generatedHtml = result.html;
	        this.generatedCss = result.css;
	      }

      this.isGenerating = false;
      this.showNotification('Template generated!');
    },
	    randomizeSettings() {
	      const colors = ['#00d4aa', '#ff6b6b', '#4ecdc4', '#45b7d1', '#f7dc6f', '#bb8fce'];
	      const textColors = ['#e8e8ed', '#1f2937', '#334155', '#0f172a', '#f8fafc'];
	      this.primaryColor = colors[Math.floor(Math.random() * colors.length)];
	      this.textColor = textColors[Math.floor(Math.random() * textColors.length)];
	      this.fontFamily = this.fontOptions[Math.floor(Math.random() * this.fontOptions.length)].value;
	      this.borderRadius = Math.floor(Math.random() * 25);
	      this.stylePreset = this.presets[Math.floor(Math.random() * this.presets.length)];
	      this.showNotification('Settings randomized!');
    },
    exportAsHtml() {
      if (!this.generatedHtml && !this.generatedCss) {
        this.showNotification('Generate a template first', 'error');
        return;
      }

      const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generated Component</title>
	  <style>
	    * { box-sizing: border-box; margin: 0; padding: 0; }
	    body { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%); font-family: ${this.fontFamily}; color: ${this.textColor}; }
	    ${this.generatedCss}
	  </style>
</head>
<body>
  ${this.generatedHtml}
</body>
</html>`;

      const blob = new Blob([fullHtml], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'component.html';
      a.click();
      URL.revokeObjectURL(url);
      this.showNotification('HTML file exported!');
    },
    async copyHtml() {
      if (!this.generatedHtml) {
        this.showNotification('No HTML to copy', 'error');
        return;
      }
      await navigator.clipboard.writeText(this.generatedHtml);
      this.showNotification('HTML copied!');
    },
	    async copyCss() {
	      if (!this.generatedCss) {
	        this.showNotification('No CSS to copy', 'error');
	        return;
	      }
	      await navigator.clipboard.writeText(this.formatCss(this.generatedCss));
	      this.showNotification('CSS copied!');
	    },
    clearAll() {
      this.generatedHtml = '';
      this.generatedCss = '';
      this.customPrompt = '';
      this.showNotification('Cleared!');
    }
  },
  mounted() {
    console.log('UI Template Generator mounted');
  }
};
</script>
