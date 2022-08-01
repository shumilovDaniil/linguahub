import { FC } from "react";
import { WordCardSm } from "../../ui/WordCardSm";
import s from "./WordsList.module.scss";

export const WordsList: FC<{}> = props => {
  return (
    <div className={s.list}>
      <WordCardSm
        status={"studyCompleted"}
        firstWord={"blowjob"}
        secondWord={"минет"}
        transcriptions={{ american: "aɡrəʊθ", british: "bɡroʊθ" }} />
      <WordCardSm
        status={"studyCompleted"}
        firstWord={"blowjob"}
        secondWord={"минет"}
        transcriptions={{ american: "aɡrəʊθ", british: "bɡroʊθ" }} />
      <WordCardSm
        status={"studyMiddle"}
        firstWord={"go"}
        secondWord={"идти"}
        transcriptions={{ american: "aɡrəʊθ", british: "bɡroʊθ" }} />
      <WordCardSm
        status={"studyStarted"}
        firstWord={"blow"}
        secondWord={"дуть"}
        transcriptions={{ american: "aɡrəʊθ", british: "bɡroʊθ" }} />
      <WordCardSm
        firstWord={"blowjob"}
        secondWord={"минет"}
        transcriptions={{ american: "aɡrəʊθ", british: "bɡroʊθ" }} />
      <WordCardSm
        firstWord={"blowjob"}
        secondWord={"минет"}
        transcriptions={{ american: "aɡrəʊθ", british: "bɡroʊθ" }} />
      <WordCardSm
        status={"studyCompleted"}
        firstWord={"blowjob"}
        secondWord={"минет"}
        transcriptions={{ american: "aɡrəʊθ", british: "bɡroʊθ" }} />
    </div>
  );
};