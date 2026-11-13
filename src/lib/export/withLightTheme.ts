export async function withLightTheme<Result>(task: () => Promise<Result>): Promise<Result> {
  const root = document.documentElement;
  const previousTheme = root.getAttribute("data-theme");
  root.setAttribute("data-theme", "light");
  await waitForPaint();
  try {
    return await task();
  } finally {
    if (previousTheme) root.setAttribute("data-theme", previousTheme);
    else root.removeAttribute("data-theme");
  }
}

function waitForPaint(): Promise<void> {
  return new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
}
