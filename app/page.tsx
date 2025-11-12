export default function Home() {
  return (
    <div className="flex  flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <header>
        <h1 className="p-6 text-4xl">48 Questions for Critical Thinking</h1>
      </header>
      <main>
        <article className="flex gap-4 flex-col p-6">
          <h2 className="text-2xl font-black">Who</h2>
          <ul className="pl-4 flex gap-4 items-left flex-col text-xl font-bold">
            <li>Who is affected by this issue?</li>
            <li>Who faces the biggest consequences?</li>
            <li>Who holds the power in this situation?</li>
            <li>Who might see this differently?</li>
            <li>Who are the key stakeholders involved?</li>
            <li>Who benefits from this outcome?</li>
            <li>Who else should be consulted?</li>
            <li>Who can provide more information?</li>
          </ul>
        </article>

        <article className="flex gap-4 flex-col p-6">
          <h2 className="text-2xl font-black">What</h2>
          <ul className="pl-4 flex gap-4 items-left flex-col text-xl font-bold">
            <li>What is the issue at hand?</li>
            <li>What are the main arguments?</li>
            <li>What is the evidence?</li>
            <li>What assumptions are being made?</li>
            <li>What are the potential consequences?</li>
            <li>What alternatives exist?</li>
            <li>What are the risks of each alternative?</li>
            <li>What steps can be taken next?</li>
          </ul>
        </article>

        <article className="flex gap-4 flex-col p-6">
          <h2 className="text-2xl font-black">Where</h2>
          <ul className="pl-4 flex gap-4 items-left flex-col text-xl font-bold">
            <li>Where did this first become an issue?</li>
            <li>Where is the problem most evident?</li>
            <li>Where can we find supportive data?</li>
            <li>Where have solutions worked before?</li>
            <li>Where are resources most needed?</li>
            <li>Where are potential obstacles located?</li>
            <li>Where can we implement solutions first?</li>
            <li>Where should we monitor the outcomes?</li>
          </ul>
        </article>

        <article className="flex gap-4 flex-col p-6">
          <h2 className="text-2xl font-black">When</h2>
          <ul className="pl-4 flex gap-4 items-left flex-col text-xl font-bold">
            <li>When did this issue first emerge?</li>
            <li>When do the effects typically appear?</li>
            <li>When was the data last collected?</li>
            <li>When is the best time to act?</li>
            <li>When have solutions been attempted?</li>
            <li>When is the deadline for action?</li>
            <li>When should we expect to see results?</li>
            <li>When will we review the progress?</li>
          </ul>
        </article>

        <article className="flex gap-4 flex-col p-6">
          <h2 className="text-2xl font-black">Why</h2>
          <ul className="pl-4 flex gap-4 items-left flex-col text-xl font-bold">
            <li>Why is this issue significant?</li>
            <li>Why did it arise in the first place?</li>
            <li>Why are certain solutions preferred?</li>
            <li>Why might opinions differ?</li>
            <li>Why has this not been addressed sooner?</li>
            <li>Why are some more affected than others?</li>
            <li>Why is immediate action necessary?</li>
            <li>Why should we revisit it in the future?</li>
          </ul>
        </article>

        <article className="flex gap-4 flex-col p-6">
          <h2 className="text-2xl font-black">How</h2>
          <ul className="pl-4 flex gap-4 items-left flex-col text-xl font-bold">
            <li>How did this issue start?</li>
            <li>How does this impact different groups?</li>
            <li>How can we gather more data?</li>
            <li>How have others tackled similar issues?</li>
            <li>How will we implement the solution?</li>
            <li>How will we measure success?</li>
            <li>How should we communicate change?</li>
            <li>How often should we reasses?</li>
          </ul>
        </article>
      </main>
      <footer className="flex flex-col gap-4 text-center p-6 bg-slate-100 text-xs w-full">
        <h3>
          Built by{' '}
          <a href="https://deanhowe.dev">
            <strong>Dean</strong>
          </a>
        </h3>
        <p>
          Taken from Justin Wright&apos;s 48 Questions for Critical Thinking
        </p>
      </footer>
    </div>
  );
}
