export class InvalidDiagramFileError extends Error {
  constructor() {
    super("The file is not a Boxline diagram of this type.");
    this.name = "InvalidDiagramFileError";
  }
}
