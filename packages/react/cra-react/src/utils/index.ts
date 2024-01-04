export const getImg = (src: string, url?: string) => {
    let imgContext;
    imgContext = (require as any).context('@/components', true);
    if (url) {
      imgContext = (require as any).context(url, true);
    }
    const imgIndex = imgContext.keys().findIndex((path: string) => path === `./${src}`);
    if (imgIndex === -1) {
      return '';
    }
    return imgContext([imgContext.keys()[imgIndex]]);
};