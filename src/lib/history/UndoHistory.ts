const groupingDelay = 500;
const maximumSteps = 100;

export class UndoHistory {
  private past: string[] = [];
  private future: string[] = [];
  private stableText: string;
  private latestText: string;
  private groupingTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(
    initialText: string,
    private onRestore: (text: string) => void,
    private onChange: () => void,
  ) {
    this.stableText = initialText;
    this.latestText = initialText;
  }

  record(text: string) {
    this.latestText = text;
    if (this.groupingTimer) clearTimeout(this.groupingTimer);
    this.groupingTimer = text === this.stableText ? null : setTimeout(() => this.saveStep(), groupingDelay);
    this.onChange();
  }

  undo() {
    this.saveWaitingStep();
    const previousText = this.past.pop();
    if (previousText === undefined) return;
    this.future.push(this.stableText);
    this.restore(previousText);
  }

  redo() {
    this.saveWaitingStep();
    const nextText = this.future.pop();
    if (nextText === undefined) return;
    this.past.push(this.stableText);
    this.restore(nextText);
  }

  reset(text: string) {
    if (this.groupingTimer) clearTimeout(this.groupingTimer);
    this.groupingTimer = null;
    this.past = [];
    this.future = [];
    this.stableText = text;
    this.latestText = text;
    this.onChange();
  }

  canUndo() {
    return this.past.length > 0 || this.latestText !== this.stableText;
  }

  canRedo() {
    return this.future.length > 0 && this.latestText === this.stableText;
  }

  private saveStep() {
    this.groupingTimer = null;
    if (this.latestText === this.stableText) return;
    this.past = [...this.past, this.stableText].slice(-maximumSteps);
    this.future = [];
    this.stableText = this.latestText;
    this.onChange();
  }

  private saveWaitingStep() {
    if (this.groupingTimer) clearTimeout(this.groupingTimer);
    this.saveStep();
  }

  private restore(text: string) {
    this.stableText = text;
    this.latestText = text;
    this.onRestore(text);
    this.onChange();
  }
}
