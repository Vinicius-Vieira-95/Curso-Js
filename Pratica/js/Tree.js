function mostBalancedPartition(parent, files_size) {
    
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const parentCount = parseInt(readLine().trim(), 10);

    let parent = [];

    for (let i = 0; i < parentCount; i++) {
        const parentItem = parseInt(readLine().trim(), 10);
        parent.push(parentItem);
    }

    const files_sizeCount = parseInt(readLine().trim(), 10);

    let files_size = [];

    for (let i = 0; i < files_sizeCount; i++) {
        const files_sizeItem = parseInt(readLine().trim(), 10);
        files_size.push(files_sizeItem);
    }

    const result = mostBalancedPartition(parent, files_size);

    ws.write(result + '\n');

    ws.end();
}