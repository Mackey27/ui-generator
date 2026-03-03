/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import UITemplate from './components/ui-template.vue';

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const mountEl = document.getElementById('app');

const showFatalError = (error) => {
    if (!mountEl) return;
    const message = error instanceof Error ? (error.stack || error.message) : String(error);
    mountEl.innerHTML = `
        <div style="padding:16px;font-family:ui-monospace,Consolas,monospace;color:#b91c1c;background:#fef2f2;border:1px solid #fecaca;border-radius:8px;white-space:pre-wrap;line-height:1.4;">
Runtime error while mounting Vue app:
${message}
        </div>
    `;
};

window.addEventListener('error', (event) => {
    showFatalError(event.error || event.message);
});

window.addEventListener('unhandledrejection', (event) => {
    showFatalError(event.reason || 'Unhandled promise rejection');
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ui-template.vue -> <ui-temple></ui-temple>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

try {
    const app = createApp(UITemplate);
    app.config.errorHandler = (error) => {
        showFatalError(error);
    };
    app.mount('#app');
} catch (error) {
    showFatalError(error);
}
