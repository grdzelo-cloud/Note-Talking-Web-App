import React from 'react'
import ToastButton from '../components/toast-button'

export default function toastProvider({ children }) {
  return (
    <main>
      <ToastButton />
      {children}
    </main>
  )
}
