type ShapType = 'circle' | 'square'

export interface AvatarProps {
  shape?: ShapType
  src?: string
  size?: number | string
  fit?: Fit | string
  callback?: string
  error?: string
}

export enum Fit {
  fill = 'fill',
  contain = 'contain',
  cover = 'cover',
  none = 'none',
  scaledown = 'scale-down',
}
