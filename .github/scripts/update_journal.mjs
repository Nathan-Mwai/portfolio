import {GoogleGenerativeAI} from "@google/generative-ai"
import {execSync} from "child_process"
import fs from "fs"

// Setup
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

const model = genAI.getGenerativeModel({model: "gemini-3-flash-preview"})

async function run(){
    try{
        console.log("Calculating differences...")
        const diff = execSync("git diff origin/2025-portfolio...HEAD").toString()

        if(!diff.trim()){
            console.log("No changes found.")
            return
        }

        //Prompt
        const today = new Date().toISOString().slice(0, 10)
        const prompt = `
      You are an automated dev-journal assistant for a Next.js portfolio.
      I have just written some code. Look at the 'git diff' below and write a brief journal entry.
      
      Rules:
      - Generate a short descriptive title (3–6 words) for the update.
       - Start with the exact header: "### Update: ${today} - {title} ".
      - Use bullet points.
      - Be casual and first-person ("I updated the navbar...", "I fixed a bug in...").
      - Keep it under 150 words.
      - DO NOT explain the code, just narrate the progress.
      
      Code Changes:
      ${diff.substring(0, 10000)}
    `;

        const result = await model.generateContent(prompt);
        const journalEntry = result.response.text() .replace(/^### Update:.*\n?/, `### Update: ${today}\n`);

        //Append to README.md
        console.log("Appending README...");
        fs.appendFileSync("README.md","\n\n" + journalEntry);
        console.log("Done.")
    }catch(err){
        console.error("Error generating journal:",err)
        process.exit(1);
    }
}

run()