"use client"
import React from 'react'

import { SessionProvider } from 'next-auth/react';

const Provider = ({ children, session}) => {
  return (
     <SessionProvider session={session}>  {/* browsers capability to create such sessions */}
      {children}
    </SessionProvider>
  )
}

export default Provider