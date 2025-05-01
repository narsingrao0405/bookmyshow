# Set up the Node + Express + TypeScript Server

cd server
npm init -y
npm install express
npm install --save-dev typescript ts-node-dev @types/node @types/express

# Create tsconfig.json
npx tsc --init

# CORS module installation for dev env
npm install cors
npm install --save-dev @types/cors

# Add scripts in package.json
        "scripts": {
            "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
            "build": "tsc"
        }