export function redirectWhatsapp(
  phone?: string,
  message?: string,
) {
  phone = '5591981999538';
  const text = message ? `/?text=${message}` : '';

  window.open(`https://wa.me/${phone}${text}`, '_blank');
  return;
}
