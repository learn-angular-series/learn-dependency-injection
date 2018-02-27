import { InjectionToken } from '@angular/core';

export const MY_CONFIG = {
    appName: '我的APP',
    version: '1.0'
};

//'my-config.ts'这个字符串没有什么特别的用途，只是为了调试的时候打印出来好看
export const MY_CONFIG_TOKEN = new InjectionToken<string>('my-config.ts');
