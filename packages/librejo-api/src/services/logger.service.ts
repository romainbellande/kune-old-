import { Injectable, Scope, LogLevel, Optional } from '@nestjs/common';
import { isObject } from '@/helpers/shared.helpers';
import * as clc from 'cli-color';

const yellow = clc.xterm(3);

export interface LoggerService {
  log(message: any, context?: string);
  error(message: any, trace?: string, context?: string);
  warn(message: any, context?: string);
  debug?(message: any, context?: string);
  verbose?(message: any, context?: string);
}

@Injectable({ scope: Scope.TRANSIENT })
export class Logger implements LoggerService {
  private static logLevels: LogLevel[] = ['log', 'error', 'warn', 'debug', 'verbose'];
  private static lastTimestamp?: number;
  private static instance?: typeof Logger | LoggerService = Logger;

  constructor(@Optional() protected context?: string, @Optional() private readonly isTimestampEnabled = false) {}

  error(message: any, trace = '', context?: string) {
    const instance = this.getInstance();
    if (!this.isLogLevelEnabled('error')) {
      return;
    }
    instance && instance.error.call(instance, message, trace, context || this.context);
  }

  log(message: any, context?: string) {
    this.callFunction('log', message, context);
  }

  warn(message: any, context?: string) {
    this.callFunction('warn', message, context);
  }

  debug(message: any, context?: string) {
    this.callFunction('debug', message, context);
  }

  verbose(message: any, context?: string) {
    this.callFunction('verbose', message, context);
  }

  setContext(context: string) {
    this.context = context;
  }

  static overrideLogger(logger: LoggerService | LogLevel[] | boolean) {
    if (Array.isArray(logger)) {
      this.logLevels = logger;
      return;
    }
    this.instance = isObject(logger) ? logger : undefined;
  }

  static log(message: any, context = '', isTimeDiffEnabled = true) {
    this.printMessage(message, clc.green, context, isTimeDiffEnabled);
  }

  static error(message: any, trace = '', context = '', isTimeDiffEnabled = true) {
    this.printMessage(message, clc.red, context, isTimeDiffEnabled);
    this.printStackTrace(trace);
  }

  static warn(message: any, context = '', isTimeDiffEnabled = true) {
    this.printMessage(message, clc.yellow, context, isTimeDiffEnabled);
  }

  static debug(message: any, context = '', isTimeDiffEnabled = true) {
    this.printMessage(message, clc.magentaBright, context, isTimeDiffEnabled);
  }

  static verbose(message: any, context = '', isTimeDiffEnabled = true) {
    this.printMessage(message, clc.cyanBright, context, isTimeDiffEnabled);
  }

  private callFunction(name: 'log' | 'warn' | 'debug' | 'verbose', message: any, context?: string) {
    if (!this.isLogLevelEnabled(name)) {
      return;
    }
    const instance = this.getInstance();
    const func = instance && (instance as typeof Logger)[name];
    func && func.call(instance, message, context || this.context, this.isTimestampEnabled);
  }

  private getInstance(): typeof Logger | LoggerService {
    const { instance } = Logger;
    return instance === this ? Logger : instance;
  }

  private isLogLevelEnabled(level: LogLevel): boolean {
    return Logger.logLevels.includes(level);
  }

  private static printMessage(
    message: any,
    color: (message: string) => string,
    context = '',
    isTimeDiffEnabled?: boolean,
  ) {
    const output = isObject(message) ? JSON.stringify(message, null, 2) : message;
    const timestamp = new Date().getTime();
    const timestampDiff = this.updateAndGetTimestampDiff(isTimeDiffEnabled);

    process.stdout.write(JSON.stringify({ pid: process.pid, timestamp, context, output, timestampDiff }));
  }

  private static updateAndGetTimestampDiff(isTimeDiffEnabled?: boolean): number {
    const includeTimestamp = Logger.lastTimestamp && isTimeDiffEnabled;
    const result = includeTimestamp ? Date.now() - Logger.lastTimestamp : -1;
    Logger.lastTimestamp = Date.now();
    return result;
  }

  private static printStackTrace(trace: string) {
    if (!trace) {
      return;
    }
    process.stdout.write(`${trace}\n`);
  }
}
