function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i);
        let hashes = '#'.repeat(i);
        console.log(spaces + hashes);
    }
}

// Example call
staircase(6);
