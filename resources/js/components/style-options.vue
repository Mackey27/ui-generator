<template>
  <div class="panel">
    <div class="panel-header">
      <svg class="w-5 h-5 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
      <span class="font-semibold">Style Options</span>
      <button @click="$emit('randomize')" class="ml-auto btn-icon" title="Randomize">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>
      </button>
    </div>
    <div class="p-4 space-y-5">
      <div>
        <label class="text-sm text-[var(--muted)] mb-2 block">Primary Color</label>
        <div class="color-picker-wrapper">
          <input type="color" :value="primaryColor" @input="$emit('update:primaryColor', $event.target.value)" class="color-picker">
          <input type="text" :value="primaryColor" @input="$emit('update:primaryColor', $event.target.value)" class="input-field font-mono text-sm flex-1">
        </div>
      </div>

      <div>
        <label class="text-sm text-[var(--muted)] mb-2 block">Text Color</label>
        <div class="color-picker-wrapper">
          <input type="color" :value="textColor" @input="$emit('update:textColor', $event.target.value)" class="color-picker">
          <input type="text" :value="textColor" @input="$emit('update:textColor', $event.target.value)" class="input-field font-mono text-sm flex-1">
        </div>
      </div>

      <div>
        <label class="text-sm text-[var(--muted)] mb-2 block">Font Family</label>
        <select :value="fontFamily" @change="$emit('update:fontFamily', $event.target.value)" class="select-field">
          <option v-for="font in fontOptions" :key="font.label" :value="font.value">{{ font.label }}</option>
        </select>
      </div>

      <div>
        <label class="text-sm text-[var(--muted)] mb-2 block">Border Radius: <span>{{ borderRadius }}px</span></label>
        <input type="range" :value="borderRadius" @input="$emit('update:borderRadius', Number($event.target.value))" class="range-slider" min="0" max="24">
      </div>

      <div>
        <label class="text-sm text-[var(--muted)] mb-2 block">Style Preset</label>
        <select :value="stylePreset" @change="$emit('update:stylePreset', $event.target.value)" class="select-field">
          <option v-for="preset in presets" :key="preset" :value="preset">{{ preset.charAt(0).toUpperCase() + preset.slice(1) }}</option>
        </select>
      </div>

      <div>
        <label class="text-sm text-[var(--muted)] mb-2 block">Preview Theme</label>
        <div class="grid grid-cols-3 gap-2">
          <button
            v-for="theme in previewThemes"
            :key="theme.value"
            @click="$emit('update:previewTheme', theme.value)"
            :class="['btn-secondary', { active: previewTheme === theme.value }]"
          >
            {{ theme.label }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StyleOptions',
  props: {
    primaryColor: { type: String, required: true },
    textColor: { type: String, required: true },
    fontFamily: { type: String, required: true },
    fontOptions: { type: Array, required: true },
    borderRadius: { type: Number, required: true },
    stylePreset: { type: String, required: true },
    presets: { type: Array, required: true },
    previewTheme: { type: String, required: true }
  },
  emits: [
    'randomize',
    'update:primaryColor',
    'update:textColor',
    'update:fontFamily',
    'update:borderRadius',
    'update:stylePreset',
    'update:previewTheme'
  ],
  data() {
    return {
      previewThemes: [
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
        { label: 'Ocean', value: 'ocean' },
        { label: 'Sunset', value: 'sunset' },
        { label: 'Forest', value: 'forest' },
        { label: 'Aurora', value: 'aurora' }
      ]
    };
  }
};
</script>
