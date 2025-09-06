"use client";

import { useState } from "react";
import { dominoArr as defaultDomino } from "./dominoData";
import {
  ascendingDom,
  descendingDom,
  flipDom,
  removeDom,
  removeDomInTotal,
  resetDom,
  countDoubles,
} from "./helpers";

export default function Page() {
  const [dominoes, setDominoes] = useState<number[][]>(defaultDomino);
  const [targetTotal, setTargetTotal] = useState<number>(0);

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center gap-4">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800">Dominoes</h1>

      {/* Source display */}
      <div className="w-full max-w-xl bg-gray-100 border rounded p-2 text-sm text-gray-700">
        <strong>Source</strong>
        <div className="mt-1 break-words">
          {JSON.stringify(dominoes)}
        </div>
      </div>

      {/* Double Numbers display */}
      <div className="w-full max-w-xl bg-gray-100 border rounded p-2 text-sm text-gray-700">
        <strong>Double Numbers</strong>
        <div className="mt-1">{countDoubles(dominoes)}</div>
      </div>

      {/* Domino cards */}
      <div className="flex flex-wrap gap-2 justify-center">
        {dominoes.map((card, idx) => (
          <div
            key={idx}
            className="border rounded p-2 w-10 text-center text-black"
          >
            {card[0]} <br />-<br /> {card[1]}
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-2 mt-4">
        <button
          onClick={() => setDominoes([...ascendingDom([...dominoes])])}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Sort (ASC)
        </button>
        <button
          onClick={() => setDominoes([...descendingDom([...dominoes])])}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Sort (DESC)
        </button>
        <button
          onClick={() => setDominoes([...flipDom([...dominoes])])}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Flip
        </button>
        <button
          onClick={() => setDominoes([...removeDom([...dominoes])])}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Remove Dup
        </button>
        <button
          onClick={() => setDominoes([...resetDom()])}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Reset
        </button>
      </div>

      {/* Input & Remove */}
      <div className="flex gap-2 mt-4">
        <input
          type="number"
          value={targetTotal}
          onChange={(e) => setTargetTotal(Number(e.target.value))}
          className="px-3 py-2 border rounded text-black"
          placeholder="Input Number"
        />
        <button
          onClick={() =>
            setDominoes([...removeDomInTotal([...dominoes], targetTotal)])
          }
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
}