import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
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
}
