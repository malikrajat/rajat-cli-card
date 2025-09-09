#!/usr/bin/env node
import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet";

// Get command line arguments
const args = process.argv.slice(2);
const command = args[0];

// Available commands and features
const commands = {
  help: () => showHelp(),
  contact: () => showContactOnly(),
  social: () => showSocialOnly(),
  skills: () => showSkills(),
  experience: () => showExperience(),
  projects: () => showProjects()
};

// Main function
function main() {
  if (command && commands[command]) {
    commands[command]();
  } else if (command && command !== 'help') {
    console.log(chalk.red(`Unknown command: ${command}`));
    showHelp();
  } else {
    showFullProfile();
  }
}

function showFullProfile() {
  // Your existing code here...
  console.log("Full profile display...");
}

function showHelp() {
  const helpText = `
${chalk.cyan.bold('Rajat CLI - Available Commands:')}

${chalk.yellow('rajat')}          Show full profile
${chalk.yellow('rajat help')}     Show this help message
${chalk.yellow('rajat contact')}  Show contact info only
${chalk.yellow('rajat social')}   Show social media links
${chalk.yellow('rajat skills')}   Show technical skills
${chalk.yellow('rajat experience')} Show work experience
${chalk.yellow('rajat projects')} Show featured projects

${chalk.dim('Examples:')}
${chalk.gray('  npx @your-username/about')}
${chalk.gray('  npx @your-username/about skills')}
${chalk.gray('  npx @your-username/about contact')}
  `;
  
  console.log(boxen(helpText, {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "blue"
  }));
}

function showContactOnly() {
  const contactInfo = `
${chalk.green('📧 Contact Information')}

${chalk.white('Email:')}      mr.rajatmalik@gmail.com
${chalk.white('Portfolio:')}  https://rajatmalik.dev
${chalk.white('LinkedIn:')}   https://linkedin.com/in/errajatmalik
${chalk.white('Phone:')}      +1 (555) 123-4567
${chalk.white('Location:')}   San Francisco, CA
  `;
  
  console.log(boxen(contactInfo, {
    padding: 1,
    margin: 1,
    borderStyle: "single",
    borderColor: "green"
  }));
}

function showSkills() {
  const skillsInfo = `
${chalk.yellow.bold('🛠️ Technical Skills')}

${chalk.cyan('Frontend:')}
• React, Angular, Vue.js
• TypeScript, JavaScript (ES6+)
• HTML5, CSS3, SASS/SCSS
• Webpack, Vite, Parcel

${chalk.green('Backend:')}
• Node.js, Express.js
• MongoDB, PostgreSQL
• REST APIs, GraphQL

${chalk.magenta('DevOps & Tools:')}
• Git, GitHub Actions
• Docker, AWS
• Jest, Cypress
• VSCode, Figma
  `;
  
  console.log(boxen(skillsInfo, {
    padding: 1,
    margin: 1,
    borderStyle: "double",
    borderColor: "yellow"
  }));
}

function showProjects() {
  const projectsInfo = `
${chalk.red.bold('🚀 Featured Projects')}

${chalk.white.bold('1. E-Commerce Platform')}
   • React, TypeScript, Stripe Integration
   • ${chalk.dim('https://github.com/malikrajat/ecommerce')}

${chalk.white.bold('2. Task Management App')}
   • Angular, Node.js, MongoDB
   • ${chalk.dim('https://github.com/malikrajat/taskmanager')}

${chalk.white.bold('3. Developer Portfolio')}
   • Next.js, Tailwind CSS
   • ${chalk.dim('https://rajatmalik.dev')}
  `;
  
  console.log(boxen(projectsInfo, {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "red"
  }));
}

// Run the CLI
main();



// #!/usr/bin/env node
// import chalk from "chalk";
// import boxen from "boxen";
// import figlet from "figlet";


// // Big banner text
// const banner = figlet.textSync("Welcome Buddy - About Me !!!", {
//   font: "Standard",
//   horizontalLayout: "default",
//   verticalLayout: "default"
// });


// // ASCII banner
// console.log(chalk.cyan(figlet.textSync("Rajat Malik", { font: "Standard" })));




// // Wrap everything in a nice box
// console.log(boxen(
//   chalk.green(banner) + "\n" +
//   chalk.magenta("-------------------------------------------------------------------------") + "\n" +
// //   chalk.blueBright(logo) + "\n" +
//   chalk.magenta("-------------------------------------------------------------------------") + "\n" +
//   // Info lines
// console.log(chalk.green("👋 Hi, I'm Rajat!")) +
// console.log(chalk.yellow("💻 Frontend Developer | 13+ years of experience")) +
// console.log(chalk.blue("📧 Email:           mr.rajatmalik@gmail.com")) +
// console.log(chalk.magenta("🌐 Portfolio:    https://rajatmalik.dev")) +
// console.log(chalk.magenta("💼 LinkedIn:     https://linkedin.com/in/errajatmalik")) +
// console.log(chalk.magenta("🎥 Threads:      https://www.threads.net/@er.rajatmalik")) +
// console.log(chalk.magenta("🐦 Twitter:      https://twitter.com/er_rajatmalik")) +
// console.log(chalk.magenta("👥 BlueSky:      http://devrajat.bsky.social")) +
// console.log(chalk.magenta("🌟 GitHub:       https://github.com/malikrajat")) +
// console.log(chalk.magenta("📚 Medium:       https://medium.com/@codewithrajat")) +
// console.log(chalk.magenta("💬 Dev To:       https://dev.to/codewithrajat")) +
// console.log(chalk.magenta("✉️ Substack:     https://codewithrajat.substack.com")) +
// console.log(chalk.magenta("✍️ Hashnode:     https://hashnode.com/@codeswithrajat")) +
// console.log(chalk.red("🚀 Passionate about Angular, React & Modern Web!")) +
//   + 
//   chalk.magenta("==========================================================================="),
//   { 
//     padding: 1, 
//     margin: 1, 
//     borderStyle: "round", 
//     borderColor: "yellow" 
//   }
// ));


// //#!/usr/bin/env node
// import chalk from "chalk";
// import boxen from "boxen";
// import figlet from "figlet";


// // Section header
// const subBanner = figlet.textSync("Welcome Buddy - About Me !!!", {
//   font: "Small"
// });

// // Title banner
// const banner = figlet.textSync("Rajat Malik", {
//   font: "Standard",
//   horizontalLayout: "default",
//   verticalLayout: "default"
// });


// // Info lines (just build as string, no console.log inside)
// const details = `
// ${chalk.green("👋 Hi, I'm Rajat!")}

// ${chalk.yellow("💻 Frontend Developer | 13+ years of experience")}

// ${chalk.blue("📧 Email:")}       ${chalk.white("mr.rajatmalik@gmail.com")}
// ${chalk.cyan("🌐 Portfolio:")}   ${chalk.white("https://rajatmalik.dev")}
// ${chalk.cyan("💼 LinkedIn:")}    ${chalk.white("https://linkedin.com/in/errajatmalik")}
// ${chalk.magenta("🎥 Threads:")}    ${chalk.white("https://www.threads.net/@er.rajatmalik")}
// ${chalk.cyan("🐦 Twitter:")}     ${chalk.white("https://twitter.com/er_rajatmalik")}
// ${chalk.blue("👥 BlueSky:")}     ${chalk.white("http://devrajat.bsky.social")}
// ${chalk.green("🌟 GitHub:")}      ${chalk.white("https://github.com/malikrajat")}
// ${chalk.magenta("📚 Medium:")}    ${chalk.white("https://medium.com/@codewithrajat")}
// ${chalk.magenta("💬 Dev To:")}    ${chalk.white("https://dev.to/codewithrajat")}
// ${chalk.yellow("✉️ Substack:")}   ${chalk.white("https://codewithrajat.substack.com")}
// ${chalk.yellow("✍️ Hashnode:")}   ${chalk.white("https://hashnode.com/@codeswithrajat")}

// ${chalk.red("🚀 Passionate about Angular, React & Modern Web!")}
// `;

// // Final boxed output
// const output = boxen(
//   chalk.green(subBanner) + "\n" +
//   chalk.cyan(banner) + "\n" +
//   chalk.magenta("──────────────────────────────────────────────────────────────") + "\n" +
//   details +
//   chalk.magenta("──────────────────────────────────────────────────────────────"),
//   {
//     padding: 1,
//     margin: 1,
//     borderStyle: "round",
//     borderColor: "yellow"
//   }
// );

// console.log(output);


//#!/usr/bin/env node
// import chalk from "chalk";
// import boxen from "boxen";
// import figlet from "figlet";

// // Big name banner (compact font)

// let banner = figlet.textSync("Rajat Malik", {
//   font: "Big",
//   horizontalLayout: "default",
//   verticalLayout: "default",
//   whitespaceBreak: true
// });

// // Add extra spacing between letters
// banner = banner.split("\n").map(line => line.split("").join(" ")).join("\n");

// // Subtitle (instead of wide figlet)
// const subtitle = chalk.bold.cyan("★ Welcome Buddy – About Me ★");

// // Helper function for alignment
// const formatLine = (icon, label, value, color = chalk.cyan) => {
//   return `${icon} ${chalk.yellow(label.padEnd(12))} ${color(value)}`;
// };

// // Details (aligned)
// const details = `
// ${chalk.green("👋 Hi, I'm Rajat!")}
// ${chalk.yellow("💻 Frontend Developer | 13+ years of experience")}

// ${formatLine("📧", "Email:", "mr.rajatmalik@gmail.com", chalk.white)}
// ${formatLine("🌐", "Portfolio:", "https://rajatmalik.dev")}
// ${formatLine("💼", "LinkedIn:", "https://linkedin.com/in/errajatmalik")}
// ${formatLine("🎥", "Threads:", "https://www.threads.net/@er.rajatmalik")}
// ${formatLine("🐦", "Twitter:", "https://twitter.com/er_rajatmalik")}
// ${formatLine("👥", "BlueSky:", "http://devrajat.bsky.social")}
// ${formatLine("🌟", "GitHub:", "https://github.com/malikrajat", chalk.green)}
// ${formatLine("📚", "Medium:", "https://medium.com/@codewithrajat", chalk.magenta)}
// ${formatLine("💬", "Dev To:", "https://dev.to/codewithrajat", chalk.magenta)}
// ${formatLine("✉️", "Substack:", "https://codewithrajat.substack.com", chalk.yellow)}
// ${formatLine("✍️", "Hashnode:", "https://hashnode.com/@codeswithrajat", chalk.yellow)}

// ${chalk.red("🚀 Passionate about Angular, React & Modern Web!")}
// `;

// // Final boxed output
// const output = boxen(
//     subtitle + "\n\n" +
//   chalk.cyan(banner) + "\n" +
//   chalk.magenta("──────────────────────────────────────────────────────────────") + "\n" +
//   details +
//   chalk.magenta("──────────────────────────────────────────────────────────────"),
//   {
//     padding: 1,
//     margin: 1,
//     borderStyle: "round",
//     borderColor: "yellow"
//   }
// );

// console.log(output);


// //#!/usr/bin/env node
// import chalk from "chalk";
// import boxen from "boxen";
// import figlet from "figlet";

// // Generate big name banner
// let banner = figlet.textSync("Rajat Malik", {
//   font: "Big",
//   horizontalLayout: "default",
//   verticalLayout: "default",
//   whitespaceBreak: true,
// });

// // Add spacing between letters to make them stand out
// banner = banner
//   .split("\n")
//   .map(line =>
//     line
//       .split("")
//       .map(char => (char.trim() === "" ? "  " : char + " "))
//       .join("")
//   )
//   .join("\n");

// // Subtitle (compact, bold highlight)
// const subtitle = chalk.bold.cyan("★ Welcome Buddy – About Me ★");

// // Helper for neat alignment
// const formatLine = (icon, label, value, color = chalk.cyan) => {
//   return `${icon.padEnd(3)} ${chalk.yellow(label.padEnd(12))} ${color(value)}`;
// };

// // Details section
// const details = `
// ${chalk.green("👋 Hi, I'm Rajat!")}
// ${chalk.yellow("💻 Frontend Developer | 13+ years of experience")}

// ${formatLine("📧", "Email:", "mr.rajatmalik@gmail.com", chalk.white)}
// ${formatLine("🌐", "Portfolio:", "https://rajatmalik.dev")}
// ${formatLine("💼", "LinkedIn:", "https://linkedin.com/in/errajatmalik")}
// ${formatLine("🎥", "Threads:", "https://www.threads.net/@er.rajatmalik")}
// ${formatLine("🐦", "Twitter:", "https://twitter.com/er_rajatmalik")}
// ${formatLine("👥", "BlueSky:", "http://devrajat.bsky.social")}
// ${formatLine("🌟", "GitHub:", "https://github.com/malikrajat", chalk.green)}
// ${formatLine("📚", "Medium:", "https://medium.com/@codewithrajat", chalk.magenta)}
// ${formatLine("💬", "Dev To:", "https://dev.to/codewithrajat", chalk.magenta)}
// ${formatLine("✉️ ", " Substack:", " https://codewithrajat.substack.com", chalk.yellow)}
// ${formatLine("✍️ ", " Hashnode:", " https://hashnode.com/@codeswithrajat", chalk.yellow)}

// ${chalk.red("🚀 Passionate about Angular, React & Modern Web!")}
// `;

// // Final output in box
// const output = boxen(
//   subtitle +
//     "\n\n" +
//     chalk.cyan(banner) +
//     "\n" +
//     chalk.magenta("──────────────────────────────────────────────────────────────") +
//     "\n" +
//     details +
//     chalk.magenta("──────────────────────────────────────────────────────────────"),
//   {
//     padding: 1,
//     margin: 1,
//     borderStyle: "round",
//     borderColor: "yellow",
//   }
// );

// console.log(output);



// //#!/usr/bin/env node
// import chalk from "chalk";
// import boxen from "boxen";
// import figlet from "figlet";

// // Create a gradient-like effect for the name
// const createGradientText = (text) => {
//   const colors = [chalk.cyan, chalk.blue, chalk.magenta, chalk.red, chalk.yellow];
//   return text
//     .split("")
//     .map((char, i) => colors[i % colors.length](char))
//     .join("");
// };

// // Generate name banner with better spacing
// const nameBanner = figlet.textSync("Rajat Malik", {
//   font: "ANSI Shadow",
//   horizontalLayout: "fitted",
//   verticalLayout: "default"
// });

// // Welcome header with style
// const welcomeHeader = chalk.bold.hex("#00ff88")("🌟 Welcome to Rajat's Digital Business Card 🌟");

// // Professional summary with better formatting
// const professionalSummary = [
//   chalk.hex("#ff6b6b")("👋 Hi there! I'm Rajat Malik"),
//   chalk.hex("#4ecdc4")("💼 Senior Frontend Developer"),
//   chalk.hex("#45b7d1")("🚀 13+ Years of Web Development Excellence"),
//   chalk.hex("#96ceb4")("🎯 Specialized in Angular, React & Modern Web Technologies")
// ].join("\n");

// // Contact information with consistent styling
// const contactInfo = [
//   "",
//   chalk.bold.hex("#feca57")("📬 GET IN TOUCH"),
//   chalk.hex("#ff9ff3")("─".repeat(50)),
//   "",
//   `📧  ${chalk.hex("#54a0ff")("Email")}         ${chalk.white("mr.rajatmalik@gmail.com")}`,
//   `🌐  ${chalk.hex("#54a0ff")("Portfolio")}     ${chalk.white("https://rajatmalik.dev")}`,
//   `💼  ${chalk.hex("#54a0ff")("LinkedIn")}      ${chalk.white("https://linkedin.com/in/errajatmalik")}`,
//   "",
//   chalk.bold.hex("#feca57")("🌍 SOCIAL PRESENCE"),
//   chalk.hex("#ff9ff3")("─".repeat(50)),
//   "",
//   `🎥  ${chalk.hex("#5f27cd")("Threads")}       ${chalk.white("https://www.threads.net/@er.rajatmalik")}`,
//   `🐦  ${chalk.hex("#00d2d3")("Twitter")}       ${chalk.white("https://twitter.com/er_rajatmalik")}`,
//   `👥  ${chalk.hex("#0abde3")("BlueSky")}       ${chalk.white("http://devrajat.bsky.social")}`,
//   `🌟  ${chalk.hex("#1dd1a1")("GitHub")}        ${chalk.white("https://github.com/malikrajat")}`,
//   "",
//   chalk.bold.hex("#feca57")("✍️ CONTENT & WRITING"),
//   chalk.hex("#ff9ff3")("─".repeat(50)),
//   "",
//   `📚  ${chalk.hex("#ff6348")("Medium")}        ${chalk.white("https://medium.com/@codewithrajat")}`,
//   `💬  ${chalk.hex("#2f3542")("Dev.to")}        ${chalk.white("https://dev.to/codewithrajat")}`,
//   `✉️  ${chalk.hex("#ff7675")("Substack")}      ${chalk.white("https://codewithrajat.substack.com")}`,
//   `✍️  ${chalk.hex("#6c5ce7")("Hashnode")}      ${chalk.white("https://hashnode.com/@codeswithrajat")}`
// ].join("\n");

// // Skills highlight
// const skillsHighlight = [
//   "",
//   chalk.hex("#ff9ff3")("─".repeat(65)),
//   chalk.bold.hex("#ff6b6b")("🚀 PASSIONATE ABOUT: ") + 
//   chalk.hex("#4ecdc4")("Angular") + chalk.white(" • ") +
//   chalk.hex("#61dafb")("React") + chalk.white(" • ") +
//   chalk.hex("#f7df1e")("JavaScript") + chalk.white(" • ") +
//   chalk.hex("#06d6a0")("Modern Web Development"),
//   chalk.hex("#ff9ff3")("─".repeat(65))
// ].join("\n");

// // Footer message
// const footerMessage = [
//   "",
//   chalk.hex("#feca57")("💡 ") + chalk.italic.hex("#a4b0be")("\"Code is poetry written in logic. Let's create something beautiful together!\""),
//   "",
//   chalk.bold.hex("#00ff88")("🤝 Always open to collaboration and interesting projects!")
// ].join("\n");

// // Combine all sections
// const cardContent = [
//   welcomeHeader,
//   "",
//   chalk.hex("#ff6b6b")(nameBanner),
//   "",
//   professionalSummary,
//   contactInfo,
//   skillsHighlight,
//   footerMessage
// ].join("\n");

// // Create the final boxed output with enhanced styling
// const finalCard = boxen(cardContent, {
//   padding: {
//     top: 2,
//     bottom: 2,
//     left: 3,
//     right: 3
//   },
//   margin: 1,
//   borderStyle: {
//     topLeft: "╔",
//     topRight: "╗", 
//     bottomLeft: "╚",
//     bottomRight: "╝",
//     horizontal: "═",
//     vertical: "║"
//   },
//   borderColor: "cyan",
//   backgroundColor: "black"
// });

// console.log(finalCard);

// // Add a subtle animation effect (optional)
// const animatedFooter = [
//   "",
//   chalk.hex("#feca57")("⚡ Thanks for checking out my profile! ⚡"),
//   chalk.hex("#ff9ff3")("🔗 Feel free to connect with me on any platform above!")
// ].join("\n");

// console.log("\n" + chalk.italic.gray(animatedFooter));





// //#!/usr/bin/env node
// import chalk from "chalk";
// import boxen from "boxen";
// import figlet from "figlet";

// // Create beautiful gradient name banner
// const createStylizedName = () => {
//   const nameText = figlet.textSync("Rajat Malik", {
//     font: "Small",
//     horizontalLayout: "fitted",
//     verticalLayout: "default"
//   });
  
//   // Apply gradient colors to each line
//   const lines = nameText.split('\n');
//   const gradientColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
  
//   return lines.map((line, index) => 
//     chalk.hex(gradientColors[index % gradientColors.length]).bold(line)
//   ).join('\n');
// };

// // Create a clean separator
// const createSeparator = (length = 50, char = '─', color = '#3498db') => {
//   return chalk.hex(color)(char.repeat(length));
// };

// // Welcome header with animated feel
// const welcomeHeader = [
//   chalk.hex('#ff6b6b')('╭─────────────────────────────────────────────────╮'),
//   chalk.hex('#4ecdc4')('│') + chalk.bold.hex('#feca57')('  🌟 Welcome to Rajat\'s Digital Business Card 🌟  ') + chalk.hex('#4ecdc4')('│'),
//   chalk.hex('#ff6b6b')('╰─────────────────────────────────────────────────╯')
// ].join('\n');

// // Professional intro
// const professionalIntro = [
//   chalk.hex('#ff6b6b').bold('👋 Hi there! I\'m ') + chalk.hex('#feca57').bold.underline('Rajat Malik'),
//   chalk.hex('#4ecdc4')('💼 Senior Frontend Developer'),
//   chalk.hex('#45b7d1')('🚀 13+ Years of Web Development Excellence'),
//   chalk.hex('#96ceb4')('🎯 Angular • React • Modern Web Technologies Specialist')
// ].join('\n');

// // Contact section with better alignment
// const contactSection = [
//   '',
//   chalk.hex('#feca57').bold('📬 GET IN TOUCH'),
//   createSeparator(45, '─', '#3498db'),
//   '',
//   `📧  ${chalk.hex('#3498db').bold('Email:')}      ${chalk.white('mr.rajatmalik@gmail.com')}`,
//   `🌐  ${chalk.hex('#3498db').bold('Portfolio:')}  ${chalk.white('https://rajatmalik.dev')}`,
//   `💼  ${chalk.hex('#3498db').bold('LinkedIn:')}   ${chalk.white('https://linkedin.com/in/errajatmalik')}`
// ].join('\n');

// // Social presence section
// const socialSection = [
//   '',
//   chalk.hex('#e74c3c').bold('🌍 SOCIAL PRESENCE'),
//   createSeparator(45, '─', '#e74c3c'),
//   '',
//   `🎥  ${chalk.hex('#9b59b6').bold('Threads:')}    ${chalk.white('https://www.threads.net/@er.rajatmalik')}`,
//   `🐦  ${chalk.hex('#1da1f2').bold('Twitter:')}    ${chalk.white('https://twitter.com/er_rajatmalik')}`,
//   `👥  ${chalk.hex('#0084ff').bold('BlueSky:')}    ${chalk.white('http://devrajat.bsky.social')}`,
//   `🌟  ${chalk.hex('#28a745').bold('GitHub:')}     ${chalk.white('https://github.com/malikrajat')}`
// ].join('\n');

// // Content & Writing section
// const contentSection = [
//   '',
//   chalk.hex('#f39c12').bold('✍️ CONTENT & WRITING'),
//   createSeparator(45, '─', '#f39c12'),
//   '',
//   `📚  ${chalk.hex('#000000').bold('Medium:')}     ${chalk.white('https://medium.com/@codewithrajat')}`,
//   `💬  ${chalk.hex('#0a0a0a').bold('Dev.to:')}     ${chalk.white('https://dev.to/codewithrajat')}`,
//   `✉️  ${chalk.hex('#ff6719').bold('Substack:')}   ${chalk.white('https://codewithrajat.substack.com')}`,
//   `✍️  ${chalk.hex('#2962ff').bold('Hashnode:')}   ${chalk.white('https://hashnode.com/@codeswithrajat')}`
// ].join('\n');

// // Skills highlight with colorful tech stack
// const skillsSection = [
//   '',
//   createSeparator(50, '═', '#8e44ad'),
//   chalk.hex('#e74c3c').bold('🚀 PASSIONATE ABOUT: ') +
//   chalk.hex('#dd4b39').bold('Angular') + chalk.white(' • ') +
//   chalk.hex('#61dafb').bold('React') + chalk.white(' • ') +
//   chalk.hex('#f7df1e').bold('JavaScript') + chalk.white(' • ') +
//   chalk.hex('#06d6a0').bold('Modern Web'),
//   createSeparator(50, '═', '#8e44ad')
// ].join('\n');

// // Footer with inspiration
// const footerSection = [
//   '',
//   chalk.hex('#95a5a6')('💡 ') + chalk.italic.hex('#7f8c8d')('"Code is poetry written in logic. Let\'s create something beautiful together!"'),
//   '',
//   chalk.hex('#27ae60').bold('🤝 Always open to collaboration and interesting projects!'),
//   '',
//   chalk.hex('#e67e22')('⚡ Thanks for checking out my profile! Feel free to connect! ⚡')
// ].join('\n');

// // Combine everything with consistent width
// const cardContent = [
//   welcomeHeader,
//   '',
//   createStylizedName(),
//   '',
//   professionalIntro,
//   contactSection,
//   socialSection,
//   contentSection,
//   skillsSection,
//   footerSection
// ].join('\n');

// // Create the final card with simple, reliable borders
// const finalCard = boxen(cardContent, {
//   padding: {
//     top: 1,
//     bottom: 1,
//     left: 2,
//     right: 2
//   },
//   margin: 1,
//   borderStyle: 'double',
//   borderColor: 'cyan',
//   width: 80,
//   textAlignment: 'left'
// });

// console.log(finalCard);


// //#!/usr/bin/env node
// import chalk from "chalk";
// import boxen from "boxen";
// import figlet from "figlet";

// // Create beautiful gradient name banner with controlled width
// const createStylizedName = () => {
//   const nameText = figlet.textSync("Rajat Malik", {
//     font: "Small",
//     horizontalLayout: "fitted",
//     verticalLayout: "default"
//   });
  
//   // Apply gradient colors to each line and ensure consistent width
//   const lines = nameText.split('\n').filter(line => line.trim() !== '');
//   const gradientColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'];
  
//   return lines.map((line, index) => {
//     const coloredLine = chalk.hex(gradientColors[index % gradientColors.length]).bold(line);
//     // Center the line within 70 characters
//     const padding = Math.max(0, Math.floor((70 - line.length) / 2));
//     return ' '.repeat(padding) + coloredLine;
//   }).join('\n');
// };

// // Helper function to format lines with consistent width and alignment
// const formatLine = (icon, label, value, maxWidth = 70) => {
//   const iconPart = `${icon}  `;
//   const labelPart = `${chalk.hex('#3498db').bold(label.padEnd(10))} `;
//   const valuePart = chalk.white(value);
  
//   const line = iconPart + labelPart + valuePart;
  
//   // Ensure line doesn't exceed maxWidth
//   if (line.length > maxWidth) {
//     const availableSpace = maxWidth - iconPart.length - labelPart.length - 3;
//     const truncatedValue = value.length > availableSpace ? 
//       value.substring(0, availableSpace - 3) + '...' : value;
//     return iconPart + labelPart + chalk.white(truncatedValue);
//   }
  
//   return line;
// };

// // Create separator with exact width
// const createSeparator = (char = '─', color = '#3498db', width = 70) => {
//   return chalk.hex(color)(char.repeat(width));
// };

// // Welcome header with fixed width
// const welcomeHeader = [
//   chalk.hex('#ff6b6b')('╭' + '─'.repeat(68) + '╮'),
//   chalk.hex('#4ecdc4')('│') + chalk.bold.hex('#feca57')(' 🌟 Welcome to Rajat\'s Digital Business Card 🌟 '.padEnd(68)) + chalk.hex('#4ecdc4')('│'),
//   chalk.hex('#ff6b6b')('╰' + '─'.repeat(68) + '╯')
// ].join('\n');

// // Professional intro with controlled width
// const professionalIntro = [
//   chalk.hex('#ff6b6b').bold('👋 Hi there! I\'m ') + chalk.hex('#feca57').bold.underline('Rajat Malik'),
//   chalk.hex('#4ecdc4')('💼 Senior Frontend Developer'),
//   chalk.hex('#45b7d1')('🚀 13+ Years of Web Development Excellence'),
//   chalk.hex('#96ceb4')('🎯 Angular • React • Modern Web Technologies')
// ].join('\n');

// // Contact section with perfect alignment
// const contactSection = [
//   '',
//   chalk.hex('#feca57').bold('📬  CONTENT & WRITING'),
//   createSeparator('─', '#3498db', 70),
//   '',
//   formatLine('📧', 'Email:', 'mr.rajatmalik@gmail.com'),
//   formatLine('🌐', 'Portfolio:', 'https://rajatmalik.dev'),
//   formatLine('💼', 'LinkedIn:', 'https://linkedin.com/in/errajatmalik')
// ].join('\n');

// // Social presence section with consistent formatting
// const socialSection = [
//   '',
//   chalk.hex('#e74c3c').bold('🌍  SOCIAL PRESENCE'),
//   createSeparator('─', '#e74c3c', 70),
//   '',
//   formatLine('🎥', 'Threads:', 'https://www.threads.net/@er.rajatmalik'),
//   formatLine('🐦', 'Twitter:', 'https://twitter.com/er_rajatmalik'),
//   formatLine('👥', 'BlueSky:', 'http://devrajat.bsky.social'),
//   formatLine('🌟', 'GitHub:', 'https://github.com/malikrajat')
// ].join('\n');

// // Content & Writing section with proper spacing
// const contentSection = [
//   '',
//   chalk.hex('#f39c12').bold('✍️  CONTENT & WRITING'),
//   createSeparator('─', '#f39c12', 70),
//   '',
//   formatLine('📚', 'Medium:', 'https://medium.com/@codewithrajat'),
//   formatLine('💬', 'Dev.to:', 'https://dev.to/codewithrajat'),
//   formatLine('✉️', 'Substack:', 'https://codewithrajat.substack.com'),
//   formatLine('✍️', 'Hashnode:', 'https://hashnode.com/@codeswithrajat')
// ].join('\n');

// // Skills section with controlled width
// const skillsSection = [
//   '',
//   createSeparator('═', '#8e44ad', 70),
//   chalk.hex('#e74c3c').bold('🚀 PASSIONATE ABOUT: ') +
//   chalk.hex('#dd4b39').bold('Angular') + chalk.white(' • ') +
//   chalk.hex('#61dafb').bold('React') + chalk.white(' • ') +
//   chalk.hex('#f7df1e').bold('JavaScript'),
//   createSeparator('═', '#8e44ad', 70)
// ].join('\n');

// // Footer section with proper text wrapping
// const footerSection = [
//   '',
//   chalk.hex('#95a5a6')('💡 ') + chalk.italic.hex('#7f8c8d')('"Code is poetry written in logic.'),
//   chalk.italic.hex('#7f8c8d')('   Let\'s create something beautiful together!"'),
//   '',
//   chalk.hex('#27ae60').bold('🤝 Always open to collaboration and projects!'),
//   '',
//   chalk.hex('#e67e22')('⚡ Thanks for checking out my profile! ⚡')
// ].join('\n');

// // Combine everything with exact width control
// const cardContent = [
//   welcomeHeader,
//   '',
//   createStylizedName(),
//   '',
//   professionalIntro,
//   contactSection,
//   socialSection,
//   contentSection,
//   skillsSection,
//   footerSection
// ].join('\n');

// // Create the final card with precise width settings
// const finalCard = boxen(cardContent, {
//   padding: {
//     top: 1,
//     bottom: 1,
//     left: 1,
//     right: 1
//   },
//   margin: 1,
//   borderStyle: 'round',
//   borderColor: 'cyan',
//   width: 76,
//   textAlignment: 'left'
// });

// console.log(finalCard);




// //#!/usr/bin/env node
// import chalk from "chalk";
// import boxen from "boxen";
// import figlet from "figlet";

// // Create beautiful gradient name banner with controlled width
// const createStylizedName = () => {
//   const nameText = figlet.textSync("Rajat Malik", {
//     font: "Small",
//     horizontalLayout: "fitted",
//     verticalLayout: "default"
//   });
  
//   // Apply gradient colors to each line and ensure consistent width
//   const lines = nameText.split('\n').filter(line => line.trim() !== '');
//   const gradientColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'];
  
//   return lines.map((line, index) => {
//     const coloredLine = chalk.hex(gradientColors[index % gradientColors.length]).bold(line);
//     // Center the line within 70 characters
//     const padding = Math.max(0, Math.floor((70 - line.length) / 2));
//     return ' '.repeat(padding) + coloredLine;
//   }).join('\n');
// };

// // Helper function to format lines with consistent width and alignment
// const formatLine = (icon, label, value, maxWidth = 70) => {
//   const iconPart = `${icon}  `;
//   const labelPart = `${chalk.hex('#3498db').bold(label.padEnd(10))} `;
//   const valuePart = chalk.white(value);
  
//   const line = iconPart + labelPart + valuePart;
  
//   // Ensure line doesn't exceed maxWidth
//   if (line.length > maxWidth) {
//     const availableSpace = maxWidth - iconPart.length - labelPart.length - 3;
//     const truncatedValue = value.length > availableSpace ? 
//       value.substring(0, availableSpace - 3) + '...' : value;
//     return iconPart + labelPart + chalk.white(truncatedValue);
//   }
  
//   return line;
// };

// // Create separator with exact width
// const createSeparator = (char = '─', color = '#3498db', width = 70) => {
//   return chalk.hex(color)(char.repeat(width));
// };

// // Welcome header with bright, eye-catching colors
// const welcomeHeader = [
//   chalk.hex('#FFD700')('╭' + '─'.repeat(68) + '╮'),
//   chalk.hex('#FFD700')('│') + chalk.bold.hex('#FF6347')(' 🌟 Welcome to Rajat\'s Digital Business Card 🌟 '.padEnd(68)) + chalk.hex('#FFD700')('│'),
//   chalk.hex('#FFD700')('╰' + '─'.repeat(68) + '╯')
// ].join('\n');

// // Professional intro with high-contrast, readable colors
// const professionalIntro = [
//   chalk.hex('#00FF7F').bold('👋 Hi there! I\'m ') + chalk.hex('#FFD700').bold.underline('Rajat Malik'),
//   chalk.hex('#87CEEB').bold('💼 Senior Frontend Developer'),
//   chalk.hex('#FFB6C1').bold('🚀 13+ Years of Web Development Excellence'),
//   chalk.hex('#DDA0DD').bold('🎯 Angular • React • Modern Web Technologies')
// ].join('\n');

// // Contact section with bright, readable colors
// const contactSection = [
//   '',
//   chalk.hex('#FF6347').bold('📬  GET IN TOUCH'),
//   createSeparator('─', '#00FFFF', 70),
//   '',
//   formatLine('📧', 'Email:', 'mr.rajatmalik@gmail.com'),
//   formatLine('🌐', 'Portfolio:', 'https://rajatmalik.dev'),
//   formatLine('💼', 'LinkedIn:', 'https://linkedin.com/in/errajatmalik')
// ].join('\n');

// // Social presence section with vibrant colors
// const socialSection = [
//   '',
//   chalk.hex('#FF69B4').bold('🌍  SOCIAL PRESENCE'),
//   createSeparator('─', '#FF1493', 70),
//   '',
//   formatLine('🎥', 'Threads:', 'https://www.threads.net/@er.rajatmalik'),
//   formatLine('🐦', 'Twitter:', 'https://twitter.com/er_rajatmalik'),
//   formatLine('👥', 'BlueSky:', 'http://devrajat.bsky.social'),
//   formatLine('🌟', 'GitHub:', 'https://github.com/malikrajat')
// ].join('\n');

// // Content & Writing section with warm colors
// const contentSection = [
//   '',
//   chalk.hex('#FFA500').bold('✍️  CONTENT & WRITING'),
//   createSeparator('─', '#FFD700', 70),
//   '',
//   formatLine('📚', 'Medium:', 'https://medium.com/@codewithrajat'),
//   formatLine('💬', 'Dev.to:', 'https://dev.to/codewithrajat'),
//   formatLine('✉️', 'Substack:', 'https://codewithrajat.substack.com'),
//   formatLine('✍️', 'Hashnode:', 'https://hashnode.com/@codeswithrajat')
// ].join('\n');

// // Skills section with electric colors
// const skillsSection = [
//   '',
//   createSeparator('═', '#00FFFF', 70),
//   chalk.hex('#FF6347').bold('🚀 PASSIONATE ABOUT: ') +
//   chalk.hex('#32CD32').bold('Angular') + chalk.hex('#FFFFFF')(' • ') +
//   chalk.hex('#00BFFF').bold('React') + chalk.hex('#FFFFFF')(' • ') +
//   chalk.hex('#FFFF00').bold('JavaScript'),
//   createSeparator('═', '#00FFFF', 70)
// ].join('\n');

// // Footer section with bright, motivational colors
// const footerSection = [
//   '',
//   chalk.hex('#FFD700')('💡 ') + chalk.italic.hex('#87CEEB')('"Code is poetry written in logic.'),
//   chalk.italic.hex('#87CEEB')('   Let\'s create something beautiful together!"'),
//   '',
//   chalk.hex('#00FF7F').bold('🤝 Always open to collaboration and projects!'),
//   '',
//   chalk.hex('#FF6347').bold('⚡ Thanks for checking out my profile! ⚡')
// ].join('\n');

// // Combine everything with exact width control
// const cardContent = [
//   welcomeHeader,
//   '',
//   createStylizedName(),
//   '',
//   professionalIntro,
//   contactSection,
//   socialSection,
//   contentSection,
//   skillsSection,
//   footerSection
// ].join('\n');

// // Create the final card with precise width settings
// const finalCard = boxen(cardContent, {
//   padding: {
//     top: 1,
//     bottom: 1,
//     left: 1,
//     right: 1
//   },
//   margin: 1,
//   borderStyle: 'round',
//   borderColor: 'cyan',
//   width: 76,
//   textAlignment: 'left'
// });

// console.log(finalCard);

