#!/usr/bin/env node
import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet";

// Create beautiful gradient name banner
const createStylizedName = () => {
  const nameText = figlet.textSync("Rajat Malik", {
    font: "Big",
    horizontalLayout: "fitted",
    verticalLayout: "default"
  });
  
  // Apply gradient colors to each line
  const lines = nameText.split('\n');
  const gradientColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
  
  return lines.map((line, index) => 
    chalk.hex(gradientColors[index % gradientColors.length]).bold(line)
  ).join('\n');
};

// Create a clean separator
const createSeparator = (length = 50, char = '─', color = '#3498db') => {
  return chalk.hex(color)(char.repeat(length));
};

// Welcome header with animated feel
const welcomeHeader = [
  chalk.hex('#ff6b6b')('╭─────────────────────────────────────────────────╮'),
  chalk.hex('#4ecdc4')('│') + chalk.bold.hex('#feca57')('  🌟 Welcome to Rajat\'s Digital Business Card 🌟 ') + chalk.hex('#4ecdc4')('│'),
  chalk.hex('#ff6b6b')('╰─────────────────────────────────────────────────╯')
].join('\n');

// Professional intro
const professionalIntro = [
  chalk.hex('#ff6b6b').bold('👋 Hi there! I\'m ') + chalk.hex('#feca57').bold.underline('Rajat Malik'),
  chalk.hex('#4ecdc4')('💼 Senior Frontend Developer') + '\n',
  chalk.hex('#45b7d1')('🚀 13+ Years of Web Development Excellence'),
  chalk.hex('#96ceb4')('🎯 Angular • React • Modern Web Technologies Specialist')
].join('\n');

// Contact section with better alignment
const contactSection = [
  '',
  chalk.hex('#feca57').bold('📬 GET IN TOUCH'),
  createSeparator(65, '─', '#3498db'),
  '',
  `📧  ${chalk.hex('#3498db').bold('Email:')}      ${chalk.white('mr.rajatmalik@gmail.com')}`,
  `🌐  ${chalk.hex('#3498db').bold('Portfolio:')}  ${chalk.white('https://rajatmalik.dev')}`,
  `💼  ${chalk.hex('#3498db').bold('LinkedIn:')}   ${chalk.white('https://linkedin.com/in/errajatmalik')}`
].join('\n');

// Social presence section
const socialSection = [
  '',
  chalk.hex('#e74c3c').bold('🌍 SOCIAL PRESENCE'),
  createSeparator(65, '─', '#e74c3c'),
  '',
  `🎥  ${chalk.hex('#9b59b6').bold('Threads:')}    ${chalk.white('https://www.threads.net/@er.rajatmalik')}`,
  `🐦  ${chalk.hex('#1da1f2').bold('Twitter:')}    ${chalk.white('https://twitter.com/er_rajatmalik')}`,
  `👥  ${chalk.hex('#0084ff').bold('BlueSky:')}    ${chalk.white('http://devrajat.bsky.social')}`,
  `🌟  ${chalk.hex('#28a745').bold('GitHub:')}     ${chalk.white('https://github.com/malikrajat')}`
].join('\n');

// Content & Writing section
const contentSection = [
  '',
  chalk.hex('#f39c12').bold('✍️ CONTENT & WRITING'),
  createSeparator(65, '─', '#f39c12'),
  '',
  `📚  ${chalk.hex('#9b59b6').bold('Medium:')}     ${chalk.white('https://medium.com/@codewithrajat')}`,
  `💬  ${chalk.hex('#28a745').bold('Dev.to:')}     ${chalk.white('https://dev.to/codewithrajat')}`,
  `✉️  ${chalk.hex('#ff6719').bold('Substack:')}   ${chalk.white('https://codewithrajat.substack.com')}`,
  `✍️  ${chalk.hex('#2962ff').bold('Hashnode:')}   ${chalk.white('https://hashnode.com/@codeswithrajat')}`
].join('\n');

// Skills highlight with colorful tech stack
const skillsSection = [
  '',
  createSeparator(65, '═', '#8e44ad'),
  chalk.hex('#e74c3c').bold('🚀 PASSIONATE ABOUT: ') +
  chalk.hex('#dd4b39').bold('Angular') + chalk.white(' • ') +
  chalk.hex('#61dafb').bold('React') + chalk.white(' • ') +
  chalk.hex('#f7df1e').bold('JavaScript') + chalk.white(' • ') +
  chalk.hex('#06d6a0').bold('Modern Web'),
  createSeparator(65, '═', '#8e44ad')
].join('\n');

// Footer with inspiration
const footerSection = [
  '',
  chalk.hex('#95a5a6')('💡 ') + chalk.italic.hex('#7f8c8d')('"Code is poetry written in logic. Let\'s create something beautiful together!"'),
  '',
  chalk.hex('#27ae60').bold('🤝 Always open to collaboration and interesting projects!'),
  '',
  chalk.hex('#e67e22')('⚡ Thanks for checking out my profile! Feel free to connect! ⚡')
].join('\n');

// Combine everything with consistent width
const cardContent = [
  welcomeHeader,
  '',
  createStylizedName(),
  '',
  professionalIntro,
  contactSection,
  socialSection,
  contentSection,
  skillsSection,
  footerSection
].join('\n');

// Create the final card with simple, reliable borders
const finalCard = boxen(cardContent, {
  padding: {
    top: 1,
    bottom: 1,
    left: 2,
    right: 2
  },
  margin: 1,
  borderStyle: 'double',
  borderColor: 'cyan',
  width: 90,
  textAlignment: 'left'
});

console.log(finalCard);