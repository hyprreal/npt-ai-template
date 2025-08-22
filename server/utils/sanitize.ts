import sanitizeHtml from 'sanitize-html'

export function sanitize(string: string): string {
  return sanitizeHtml(string, { allowedTags: [], allowedAttributes: {} })
}
