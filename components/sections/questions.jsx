import { H3, OutlinedBtn } from '../elements';

export const Questions = ({
  handlerFirst,
  handlerSecond,
  handlerThird,
  handlerFourth,
  labelFirst = 'Мало энергии и сил',
  labelSecond = 'Сильное напрежение',
  labelThird = 'Не знаю чего хочу',
  labelFourth = 'Все ок, но что то нерадует',
  headingText = 'Какой из этих вопросов, тебе больше всего актуален?',
}) => (
  <section className="flex flex-row w-full h-16 pt-12 pb-12 bg-white">
    <div className="flex w-full max-w-5xl mx-auto my-0 ">
      <H3 className="pt-0 pb-2">{headingText}</H3>
    </div>
    <div className="flex w-full max-w-5xl mx-auto y-0 ">
      <OutlinedBtn onClick={handlerFirst}>{labelFirst}</OutlinedBtn>
    </div>
    <div className="flex w-full max-w-5xl mx-auto my-0 ">
      <OutlinedBtn onClick={handlerSecond}>{labelSecond}</OutlinedBtn>
    </div>
    <div className="flex w-full max-w-5xl mx-auto my-0 ">
      <OutlinedBtn onClick={handlerThird}>{labelThird}</OutlinedBtn>
    </div>
    <div className="flex w-full max-w-5xl mx-auto my-0 ">
      <OutlinedBtn onClick={handlerFourth}>{labelFourth}</OutlinedBtn>
    </div>
  </section>
);
