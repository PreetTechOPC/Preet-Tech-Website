const fs = require('fs');
const glob = require('glob'); // Not available by default, let's use child_process or simple recursion
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./app').concat(walk('./components'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('Sparkles')) {
        // 1. Replace <Sparkles ... /> with nothing
        content = content.replace(/<Sparkles[^>]*\/>/g, '');
        
        // 2. Replace { ..., icon: Sparkles } with icon: Zap
        content = content.replace(/icon:\s*Sparkles/g, 'icon: Zap');
        
        // 3. Remove Sparkles from imports
        content = content.replace(/,\s*Sparkles\b/g, '');
        content = content.replace(/\bSparkles\s*,?/g, '');
        
        // 4. Ensure Zap is imported if we used it (simple hack: just add Zap to lucide-react if not there)
        if (content.includes('icon: Zap') && !content.match(/\bZap\b.*lucide-react/)) {
             content = content.replace(/import\s*{([^}]*)}\s*from\s*['"]lucide-react['"];/, (match, p1) => {
                 if (!p1.includes('Zap')) {
                     return `import {${p1}, Zap} from 'lucide-react';`;
                 }
                 return match;
             });
        }

        fs.writeFileSync(file, content, 'utf8');
        console.log('Processed', file);
    }
});
