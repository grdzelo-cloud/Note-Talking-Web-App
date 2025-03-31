import React from 'react'
import ToastButton from '../components/toast-button'

export default function toastProvider({ children }) {
  return (
    <main className='overflow-hidden relative'>
      <ToastButton/>
      {children}
    </main>
  )
}
