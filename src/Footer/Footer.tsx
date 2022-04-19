import React from '@portal/react';
import styled from '@portal/styled-components';
import { FooterColumns } from '@theme/Footer/FooterColumns';
import { FooterCopyright } from '@theme/Footer/FooterCopyright';

export default function Footer({ columns, copyrightText }) {
  if (!(columns.length || copyrightText)) {
    return null;
  }

  return (
    <FooterContainer>
      <FooterColumns columns={columns} />
      <FooterCopyright copyrightText={copyrightText} />
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  font-size: 1rem;
  flex-shrink: 0;
  background-color: var(--footer-color-background);
  color: var(--footer-color-text);
  font-family: var(--font-family-primary);
  a,
  a:hover {
    color: var(--footer-color-text);
  }
`;
