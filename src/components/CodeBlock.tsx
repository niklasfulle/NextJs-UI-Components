import { CodeBlock } from "react-code-block";

interface CodeBlockDemoProps {
  code: string;
  language: string;
}

const CodeBlockDemo: React.FC<CodeBlockDemoProps> = ({ code, language }) => {
  return (
    <CodeBlock code={code} language={language}>
      <CodeBlock.Code className="bg-zinc-800 px-3 py-4 rounded-xl shadow-lg md:min-w-[40rem]">
        <div className="table-row">
          <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
          <CodeBlock.LineContent className="table-cell">
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </div>
      </CodeBlock.Code>
    </CodeBlock>
  );
};

export default CodeBlockDemo;
