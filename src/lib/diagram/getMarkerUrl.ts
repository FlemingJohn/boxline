export function getMarkerUrl(markerId: string | null): string | undefined {
  return markerId ? `url(#${markerId})` : undefined;
}
