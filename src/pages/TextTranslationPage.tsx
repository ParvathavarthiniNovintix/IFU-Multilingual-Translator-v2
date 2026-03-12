import { useState } from "react";
import { Button } from "@/components/ui/button";

const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "pl", name: "Polish" },
  { code: "bg", name: "Bulgarian" },
  { code: "pt", name: "Portuguese" },
  { code: "cs", name: "Czech" },
  { code: "ro", name: "Romanian" },
  { code: "da", name: "Danish" },
  { code: "ru", name: "Russian" },
  { code: "de", name: "German" },
  { code: "sk", name: "Slovak" },
  { code: "el", name: "Greek" },
  { code: "sl", name: "Slovenian" },
  { code: "es", name: "Spanish" },
  { code: "sr", name: "Serbian" },
  { code: "et", name: "Estonian" },
  { code: "sv", name: "Swedish" },
  { code: "fi", name: "Finnish" },
  { code: "tr", name: "Turkish" },
  { code: "fr", name: "French" },
  { code: "vi", name: "Vietnamese" },
  { code: "hr", name: "Croatian" },
  { code: "ga", name: "Irish" },
  { code: "hu", name: "Hungarian" },
  { code: "mt", name: "Maltese" },
  { code: "id", name: "Indonesian" },
  { code: "it", name: "Italian" },
  { code: "is", name: "Icelandic" },
  { code: "zh", name: "Chinese" },
  { code: "kk", name: "Kazakh" },
  { code: "zh-CN", name: "Chinese Simplified" },
  { code: "lt", name: "Lithuanian" },
  { code: "zh-TW", name: "Chinese Traditional" },
  { code: "lv", name: "Latvian" },
  { code: "ja", name: "Japanese" },
  { code: "nl", name: "Dutch" },
  { code: "ko", name: "Korean" },
  { code: "no", name: "Norwegian" },
  { code: "th", name: "Thai" },
  { code: "ar", name: "Arabic" },
  { code: "ms", name: "Malay" },
];

const TextTranslationPage = () => {
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [translating, setTranslating] = useState(false);

  const handleTranslate = () => {
    if (!inputText.trim() || !targetLang) return;
    setTranslating(true);
    setTimeout(() => {
      setOutputText(`[${targetLang} translation]\n\n${inputText.split("").reverse().join("")}`);
      setTranslating(false);
    }, 1200);
  };

  return (
    <div className="p-6 lg:p-10 space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Text Translation</h1>
      <p className="text-muted-foreground">Translate text between 108+ languages</p>

      <div className="flex flex-wrap items-end gap-4">
        <div className="space-y-1">
          <label className="text-xs font-medium text-muted-foreground">Source Language</label>
          <select
            value={sourceLang}
            onChange={(e) => setSourceLang(e.target.value)}
            className="block w-44 rounded-md border bg-background px-3 py-2 text-sm text-foreground"
          >
            {LANGUAGES.map((l) => <option key={l.code} value={l.code}>{l.name}</option>)}
          </select>
        </div>
        <div className="text-muted-foreground text-lg pb-2">→</div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-muted-foreground">Target Language</label>
          <select
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            className="block w-44 rounded-md border bg-background px-3 py-2 text-sm text-foreground"
          >
            <option value="">Please select</option>
            {LANGUAGES.filter((l) => l.code !== sourceLang).map((l) => <option key={l.code} value={l.code}>{l.name}</option>)}
          </select>
        </div>
        <Button onClick={handleTranslate} disabled={translating || !targetLang || !inputText.trim()}>
          {translating ? "Translating..." : "Translate"}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-lg border bg-card shadow-sm">
          <div className="border-b px-4 py-2 text-sm font-medium text-foreground">Input</div>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text to translate"
            className="w-full h-64 p-4 bg-transparent resize-none text-foreground placeholder:text-muted-foreground focus:outline-none font-serif-content"
            maxLength={1000}
          />
          <div className="border-t px-4 py-1 text-xs text-muted-foreground text-right">
            {inputText.length}/1000
          </div>
        </div>
        <div className="rounded-lg border bg-card shadow-sm">
          <div className="border-b px-4 py-2 text-sm font-medium text-foreground">Output</div>
          <div className="h-64 p-4 overflow-auto">
            {outputText ? (
              <p className="font-serif-content text-foreground whitespace-pre-wrap">{outputText}</p>
            ) : (
              <p className="text-muted-foreground text-sm italic">Translated content will appear here</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextTranslationPage;
