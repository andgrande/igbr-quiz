export default function Select(): DetailedHTMLProps {
    const t = ['a', 'b', 'c'];
    
    return (
        <select placeholder="🔤"
            // width="20"
            onChange="handleSelectLanguage(this)"
        >
            {t.map((opt: {} | null | undefined) => <option value={opt}>{opt}</option>)}
            
            <option value='fr'>🇫🇷</option>
            <option value='pt'>🇧🇷</option>
        </select>
    )
}