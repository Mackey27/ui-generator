
<style>
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

.type-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(4, 6, 14, 0.7);
  backdrop-filter: blur(4px);
  z-index: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.type-modal {
  width: min(680px, 100%);
  max-height: 80vh;
  overflow: auto;
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
  padding: clamp(24px, 5vw, 64px);
  min-height: clamp(420px, 50vh, 640px);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.preview-iframe {
  width: 100%;
  min-height: clamp(500px, 48vh, 620px);
  border: 0;
  border-radius: 8px;
  background: transparent;
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

.app-footer {
  margin-top: 28px;
  padding-top: 14px;
  border-top: 1px solid var(--border);
  color: var(--muted);
  font-size: 13px;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.app-footer strong {
  color: var(--fg);
  font-weight: 600;
}

.footer-meta {
  justify-content: center;
}

.footer-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--fg);
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
            Template UI Generator
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
	                <div
	                  v-for="cat in visibleCategories"
	                  :key="cat"
	                  @click="selectCategory(cat)"
	                  :class="['category-card', { selected: category === cat }]"
	                  :data-category="cat"
	                >
	                  <svg class="w-5 h-5 mx-auto mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
	                    <component v-for="(node, idx) in getCategoryIconNodes(cat)" :is="node.tag" :key="`${cat}-main-${idx}`" v-bind="node.attrs" />
	                  </svg>
	                  <span class="text-xs font-medium">{{ formatCategoryLabel(cat) }}</span>
	                </div>
	              </div>
	              <button
	                v-if="hasHiddenCategories"
	                @click="openTypeModal"
	                class="btn-secondary w-full mt-3 text-sm"
	              >
	                More Types ({{ hiddenCategoryCount }})
	              </button>
	            </div>
	          </div>

          <StyleOptions
            :primary-color="primaryColor"
            :text-color="textColor"
            :font-family="fontFamily"
            :font-options="fontOptions"
            :border-radius="borderRadius"
            :style-preset="stylePreset"
            :presets="presets"
            :preview-theme="previewTheme"
            @update:primaryColor="primaryColor = $event"
            @update:textColor="textColor = $event"
            @update:fontFamily="fontFamily = $event"
            @update:borderRadius="borderRadius = $event"
            @update:stylePreset="stylePreset = $event"
            @update:previewTheme="previewTheme = $event"
            @randomize="randomizeSettings"
          />

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

	        <PreviewCode
	          :generated-html="generatedHtml"
	          :preview-src-doc="previewSrcDoc"
	          :current-code="currentCode"
          :active-tab="activeTab"
          @update:activeTab="activeTab = $event"
          @copy-html="copyHtml"
          @copy-css="copyCss"
	          @copy-js="copyJs"
	        />
	      </div>
		    </main>

	    <footer class="app-footer max-w-7xl mx-auto flex flex-col items-center justify-center gap-2 text-center stagger-in" style="animation-delay: 0.35s;">
	      <p><strong>Template UI Generator</strong> • Build faster with reusable UI blocks</p>
	      <div class="footer-meta flex flex-wrap items-center justify-center gap-4">
	        <span>{{ categories.length }} template types</span>
	        <span>HTML • CSS • JS</span>
	        <span>{{ currentYear }}</span>
	        <a class="footer-link flex items-center gap-2" href="https://ui-template.vercel.app" target="_blank" rel="noopener noreferrer">
	          <i class="fab fa-github"></i>
	        </a>
	      </div>
	      <p class="text-sm text-muted">Developed by <strong>Nino Mark Zaspa</strong></p>
	    </footer>

			    <div v-if="isTypeModalOpen" class="type-modal-backdrop" @click.self="closeTypeModal">
		      <div class="type-modal panel">
		        <div class="panel-header justify-between">
		          <span class="font-semibold">More Template Types</span>
		          <button @click="closeTypeModal" class="btn-icon" aria-label="Close more types">
	            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
	              <line x1="18" y1="6" x2="6" y2="18"></line>
	              <line x1="6" y1="6" x2="18" y2="18"></line>
	            </svg>
	          </button>
	        </div>
		        <div v-if="isLoadingMoreTypes" class="p-8 flex flex-col items-center gap-3 text-[var(--muted)]">
		          <div class="spinner"></div>
		          <span class="text-sm">Loading template types...</span>
		        </div>
		        <div v-else class="p-4">
		          <div class="grid grid-cols-3 gap-2">
		            <div
		              v-for="cat in hiddenCategories"
		              :key="`hidden-${cat}`"
		              @click="selectHiddenCategory(cat)"
		              :class="['category-card', { selected: category === cat }]"
		              :data-category="cat"
		            >
		              <svg class="w-5 h-5 mx-auto mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		                <component v-for="(node, idx) in getCategoryIconNodes(cat)" :is="node.tag" :key="`${cat}-modal-${idx}`" v-bind="node.attrs" />
		              </svg>
		              <span class="text-xs font-medium">{{ formatCategoryLabel(cat) }}</span>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>

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
import StyleOptions from './style-options.vue';
import PreviewCode from './preview-code.vue';

export default {
  name: 'UITemplateGenerator',
  components: {
    StyleOptions,
    PreviewCode
  },
	  data() {
	    return {
			      categories: ['button', 'card', 'input', 'navbar', 'pricing', 'hero', 'features', 'testimonial', 'alert', 'modal', 'footer', 'badge', 'cta', 'faq', 'stats', 'profile', 'timeline', 'progress', 'table', 'accordion', 'steps', 'contact', 'newsletter', 'login', 'signup', 'dashboard', 'chart', 'kpi', 'avatar', 'breadcrumbs', 'tabs', 'carousel', 'skeleton', 'empty-state', 'search', 'filter', 'dropdown', 'switch', 'checkbox', 'radio', 'tooltip', 'toast-banner', 'countdown'],
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
	      generatedJs: '',
		      isGenerating: false,
		      activeTab: 'html',
		      isTypeModalOpen: false,
		      isLoadingMoreTypes: false,
		      moreTypesLoadTimer: null,
		      initialVisibleTypes: 6,
	      showToast: false,
	      toastMessage: '',
	      toastType: 'success',
      apiKey: ''
    };
  },
		  computed: {
		    currentYear() {
		      return new Date().getFullYear();
		    },
		    previewStyle() {
		      const isDark = this.previewTheme === 'dark';
		      return {
	        background: isDark ? 'linear-gradient(135deg, #1a1a2e 0%, #0d0d12 100%)' : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
	      };
	    },
		    currentCode() {
		      let code = this.generatedHtml;
	      if (this.activeTab === 'css') code = this.generatedCss;
	      if (this.activeTab === 'js') code = this.generatedJs;
	      if (!code) code = '// No code generated yet';
	      if (this.activeTab === 'css') code = this.formatCss(code);
	      if (this.activeTab === 'js') code = this.formatJs(code);
		      return this.syntaxHighlight(code, this.activeTab);
		    },
		    hasHiddenCategories() {
		      return this.categories.length > this.initialVisibleTypes;
		    },
		    hiddenCategoryCount() {
		      return Math.max(this.categories.length - this.initialVisibleTypes, 0);
		    },
		    visibleCategories() {
		      return this.categories.slice(0, this.initialVisibleTypes);
		    },
		    hiddenCategories() {
		      return this.categories.slice(this.initialVisibleTypes);
		    },
		    previewSrcDoc() {
	      const backgrounds = {
	        light: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
	        dark: 'linear-gradient(135deg, #1a1a2e 0%, #0d0d12 100%)',
	        ocean: 'linear-gradient(135deg, #0f172a 0%, #0ea5e9 100%)',
	        sunset: 'linear-gradient(135deg, #7c2d12 0%, #fb7185 55%, #fdba74 100%)',
	        forest: 'linear-gradient(135deg, #052e16 0%, #166534 55%, #4ade80 100%)',
	        aurora: 'linear-gradient(135deg, #312e81 0%, #0ea5e9 50%, #22c55e 100%)'
	      };
	      const bg = backgrounds[this.previewTheme] || backgrounds.light;
	      return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${bg};
      font-family: ${this.fontFamily};
      color: ${this.textColor};
      --primary-color: ${this.primaryColor};
      --primary-color-dark: ${this.adjustColor(this.primaryColor, -10)};
      --primary-color-soft: ${this.hexToRgba(this.primaryColor, 0.2)};
      --primary-color-ink: ${this.adjustColor(this.primaryColor, -40)};
      padding: 24px;
    }
    ${this.generatedCss || ''}
  </style>
</head>
<body>
  ${this.generatedHtml || ''}
  <script>
    ${this.generatedJs || ''}
  <\/script>
</body>
</html>`;
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
			        alert: this.generateAlertTemplate,
			        modal: this.generateModalTemplate,
			        footer: this.generateFooterTemplate,
			        badge: this.generateBadgeTemplate,
			        cta: this.generateCtaTemplate,
			        faq: this.generateFaqTemplate,
			        stats: this.generateStatsTemplate,
			        profile: this.generateProfileTemplate,
			        timeline: this.generateTimelineTemplate,
			        progress: this.generateProgressTemplate,
			        table: this.generateTableTemplate,
			        accordion: this.generateAccordionTemplate
			      };
			      if (generators[this.category]) return generators[this.category];
			      const extendedCategories = [
				        'steps',
				        'contact',
				        'newsletter',
			        'login',
			        'signup',
			        'dashboard',
			        'chart',
			        'kpi',
			        'avatar',
			        'breadcrumbs',
			        'tabs',
			        'carousel',
			        'skeleton',
			        'empty-state',
				        'search',
			        'filter',
			        'dropdown',
			        'switch',
			        'checkbox',
			        'radio',
			        'tooltip',
			        'toast-banner',
			        'countdown'
			      ];
			      if (extendedCategories.includes(this.category)) return this.generateExtendedTemplate;
			      return this.generateGenericSectionTemplate;
		    },
		    updateLivePreview() {
		      if (!this.generatedHtml) return;
		      const generator = this.getTemplateGenerator();
		      if (!generator) return;
		      const result = generator.call(this);
		      this.generatedHtml = result.html;
		      this.generatedCss = this.buildGeneratedCss(result.css);
		      this.generatedJs = this.generateJsForCategory();
		    },
	    selectCategory(cat) {
	      this.category = cat;
	    },
	    selectHiddenCategory(cat) {
	      this.selectCategory(cat);
	      this.closeTypeModal();
	    },
	    openTypeModal() {
	      this.isTypeModalOpen = true;
	      this.isLoadingMoreTypes = true;
	      if (this.moreTypesLoadTimer) {
	        clearTimeout(this.moreTypesLoadTimer);
	      }
	      this.moreTypesLoadTimer = setTimeout(() => {
	        this.isLoadingMoreTypes = false;
	        this.moreTypesLoadTimer = null;
	      }, 350);
	    },
	    closeTypeModal() {
	      this.isTypeModalOpen = false;
	      this.isLoadingMoreTypes = false;
	      if (this.moreTypesLoadTimer) {
	        clearTimeout(this.moreTypesLoadTimer);
	        this.moreTypesLoadTimer = null;
	      }
	    },
	    handleGlobalKeydown(event) {
	      if (event.key === 'Escape' && this.isTypeModalOpen) {
	        this.closeTypeModal();
	      }
	    },
	    formatCategoryLabel(cat) {
	      const labels = {
	        cta: 'CTA',
	        faq: 'FAQ',
	        kpi: 'KPI'
	      };
	      if (labels[cat]) return labels[cat];
	      return cat
	        .split('-')
	        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
	        .join(' ');
	    },
	    getCategoryIconNodes(cat) {
	      const iconMap = {
	        button: [
	          { tag: 'rect', attrs: { x: '4', y: '7', width: '16', height: '10', rx: '3' } },
	          { tag: 'line', attrs: { x1: '8', y1: '12', x2: '16', y2: '12' } }
	        ],
	        card: [
	          { tag: 'rect', attrs: { x: '4', y: '4', width: '16', height: '16', rx: '2' } },
	          { tag: 'line', attrs: { x1: '4', y1: '9', x2: '20', y2: '9' } }
	        ],
	        input: [
	          { tag: 'rect', attrs: { x: '3', y: '7', width: '18', height: '10', rx: '2' } },
	          { tag: 'circle', attrs: { cx: '18', cy: '12', r: '1' } }
	        ],
	        navbar: [
	          { tag: 'line', attrs: { x1: '4', y1: '7', x2: '20', y2: '7' } },
	          { tag: 'line', attrs: { x1: '4', y1: '12', x2: '14', y2: '12' } },
	          { tag: 'line', attrs: { x1: '4', y1: '17', x2: '20', y2: '17' } }
	        ],
	        pricing: [
	          { tag: 'rect', attrs: { x: '5', y: '4', width: '14', height: '16', rx: '2' } },
	          { tag: 'path', attrs: { d: 'M12 8v8' } },
	          { tag: 'path', attrs: { d: 'M9.5 10.5c0-1 1-1.5 2.5-1.5s2.5.5 2.5 1.5-1 1.5-2.5 1.5-2.5.5-2.5 1.5 1 1.5 2.5 1.5 2.5-.5 2.5-1.5' } }
	        ],
	        hero: [
	          { tag: 'path', attrs: { d: 'M4 17l5-6 4 3 3-4 4 7' } },
	          { tag: 'circle', attrs: { cx: '8', cy: '7', r: '1.5' } }
	        ],
	        features: [
	          { tag: 'rect', attrs: { x: '4', y: '4', width: '6', height: '6', rx: '1' } },
	          { tag: 'rect', attrs: { x: '14', y: '4', width: '6', height: '6', rx: '1' } },
	          { tag: 'rect', attrs: { x: '4', y: '14', width: '6', height: '6', rx: '1' } },
	          { tag: 'rect', attrs: { x: '14', y: '14', width: '6', height: '6', rx: '1' } }
	        ],
	        testimonial: [
	          { tag: 'path', attrs: { d: 'M6 9h5v4H8l-2 2V9z' } },
	          { tag: 'path', attrs: { d: 'M13 9h5v4h-3l-2 2V9z' } }
	        ],
	        alert: [
	          { tag: 'path', attrs: { d: 'M12 4l8 14H4L12 4z' } },
	          { tag: 'line', attrs: { x1: '12', y1: '10', x2: '12', y2: '13' } },
	          { tag: 'circle', attrs: { cx: '12', cy: '16', r: '0.8', fill: 'currentColor', stroke: 'none' } }
	        ],
	        modal: [
	          { tag: 'rect', attrs: { x: '4', y: '5', width: '16', height: '14', rx: '2' } },
	          { tag: 'line', attrs: { x1: '8', y1: '9', x2: '16', y2: '9' } },
	          { tag: 'line', attrs: { x1: '8', y1: '13', x2: '12', y2: '13' } }
	        ],
	        footer: [
	          { tag: 'line', attrs: { x1: '4', y1: '8', x2: '20', y2: '8' } },
	          { tag: 'rect', attrs: { x: '4', y: '10', width: '16', height: '8', rx: '1' } },
	          { tag: 'line', attrs: { x1: '8', y1: '14', x2: '10', y2: '14' } },
	          { tag: 'line', attrs: { x1: '14', y1: '14', x2: '16', y2: '14' } }
	        ],
	        badge: [
	          { tag: 'path', attrs: { d: 'M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z' } },
	          { tag: 'polyline', attrs: { points: '9 12 11 14 15 10' } }
	        ],
	        cta: [
	          { tag: 'circle', attrs: { cx: '12', cy: '12', r: '8' } },
	          { tag: 'polyline', attrs: { points: '10 9 15 12 10 15' } }
	        ],
	        faq: [
	          { tag: 'circle', attrs: { cx: '12', cy: '12', r: '9' } },
	          { tag: 'path', attrs: { d: 'M9.5 9.5a2.5 2.5 0 1 1 3.7 2.2c-.8.4-1.2.8-1.2 1.8' } },
	          { tag: 'circle', attrs: { cx: '12', cy: '16.5', r: '0.8', fill: 'currentColor', stroke: 'none' } }
	        ],
	        stats: [
	          { tag: 'line', attrs: { x1: '5', y1: '19', x2: '19', y2: '19' } },
	          { tag: 'rect', attrs: { x: '6', y: '11', width: '2.5', height: '8', rx: '1' } },
	          { tag: 'rect', attrs: { x: '10.75', y: '8', width: '2.5', height: '11', rx: '1' } },
	          { tag: 'rect', attrs: { x: '15.5', y: '5', width: '2.5', height: '14', rx: '1' } }
	        ],
	        profile: [
	          { tag: 'circle', attrs: { cx: '12', cy: '8', r: '3.5' } },
	          { tag: 'path', attrs: { d: 'M5 19c0-3.2 2.8-5 7-5s7 1.8 7 5' } }
	        ],
	        timeline: [
	          { tag: 'line', attrs: { x1: '7', y1: '5', x2: '7', y2: '19' } },
	          { tag: 'circle', attrs: { cx: '7', cy: '7', r: '1.4' } },
	          { tag: 'circle', attrs: { cx: '7', cy: '12', r: '1.4' } },
	          { tag: 'circle', attrs: { cx: '7', cy: '17', r: '1.4' } },
	          { tag: 'line', attrs: { x1: '10.5', y1: '7', x2: '19', y2: '7' } },
	          { tag: 'line', attrs: { x1: '10.5', y1: '12', x2: '19', y2: '12' } },
	          { tag: 'line', attrs: { x1: '10.5', y1: '17', x2: '16', y2: '17' } }
	        ],
	        progress: [
	          { tag: 'rect', attrs: { x: '3', y: '9', width: '18', height: '6', rx: '3' } },
	          { tag: 'path', attrs: { d: 'M6 12h8' } }
	        ],
	        table: [
	          { tag: 'rect', attrs: { x: '4', y: '5', width: '16', height: '14', rx: '1' } },
	          { tag: 'line', attrs: { x1: '4', y1: '10', x2: '20', y2: '10' } },
	          { tag: 'line', attrs: { x1: '10', y1: '5', x2: '10', y2: '19' } },
	          { tag: 'line', attrs: { x1: '15', y1: '5', x2: '15', y2: '19' } }
	        ],
	        accordion: [
	          { tag: 'rect', attrs: { x: '4', y: '6', width: '16', height: '4', rx: '1' } },
	          { tag: 'rect', attrs: { x: '4', y: '11', width: '16', height: '4', rx: '1' } },
	          { tag: 'rect', attrs: { x: '4', y: '16', width: '16', height: '4', rx: '1' } }
	        ]
	      };
	      return iconMap[cat] || iconMap.button;
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
		    getCategoryAnimationTarget() {
		      const map = {
		        button: '.btn-generated',
		        card: '.card-generated',
		        input: '.input-group',
		        navbar: '.navbar',
		        pricing: '.pricing-card',
		        hero: '.hero',
		        features: '.features-grid',
		        testimonial: '.testimonial',
		        alert: '.alert',
		        modal: '.modal-demo',
		        footer: '.footer-generated',
		        badge: '.badge-wrap',
		        cta: '.cta-generated',
		        faq: '.faq-generated',
		        stats: '.stats-generated',
		        profile: '.profile-generated',
		        timeline: '.timeline-generated',
		        progress: '.progress-generated',
		        table: '.table-generated',
		        accordion: '.accordion-generated',
		        steps: '.steps-generated',
		        contact: '.contact-generated',
		        newsletter: '.newsletter-generated',
		        login: '.login-generated',
		        signup: '.signup-generated',
		        dashboard: '.dashboard-generated',
		        chart: '.chart-generated',
		        kpi: '.kpi-generated',
		        avatar: '.avatar-generated',
		        breadcrumbs: '.breadcrumbs-generated',
		        tabs: '.tabs-generated',
		        carousel: '.carousel-generated',
		        skeleton: '.skeleton-generated',
		        'empty-state': '.empty-state-generated',
		        search: '.search-generated',
		        filter: '.filter-generated',
		        dropdown: '.dropdown-generated',
		        switch: '.switch-generated',
		        checkbox: '.checkbox-generated',
		        radio: '.radio-generated',
		        tooltip: '.tooltip-generated',
		        'toast-banner': '.toast-banner-generated',
		        countdown: '.countdown-generated'
		      };
		      return map[this.category] || '.generic-block';
		    },
		    getAnimationCssForCategory() {
		      const target = this.getCategoryAnimationTarget();
		      const extras = {
		        dashboard: `.dashboard-generated .dashboard-mini-bar { animation: uiPreviewGrow 700ms ease both; } .dashboard-generated .dashboard-mini-bar:nth-child(2) { animation-delay: 60ms; } .dashboard-generated .dashboard-mini-bar:nth-child(3) { animation-delay: 120ms; } .dashboard-generated .dashboard-mini-bar:nth-child(4) { animation-delay: 180ms; } .dashboard-generated .dashboard-mini-bar:nth-child(5) { animation-delay: 240ms; } .dashboard-generated .dashboard-mini-bar:nth-child(6) { animation-delay: 300ms; } .dashboard-generated .dashboard-sparkline polyline { stroke-dasharray: 360; stroke-dashoffset: 360; animation: uiPreviewDraw 950ms ease forwards 140ms; }`,
		        chart: `.chart-generated .bar { animation: uiPreviewGrow 700ms ease both; transform-origin: bottom; } .chart-generated .bar:nth-child(2) { animation-delay: 60ms; } .chart-generated .bar:nth-child(3) { animation-delay: 120ms; } .chart-generated .bar:nth-child(4) { animation-delay: 180ms; } .chart-generated .bar:nth-child(5) { animation-delay: 240ms; }`,
		        stats: `.stats-generated .stat-card { animation: uiPreviewPop 460ms ease both; } .stats-generated .stat-card:nth-child(2) { animation-delay: 90ms; } .stats-generated .stat-card:nth-child(3) { animation-delay: 180ms; }`,
		        kpi: `.kpi-generated > * { animation: uiPreviewPop 460ms ease both; } .kpi-generated > *:nth-child(2) { animation-delay: 80ms; } .kpi-generated > *:nth-child(3) { animation-delay: 160ms; }`,
		        countdown: `.countdown-generated .count-item { animation: uiPreviewPop 460ms ease both; } .countdown-generated .count-item:nth-child(2) { animation-delay: 80ms; } .countdown-generated .count-item:nth-child(3) { animation-delay: 160ms; } .countdown-generated .count-item:nth-child(4) { animation-delay: 240ms; }`
		      };
		      return `${target} { animation: uiPreviewFadeUp 500ms cubic-bezier(0.22, 1, 0.36, 1) both; transform-origin: center; } ${target} > * { opacity: 0; animation: uiPreviewChildIn 420ms ease forwards; } ${target} > *:nth-child(1) { animation-delay: 70ms; } ${target} > *:nth-child(2) { animation-delay: 120ms; } ${target} > *:nth-child(3) { animation-delay: 170ms; } ${target} > *:nth-child(4) { animation-delay: 220ms; } ${target} > *:nth-child(5) { animation-delay: 270ms; } ${extras[this.category] || ''} @keyframes uiPreviewFadeUp { from { opacity: 0; transform: translateY(16px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } } @keyframes uiPreviewChildIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } } @keyframes uiPreviewGrow { from { transform: scaleY(0.15); opacity: 0.6; } to { transform: scaleY(1); opacity: 1; } } @keyframes uiPreviewDraw { to { stroke-dashoffset: 0; } } @keyframes uiPreviewPop { from { opacity: 0; transform: translateY(8px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }`;
		    },
		    getHoverBeforeAfterCssForCategory() {
		      const target = this.getCategoryAnimationTarget();
		      const rootOverflow = ['tooltip', 'dropdown'].includes(this.category) ? 'visible' : 'hidden';
		      const buttonSelector = `${target} button, ${target} .btn-generated, ${target} [role="button"]`;
		      const interactive = `${target} a, ${target} .badge, ${target} .filter-chip, ${target} .dashboard-metric`;
		      return `${target} { position: relative; isolation: isolate; overflow: ${rootOverflow}; transition: transform 220ms ease, box-shadow 220ms ease; } ${target}::before, ${target}::after { content: ''; position: absolute; pointer-events: none; z-index: 0; transition: all 260ms ease; } ${target}::before { width: 140px; height: 140px; top: -90px; left: -90px; border-radius: 999px; background: radial-gradient(circle, var(--primary-color-soft) 0%, transparent 70%); opacity: 0.35; } ${target}::after { left: 0; right: 0; bottom: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--primary-color), transparent); transform: scaleX(0); transform-origin: center; opacity: 0.85; } ${target}:hover { transform: translateY(-2px); box-shadow: 0 14px 26px rgba(0, 0, 0, 0.12); } ${target}:hover::before { opacity: 0.7; transform: scale(1.08); } ${target}:hover::after { transform: scaleX(1); } ${target} > * { position: relative; z-index: 1; } ${buttonSelector} { position: relative; z-index: 2; display: inline-flex; align-items: center; justify-content: center; line-height: 1.2; white-space: nowrap; text-align: center; min-height: 38px; transition: transform 180ms ease, filter 180ms ease; } ${buttonSelector}:hover { transform: translateY(-1px); filter: brightness(0.98); } ${interactive} { position: relative; overflow: hidden; transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease; } ${interactive}::before, ${interactive}::after { content: ''; position: absolute; pointer-events: none; transition: all 220ms ease; } ${interactive}::before { inset: auto auto 0 0; width: 0; height: 2px; background: var(--primary-color); } ${interactive}::after { inset: 0; border: 1px solid transparent; border-radius: inherit; } ${interactive}:hover { transform: translateY(-1px); } ${interactive}:hover::before { width: 100%; } ${interactive}:hover::after { border-color: var(--primary-color-soft); }`;
		    },
		    buildGeneratedCss(baseCss) {
		      return `${baseCss || ''} ${this.getAnimationCssForCategory()} ${this.getHoverBeforeAfterCssForCategory()}`.trim();
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
	    formatJs(js) {
	      return (js || '').trim();
	    },
	    syntaxHighlight(code, language) {
	      if (language === 'html') {
	        code = this.escapeHtml(code)
	          .replace(/(".*?")/g, '<span style="color:#a5d6a7">$1</span>')
	          .replace(/(&lt;\/?)([\w-]+)/g, '$1<span style="color:#ff8a65">$2</span>')
	          .replace(/(\s)(class|id|href|type|placeholder)(=)/g, '$1<span style="color:#80cbc4">$2</span>$3');
	      } else if (language === 'css') {
	        code = this.escapeHtml(code);
	      } else if (language === 'js') {
	        code = this.escapeHtml(code);
	      }
	      return code;
	    },
	    generateJsForCategory() {
	      const scripts = {
	        button: `const button = document.querySelector('.btn-generated');
if (button) {
  button.addEventListener('click', () => {
    const original = button.textContent;
    button.textContent = 'Clicked!';
    button.style.transform = 'translateY(0)';
    setTimeout(() => {
      button.textContent = original;
    }, 500);
  });
}`,
	        card: `const cardButton = document.querySelector('.card-content button');
if (cardButton) {
  cardButton.addEventListener('click', () => {
    cardButton.textContent = cardButton.textContent === 'Learn More' ? 'Opened' : 'Learn More';
  });
}`,
	        input: `const emailInput = document.querySelector('.input-group input');
if (emailInput) {
  emailInput.addEventListener('blur', () => {
    emailInput.style.borderColor = emailInput.value.includes('@') ? '#22c55e' : '#ef4444';
  });
}`,
		        navbar: `document.querySelectorAll('.navbar .navbar-link').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const selection = window.getSelection();
    if (selection) selection.removeAllRanges();
  });
});
const navButton = document.querySelector('.navbar button');
	if (navButton) {
	  navButton.addEventListener('click', () => {
	    navButton.textContent = navButton.textContent === 'Get Started' ? 'Welcome!' : 'Get Started';
	  });
	}`,
	        pricing: `const subButton = document.querySelector('.pricing-card button');
if (subButton) {
  subButton.addEventListener('click', () => {
    subButton.textContent = 'Subscribed';
    subButton.disabled = true;
  });
}`,
	        hero: `const heroButton = document.querySelector('.hero button');
if (heroButton) {
  heroButton.addEventListener('click', () => {
    heroButton.textContent = 'Launching...';
    setTimeout(() => { heroButton.textContent = 'Get Started Free'; }, 900);
  });
}`,
	        features: `document.querySelectorAll('.feature').forEach((item) => {
  item.addEventListener('mouseenter', () => { item.style.transform = 'translateY(-4px)'; });
  item.addEventListener('mouseleave', () => { item.style.transform = 'translateY(0)'; });
});`,
	        testimonial: `const quote = document.querySelector('.testimonial p');
if (quote) {
  quote.addEventListener('click', () => {
    quote.textContent = quote.textContent.includes('amazing') ? 'Simple, fast, and flexible!' : 'This tool is amazing!';
  });
}`,
		        alert: `const alertBox = document.querySelector('.alert');
	if (alertBox) {
	  alertBox.addEventListener('click', () => {
	    alertBox.style.opacity = '0.5';
	    setTimeout(() => { alertBox.style.opacity = '1'; }, 250);
	  });
	}`,
	        modal: `const modal = document.querySelector('.modal-generated');
const openBtn = document.querySelector('.modal-open');
const closeBtn = document.querySelector('.modal-close');
if (modal && openBtn && closeBtn) {
  openBtn.addEventListener('click', () => { modal.classList.add('is-open'); });
  closeBtn.addEventListener('click', () => { modal.classList.remove('is-open'); });
}`,
	        footer: `document.querySelectorAll('.footer-links a').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    link.style.opacity = '0.6';
    setTimeout(() => { link.style.opacity = '1'; }, 250);
  });
});`,
		        badge: `document.querySelectorAll('.badge').forEach((item) => {
	  item.addEventListener('click', () => {
	    item.classList.toggle('is-active');
	  });
	});`,
	        cta: `const ctaBtn = document.querySelector('.cta-button');
if (ctaBtn) {
  ctaBtn.addEventListener('click', () => {
    ctaBtn.textContent = ctaBtn.textContent === 'Start Free Trial' ? 'Awesome!' : 'Start Free Trial';
  });
}`,
	        faq: `document.querySelectorAll('.faq-item button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    item.classList.toggle('is-open');
  });
});`,
	        stats: `document.querySelectorAll('.stat-value').forEach((value) => {
  const target = Number(value.dataset.target || 0);
  let current = 0;
  const timer = setInterval(() => {
    current += Math.max(1, Math.ceil(target / 25));
    if (current >= target) {
      value.textContent = target + '+';
      clearInterval(timer);
      return;
    }
    value.textContent = current + '+';
  }, 25);
});`,
	        profile: `const followBtn = document.querySelector('.profile-action');
if (followBtn) {
  followBtn.addEventListener('click', () => {
    const following = followBtn.classList.toggle('is-following');
    followBtn.textContent = following ? 'Following' : 'Follow';
  });
}`,
	        timeline: `document.querySelectorAll('.timeline-item').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.timeline-item').forEach((el) => el.classList.remove('is-active'));
    item.classList.add('is-active');
  });
});`,
	        progress: `const progressBtn = document.querySelector('.progress-action');
const progressBar = document.querySelector('.progress-fill');
if (progressBtn && progressBar) {
  progressBtn.addEventListener('click', () => {
    const value = Math.floor(Math.random() * 71) + 20;
    progressBar.style.width = value + '%';
  });
}`,
	        table: `document.querySelectorAll('.table-generated tbody tr').forEach((row) => {
  row.addEventListener('click', () => {
    row.classList.toggle('is-selected');
  });
});`,
		        accordion: `document.querySelectorAll('.accordion-item .accordion-trigger').forEach((trigger) => {
		  trigger.addEventListener('click', () => {
		    const item = trigger.parentElement;
		    item.classList.toggle('is-open');
		  });
		});`,
		        steps: `const stepItems = document.querySelectorAll('.steps-generated .step-item');
const nextStepBtn = document.querySelector('.steps-next');
if (stepItems.length && nextStepBtn) {
  let current = 0;
  nextStepBtn.addEventListener('click', () => {
    stepItems[current].classList.remove('is-active');
    current = (current + 1) % stepItems.length;
    stepItems[current].classList.add('is-active');
  });
}`,
		        contact: `const contactForm = document.querySelector('.contact-generated form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = contactForm.querySelector('button');
    if (!button) return;
    button.textContent = 'Sent!';
    setTimeout(() => { button.textContent = 'Send Message'; }, 900);
  });
}`,
		        newsletter: `const newsletterForm = document.querySelector('.newsletter-generated form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const note = newsletterForm.querySelector('.newsletter-note');
    if (note) note.textContent = 'Thanks! You are subscribed.';
  });
}`,
		        login: `const loginBtn = document.querySelector('.login-generated button');
if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    loginBtn.textContent = 'Signing in...';
    setTimeout(() => { loginBtn.textContent = 'Sign In'; }, 900);
  });
}`,
		        signup: `const signupBtn = document.querySelector('.signup-generated button');
if (signupBtn) {
  signupBtn.addEventListener('click', () => {
    signupBtn.textContent = 'Creating...';
    setTimeout(() => { signupBtn.textContent = 'Create Account'; }, 900);
  });
}`,
		        dashboard: `const dashboard = document.querySelector('.dashboard-generated');
if (dashboard) {
  const refreshBtn = dashboard.querySelector('.dashboard-refresh');
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const updateDashboard = () => {
    dashboard.querySelectorAll('.dashboard-metric .metric-value').forEach((node) => {
      const min = Number(node.dataset.min || 100);
      const max = Number(node.dataset.max || 999);
      node.textContent = String(random(min, max));
    });
    dashboard.querySelectorAll('.dashboard-metric .metric-trend').forEach((node) => {
      const value = random(2, 24);
      node.textContent = '+' + value + '%';
    });
    dashboard.querySelectorAll('.dashboard-mini-bar').forEach((bar) => {
      bar.style.height = random(30, 92) + '%';
    });
    const sparkline = dashboard.querySelector('.dashboard-sparkline polyline');
    if (sparkline) {
      const points = [0, 40, 80, 120, 160, 200, 240, 280, 320].map((x) => {
        const y = random(18, 64);
        return x + ',' + y;
      });
      sparkline.setAttribute('points', points.join(' '));
    }
  };
  if (refreshBtn) {
    refreshBtn.addEventListener('click', updateDashboard);
  }
}`,
		        chart: `const chartBtn = document.querySelector('.chart-randomize');
if (chartBtn) {
  chartBtn.addEventListener('click', () => {
    document.querySelectorAll('.chart-generated .bar').forEach((bar) => {
      bar.style.height = (Math.floor(Math.random() * 60) + 25) + '%';
    });
  });
}`,
		        kpi: `document.querySelectorAll('.kpi-generated .kpi-value').forEach((node) => {
  const target = Number(node.dataset.target || 0);
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 22));
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      node.textContent = target.toString();
      clearInterval(timer);
      return;
    }
    node.textContent = current.toString();
  }, 30);
});`,
		        avatar: `const addAvatarBtn = document.querySelector('.avatar-add');
if (addAvatarBtn) {
  addAvatarBtn.addEventListener('click', () => {
    const stack = document.querySelector('.avatar-stack');
    if (!stack) return;
    const item = document.createElement('span');
    item.className = 'avatar-chip';
    item.textContent = 'NX';
    stack.appendChild(item);
  });
}`,
		        breadcrumbs: `document.querySelectorAll('.breadcrumbs-generated a').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelectorAll('.breadcrumbs-generated a').forEach((el) => el.classList.remove('is-active'));
    link.classList.add('is-active');
  });
});`,
		        tabs: `document.querySelectorAll('.tabs-generated .tab-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const target = trigger.dataset.tab;
    document.querySelectorAll('.tabs-generated .tab-trigger').forEach((el) => el.classList.remove('is-active'));
    document.querySelectorAll('.tabs-generated .tab-panel').forEach((panel) => panel.classList.remove('is-active'));
    trigger.classList.add('is-active');
    const panel = document.querySelector('.tabs-generated .tab-panel[data-tab=\"' + target + '\"]');
    if (panel) panel.classList.add('is-active');
  });
});`,
		        carousel: `const carousel = document.querySelector('.carousel-generated');
if (carousel) {
  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
  const prev = carousel.querySelector('.carousel-prev');
  const next = carousel.querySelector('.carousel-next');
  let index = 0;
  const render = () => {
    if (track) track.style.transform = 'translateX(-' + (index * 100) + '%)';
  };
  if (prev) prev.addEventListener('click', () => { index = (index - 1 + slides.length) % slides.length; render(); });
  if (next) next.addEventListener('click', () => { index = (index + 1) % slides.length; render(); });
}`,
		        skeleton: `const skeletonBtn = document.querySelector('.skeleton-load');
if (skeletonBtn) {
  skeletonBtn.addEventListener('click', () => {
    const wrap = document.querySelector('.skeleton-generated');
    if (wrap) wrap.classList.toggle('is-loaded');
  });
}`,
		        'empty-state': `const emptyBtn = document.querySelector('.empty-state-generated .empty-action');
if (emptyBtn) {
  emptyBtn.addEventListener('click', () => {
    const desc = document.querySelector('.empty-state-generated .empty-desc');
    if (desc) desc.textContent = 'First item created successfully.';
  });
}`,
		        search: `const searchInput = document.querySelector('.search-generated input');
const searchItems = document.querySelectorAll('.search-generated li');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase();
    searchItems.forEach((item) => {
      item.style.display = item.textContent.toLowerCase().includes(term) ? '' : 'none';
    });
  });
}`,
		        filter: `document.querySelectorAll('.filter-generated .filter-chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.filter-generated .filter-chip').forEach((c) => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    const kind = chip.dataset.filter;
    document.querySelectorAll('.filter-generated .filter-card').forEach((card) => {
      card.style.display = kind === 'all' || card.dataset.kind === kind ? '' : 'none';
    });
  });
});`,
		        dropdown: `const dropdown = document.querySelector('.dropdown-generated');
if (dropdown) {
  const trigger = dropdown.querySelector('.dropdown-trigger');
  const menu = dropdown.querySelector('.dropdown-menu');
  const value = dropdown.querySelector('.dropdown-value');
  if (trigger && menu) {
    trigger.addEventListener('click', () => menu.classList.toggle('is-open'));
    menu.querySelectorAll('button').forEach((option) => {
      option.addEventListener('click', () => {
        if (value) value.textContent = option.textContent;
        menu.classList.remove('is-open');
      });
    });
  }
}`,
		        switch: `const switchInput = document.querySelector('.switch-generated input');
const switchLabel = document.querySelector('.switch-generated .switch-state');
if (switchInput && switchLabel) {
  switchInput.addEventListener('change', () => {
    switchLabel.textContent = switchInput.checked ? 'Enabled' : 'Disabled';
  });
}`,
		        checkbox: `const checkboxItems = document.querySelectorAll('.checkbox-generated input[type=\"checkbox\"]');
const checkboxCount = document.querySelector('.checkbox-generated .checkbox-count');
if (checkboxCount) {
  const sync = () => {
    const selected = Array.from(checkboxItems).filter((item) => item.checked).length;
    checkboxCount.textContent = selected + ' selected';
  };
  checkboxItems.forEach((item) => item.addEventListener('change', sync));
  sync();
}`,
		        radio: `const radioItems = document.querySelectorAll('.radio-generated input[type=\"radio\"]');
const radioValue = document.querySelector('.radio-generated .radio-value');
if (radioValue) {
  radioItems.forEach((item) => {
    item.addEventListener('change', () => {
      if (item.checked) radioValue.textContent = item.value;
    });
  });
}`,
		        tooltip: `const tooltipButton = document.querySelector('.tooltip-generated .tooltip-trigger');
if (tooltipButton) {
  tooltipButton.addEventListener('click', () => {
    tooltipButton.classList.toggle('is-open');
  });
}`,
		        'toast-banner': `const toastBtn = document.querySelector('.toast-banner-generated .toast-action');
const toast = document.querySelector('.toast-banner-generated .toast-live');
if (toastBtn && toast) {
  toastBtn.addEventListener('click', () => {
    toast.classList.add('is-show');
    setTimeout(() => { toast.classList.remove('is-show'); }, 1500);
  });
}`,
		        countdown: `const countdownRoot = document.querySelector('.countdown-generated');
if (countdownRoot) {
  const daysNode = countdownRoot.querySelector('[data-unit=\"days\"]');
  const hoursNode = countdownRoot.querySelector('[data-unit=\"hours\"]');
  const minutesNode = countdownRoot.querySelector('[data-unit=\"minutes\"]');
  const secondsNode = countdownRoot.querySelector('[data-unit=\"seconds\"]');
  let total = 3 * 24 * 60 * 60 + 6 * 60 * 60 + 20 * 60 + 35;
  const render = () => {
    const days = Math.floor(total / 86400);
    const hours = Math.floor((total % 86400) / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = total % 60;
    if (daysNode) daysNode.textContent = String(days).padStart(2, '0');
    if (hoursNode) hoursNode.textContent = String(hours).padStart(2, '0');
    if (minutesNode) minutesNode.textContent = String(minutes).padStart(2, '0');
    if (secondsNode) secondsNode.textContent = String(seconds).padStart(2, '0');
  };
  render();
  setInterval(() => {
    total = total > 0 ? total - 1 : 0;
    render();
  }, 1000);
}`
		      };
	      const genericScript = `const genericBtn = document.querySelector('.generic-action');
if (genericBtn) {
  genericBtn.addEventListener('click', () => {
    const original = genericBtn.textContent;
    genericBtn.textContent = 'Activated!';
    setTimeout(() => {
      genericBtn.textContent = original;
    }, 700);
  });
}`;
	      return scripts[this.category] || genericScript;
	    },
	    generateButtonTemplate() {
	      const { textColor, borderRadius } = this;
	      const html = `<button class="btn-generated">Get Started</button>`;
	      const css = `.btn-generated { ${this.getBaseFontCss()} display: inline-flex; align-items: center; justify-content: center; padding: 12px 24px; font-size: 16px; font-weight: 600; color: ${textColor}; background: var(--primary-color); border: none; border-radius: ${borderRadius}px; cursor: pointer; box-shadow: 0 4px 14px var(--primary-color-soft); transition: all 0.2s ease; } .btn-generated:hover { background: var(--primary-color-dark); transform: translateY(-2px); }`;
	      return { html, css };
	    },
	    generateCardTemplate() {
	      const { borderRadius } = this;
	      const html = `<div class="card-generated"><div class="card-content"><h3>Card Title</h3><p>A versatile card component</p><button>Learn More</button></div></div>`;
	      const css = `.card-generated { ${this.getBaseFontCss()} ${this.getBaseTextCss()} width: 300px; background: #fff; border-radius: ${borderRadius}px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); padding: 20px; } .card-content h3 { margin: 0 0 8px; color: var(--primary-color); } .card-content p { color: var(--primary-color-ink); margin: 0 0 16px; } .card-content button { padding: 10px 20px; background: var(--primary-color); color: #fff; border: none; border-radius: 8px; cursor: pointer; }`;
	      return { html, css };
	    },
	    generateInputTemplate() {
	      const { borderRadius } = this;
	      const html = `<div class="input-group"><label>Email Address</label><input type="email" placeholder="Enter your email"></div>`;
	      const css = `.input-group { ${this.getBaseFontCss()} ${this.getBaseTextCss()} width: 320px; } .input-group label { display: block; margin-bottom: 8px; font-weight: 500; color: var(--primary-color); } .input-group input { width: 100%; padding: 12px; border: 2px solid var(--primary-color-soft); border-radius: ${borderRadius}px; outline: none; } .input-group input:focus { border-color: var(--primary-color); }`;
	      return { html, css };
	    },
	    generateNavbarTemplate() {
	      const html = `<nav class="navbar"><div class="navbar-brand">Brand</div><ul class="navbar-links"><li><a href="#" class="navbar-link">Home</a></li><li><a href="#" class="navbar-link">Products</a></li></ul><button class="navbar-cta">Get Started</button></nav>`;
	      const css = `.navbar { ${this.getBaseFontCss()} width: 100%; max-width: 760px; display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 12px 18px; background: #fff; color: var(--primary-color-ink); border-radius: 10px; box-shadow: 0 6px 18px rgba(0,0,0,0.08); border: 1px solid var(--primary-color-soft); } .navbar, .navbar * { -webkit-tap-highlight-color: transparent; } .navbar *::selection { background: transparent; color: inherit; } .navbar-brand { font-weight: 700; color: var(--primary-color-dark); letter-spacing: 0.2px; user-select: none; -webkit-user-select: none; } .navbar-links { list-style: none; display: flex; align-items: center; gap: 18px; margin: 0; padding: 0; flex: 1; justify-content: center; } .navbar-link { display: inline-flex; align-items: center; text-decoration: none; color: var(--primary-color-ink); font-weight: 500; line-height: 1; padding: 6px 10px; border-radius: 6px; outline: none; user-select: none; -webkit-user-select: none; transition: color 0.2s ease, background-color 0.2s ease; } .navbar-link:hover { color: var(--primary-color-dark); background: var(--primary-color-soft); } .navbar-link:focus, .navbar-link:active, .navbar-link:visited { color: var(--primary-color-ink); } .navbar-link:focus-visible { box-shadow: 0 0 0 2px var(--primary-color-soft); } .navbar-cta { background: var(--primary-color); color: #fff; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: 600; transition: background 0.2s ease, transform 0.2s ease; } .navbar-cta:hover { background: var(--primary-color-dark); transform: translateY(-1px); }`;
	      return { html, css };
	    },
	    generatePricingTemplate() {
	      const html = `<div class="pricing-card"><h3>Pro Plan</h3><div class="price">$29<span>/mo</span></div><ul><li>Unlimited projects</li><li>Priority support</li></ul><button>Subscribe</button></div>`;
	      const css = `.pricing-card { ${this.getBaseFontCss()} ${this.getBaseTextCss()} width: 280px; padding: 28px; background: #fff; border: 2px solid var(--primary-color); border-radius: 8px; text-align: center; } .pricing-card h3 { margin-top: 0; color: var(--primary-color); } .price { font-size: 48px; font-weight: 700; margin: 16px 0; color: var(--primary-color); } .price span { font-size: 14px; color: var(--primary-color-ink); } .pricing-card ul { list-style: none; text-align: left; margin: 20px 0; } .pricing-card button { width: 100%; padding: 14px; background: var(--primary-color); color: #fff; border: none; border-radius: 8px; cursor: pointer; }`;
	      return { html, css };
	    },
	    generateHeroTemplate() {
	      const html = `<section class="hero"><h1>Build something amazing</h1><p>Create beautiful interfaces</p><button>Get Started Free</button></section>`;
	      const css = `.hero { ${this.getBaseFontCss()} ${this.getBaseTextCss()} text-align: center; padding: 40px; } .hero h1 { font-size: 32px; margin: 0 0 16px; color: var(--primary-color); } .hero p { color: var(--primary-color-ink); margin: 0 0 28px; } .hero button { background: var(--primary-color); color: #fff; border: none; padding: 14px 28px; border-radius: 8px; cursor: pointer; }`;
	      return { html, css };
	    },
	    generateFeaturesTemplate() {
	      const html = `<div class="features-grid"><div class="feature"><h3>Fast</h3><p>Optimized for speed</p></div><div class="feature"><h3>Secure</h3><p>Enterprise security</p></div></div>`;
	      const css = `.features-grid { ${this.getBaseFontCss()} ${this.getBaseTextCss()} display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; } .feature { padding: 24px; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px var(--primary-color-soft); } .feature h3 { color: var(--primary-color); } .feature p { color: var(--primary-color-ink); }`;
	      return { html, css };
	    },
	    generateTestimonialTemplate() {
	      const html = `<div class="testimonial"><p>This tool is amazing!</p><span>Jane Doe</span></div>`;
	      const css = `.testimonial { ${this.getBaseFontCss()} ${this.getBaseTextCss()} padding: 28px; background: #fff; border-radius: 8px; border: 1px solid var(--primary-color-soft); } .testimonial p { color: var(--primary-color-ink); } .testimonial span { color: var(--primary-color); font-weight: 600; }`;
	      return { html, css };
	    },
	    generateAlertTemplate() {
	      const html = `<div class="alert"><strong>Success!</strong><p>Your changes have been saved.</p></div>`;
	      const css = `.alert { ${this.getBaseFontCss()} ${this.getBaseTextCss()} padding: 16px; background: var(--primary-color-soft); border: 1px solid var(--primary-color); border-radius: 8px; }`;
	      return { html, css };
	    },
	    generateModalTemplate() {
	      const html = `<div class="modal-demo"><button class="modal-open">Open Modal</button><div class="modal-generated"><div class="modal-card"><h3>Confirm Action</h3><p>Are you sure you want to continue?</p><div class="modal-actions"><button class="modal-cancel modal-close">Cancel</button><button class="modal-confirm">Confirm</button></div></div></div></div>`;
	      const css = `.modal-demo { ${this.getBaseFontCss()} ${this.getBaseTextCss()} width: 100%; max-width: 520px; } .modal-open { background: var(--primary-color); color: #fff; border: none; border-radius: 8px; padding: 10px 18px; font-weight: 600; cursor: pointer; } .modal-generated { margin-top: 12px; display: none; } .modal-generated.is-open { display: block; } .modal-card { background: #fff; border: 1px solid var(--primary-color-soft); border-radius: 12px; padding: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.12); } .modal-card h3 { margin: 0 0 8px; color: var(--primary-color-dark); } .modal-card p { margin: 0 0 16px; color: var(--primary-color-ink); } .modal-actions { display: flex; gap: 10px; justify-content: flex-end; } .modal-actions button { border-radius: 8px; padding: 8px 14px; border: 1px solid var(--primary-color-soft); background: #fff; color: var(--primary-color-ink); cursor: pointer; } .modal-actions .modal-confirm { background: var(--primary-color); color: #fff; border-color: var(--primary-color); }`;
	      return { html, css };
	    },
	    generateFooterTemplate() {
	      const html = `<footer class="footer-generated"><div class="footer-brand">BrandName</div><ul class="footer-links"><li><a href="#">Docs</a></li><li><a href="#">Pricing</a></li><li><a href="#">Contact</a></li></ul><span class="footer-copy">2026</span></footer>`;
	      const css = `.footer-generated { ${this.getBaseFontCss()} width: 100%; max-width: 760px; display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 14px 18px; background: #fff; border-radius: 10px; border: 1px solid var(--primary-color-soft); box-shadow: 0 6px 18px rgba(0,0,0,0.08); } .footer-brand { font-weight: 700; color: var(--primary-color-dark); } .footer-links { list-style: none; display: flex; gap: 14px; margin: 0; padding: 0; } .footer-links a { text-decoration: none; color: var(--primary-color-ink); font-weight: 500; transition: color 0.2s ease; } .footer-links a:hover { color: var(--primary-color-dark); } .footer-copy { color: var(--primary-color-ink); font-size: 13px; }`;
	      return { html, css };
	    },
	    generateBadgeTemplate() {
	      const html = `<div class="badge-wrap"><span class="badge badge-solid">New</span><span class="badge badge-outline">v2.0</span><span class="badge badge-soft">Popular</span></div>`;
	      const css = `.badge-wrap { ${this.getBaseFontCss()} display: flex; align-items: center; gap: 10px; flex-wrap: wrap; } .badge { display: inline-flex; align-items: center; justify-content: center; padding: 8px 12px; border-radius: 999px; font-size: 13px; font-weight: 700; line-height: 1; cursor: pointer; user-select: none; transition: transform 0.2s ease, box-shadow 0.2s ease; } .badge:hover { transform: translateY(-1px); box-shadow: 0 6px 14px rgba(0,0,0,0.12); } .badge-solid { background: var(--primary-color); color: #fff; border: 1px solid var(--primary-color); } .badge-outline { background: #fff; color: var(--primary-color-dark); border: 1px solid var(--primary-color); } .badge-soft { background: var(--primary-color-soft); color: var(--primary-color-ink); border: 1px solid transparent; } .badge.is-active { box-shadow: 0 0 0 3px var(--primary-color-soft); }`;
	      return { html, css };
	    },
	    generateCtaTemplate() {
	      const html = `<section class="cta-generated"><h2>Build faster with better UI blocks</h2><p>Ship polished pages in minutes using reusable templates.</p><button class="cta-button">Start Free Trial</button></section>`;
	      const css = `.cta-generated { ${this.getBaseFontCss()} ${this.getBaseTextCss()} width: 100%; max-width: 680px; background: #fff; border: 1px solid var(--primary-color-soft); border-radius: 12px; padding: 28px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.08); } .cta-generated h2 { margin: 0 0 10px; color: var(--primary-color-dark); font-size: 28px; line-height: 1.2; } .cta-generated p { margin: 0 0 18px; color: var(--primary-color-ink); } .cta-button { border: none; background: var(--primary-color); color: #fff; padding: 12px 22px; border-radius: 8px; cursor: pointer; font-weight: 700; }`;
	      return { html, css };
	    },
	    generateFaqTemplate() {
	      const html = `<section class="faq-generated"><div class="faq-item"><button type="button">How does this generator work?</button><p>Pick a type, customize style options, then copy the generated code.</p></div><div class="faq-item"><button type="button">Can I export complete HTML?</button><p>Yes, click Export and you get HTML with CSS and JS included.</p></div><div class="faq-item"><button type="button">Can I reuse this in production?</button><p>Yes. Adjust structure and logic to match your project architecture.</p></div></section>`;
	      const css = `.faq-generated { ${this.getBaseFontCss()} width: 100%; max-width: 680px; display: grid; gap: 10px; } .faq-item { background: #fff; border: 1px solid var(--primary-color-soft); border-radius: 10px; padding: 12px 14px; } .faq-item button { width: 100%; border: none; background: transparent; text-align: left; color: var(--primary-color-dark); font-weight: 700; cursor: pointer; } .faq-item p { margin: 8px 0 0; color: var(--primary-color-ink); max-height: 0; overflow: hidden; transition: max-height 0.2s ease; } .faq-item.is-open p { max-height: 70px; }`;
	      return { html, css };
	    },
	    generateStatsTemplate() {
	      const html = `<section class="stats-generated"><div class="stat-card"><span class="stat-value" data-target="120">0+</span><span class="stat-label">Components</span></div><div class="stat-card"><span class="stat-value" data-target="48">0+</span><span class="stat-label">Templates</span></div><div class="stat-card"><span class="stat-value" data-target="99">0+</span><span class="stat-label">Satisfaction</span></div></section>`;
	      const css = `.stats-generated { ${this.getBaseFontCss()} width: 100%; max-width: 700px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; } .stat-card { background: #fff; border: 1px solid var(--primary-color-soft); border-radius: 10px; padding: 16px; text-align: center; } .stat-value { display: block; font-size: 28px; font-weight: 800; color: var(--primary-color-dark); } .stat-label { color: var(--primary-color-ink); font-size: 13px; }`;
	      return { html, css };
	    },
	    generateProfileTemplate() {
	      const html = `<article class="profile-generated"><div class="profile-avatar">JD</div><h3>Jane Doe</h3><p>Product Designer</p><button class="profile-action">Follow</button></article>`;
	      const css = `.profile-generated { ${this.getBaseFontCss()} ${this.getBaseTextCss()} width: 280px; background: #fff; border: 1px solid var(--primary-color-soft); border-radius: 12px; padding: 20px; text-align: center; } .profile-avatar { width: 72px; height: 72px; border-radius: 999px; margin: 0 auto 10px; background: var(--primary-color-soft); color: var(--primary-color-dark); display: grid; place-items: center; font-weight: 800; } .profile-generated h3 { margin: 0 0 4px; color: var(--primary-color-dark); } .profile-generated p { margin: 0 0 14px; color: var(--primary-color-ink); } .profile-action { border: 1px solid var(--primary-color); background: var(--primary-color); color: #fff; border-radius: 8px; padding: 10px 18px; font-weight: 700; cursor: pointer; } .profile-action.is-following { background: #fff; color: var(--primary-color-dark); }`;
	      return { html, css };
	    },
	    generateTimelineTemplate() {
	      const html = `<section class="timeline-generated"><div class="timeline-item is-active"><span>Step 1</span><p>Choose your component type.</p></div><div class="timeline-item"><span>Step 2</span><p>Customize style options.</p></div><div class="timeline-item"><span>Step 3</span><p>Copy generated code.</p></div></section>`;
	      const css = `.timeline-generated { ${this.getBaseFontCss()} width: 100%; max-width: 620px; display: grid; gap: 10px; } .timeline-item { background: #fff; border: 1px solid var(--primary-color-soft); border-left: 4px solid transparent; border-radius: 10px; padding: 12px 14px; cursor: pointer; } .timeline-item span { display: block; font-weight: 700; color: var(--primary-color-dark); } .timeline-item p { margin: 4px 0 0; color: var(--primary-color-ink); } .timeline-item.is-active { border-left-color: var(--primary-color); background: rgba(255,255,255,0.96); }`;
	      return { html, css };
	    },
	    generateProgressTemplate() {
	      const html = `<section class="progress-generated"><div class="progress-track"><div class="progress-fill" style="width:35%;"></div></div><button class="progress-action">Update Progress</button></section>`;
	      const css = `.progress-generated { ${this.getBaseFontCss()} width: 100%; max-width: 520px; display: grid; gap: 12px; } .progress-track { width: 100%; height: 14px; border-radius: 999px; background: var(--primary-color-soft); overflow: hidden; } .progress-fill { height: 100%; background: var(--primary-color); transition: width 0.25s ease; } .progress-action { width: fit-content; border: none; background: var(--primary-color-dark); color: #fff; border-radius: 8px; padding: 10px 14px; cursor: pointer; }`;
	      return { html, css };
	    },
	    generateTableTemplate() {
	      const html = `<table class="table-generated"><thead><tr><th>Name</th><th>Plan</th><th>Status</th></tr></thead><tbody><tr><td>Ana</td><td>Pro</td><td>Active</td></tr><tr><td>Mark</td><td>Basic</td><td>Trial</td></tr><tr><td>Sara</td><td>Plus</td><td>Active</td></tr></tbody></table>`;
	      const css = `.table-generated { ${this.getBaseFontCss()} width: 100%; max-width: 620px; border-collapse: collapse; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 6px 18px rgba(0,0,0,0.08); } .table-generated th, .table-generated td { padding: 10px 12px; border-bottom: 1px solid var(--primary-color-soft); text-align: left; } .table-generated th { background: var(--primary-color-soft); color: var(--primary-color-dark); font-weight: 700; } .table-generated tbody tr { color: var(--primary-color-ink); cursor: pointer; transition: background-color 0.2s ease; } .table-generated tbody tr:hover { background: rgba(255,255,255,0.94); } .table-generated tbody tr.is-selected { background: var(--primary-color-soft); }`;
	      return { html, css };
	    },
		    generateAccordionTemplate() {
		      const html = `<section class="accordion-generated"><div class="accordion-item is-open"><button class="accordion-trigger" type="button">What is included?</button><p>HTML, CSS, and optional JS for each generated section.</p></div><div class="accordion-item"><button class="accordion-trigger" type="button">Can I customize styles?</button><p>Yes, colors, radius, fonts, and theme preview are available.</p></div><div class="accordion-item"><button class="accordion-trigger" type="button">Can I export?</button><p>Use Export to get a complete standalone HTML file.</p></div></section>`;
		      const css = `.accordion-generated { ${this.getBaseFontCss()} width: 100%; max-width: 680px; display: grid; gap: 10px; } .accordion-item { background: #fff; border: 1px solid var(--primary-color-soft); border-radius: 10px; padding: 12px; } .accordion-trigger { width: 100%; border: none; background: transparent; text-align: left; color: var(--primary-color-dark); font-weight: 700; cursor: pointer; } .accordion-item p { margin: 6px 0 0; color: var(--primary-color-ink); max-height: 0; overflow: hidden; transition: max-height 0.2s ease; } .accordion-item.is-open p { max-height: 70px; }`;
		      return { html, css };
		    },
		    generateExtendedTemplate() {
		      const templates = {
		        steps: `<section class="steps-generated"><div class="step-item is-active"><strong>1</strong><p>Choose template type</p></div><div class="step-item"><strong>2</strong><p>Adjust style options</p></div><div class="step-item"><strong>3</strong><p>Copy generated code</p></div><button type="button" class="steps-next">Next Step</button></section>`,
		        contact: `<section class="contact-generated"><form><input type="text" placeholder="Name"><input type="email" placeholder="Email"><textarea rows="3" placeholder="Message"></textarea><button type="submit">Send Message</button></form></section>`,
		        newsletter: `<section class="newsletter-generated"><h3>Weekly UI Digest</h3><form><input type="email" placeholder="you@example.com"><button type="submit">Subscribe</button><p class="newsletter-note">No spam.</p></form></section>`,
		        login: `<form class="login-generated"><h3>Sign In</h3><input type="email" placeholder="Email"><input type="password" placeholder="Password"><button type="button">Sign In</button></form>`,
		        signup: `<form class="signup-generated"><h3>Create Account</h3><input type="text" placeholder="Full name"><input type="email" placeholder="Email"><input type="password" placeholder="Password"><button type="button">Create Account</button></form>`,
		        dashboard: `<section class="dashboard-generated"><div class="dashboard-head"><h3>Dashboard</h3><button type="button" class="dashboard-refresh">Refresh</button></div><div class="dashboard-kpi-grid"><article class="dashboard-metric"><span class="metric-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><path d="M20 8v6"></path><path d="M23 11h-6"></path></svg></span><div class="metric-meta"><span>Users</span><strong class="metric-value" data-min="120" data-max="980">128</strong></div><span class="metric-trend">+12%</span></article><article class="dashboard-metric"><span class="metric-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14.5a3.5 3.5 0 0 1 0 7H6"></path></svg></span><div class="metric-meta"><span>Revenue</span><strong class="metric-value" data-min="500" data-max="7800">580</strong></div><span class="metric-trend">+8%</span></article><article class="dashboard-metric"><span class="metric-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6a2 2 0 0 1-2 2H8l-4 4V4a2 2 0 0 1 2-2h9"></path><path d="M17 2v6"></path><path d="M14 5h6"></path></svg></span><div class="metric-meta"><span>Tickets</span><strong class="metric-value" data-min="30" data-max="260">92</strong></div><span class="metric-trend">+15%</span></article></div><div class="dashboard-graph-grid"><div class="dashboard-bars"><div class="dashboard-mini-bar" style="height:42%"></div><div class="dashboard-mini-bar" style="height:68%"></div><div class="dashboard-mini-bar" style="height:55%"></div><div class="dashboard-mini-bar" style="height:82%"></div><div class="dashboard-mini-bar" style="height:64%"></div><div class="dashboard-mini-bar" style="height:74%"></div></div><div class="dashboard-sparkline"><svg viewBox="0 0 320 80" preserveAspectRatio="none"><polyline points="0,52 40,44 80,49 120,36 160,42 200,29 240,34 280,24 320,32"></polyline></svg></div></div></section>`,
		        chart: `<section class="chart-generated"><div class="bars"><div class="bar" style="height:40%"></div><div class="bar" style="height:55%"></div><div class="bar" style="height:70%"></div><div class="bar" style="height:46%"></div><div class="bar" style="height:63%"></div></div><button type="button" class="chart-randomize">Randomize</button></section>`,
		        kpi: `<section class="kpi-generated"><article><span>MRR</span><strong class="kpi-value" data-target="1200">0</strong></article><article><span>Users</span><strong class="kpi-value" data-target="4200">0</strong></article><article><span>NPS</span><strong class="kpi-value" data-target="72">0</strong></article></section>`,
		        avatar: `<section class="avatar-generated"><div class="avatar-stack"><span class="avatar-chip">AL</span><span class="avatar-chip">MR</span><span class="avatar-chip">SK</span></div><button type="button" class="avatar-add">Add Avatar</button></section>`,
		        breadcrumbs: `<nav class="breadcrumbs-generated"><a href="#" class="is-active">Home</a><span>/</span><a href="#">Components</a><span>/</span><a href="#">Navbar</a></nav>`,
		        tabs: `<section class="tabs-generated"><div class="tab-head"><button type="button" class="tab-trigger is-active" data-tab="one">Overview</button><button type="button" class="tab-trigger" data-tab="two">Details</button><button type="button" class="tab-trigger" data-tab="three">Usage</button></div><div class="tab-panel is-active" data-tab="one"><p>Overview content</p></div><div class="tab-panel" data-tab="two"><p>Details content</p></div><div class="tab-panel" data-tab="three"><p>Usage content</p></div></section>`,
		        carousel: `<section class="carousel-generated"><button type="button" class="carousel-prev">Prev</button><div class="carousel-window"><div class="carousel-track"><article class="carousel-slide"><h4>Slide 1</h4></article><article class="carousel-slide"><h4>Slide 2</h4></article><article class="carousel-slide"><h4>Slide 3</h4></article></div></div><button type="button" class="carousel-next">Next</button></section>`,
		        skeleton: `<section class="skeleton-generated"><div class="skeleton-line lg"></div><div class="skeleton-line"></div><div class="skeleton-line sm"></div><button type="button" class="skeleton-load">Toggle Loaded</button></section>`,
		        'empty-state': `<section class="empty-state-generated"><h3>No Data Yet</h3><p class="empty-desc">Create your first item to begin.</p><button type="button" class="empty-action">Create Item</button></section>`,
		        search: `<section class="search-generated"><input type="search" placeholder="Search"><ul><li>Button Generator</li><li>Navbar Builder</li><li>Hero Section</li><li>Pricing Card</li></ul></section>`,
		        filter: `<section class="filter-generated"><div class="filter-row"><button type="button" class="filter-chip is-active" data-filter="all">All</button><button type="button" class="filter-chip" data-filter="design">Design</button><button type="button" class="filter-chip" data-filter="dev">Dev</button></div><div class="filter-grid"><article class="filter-card" data-kind="design">Style Guide</article><article class="filter-card" data-kind="dev">API Tools</article><article class="filter-card" data-kind="design">Moodboard</article><article class="filter-card" data-kind="dev">Form Engine</article></div></section>`,
		        dropdown: `<section class="dropdown-generated"><button type="button" class="dropdown-trigger">Select Theme</button><span class="dropdown-value">Light</span><div class="dropdown-menu"><button type="button">Light</button><button type="button">Dark</button><button type="button">Ocean</button></div></section>`,
		        switch: `<section class="switch-generated"><label><input type="checkbox" checked><span class="switch-state">Enabled</span></label></section>`,
		        checkbox: `<section class="checkbox-generated"><label><input type="checkbox" checked> Analytics</label><label><input type="checkbox"> Billing</label><label><input type="checkbox"> Alerts</label><p class="checkbox-count"></p></section>`,
		        radio: `<section class="radio-generated"><label><input type="radio" name="plan" value="Starter" checked> Starter</label><label><input type="radio" name="plan" value="Pro"> Pro</label><label><input type="radio" name="plan" value="Enterprise"> Enterprise</label><p>Selected: <strong class="radio-value">Starter</strong></p></section>`,
		        tooltip: `<section class="tooltip-generated"><div class="tooltip-anchor"><button type="button" class="tooltip-trigger">Hover me</button><span class="tooltip-bubble">Helpful tooltip text</span></div></section>`,
		        'toast-banner': `<section class="toast-banner-generated"><button type="button" class="toast-action">Show Toast</button><div class="toast-live">Saved successfully.</div></section>`,
		        countdown: `<section class="countdown-generated"><div class="count-item"><strong data-unit="days">03</strong><span>Days</span></div><div class="count-item"><strong data-unit="hours">06</strong><span>Hours</span></div><div class="count-item"><strong data-unit="minutes">20</strong><span>Min</span></div><div class="count-item"><strong data-unit="seconds">35</strong><span>Sec</span></div></section>`
		      };
		      const html = templates[this.category];
		      if (!html) return this.generateGenericSectionTemplate();
				      if (this.category === 'dashboard') {
				        const dashboardCssFix = `.dashboard-generated { display: grid; gap: 12px; max-width: 840px; } .dashboard-kpi-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; } .dashboard-metric { display: flex; align-items: center; justify-content: space-between; gap: 10px; } .metric-icon { width: 34px; height: 34px; border-radius: 10px; display: grid; place-items: center; background: var(--primary-color-soft); color: var(--primary-color-dark); flex-shrink: 0; } .metric-icon svg { width: 18px; height: 18px; } .metric-meta { display: grid; gap: 2px; min-width: 0; flex: 1; } .metric-meta span { color: var(--primary-color-ink); font-size: 12px; } .metric-meta .metric-value { color: var(--primary-color-dark); font-size: 22px; line-height: 1.1; } .metric-trend { color: var(--primary-color); font-size: 12px; font-weight: 700; } .dashboard-graph-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 10px; } .dashboard-bars, .dashboard-sparkline { border: 1px solid var(--primary-color-soft); border-radius: ${Math.max(6, this.borderRadius - 2)}px; background: #fff; padding: 10px; } .dashboard-bars { min-height: 120px; display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); align-items: end; gap: 8px; } .dashboard-mini-bar { background: linear-gradient(180deg, var(--primary-color), var(--primary-color-dark)); border-radius: 8px 8px 4px 4px; transition: height 0.25s ease; min-height: 16px; } .dashboard-sparkline svg { width: 100%; height: 120px; display: block; } .dashboard-sparkline polyline { fill: none; stroke: var(--primary-color); stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; } @media (max-width: 760px) { .dashboard-kpi-grid, .dashboard-graph-grid { grid-template-columns: 1fr; } }`;
				        return { html, css: `${this.getExtendedTemplateCss()} ${dashboardCssFix}` };
				      }
				      if (this.category === 'tooltip') {
				        const tooltipCssFix = `.tooltip-generated { max-width: 420px; min-height: 120px; display: grid; place-items: center; overflow: visible; } .tooltip-generated .tooltip-anchor { position: relative; display: inline-flex; align-items: center; justify-content: center; } .tooltip-generated .tooltip-trigger { position: relative; z-index: 2; border: 1px solid ${this.hexToRgba(this.primaryColor, 0.35)}; background: var(--primary-color); color: ${this.getContrastColor(this.primaryColor)}; padding: 10px 16px; border-radius: ${Math.max(8, this.borderRadius)}px; font-weight: 600; cursor: pointer; box-shadow: 0 8px 16px ${this.hexToRgba(this.primaryColor, 0.25)}; transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease; } .tooltip-generated .tooltip-trigger:hover { background: var(--primary-color-dark); transform: translateY(-1px); box-shadow: 0 10px 20px ${this.hexToRgba(this.primaryColor, 0.3)}; } .tooltip-generated .tooltip-trigger:focus-visible { outline: none; box-shadow: 0 0 0 3px ${this.hexToRgba(this.primaryColor, 0.25)}; } .tooltip-generated .tooltip-bubble { position: absolute; left: 50%; right: auto; bottom: calc(100% + 8px); top: auto; transform: translateX(-50%) translateY(4px) !important; white-space: nowrap; z-index: 10; animation: none; } .tooltip-generated .tooltip-trigger:hover + .tooltip-bubble, .tooltip-generated .tooltip-trigger.is-open + .tooltip-bubble { transform: translateX(-50%) translateY(0) !important; }`;
				        return { html, css: `${this.getExtendedTemplateCss()} ${tooltipCssFix}` };
				      }
				      return { html, css: this.getExtendedTemplateCss() };
				    },
		    getExtendedTemplateCss() {
		      return `.steps-generated,.contact-generated,.newsletter-generated,.login-generated,.signup-generated,.dashboard-generated,.chart-generated,.kpi-generated,.avatar-generated,.breadcrumbs-generated,.tabs-generated,.carousel-generated,.skeleton-generated,.empty-state-generated,.search-generated,.filter-generated,.dropdown-generated,.switch-generated,.checkbox-generated,.radio-generated,.tooltip-generated,.toast-banner-generated,.countdown-generated { ${this.getBaseFontCss()} ${this.getBaseTextCss()} width: 100%; max-width: 760px; background: #fff; border: 1px solid var(--primary-color-soft); border-radius: ${this.borderRadius}px; padding: 14px; } .steps-next,.chart-randomize,.dashboard-refresh,.avatar-add,.dropdown-trigger,.toast-action,.skeleton-load,.empty-action,.contact-generated button,.newsletter-generated button,.login-generated button,.signup-generated button { border: none; background: var(--primary-color); color: #fff; border-radius: ${Math.max(6, this.borderRadius - 2)}px; padding: 8px 12px; cursor: pointer; } .steps-generated { display: grid; gap: 8px; } .step-item { display: flex; gap: 8px; align-items: center; border: 1px solid var(--primary-color-soft); border-radius: ${Math.max(6, this.borderRadius - 2)}px; padding: 10px; } .step-item strong { width: 24px; height: 24px; border-radius: 999px; display: grid; place-items: center; background: var(--primary-color-soft); color: var(--primary-color-dark); } .step-item.is-active { border-color: var(--primary-color); } .contact-generated form,.login-generated,.signup-generated,.newsletter-generated form,.search-generated { display: grid; gap: 8px; } .contact-generated input,.contact-generated textarea,.newsletter-generated input,.login-generated input,.signup-generated input,.search-generated input { ${this.getBaseFontCss()} border: 1px solid var(--primary-color-soft); border-radius: ${Math.max(6, this.borderRadius - 2)}px; padding: 10px 12px; color: #0f172a; } .dashboard-generated { display: grid; gap: 8px; } .dashboard-head { display: flex; justify-content: space-between; align-items: center; gap: 8px; } .filter-chip,.tab-trigger,.dropdown-menu button { border: 1px solid var(--primary-color-soft); background: #fff; color: var(--primary-color-ink); border-radius: ${Math.max(6, this.borderRadius - 2)}px; padding: 7px 10px; cursor: pointer; } .filter-chip.is-active,.tab-trigger.is-active { background: var(--primary-color-soft); color: var(--primary-color-dark); border-color: var(--primary-color); } .chart-generated { display: grid; gap: 8px; } .bars { height: 180px; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); align-items: end; gap: 8px; } .bar { border-radius: ${Math.max(6, this.borderRadius - 2)}px ${Math.max(6, this.borderRadius - 2)}px 0 0; background: linear-gradient(180deg, var(--primary-color), var(--primary-color-dark)); transition: height 0.25s ease; } .kpi-generated { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; } .kpi-generated strong { display: block; color: var(--primary-color-dark); font-size: 24px; } .avatar-generated { display: flex; align-items: center; justify-content: space-between; gap: 10px; } .avatar-stack { display: flex; } .avatar-chip { width: 34px; height: 34px; border-radius: 999px; margin-right: -8px; border: 2px solid #fff; display: grid; place-items: center; background: var(--primary-color-soft); color: var(--primary-color-dark); font-weight: 700; } .breadcrumbs-generated { display: flex; align-items: center; gap: 8px; } .breadcrumbs-generated a { color: var(--primary-color-ink); text-decoration: none; font-weight: 600; } .breadcrumbs-generated a.is-active { color: var(--primary-color-dark); } .tabs-generated .tab-head { display: flex; gap: 6px; margin-bottom: 8px; } .tab-panel { display: none; border: 1px solid var(--primary-color-soft); border-radius: ${Math.max(6, this.borderRadius - 2)}px; padding: 10px; color: var(--primary-color-ink); } .tab-panel.is-active { display: block; } .carousel-generated { display: grid; grid-template-columns: auto 1fr auto; gap: 8px; align-items: center; } .carousel-window { overflow: hidden; border: 1px solid var(--primary-color-soft); border-radius: ${Math.max(6, this.borderRadius - 2)}px; } .carousel-track { display: flex; transition: transform 0.25s ease; } .carousel-slide { min-width: 100%; padding: 14px; } .skeleton-generated { display: grid; gap: 8px; } .skeleton-line { height: 12px; border-radius: 999px; background: linear-gradient(90deg, rgba(148,163,184,0.2), rgba(148,163,184,0.45), rgba(148,163,184,0.2)); background-size: 220px 100%; animation: skeletonPulse 1.2s linear infinite; } .skeleton-line.lg { height: 16px; width: 90%; } .skeleton-line.sm { width: 45%; } .skeleton-generated.is-loaded .skeleton-line { animation: none; background: var(--primary-color-soft); } .empty-state-generated { text-align: center; border-style: dashed; } .search-generated ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 6px; } .search-generated li { border: 1px solid var(--primary-color-soft); border-radius: ${Math.max(6, this.borderRadius - 2)}px; padding: 8px 10px; color: var(--primary-color-ink); } .filter-generated { display: grid; gap: 8px; } .filter-row { display: flex; gap: 8px; flex-wrap: wrap; } .dropdown-generated { position: relative; display: grid; gap: 6px; max-width: 420px; } .dropdown-menu { display: none; position: absolute; left: 14px; right: 14px; top: calc(100% + 4px); background: #fff; border: 1px solid var(--primary-color-soft); border-radius: ${Math.max(6, this.borderRadius - 2)}px; padding: 6px; box-shadow: 0 12px 24px rgba(0,0,0,0.12); z-index: 5; } .dropdown-menu.is-open { display: grid; } .switch-generated label,.checkbox-generated label,.radio-generated label { display: flex; gap: 8px; align-items: center; color: var(--primary-color-ink); } .checkbox-generated,.radio-generated { display: grid; gap: 8px; max-width: 420px; } .tooltip-generated { position: relative; max-width: 320px; text-align: center; } .tooltip-bubble { position: absolute; left: 50%; bottom: calc(100% + 6px); transform: translateX(-50%) translateY(4px); opacity: 0; background: #111827; color: #fff; border-radius: 6px; padding: 6px 8px; font-size: 12px; transition: all 0.2s ease; } .tooltip-trigger:hover + .tooltip-bubble,.tooltip-trigger.is-open + .tooltip-bubble { opacity: 1; transform: translateX(-50%) translateY(0); } .toast-live { margin-top: 8px; border-radius: ${Math.max(6, this.borderRadius - 2)}px; background: var(--primary-color-soft); color: var(--primary-color-dark); padding: 8px 10px; opacity: 0; transform: translateY(4px); transition: all 0.2s ease; } .toast-live.is-show { opacity: 1; transform: translateY(0); } .countdown-generated { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; max-width: 620px; } .count-item { border: 1px solid var(--primary-color-soft); border-radius: ${Math.max(6, this.borderRadius - 2)}px; background: var(--primary-color-soft); padding: 10px; text-align: center; } .count-item strong { display: block; font-size: 22px; color: var(--primary-color-dark); } .count-item span { font-size: 12px; color: var(--primary-color-ink); } .newsletter-note,.checkbox-count { color: var(--primary-color-dark); font-size: 12px; } @keyframes skeletonPulse { from { background-position: -220px 0; } to { background-position: 220px 0; } }`;
		    },
		    generateGenericSectionTemplate() {
		      const label = this.formatCategoryLabel(this.category);
		      const html = `<section class="generic-block"><h3>${label} Template</h3><p>Starter component for ${label.toLowerCase()} layout and interactions.</p><button class="generic-action">Try ${label}</button></section>`;
		      const css = `.generic-block { ${this.getBaseFontCss()} ${this.getBaseTextCss()} width: 100%; max-width: 620px; background: #fff; border: 1px solid var(--primary-color-soft); border-radius: 12px; padding: 22px; box-shadow: 0 8px 20px rgba(0,0,0,0.08); } .generic-block h3 { margin: 0 0 8px; color: var(--primary-color-dark); font-size: 22px; } .generic-block p { margin: 0 0 16px; color: var(--primary-color-ink); } .generic-action { border: none; background: var(--primary-color); color: #fff; border-radius: 8px; padding: 10px 16px; cursor: pointer; font-weight: 700; transition: transform 0.2s ease, background 0.2s ease; } .generic-action:hover { transform: translateY(-1px); background: var(--primary-color-dark); }`;
	      return { html, css };
	    },
	    async generateTemplate() {
	      if (this.isGenerating) return;
	      
	      this.isGenerating = true;

		      const generator = this.getTemplateGenerator();
		      if (generator) {
		        const result = generator.call(this);
		        this.generatedHtml = result.html;
		        this.generatedCss = this.buildGeneratedCss(result.css);
		        this.generatedJs = this.generateJsForCategory();
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
	      if (!this.generatedHtml && !this.generatedCss && !this.generatedJs) {
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
	    body { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%); font-family: ${this.fontFamily}; color: ${this.textColor}; --primary-color: ${this.primaryColor}; --primary-color-dark: ${this.adjustColor(this.primaryColor, -10)}; --primary-color-soft: ${this.hexToRgba(this.primaryColor, 0.2)}; --primary-color-ink: ${this.adjustColor(this.primaryColor, -40)}; }
	    ${this.generatedCss}
	  </style>
</head>
<body>
	  ${this.generatedHtml}
	  <script>
	    ${this.generatedJs}
	  <\/script>
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
	    async copyJs() {
	      if (!this.generatedJs) {
	        this.showNotification('No JS to copy', 'error');
	        return;
	      }
	      await navigator.clipboard.writeText(this.formatJs(this.generatedJs));
	      this.showNotification('JS copied!');
	    },
	    clearAll() {
	      this.generatedHtml = '';
	      this.generatedCss = '';
	      this.generatedJs = '';
	      this.customPrompt = '';
	      this.showNotification('Cleared!');
	    }
  },
  beforeUnmount() {
    if (this.moreTypesLoadTimer) {
      clearTimeout(this.moreTypesLoadTimer);
      this.moreTypesLoadTimer = null;
    }
    window.removeEventListener('keydown', this.handleGlobalKeydown);
  },
  mounted() {
    window.addEventListener('keydown', this.handleGlobalKeydown);
    console.log('Template UI Generator mounted');
  }
};
</script>

