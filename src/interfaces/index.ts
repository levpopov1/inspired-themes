interface iCollection {
  _id: string,
  name: string,
  themes: iTheme[]
}

interface iTheme {
  _id: string,
  name: string,
  collectionName: string,
  image: string,
  description: string,
  colors: {
    [key: string]: iColor
  }
}

interface iColor {
  name: string,
  hex: string,
  rgb: string,
  hsl: string
}

interface iFetchingError {
  isError: boolean, 
  message: string | null
}

export type {
  iCollection,
  iTheme,
  iColor,
  iFetchingError
}