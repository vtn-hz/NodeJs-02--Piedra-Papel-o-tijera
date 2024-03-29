import fs, { readFileSync } from 'fs'

export function searchCSS (dir, archive) {
    const files = fs.readdirSync (dir);
    let fileNeeded = 0;

    files.forEach(element => {
        if (element == archive) {
            fileNeeded = element;
        }
    });

    if (!fileNeeded) {
        return 0;
    } return readFileSync(dir+fileNeeded);
}

