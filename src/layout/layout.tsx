import React from 'react'
import { AppHeader, AppFooter } from '@/components'

import { AppLayoutWrapper } from './style'

interface Props {
  children?: React.ReactNode
}
const AppLayout = (props: Props) => {
  const { children } = props
  return (
    <AppLayoutWrapper>
      <AppHeader />
      {children}
      <AppFooter />
    </AppLayoutWrapper>
  )
}

export default AppLayout
