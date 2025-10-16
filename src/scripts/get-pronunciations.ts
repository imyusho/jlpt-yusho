import { COLLECTIONS } from "@/app/assets/api/units";
import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

const voiceId = "GxxMAMfQkDlnqjpzjLHH";
const collectionUuid = "9c47b2f4-3a6e-4e91-8b54-2a0f8bde7c32";

dotenv.config({ path: ".env.local" });
const apiKey = process.env.API_KEY;
const deckId = process.argv[2];

if (deckId === undefined) {
  console.error(
    "Missing deckId argument. Example: npm run get-pronunciations 1"
  );
  process.exit(1);
}

const elevenlabs = new ElevenLabsClient({ apiKey });

(async () => {
  console.log(`Starting generating pronunciation ...`);

  const deck = COLLECTIONS.find((x) => x.uuid === collectionUuid)?.decks.find(
    (x) => x.id === deckId
  );

  if (!deck) {
    console.error(`No deck found for ID: ${deckId}`);
    process.exit(1);
  }

  for (let i = 0; i < deck.words.length; i++) {
    const card = deck.words[i];
    const outputDir = `public/pronounciations/${collectionUuid}/${deckId}/${card.id}`;

    console.log(`Processing ${card.id} ${card.expression} ...`);

    const expressionPath = `${outputDir}/expression.mp3`;
    fs.mkdirSync(path.dirname(expressionPath), { recursive: true });
    fs.writeFileSync(
      expressionPath,
      await getAudioStreamBuffer(card.expression)
    );

    const examplePath = `${outputDir}/example.mp3`;
    fs.writeFileSync(examplePath, await getAudioStreamBuffer(card.example));
  }

  console.log("All pronunciation files generated");
})();

async function getAudioStreamBuffer(text: string) {
  const audioStream = await elevenlabs.textToSpeech.convert(voiceId, {
    text,
    modelId: "eleven_v3",
    languageCode: "ja",
    outputFormat: "mp3_44100_128",
  });
  return streamToBuffer(audioStream);
}

async function streamToBuffer(stream: ReadableStream<Uint8Array>) {
  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];
  let done: boolean | undefined = false;

  while (!done) {
    const result = await reader.read();
    done = result.done;
    if (result.value) {
      chunks.push(result.value);
    }
  }

  return Buffer.concat(chunks.map((chunk) => Buffer.from(chunk)));
}
