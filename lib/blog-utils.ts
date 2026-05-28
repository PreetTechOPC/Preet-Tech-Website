export function formatMarkdown(content: string): string {
  if (!content) return '';
  
  // Normalize line endings to \n
  let normalized = content.replace(/\r\n/g, '\n');
  
  const lines = normalized.split('\n');
  const processedLines: string[] = [];
  let inCodeBlock = false;
  
  const isListLine = (trimmed: string) => {
    return /^(?:[-*+]\s|\d+\.\s)/.test(trimmed);
  };
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();
    
    processedLines.push(line);
    
    // Toggle code block state
    if (trimmedLine.startsWith('```')) {
      inCodeBlock = !inCodeBlock;
    }
    
    // If we are in a code block, do not insert blank lines
    if (inCodeBlock) {
      continue;
    }
    
    // Check if we should insert a blank line
    if (i < lines.length - 1) {
      const nextLine = lines[i + 1];
      const trimmedNext = nextLine.trim();
      
      // If current line and next line are both non-empty
      if (trimmedLine !== '' && trimmedNext !== '') {
        // Don't insert blank line if either is part of a markdown table (starts/ends with | or has |)
        const isTable = (trimmedLine.startsWith('|') || trimmedLine.includes('|')) && 
                        (trimmedNext.startsWith('|') || trimmedNext.includes('|'));
        
        // Don't insert blank line if it's a heading underline (e.g. === or ---)
        const isHeadingUnderline = trimmedNext.startsWith('===') || trimmedNext.startsWith('---');
        
        // Don't insert blank line between consecutive list items of the same list
        const isConsecutiveList = isListLine(trimmedLine) && isListLine(trimmedNext);
        
        if (!isTable && !isHeadingUnderline && !isConsecutiveList) {
          processedLines.push('');
        }
      }
    }
  }
  
  return processedLines.join('\n');
}
