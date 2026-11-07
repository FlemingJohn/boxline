export class ExclusiveTasks {
  private activeTask: Promise<void> | null = null;

  constructor(private onError: (error: unknown) => void) {}

  runIfFree(task: () => Promise<void>) {
    if (this.activeTask) return Promise.resolve();
    this.activeTask = this.runTask(task).finally(() => {
      this.activeTask = null;
    });
    return this.activeTask;
  }

  async runAfterActiveTask(task: () => Promise<void>) {
    if (this.activeTask) await this.activeTask;
    await this.runIfFree(task);
  }

  private async runTask(task: () => Promise<void>) {
    try {
      await task();
    } catch (error) {
      this.onError(error);
    }
  }
}
