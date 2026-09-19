// Set these public build-time values only after Anshu has confirmed the details.
// Empty or malformed values deliberately produce no contact link.
const readSetting = (value: unknown) => typeof value === 'string' ? value.trim() : '';
const safeHttpsUrl = (value: unknown) => {
  const setting = readSetting(value);
  if (!setting) return '';
  try {
    const url = new URL(setting);
    return url.protocol === 'https:' && !url.username && !url.password ? url.href : '';
  } catch { return ''; }
};
const emailSetting = readSetting(import.meta.env.VITE_CONTACT_EMAIL);
const email = /^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(emailSetting) ? emailSetting : '';
const phoneSetting = readSetting(import.meta.env.VITE_WHATSAPP_NUMBER).replace(/[\s()+-]/g, '');
const whatsappRaw = /^[1-9]\d{7,14}$/.test(phoneSetting) ? phoneSetting : '';
const bookingUrl = safeHttpsUrl(import.meta.env.VITE_BOOKING_URL);

export const CONTACT_CONFIG = {
  name: 'Anshu Sahani',
  title: 'Life & relationship coaching',
  tagline: 'A gentle return to yourself',
  whatsappDisplay: whatsappRaw ? `+${whatsappRaw}` : '',
  whatsappRaw,
  email,
  bookingUrl,
  hasContactChannel: Boolean(email || whatsappRaw),
  location: 'Online coaching',
  socials: { instagram: '', linkedin: '', youtube: '' },
  bookingCallDuration: '',
  bookingCallPrice: '',
};

export const getWhatsAppUrl = (message: string) => CONTACT_CONFIG.whatsappRaw
  ? `https://wa.me/${CONTACT_CONFIG.whatsappRaw}?text=${encodeURIComponent(message)}`
  : '';
export const getEmailDraftUrl = (subject: string, message: string) => CONTACT_CONFIG.email
  ? `mailto:${CONTACT_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
  : '';
