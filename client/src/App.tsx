import { Editor } from "@monaco-editor/react";
import { useEffect, useState } from "react";
import LanguageChanger from "../components/LanguageChanger";
import SaveBTN from "../components/SaveBTN";
import { baseUrl } from "../utils/BaseUrl";
function App() {
  const [editorOptions, setEditorOptions] = useState<{
    code: string | undefined;
    lang: string | undefined;
  }>({
    code: `<html>
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
</html>`,
    lang: `HTML`,
  });
  const changeLangHandler = (lang: string) => {
    setEditorOptions({ code: editorOptions.code, lang: lang });
  };
  const changeCodeHandler = (code: string | undefined) => {
    setEditorOptions({ lang: editorOptions.lang, code: code });
  };
  const handleGetCode = async () => {
    const id = window.location.pathname;

    const data = await fetch(`${baseUrl}api/saveCode${id}`);
    const json: { doc: { code: string; lang: string; _id: string } } =
      await data.json();
    setEditorOptions({ lang: json.doc.lang, code: json.doc.code });
  };
  useEffect(() => {
    if (window.location.pathname.length > 1) {
      handleGetCode();
    }
  }, []);
  return (
    <main className="bg-[url('/resources/Hero-Background-notecode.svg')] bg-no-repeat bg-cover h-screen">
      <div className="flex items-center flex-col gap-6 pt-10 ">
        <img src="/resources/NoteCodeLogo.svg" alt="" />
        <h1 className="text-[2rem] font-semibold">Create & Share</h1>
        <h2 className="text-[2.5rem] font-semibold">Your Code easily</h2>
        <div className="relative  lg:w-[70vw] w-screen">
          <Editor
            className="shadow-2xl"
            height="60vh"
            defaultLanguage="html"
            defaultValue="// some code"
            options={{
              minimap: {
                enabled: true,
              },
            }}
            value={editorOptions?.code}
            onChange={changeCodeHandler}
            language={editorOptions?.lang?.toLowerCase()}
          />
          <div className="max-lg:flex max-lg:justify-around">
            <div className="lg:absolute bottom-5 left-10">
              <LanguageChanger
                lang={editorOptions?.lang}
                changeLangHandler={changeLangHandler}
              />
            </div>
            <div className="lg:absolute bottom-5 right-[40%]">
              <SaveBTN editorOptions={editorOptions} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
