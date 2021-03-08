import { H3, Text, PrimaryBtn } from "../ui";

export const CallToAction = ({
  headingText,
  paragraphText,
  labelName,
  clickHandler,
}) => (
  <section className="w-full py-12 bg-gray-800">
    <H3>{headingText}</H3>
    <Text>{paragraphText}</Text>
    <PrimaryBtn label={labelName} onClick={clickHandler} />
  </section>
);
