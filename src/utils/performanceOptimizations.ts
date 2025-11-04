// Utilitaires pour améliorer les performances INP (Interaction to Next Paint)

/**
 * Defer l'exécution de scripts non-critiques
 * @param callback Fonction à exécuter après le chargement initial
 * @param delay Délai en ms (par défaut 100ms)
 */
export const deferScript = (callback: () => void, delay: number = 100): void => {
  if (typeof window !== 'undefined') {
    if (document.readyState === 'complete') {
      setTimeout(callback, delay);
    } else {
      window.addEventListener('load', () => {
        setTimeout(callback, delay);
      });
    }
  }
};

/**
 * Lazy loading d'images avec Intersection Observer
 * @param imageSel Sélecteur CSS des images à lazy load
 */
export const lazyLoadImages = (imageSelector: string = 'img[data-src]'): void => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    const images = document.querySelectorAll(imageSelector);
    images.forEach((img) => imageObserver.observe(img));
  }
};

/**
 * Debounce pour réduire la fréquence d'exécution
 * @param func Fonction à debouncer
 * @param wait Délai d'attente en ms
 */
export const debounce = <T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
};

/**
 * Précharge les ressources critiques
 * @param urls URLs des ressources à précharger
 * @param type Type de ressource (image, script, style)
 */
export const preloadResources = (
  urls: string[],
  type: 'image' | 'script' | 'style' = 'image'
): void => {
  urls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    
    switch (type) {
      case 'image':
        link.as = 'image';
        break;
      case 'script':
        link.as = 'script';
        break;
      case 'style':
        link.as = 'style';
        break;
    }
    
    document.head.appendChild(link);
  });
};

/**
 * Optimisation des événements de scroll
 */
export const throttleScroll = (callback: () => void, delay: number = 100): (() => void) => {
  let lastCall = 0;
  
  return () => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      callback();
    }
  };
};

/**
 * Optimisations spécifiques pour mobile
 */
export const mobileOptimizations = {
  /**
   * Désactive les animations sur mobile si l'utilisateur préfère réduire les mouvements
   */
  respectMotionPreferences: (): void => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const style = document.createElement('style');
      style.textContent = `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      `;
      document.head.appendChild(style);
    }
  },

  /**
   * Optimise les interactions tactiles
   */
  optimizeTouchInteractions: (): void => {
    // Ajouter touch-action pour éviter les délais sur mobile
    const style = document.createElement('style');
    style.textContent = `
      button, a, [role="button"] {
        touch-action: manipulation;
      }
      .scroll-container {
        -webkit-overflow-scrolling: touch;
        overscroll-behavior: contain;
      }
    `;
    document.head.appendChild(style);
  },

  /**
   * Optimise le chargement des polices
   */
  optimizeFontLoading: (): void => {
    if ('fonts' in document) {
      // Précharge les polices critiques
      document.fonts.ready.then(() => {
        document.body.classList.add('fonts-loaded');
      });
    }
  },

  /**
   * Optimise la viewport pour mobile
   */
  optimizeViewport: (): void => {
    // Empêche le zoom sur les inputs sur iOS
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach((input) => {
      if (input instanceof HTMLElement) {
        input.addEventListener('focus', () => {
          const viewport = document.querySelector('meta[name=viewport]') as HTMLMetaElement;
          if (viewport) {
            viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
          }
        });
        
        input.addEventListener('blur', () => {
          const viewport = document.querySelector('meta[name=viewport]') as HTMLMetaElement;
          if (viewport) {
            viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes';
          }
        });
      }
    });
  }
};

/**
 * Initialise toutes les optimisations mobiles
 */
export const initMobileOptimizations = (): void => {
  if (typeof window !== 'undefined') {
    deferScript(() => {
      mobileOptimizations.respectMotionPreferences();
      mobileOptimizations.optimizeTouchInteractions();
      mobileOptimizations.optimizeFontLoading();
      mobileOptimizations.optimizeViewport();
    }, 50);
  }
};
