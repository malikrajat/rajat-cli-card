#!/usr/bin/env node
import chalk from "chalk";
import figlet from "figlet";

// ASCII banner
console.log(chalk.cyan(figlet.textSync("Rajat", { font: "Standard" })));

// Info lines
console.log(chalk.green("👋 Hi, I'm Rajat!"));
console.log(chalk.yellow("💻 Frontend Developer | 16+ years of experience"));
console.log(chalk.magenta("🌐 LinkedIn: https://linkedin.com/in/YOUR-LINK"));
console.log(chalk.blue("📧 Email: your-email@example.com"));
console.log(chalk.red("🚀 Passionate about Angular, React & Modern Web!"));
