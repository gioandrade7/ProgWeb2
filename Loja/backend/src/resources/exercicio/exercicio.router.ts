import { Router } from "express";
import { LoremIpsum } from "lorem-ipsum";

const router = Router();

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

router.get("/", (req, res) => {
  res.send("Hello world!");
});

router.get("/bemvindo/:nome", (req, res) => {
  const nome = req.params.nome;
  res.send(`Bem-vindo(a) ${nome}`);
});

router.get("/lorem/:qtd", (req, res) => {
  res.send(
    lorem
      .generateParagraphs(parseInt(req.params.qtd))
      .replace(/\n/g, "<br><br>\n")
  );
});

export default router;
