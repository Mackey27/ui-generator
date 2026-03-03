<template>
  <div class="space-y-4 stagger-in" style="animation-delay: 0.3s;">
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
          <button @click="$emit('copy-html')" class="btn-secondary text-sm flex items-center gap-2">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy HTML
          </button>
          <button @click="$emit('copy-css')" class="btn-secondary text-sm flex items-center gap-2">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy CSS
          </button>
          <button @click="$emit('copy-js')" class="btn-secondary text-sm flex items-center gap-2">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy JS
          </button>
        </div>
      </div>
      <div class="p-4">
        <div class="preview-container transition-all duration-300">
          <div v-if="!generatedHtml" class="text-gray-400">Click "Generate Template" to create a component</div>
          <iframe
            v-else
            class="preview-iframe"
            :srcdoc="previewSrcDoc"
            sandbox="allow-scripts"
            title="Live Template Preview"
          ></iframe>
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="panel-header">
        <div class="flex">
          <button v-for="tab in tabs" :key="tab" @click="$emit('update:activeTab', tab)" :class="['tab-btn', { active: activeTab === tab }]">{{ tab.toUpperCase() }}</button>
        </div>
      </div>
      <div class="p-4">
        <div class="code-block max-h-80 overflow-auto" v-html="currentCode"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreviewCode',
  props: {
    generatedHtml: { type: String, default: '' },
    previewSrcDoc: { type: String, required: true },
    currentCode: { type: String, required: true },
    activeTab: { type: String, required: true }
  },
  emits: ['copy-html', 'copy-css', 'copy-js', 'update:activeTab'],
  data() {
    return {
      tabs: ['html', 'css', 'js']
    };
  }
};
</script>
