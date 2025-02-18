"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getHello() {
        const url = 'https://api-nezuela.onrender.com/docs';
        return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Docs Page</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f9;
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              flex-direction: column;
            }
            h1 {
              color: #2c3e50;
              font-size: 2.5rem;
              margin-bottom: 20px;
            }
            .button-container {
              margin-top: 30px;
            }
            .docs-button {
              background-color: #3498db;
              color: white;
              padding: 12px 30px;
              font-size: 16px;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              transition: background-color 0.3s ease;
            }
            .docs-button:hover {
              background-color: #2980b9;
            }
            .docs-link {
              color: #3498db;
              text-decoration: none;
              font-size: 18px;
            }
            .docs-link:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <h1>Welcome to the Docs Page!</h1>
          <p>Click the button below to visit the best documentation:</p>
          <div class="button-container">
            <a href="${url}" target="_blank" class="docs-link" >
              <button class="docs-button">Best Document</button>
            </a>
          </div>
        </body>
      </html>
    `;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map