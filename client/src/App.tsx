import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import LanguageChanger from "../components/LanguageChanger";
import SaveBTN from "../components/SaveBTN";
function App() {
  const [editorValue, setEditorValue] = useState(`<html>
  <head>
    <title>HTML Sample</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style type="text/css">
      h1 {
        color: #cca3a3;
      }
    </style>
    <script type="text/javascript">
      alert("I am a sample... visit devChallengs.io for more projects");
    </script>
  </head>
  <body>
    <h1>Heading No.1</h1>
    <input disabled type="button" value="Click me" />
  </body>
</html>`);
  const [currentlang, setCurrentLang] = useState("HTML");
  const changeLangHandler = (lang: string) => {
    setCurrentLang(lang);
  };
  return (
    <main className="bg-[url('/resources/Hero-Background-notecode.svg')] bg-no-repeat bg-cover h-screen">
      <div className="flex items-center flex-col gap-6 pt-10 ">
        <img src="/resources/NoteCodeLogo.svg" alt="" />
        <h1 className="text-[2rem] font-semibold">Create & Share</h1>
        <h2 className="text-[2.5rem] font-semibold">Your Code easily</h2>
        <div className="relative">
          <Editor
            className="shadow-2xl"
            height="60vh"
            width="70vw"
            defaultLanguage="html"
            defaultValue="// some code"
            options={{
              minimap: {
                enabled: true,
              },
            }}
            value={editorValue}
            language={currentlang.toLowerCase()}
          />
          <div className="absolute bottom-5 left-10">
            <LanguageChanger
              lang={currentlang}
              changeLangHandler={changeLangHandler}
            />
          </div>
          <div className="absolute bottom-5 right-[10%]">
            <SaveBTN />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
