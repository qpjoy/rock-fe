// @ts-nocheck
import { styled } from "styled-components";
import { Pad } from "../07.pad.pattern";
import { Split } from "../02.split.pattern";

const ContentArea = styled(Pad).attrs(() => ({
  padding: "xl",
}))`
  background-image: linear-gradient(
    to bottom,
    #0f1623 14rem,
    rgb(242, 242, 242) 14rem
  );
`;

const SettingsHeader = styled.header`
  color: white;
`;

const SettingsPane = styled(Split).attrs(() => ({
  gutter: "none",
  fraction: "1/4",
}))`
  background: white;
  border-radius: 0.5rem;
`;

function Content() {
  return (
    <ContentArea>
      <header>
        <h1>Profile Settings</h1>
      </header>
      <main>
        <nav>
          <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>Authentication</li>
            <li>Email</li>
            <li>Plans</li>
            <li>APIs</li>
          </ul>
        </nav>
      </main>
    </ContentArea>
  );
}

export default Content;