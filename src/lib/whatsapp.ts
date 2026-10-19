import { site } from '../data/site'

/** Builds a wa.me link that opens a chat with tai and the message already typed. */
export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}
