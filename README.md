# 生成项目

```typescript
ng new <app-name> --skip-tests
```

# qiankun 配置

1. 添加打包工具
   ```typescript
   yarn add @angular-builders/custom-webpack
   ```
2. 配置 `angular.json`
   ```typescript
   architect > build
   "builder": "@angular-builders/custom-webpack:browser"
   "customWebpackConfig": {
     "path": "./custom-webpack.config.js"
   }
   architect > serve
   "builder": "@angular-builders/custom-webpack:dev-server"
   ```
3. 根目录添加 `custom-webpack.config.js`
   ```typescript
   const appName = require("./package.json").name;
   module.exports = {
     devServer: {
       headers: {
         "Access-Control-Allow-Origin": "*",
       },
     },
     output: {
       library: `${appName}-[name]`,
       libraryTarget: "umd",
     },
   };
   ```
4. src 下添加 `public-path.js`
   ```typescript
   if (window.__POWERED_BY_QIANKUN__) {
     // eslint-disable-next-line no-undef
     __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
   }
   ```
5. 修改 `polyfills.ts`

   ```typescript
   // import 'zone.js';  // Included with Angular CLI.
   ```

6. 修改 `main.ts`

   ```typescript
   import "./public-path";
   import { enableProdMode, NgModuleRef } from "@angular/core";
   import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

   import { AppModule } from "./app/app.module";
   import { environment } from "./environments/environment";

   if (environment.production) {
     enableProdMode();
   }

   let app: void | NgModuleRef<AppModule>;
   async function render() {
     app = await platformBrowserDynamic()
       .bootstrapModule(AppModule)
       .catch((err) => console.error(err));
   }
   if (!(window as any).__POWERED_BY_QIANKUN__) {
     render();
   }

   export async function bootstrap(props: Object) {
     console.log(props);
   }

   export async function mount(props: Object) {
     render();
   }

   export async function unmount(props: Object) {
     console.log(props);
     // @ts-ignore
     app.destroy();
   }
   ```

# 组件库 ng-darui

# 参考链接

> [华为组件库](https://devui.design/)
