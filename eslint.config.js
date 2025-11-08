import { ts } from '@robinbobin/eslint-config/ruleOptions'
import parentConfig from '@robinbobin/eslint-config-react'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  ...parentConfig,
  {
    rules: {
      '@typescript-eslint/no-shadow': [
        'error',
        {
          ...ts.noShadow,
          allow: ['StyleSheet', 'Text']
        }
      ]
    }
  }
])
