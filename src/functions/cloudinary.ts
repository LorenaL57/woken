// @ts-ignore TYPE NEEDS FIXING
export const normalizeUrl = (src) => {
  return src[0] === '/' ? src.slice(1) : src
}

type CloudinaryFetchProps = { src: string; width?: number; height?: number; quality?: number }

type ClodunaryImageLoader = (resolverProps: CloudinaryFetchProps) => string

export const cloudinaryLoader: ClodunaryImageLoader = ({ src, width, height }: CloudinaryFetchProps) => {
  return `https://res.cloudinary.com/sushi-cdn/image/fetch/f_auto,fl_sanitize,q_auto,${width ? `w_${width}` : ''}${
    height ? `h_${height},` : ''
  }/${normalizeUrl(src)}`
}

// f_auto,fl_sanitize,q_auto,w_32
