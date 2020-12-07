import { deprecate } from 'electron/main';
import { defineProperty } from '@electron/internal/common/property-utils';

const { systemPreferences } = process._linkedBinding('electron_browser_system_preferences');

if ('getAppLevelAppearance' in systemPreferences) {
  defineProperty(systemPreferences, 'appLevelAppearance', systemPreferences.getAppLevelAppearance, systemPreferences.setAppLevelAppearance);
}

if ('getEffectiveAppearance' in systemPreferences) {
  defineProperty(systemPreferences, 'effectiveAppearance', systemPreferences.getEffectiveAppearance);
}

systemPreferences.isDarkMode = deprecate.moveAPI(
  systemPreferences.isDarkMode,
  'systemPreferences.isDarkMode()',
  'nativeTheme.shouldUseDarkColors'
);
systemPreferences.isInvertedColorScheme = deprecate.moveAPI(
  systemPreferences.isInvertedColorScheme,
  'systemPreferences.isInvertedColorScheme()',
  'nativeTheme.shouldUseInvertedColorScheme'
);
systemPreferences.isHighContrastColorScheme = deprecate.moveAPI(
  systemPreferences.isHighContrastColorScheme,
  'systemPreferences.isHighContrastColorScheme()',
  'nativeTheme.shouldUseHighContrastColors'
);

export default systemPreferences;
