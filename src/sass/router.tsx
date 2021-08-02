import { AnimateBack } from './template/animate-back'
import { FloatLabel } from './template/float-label'
import { SpaceBetween } from './template/space-betteen'

export const routers = [
  {
    name: 'animate-back',
    path: '/animate-back',
    component: AnimateBack,
  },
  {
    name: 'float-label',
    path: '/float-label',
    component: FloatLabel,
  },
  {
    name: 'space-between',
    path: '/space-between',
    component: SpaceBetween,
  },
]
