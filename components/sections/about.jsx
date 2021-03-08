import { H3, Text, OutlinedBtn } from '../elements';

export const About = ({
  headingText,
  paragraphText,
  labelName,
  clickHandler,
}) => (
  <section className="flex flex-row w-full h-16 pt-12 pb-12 bg-white">
    <div className="flex w-full max-w-5xl mx-auto y-0 ">
      <H3 className="pt-0 pb-2">{headingText}</H3>
    </div>
    <div className="flex w-full max-w-5xl mx-auto my-0 ">
      <Text>{paragraphText}</Text>
    </div>
    <div className="flex w-full max-w-5xl mx-auto my-0 ">
      <OutlinedBtn onClick={clickHandler}>{labelName}</OutlinedBtn>
    </div>
  </section>
);
