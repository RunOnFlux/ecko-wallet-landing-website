import React from 'react';
import styled from 'styled-components';
import { RoadmapFlagcon } from '../../../assets';
import { getColor } from '../../../styles/theme';
import { FlexContainer } from '../../shared/Container';
import Label from '../../shared/Label';

const Line = styled(FlexContainer)`
  position: absolute;
  border-left: ${({ theme: { colors } }) => `3px solid ${colors.lightGrey}`};
  top: 0;
  bottom: 0;
  left: 35px;
  ::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 82%;
    background: ${({ color }) => getColor(color)};
    top: 0;
    bottom: 0;
    left: -3px;
  }
`;

const XWalletMobileRoadmap2022 = ({ color }) => {
  return (
    <FlexContainer className="column justify-sb relative w-100" style={{ padding: '20px 0' }}>
      <Line color={color} />
      {Object.values(CONFIGURATION)
        .sort((a, b) => a.position - b.position)
        .map((value, i) => {
          return (
            <FlexContainer
              key={i}
              style={{ paddingLeft: 28.5, zIndex: 2, marginTop: value.isMain && 20 }}
              onClick={() => {
                if (value.href) {
                  window.open(value.href, '_blank');
                }
              }}
            >
              <div
                style={{
                  position: 'relative',
                  height: 16,
                  width: 16,
                  background: getColor(value?.isMain ? 'pink' : value.isCompleted ? color : 'light-grey'),
                  borderRadius: '50%',
                }}
              >
                {value?.isMain && <RoadmapFlagcon style={{ position: 'absolute', width: 40, left: 3, bottom: 8, zIndex: 4 }} />}
              </div>

              <FlexContainer className="column" gap={8} key={i} style={{ marginLeft: 10 }}>
                {value?.text?.map((tspan, j) => (
                  <Label key={j} fontSize={tspan.fontSize || 15} color={value?.isMain ? 'pink' : value.isCompleted ? color : 'light-grey'}>
                    {tspan.text}
                  </Label>
                ))}
              </FlexContainer>
            </FlexContainer>
          );
        })}
    </FlexContainer>
  );
};

export default XWalletMobileRoadmap2022;

const CONFIGURATION = {
  DOWNLOADS: {
    position: 0,
    text: [{ text: '35,000 Active Users' }],
    isCompleted: true,
  },
  SWAP_FUNTIONALITY: {
    position: 1,
    text: [{ text: 'Swap Functionality' }],
    isCompleted: true,
  },
  FIAT_ON_OFF_RAMP: {
    position: 2,
    text: [{ text: 'Fiat on/off Ramp' }],
    isCompleted: true,
  },
  NFTs_INTEGRATION: {
    position: 3,
    text: [{ text: 'NFTs integration' }],
    isCompleted: true,
  },
  INFRASTRUCTURE_MIGRATION: {
    position: 4,
    text: [{ text: 'Infrastructure Migration to RunOnFlux' }],
    isCompleted: true,
  },
  CI_CD: {
    position: 5,
    text: [{ text: 'CI/CD Pipeline' }],
    isCompleted: true,
  },
  INTERNATIONALIZATION: {
    position: 6,
    text: [{ text: '30+ Languages Support' }],
    isCompleted: true,
  },
  DARK_THEME: {
    position: 7,
    text: [{ text: 'Dark Theme' }],
    isCompleted: true,
  },
  AUTO_TOKEN_DETECTION: {
    position: 8,
    text: [{ text: 'Auto Token Detection' }],
    isCompleted: true,
  },
  ANALYTICS_DASHBOARD: {
    position: 9,
    text: [{ text: 'Analytics Dashboard' }],
    isCompleted: true,
  },
  WALLETCONNECT_V2: {
    position: 10,
    text: [{ text: 'WalletConnect v2' }],
    isCompleted: true,
  },
  HARDWARE_WALLET: {
    position: 11,
    text: [{ text: 'Hardware Wallet Support (Ledger)' }],
    isCompleted: true,
  },
  SPIREKEY: {
    position: 12,
    text: [{ text: 'SpireKey Integration' }],
    isCompleted: true,
    isMain: true,
  },
  KADENA_INDEXER: {
    position: 13,
    text: [{ text: 'Kadena Indexer Infrastructure' }],
    isCompleted: false,
  },
  SDK_EASY_INTEGRATION_KIT: {
    position: 14,
    text: [{ text: 'SDK Documentation Rework' }],
    isCompleted: false,
  },
};
