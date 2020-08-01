import { register, init, getLocaleFromNavigator } from 'svelte-i18n'

register('en', () => import('./en.json'))
register('de', () => import('./de.json'))
// en, en-US and pt are not available yet

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
})
