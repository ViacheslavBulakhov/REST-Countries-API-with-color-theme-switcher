import { LinkBtn, Section, Title, Wrapper } from "./NotFoundStyled";

function NotFound() {
  return (
    <Section>
      <Title>
        Ooops! <br />
        This page not found :(
      </Title>
      <Wrapper>
        <img src="" />
      </Wrapper>
      <LinkBtn to="/">Back to main</LinkBtn>
    </Section>
  );
}
export default NotFound;
