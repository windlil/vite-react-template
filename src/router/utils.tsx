import { createElement, FunctionComponent, lazy, Suspense } from 'react'

/**
 * 创建懒加载组件
 */
export const createLazyElement = (load: () => Promise<{
  default: React.ComponentType<FunctionComponent>;
}>) => {
  return <Suspense>
    {createElement(lazy(load))}
  </Suspense>
}