// script.js
document.getElementById('summarizeBtn').addEventListener('click', async function() {
    const bookText = document.getElementById('bookText').value;
    const summaryElement = document.getElementById('summary');
    const loader = document.getElementById('loader');
    
    if (bookText.trim() === '') {
        summaryElement.textContent = 'Please enter some text to summarize.';
        return;
    }
    
    loader.classList.remove('hidden');
    summaryElement.textContent = '';

    // Simulate a delay for summarization (replace with actual API call or algorithm)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Simple placeholder summarization (replace with your summarization logic)
    const summary = summarizeText(bookText);

    summaryElement.textContent = summary;
    loader.classList.add('hidden');
});

function summarizeText(text) {
    // Placeholder: Truncate text as a basic summarization example
    if (text.length > 0) {
        return text.length > 1000 ? text.substring(0, 1000) + '...' : text;
    } else {
        return 'No text provided.';
    }
}
