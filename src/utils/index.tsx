export function formatPrice(price: number) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}
export function uid() {
  const head = Date.now().toString(36);
  const tail = Math.random().toString(36).substring(2);
  return head + tail;
}
