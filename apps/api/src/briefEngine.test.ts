import {describe,it,expect} from "vitest";
import {BriefEngine} from "./briefEngine.js";
describe("BriefEngine",()=>{it("returns a cautious draft when no AI key is configured",async()=>{const old=process.env.GEMINI_API_KEY;delete process.env.GEMINI_API_KEY;const result=await new BriefEngine().generate({description:"Build a simple booking website for local tutors.",category:"web-development"});expect(result.title).toBeTruthy();expect(result.missingInformation.length).toBeGreaterThan(0);if(old)process.env.GEMINI_API_KEY=old;});});
