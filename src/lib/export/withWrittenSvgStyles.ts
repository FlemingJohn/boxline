const writtenProperties = [
  "fill",
  "fill-opacity",
  "stroke",
  "stroke-width",
  "stroke-dasharray",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-opacity",
  "opacity",
  "paint-order",
  "font-family",
  "font-size",
  "font-weight",
];

export async function withWrittenSvgStyles<Result>(root: HTMLElement, task: () => Promise<Result>): Promise<Result> {
  const svgParts = [...root.querySelectorAll<SVGElement>("svg *")];
  const savedValues = svgParts.map((part) => writtenProperties.map((property) => part.getAttribute(property)));
  for (const part of svgParts) {
    const computedStyle = getComputedStyle(part);
    for (const property of writtenProperties) part.setAttribute(property, computedStyle.getPropertyValue(property));
  }
  try {
    return await task();
  } finally {
    svgParts.forEach((part, partIndex) => restoreValues(part, savedValues[partIndex]));
  }
}

function restoreValues(part: SVGElement, values: (string | null)[]) {
  writtenProperties.forEach((property, propertyIndex) => {
    const value = values[propertyIndex];
    if (value === null) part.removeAttribute(property);
    else part.setAttribute(property, value);
  });
}
