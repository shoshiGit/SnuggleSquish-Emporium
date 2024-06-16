import fs from 'fs';

export const logger = (req, res, next) => {
    fs.readFile('./logs/logs.txt', 'utf8', (err, data) => {

        // טיפול בשגיאה אם קיימת
        if (err) throw err; 
        
        // הוספת רשומה חדשה    
        let newData = data + '\nLog entry at ' + Date();
      
        // כתיבה חזרה לקובץ
        fs.writeFile('./logs.txt', newData, (err) => {
          if (err) throw err;
          console.log('Log updated!'); 
          next();
        });
      
    });
}