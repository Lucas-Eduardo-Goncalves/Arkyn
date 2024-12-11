import { styled } from "@linaria/react";

const HasFileContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
`;

const FileNameTitle = styled.strong`
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  text-align: left;

  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AudioPlayer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 50%;

    min-height: 40px;
    min-width: 40px;
    max-height: 40px;
    max-width: 40px;

    background-color: rgba(var(--spotlight-primary), 1);

    svg {
      fill: #fff;
      stroke: #fff;

      min-height: 20px;
      min-width: 20px;
      max-height: 20px;
      max-width: 20px;
    }

    &:hover {
      cursor: pointer;
      background-color: rgba(var(--spotlight-primary), 0.8);
    }
  }

  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    text-align: left;
    color: var(--text-body);
    user-select: none;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 8px;
`;

export {
  HasFileContentContainer,
  AudioPlayer,
  ButtonsContainer,
  FileNameTitle,
};
