import{defineConfig}from"vite";export default defineConfig({build:{lib:{entry:"src/index.ts",name:"ScopePilotBundle",formats:["iife"],fileName:()=>"scopepilot.js"},outDir:"dist",emptyOutDir:true}});
