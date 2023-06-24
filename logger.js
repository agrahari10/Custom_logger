const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'logs');
const infoLogFilePath = path.join(logsDirectory, 'info.log');
const warningLogFilePath = path.join(logsDirectory, 'warning.log');
const errorLogFilePath = path.join(logsDirectory, 'error.log');

// Create logs directory if it doesn't exist
if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory);
  }

function getTime(){
    return new Date().toISOString();
}

function logToFile(level, message) {
    let logFilePath;
    if (level === 'INFO') {
      logFilePath = infoLogFilePath;
    } else if (level === 'WARN') {
      logFilePath = warningLogFilePath;
    } else if (level === 'ERROR') {
      logFilePath = errorLogFilePath;
    } else {
      return;
      
    }
    const logMessage = `${level}--${message}--${getTime()}\n`;
    fs.appendFileSync(logFilePath, logMessage, 'utf8');
}

function logToConsole(level, message) {
    console.log(`${level}--${message}--${getTime()} `);
  }

const logger = {
    info:(messagae)=>{
        logToConsole('INFO',messagae);
        logToFile('INFO',messagae);

    },
    warn:(messagae)=>{
        logToConsole('WARN',messagae);
        logToFile('WARN',messagae);

    },
    error:(messagae)=>{
        logToConsole('ERROR',messagae);
        logToFile('ERROR',messagae);

    }
}

module.exports = logger;