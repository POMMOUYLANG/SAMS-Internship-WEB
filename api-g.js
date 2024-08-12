import fs from "node:fs";
import { codegen } from "swagger-axios-codegen";
import axios from "axios";

// const domain = "https://api-b2b.moreakorea.com";
const domain = "https://api-customer.brorsorb.com/swagger-json";

(async () => {
  await codegen({
    methodNameMode: "shortOperationId",
    remoteUrl: domain,
    outputDir: "./src",
    serviceNameSuffix: "API",
    fileName: "api.ts",
    useStaticMethod: true,
  })
    .then(codeGenReplaceResult())
    .then(() => {
      console.log("api.ts generated");
    })
    .catch((err) => {
      console.error(err);
    });
})();

function codeGenReplaceResult() {
  return () => {
    const someFile = "./src/api.ts";
    fs.readFile(someFile, "utf8", (err, data) => {
      let result = data.replace(
        "export const basePath = '';",
        "export const basePath = import.meta.env.VITE_API;"
      );

      result = result.replace(
        "if (serviceOptions.axios)",
        "  serviceOptions.axios = axiosInstance;\n  if (serviceOptions.axios)"
      );

      result = result.replace(
        "import axiosStatic, { type AxiosInstance, type AxiosRequestConfig } from 'axios'",
        'import axiosInstance from "@/core/services/ApiService.ts";\n' +
          "import type  { AxiosInstance, AxiosRequestConfig } from 'axios'"
      );

      result = result.replaceAll(
        "console.warn('适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body');",
        ""
      );

      // result = result.replace(" resolve(res.data);", " resolve(res.data.data);");
      fs.writeFile(someFile, result, "utf8", (err) => {
        if (err) return console.log(err);
      });
    });
  };
}
