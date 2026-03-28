/**
 * Translates text using the backend translation API
 * @param {string} text - The text to translate
 * @param {string} targetLang - The target language code (e.g., 'sw')
 * @returns {Promise<string>} - The translated text
 */
export async function translateText(text, targetLang) {
    if (!text || targetLang === 'en') return text;

    try {
        const response = await fetch('/api/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text,
                targetLang,
            }),
        });

        if (!response.ok) {
            throw new Error('Translation failed');
        }

        const data = await response.json();
        return data.translatedText;
    } catch (error) {
        console.error('Translation error:', error);
        return text; // Fallback to original text on error
    }
}
