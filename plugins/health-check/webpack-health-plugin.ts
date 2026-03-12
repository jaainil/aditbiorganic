import type { Compiler } from 'webpack';

interface ErrorInfo {
  message: string;
  stack?: string;
  moduleName?: string;
  loc?: {
    line?: number;
    column?: number;
  };
}

interface Status {
  state: 'idle' | 'compiling' | 'success' | 'failed';
  errors: ErrorInfo[];
  warnings: Array<{
    message: string;
    moduleName?: string;
    loc?: {
      line?: number;
      column?: number;
    };
  }>;
  lastCompileTime: number | null;
  lastSuccessTime: number | null;
  compileDuration: number;
  totalCompiles: number;
  firstCompileTime: number | null;
}

class WebpackHealthPlugin {
  private status: Status;

  constructor() {
    this.status = {
      state: 'idle',
      errors: [],
      warnings: [],
      lastCompileTime: null,
      lastSuccessTime: null,
      compileDuration: 0,
      totalCompiles: 0,
      firstCompileTime: null,
    };
  }

  apply(compiler: Compiler): void {
    const pluginName = 'WebpackHealthPlugin';

    compiler.hooks.compile.tap(pluginName, () => {
      const now = Date.now();
      this.status.state = 'compiling';
      this.status.lastCompileTime = now;

      if (!this.status.firstCompileTime) {
        this.status.firstCompileTime = now;
      }
    });

    compiler.hooks.done.tap(pluginName, (stats) => {
      const info = stats.toJson({
        all: false,
        errors: true,
        warnings: true,
      });

      this.status.totalCompiles++;
      this.status.compileDuration = Date.now() - (this.status.lastCompileTime || 0);

      if (stats.hasErrors()) {
        this.status.state = 'failed';
        this.status.errors = info.errors?.map((err: Error) => ({
          message: (err as Error & { message?: string }).message || String(err),
          stack: err.stack,
          moduleName: (err as Error & { moduleName?: string }).moduleName,
          loc: (err as Error & { loc?: any }).loc,
        })) || [];
      } else {
        this.status.state = 'success';
        this.status.lastSuccessTime = Date.now();
        this.status.errors = [];
      }

      if (stats.hasWarnings()) {
        this.status.warnings = info.warnings?.map((warn: any) => ({
          message: warn.message || String(warn),
          moduleName: warn.moduleName,
          loc: warn.loc,
        })) || [];
      } else {
        this.status.warnings = [];
      }
    });

    compiler.hooks.failed.tap(pluginName, (error: Error) => {
      this.status.state = 'failed';
      this.status.errors = [{
        message: error.message,
        stack: error.stack,
      }];
      this.status.compileDuration = Date.now() - (this.status.lastCompileTime || 0);
    });

    compiler.hooks.invalid.tap(pluginName, () => {
      this.status.state = 'compiling';
    });
  }

  getStatus(): Status & {
    isHealthy: boolean;
    errorCount: number;
    warningCount: number;
    hasCompiled: boolean;
  } {
    return {
      ...this.status,
      isHealthy: this.status.state === 'success',
      errorCount: this.status.errors.length,
      warningCount: this.status.warnings.length,
      hasCompiled: this.status.totalCompiles > 0,
    };
  }

  getSimpleStatus(): {
    state: Status['state'];
    isHealthy: boolean;
    errorCount: number;
    warningCount: number;
  } {
    return {
      state: this.status.state,
      isHealthy: this.status.state === 'success',
      errorCount: this.status.errors.length,
      warningCount: this.status.warnings.length,
    };
  }

  reset(): void {
    this.status = {
      state: 'idle',
      errors: [],
      warnings: [],
      lastCompileTime: null,
      lastSuccessTime: null,
      compileDuration: 0,
      totalCompiles: 0,
      firstCompileTime: null,
    };
  }
}

export default WebpackHealthPlugin;