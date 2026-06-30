import { IMAGES } from '../data/images.js';

export function withImageFallback(src, fallback = IMAGES.hero.home) {
    return src || fallback;
}

export function imageFallbackAttr(fallback = IMAGES.hero.home) {
    return `onerror="this.onerror=null;this.src='${fallback}'"`;
}
