import type { ToasterProps } from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'

import { theme } from '@/styles/theme'

const toastConfig: ToasterProps = {
  position: 'top-center',
  reverseOrder: false,
  gutter: 8,
  toastOptions: {
    duration: 3000,
    success: {
      style: {
        background: theme.colors.third,
        color: theme.colors.white,
      },
      iconTheme: {
        primary: theme.colors.white,
        secondary: theme.colors.third,
      },
    },
    error: {
      style: {
        background: theme.colors.accent,
        color: theme.colors.white,
      },
      iconTheme: {
        primary: theme.colors.white,
        secondary: theme.colors.accent,
      },
    },
  },
}

export function ToastProvider() {
  return <Toaster {...toastConfig} />
}
