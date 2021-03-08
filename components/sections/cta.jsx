import { H3Invert, Text, PrimaryBtn } from '../ui';

export const CallToAction = ({
  headingText,
  paragraphText,
  labelName,
  clickHandler,
}) => (
  <section className="flex flex-row w-full h-16 pt-12 pb-12 bg-warmGray-700">
    <div className="flex w-full max-w-5xl mx-auto y-0 ">
      <H3Invert className="pt-0 pb-2">{headingText}</H3Invert>
    </div>
    <div className="flex w-full max-w-5xl mx-auto my-0 ">
      <Text className="text-white">{paragraphText}</Text>
    </div>
    <div className="flex w-full max-w-5xl mx-auto my-0 ">
      <PrimaryBtn onClick={clickHandler}>{labelName}</PrimaryBtn>
    </div>
  </section>
);
