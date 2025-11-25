// Utility functions for product data

export function formatPrice(price: number, currency: string = 'ARS'): string {
  if (currency === 'ARS') {
    return `$${price.toLocaleString('es-AR')}`;
  }
  return `$${price.toFixed(2)}`;
}

export function getTrendingProducts(products: any[], limit: number = 6) {
  return products
    .filter(p => p.trending)
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

export function getBestsellers(products: any[], limit: number = 6) {
  return products
    .filter(p => p.bestseller)
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, limit);
}

export function getNewArrivals(products: any[], limit: number = 6) {
  return products
    .filter(p => p.newArrival)
    .slice(0, limit);
}

export function getMostViewed(products: any[], limit: number = 10) {
  return products
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

export function getProductStats(products: any[]) {
  const totalProducts = products.length;
  const totalCategories = new Set(products.map(p => p.category)).size;
  const avgRating = products.reduce((sum, p) => sum + p.rating, 0) / totalProducts;
  const totalReviews = products.reduce((sum, p) => sum + p.reviews, 0);
  const inStock = products.filter(p => p.stock > 0).length;
  
  return {
    totalProducts,
    totalCategories,
    avgRating: avgRating.toFixed(1),
    totalReviews,
    inStock,
    outOfStock: totalProducts - inStock
  };
}
