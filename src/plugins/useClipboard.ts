// useClipboard.ts
export function useClipboard() {
    const copyToClipboard = (text: string) => {
        try {
            // Create a temporary textarea element
            const textarea = document.createElement('textarea');
            textarea.value = text;

            // Set the textarea to be invisible
            textarea.style.position = 'absolute';
            textarea.style.left = '-9999px';

            // Append the textarea to the document
            document.body.appendChild(textarea);

            // Select and copy the text
            textarea.select();
            document.execCommand('copy');

            // Remove the temporary textarea from the document
            document.body.removeChild(textarea);

            console.log('Text copied to clipboard:', text);
        } catch (err) {
            console.error('Unable to copy text to clipboard:', err);
        }
    };

    return {
        copyToClipboard,
    };
}
