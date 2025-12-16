import React from 'react';
import { RoadmapEllipseShadowIcon, RoadmapFlagcon } from '../../../assets';
import theme from '../../../styles/theme';

const whiteGrey = theme.colors.lightGrey;

const CONFIGURATION = {
  FIAT_ON_OFF_RAMP: {
    circle: { x: 490, y: 596 },
    text: {
      x: 435,
      y: 662,
      tspan: [{ x: 0, y: 0, text: 'Fiat on/off Ramp' }],
    },
    color: theme.colors.lightYellow,
  },

  SWAP_FUNCTIONALITY: {
    circle: { x: 740, y: 596 },
    text: {
      x: 680,
      y: 662,
      tspan: [{ x: 0, y: 0, text: 'Swap Functionality' }],
    },
    color: theme.colors.lightYellow,
  },

  SPIREKEY: {
    circle: { x: 990, y: 596 },
    text: {
      x: 945,
      y: 662,
      tspan: [
        { x: 0, y: 0, text: 'SpireKey' },
        { x: -10, y: 25, text: 'Integration' },
      ],
    },
    color: theme.colors.lightYellow,
  },

  KADENA_INDEXER: {
    circle: { x: 1240, y: 596 },
    text: {
      x: 1190,
      y: 662,
      tspan: [
        { x: 0, y: 0, text: 'Kadena' },
        { x: -10, y: 25, text: 'Indexer' },
      ],
    },
    color: theme.colors.lightYellow,
  },

  KADENA_EVM_SUPPORT: {
    circle: { x: 1490, y: 596 },
    text: {
      x: 1430,
      y: 662,
      tspan: [
        { x: 0, y: 0, text: 'Kadena EVM' },
        { x: 20, y: 25, text: 'Support' },
      ],
    },
    color: '#FA41A5',
  },

  CI_CD: {
    circle: { x: 1490, y: 381 },
    text: {
      x: 1455,
      y: 446,
      tspan: [{ x: 0, y: 0, text: 'CI/CD Pipeline' }],
    },
    color: theme.colors.lightYellow,
  },

  INTERNATIONALIZATION: {
    circle: { x: 1240, y: 381 },
    text: {
      x: 1180,
      y: 446,
      tspan: [{ x: 0, y: 0, text: '30+ Languages' }],
    },
    color: theme.colors.lightYellow,
  },

  DARK_THEME: {
    circle: { x: 990, y: 381 },
    text: {
      x: 950,
      y: 446,
      tspan: [{ x: 0, y: 0, text: 'Dark Theme' }],
    },
    color: theme.colors.lightYellow,
  },

  AUTO_TOKEN_DETECTION: {
    circle: { x: 740, y: 381 },
    text: {
      x: 685,
      y: 446,
      tspan: [
        { x: 0, y: 0, text: 'Auto Token' },
        { x: 0, y: 25, text: 'Detection' },
      ],
    },
    color: theme.colors.lightYellow,
  },

  ANALYTICS_DASHBOARD: {
    circle: { x: 490, y: 381 },
    text: {
      x: 440,
      y: 446,
      tspan: [
        { x: 0, y: 0, text: 'Analytics' },
        { x: -10, y: 25, text: 'Dashboard' },
      ],
    },
    color: theme.colors.lightYellow,
  },

  WALLETCONNECT_V2: {
    circle: { x: 490, y: 190 },
    text: {
      x: 425,
      y: 255,
      tspan: [{ x: 0, y: 0, text: 'WalletConnect v2' }],
    },
    color: theme.colors.lightYellow,
  },

  HARDWARE_WALLET: {
    circle: { x: 740, y: 190 },
    text: {
      x: 675,
      y: 255,
      tspan: [
        { x: 0, y: 0, text: 'Hardware Wallet' },
        { x: 5, y: 25, text: '(Ledger)' },
      ],
    },
    color: theme.colors.lightYellow,
  },

  DOWNLOADS: {
    circle: { x: 990, y: 190 },
    text: {
      x: 930,
      y: 255,
      tspan: [{ x: 0, y: 0, text: '35,000 Active Users' }],
    },
    color: theme.colors.lightYellow,
  },

  NFTs_INTEGRATION: {
    circle: { x: 1240, y: 190 },
    text: {
      x: 1180,
      y: 255,
      tspan: [{ x: 0, y: 0, text: 'NFTs integration' }],
    },
    color: theme.colors.lightYellow,
  },

  INFRASTRUCTURE_MIGRATION: {
    circle: { x: 1490, y: 190 },
    text: {
      x: 1415,
      y: 255,
      tspan: [
        { x: 0, y: 0, text: 'Infrastructure to' },
        { x: 5, y: 25, text: 'RunOnFlux' },
      ],
    },
    color: theme.colors.lightYellow,
  },
};
const FLAG = {
  flag: 'translate(1504 568)',
  shadow: 'translate(1484 590)',
};

const XWalletRoadmap2022 = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="1743.17"
      height="501"
      viewBox="0 0 1743.17 501"
      style={{ overflow: 'visible' }}
    >
      <g id="Roadmap" transform="translate(5 -190)">
        <g id="Group_68777" data-name="Group 68777">
          <g id="Group_69201" data-name="Group 69201" transform="translate(-160 -841)">
            <g id="Group_69198" data-name="Group 69198" opacity="0.1">
              <path id="Path_44497" data-name="Path 44497" d="M136,1047l-72-36v72Z" fill={theme.colors.lightYellow} />
              <path id="Path_44498" data-name="Path 44498" d="M244,1047l-72-36v72Z" transform="translate(-2)" fill={theme.colors.lightYellow} />
              <path id="Path_44499" data-name="Path 44499" d="M352,1047l-72-36v72Z" transform="translate(-5)" fill={theme.colors.lightYellow} />
              <path id="Path_44500" data-name="Path 44500" d="M460,1047l-72-36v72Z" transform="translate(-7)" fill={theme.colors.lightYellow} />
              <path id="Path_44501" data-name="Path 44501" d="M568,1047l-72-36v72Z" transform="translate(-10)" fill={theme.colors.lightYellow} />
              <path id="Path_44502" data-name="Path 44502" d="M676,1047l-72-36v72Z" transform="translate(-12)" fill={theme.colors.lightYellow} />
              <path id="Path_44503" data-name="Path 44503" d="M784,1047l-72-36v72Z" transform="translate(-15)" fill={theme.colors.lightYellow} />
            </g>
          </g>

          <path
            id="Path_43816"
            data-name="Path 43816"
            d="M1520.5,613.005H369a82.6,82.6,0,0,1-16.524-1.666A81.569,81.569,0,0,1,323.151,599a82.231,82.231,0,0,1-29.707-36.076,81.611,81.611,0,0,1-4.779-15.4A82.6,82.6,0,0,1,287,531.005v-54a82.6,82.6,0,0,1,1.666-16.524,81.568,81.568,0,0,1,12.34-29.325,82.231,82.231,0,0,1,36.076-29.707,81.61,81.61,0,0,1,15.4-4.779A82.6,82.6,0,0,1,369,395.005H1588a77.624,77.624,0,0,0,43.608-13.32,78.237,78.237,0,0,0,28.263-34.319A77.507,77.507,0,0,0,1666,317.005v-31a77.693,77.693,0,0,0-77.77-78H289L-5,208v-4l294,.005H1588.23a82.45,82.45,0,0,1,16.514,1.666,81.161,81.161,0,0,1,29.263,12.341,81.886,81.886,0,0,1,34.338,51.471A83.059,83.059,0,0,1,1670,286.005v31a82.6,82.6,0,0,1-1.666,16.524,81.564,81.564,0,0,1-12.34,29.325,82.238,82.238,0,0,1-36.076,29.707,81.6,81.6,0,0,1-15.395,4.779A82.59,82.59,0,0,1,1588,399.005H369a77.624,77.624,0,0,0-43.609,13.32,78.235,78.235,0,0,0-28.262,34.319A77.512,77.512,0,0,0,291,477.005v54a77.624,77.624,0,0,0,13.32,43.609,78.236,78.236,0,0,0,34.319,28.262A77.513,77.513,0,0,0,369,609.005H1520.5Z"
            fill={whiteGrey}
          />
          {/* blue line */}
          <line
            id="Line_585"
            data-name="Line 585"
            x2="1890"
            transform="translate(-300 206)"
            fill="none"
            stroke={theme.colors.lightYellow}
            strokeWidth="4"
          />

          {/* curve */}
          <path
            id="curve"
            data-name="Path curve"
            d="M1588,395.005a77.624,77.624,0,0,0,43.608-13.32,78.237,78.237,0,0,0,28.263-34.319A77.507,77.507,0,0,0,1666,317.005v-31a77.693,77.693,0,0,0-77.77-78v-4a82.45,82.45,0,0,1,16.514,1.666,81.161,81.161,0,0,1,29.263,12.341,81.886,81.886,0,0,1,34.338,51.471A83.059,83.059,0,0,1,1670,286.005v31a82.6,82.6,0,0,1-1.666,16.524,81.564,81.564,0,0,1-12.34,29.325,82.238,82.238,0,0,1-36.076,29.707,81.6,81.6,0,0,1-15.395,4.779A82.59,82.59,0,0,1,1588,399.005"
            transform="translate(0 0)"
            fill={theme.colors.lightYellow}
            strokeWidth="4"
          />

          {/* blue line */}

          <line
            id="Line_585"
            data-name="Line 585"
            x2="1220"
            transform="translate(369 397)"
            fill="none"
            stroke={theme.colors.lightYellow}
            strokeWidth="4"
          />

          {/* curve */}
          <path
            id="Path_43816"
            data-name="Path 43816"
            d="M369,613.005a82.6,82.6,0,0,1-16.524-1.666A81.569,81.569,0,0,1,323.151,599a82.231,82.231,0,0,1-29.707-36.076,81.611,81.611,0,0,1-4.779-15.4A82.6,82.6,0,0,1,287,531.005v-54a82.6,82.6,0,0,1,1.666-16.524,81.568,81.568,0,0,1,12.34-29.325,82.231,82.231,0,0,1,36.076-29.707,81.61,81.61,0,0,1,15.4-4.779A82.6,82.6,0,0,1,369,395.005c.023-.017,0,4,0,4a77.624,77.624,0,0,0-43.609,13.32,78.235,78.235,0,0,0-28.262,34.319A77.512,77.512,0,0,0,291,477.005v54a77.624,77.624,0,0,0,13.32,43.609,78.236,78.236,0,0,0,34.319,28.262A77.513,77.513,0,0,0,369,609.005Z"
            transform="translate(0 0)"
            fill={theme.colors.lightYellow}
          />

          {/* dotted line */}
          <g id="Group_68779" data-name="Group 68779">
            <g id="Group_68778" data-name="Group 68778">
              <path
                id="Path_43817"
                data-name="Path 43817"
                d="M1738.17,612h-6.049v-2h6.049Zm-14.049,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Z"
                fill={whiteGrey}
              />
            </g>
          </g>

          {/* blue line */}
          <line
            id="Line_585"
            data-name="Line 585"
            x2="886"
            transform="translate(369 611)"
            fill="none"
            stroke={theme.colors.lightYellow}
            strokeWidth="4"
          />

          {Object.keys(CONFIGURATION).map((config, i) => {
            const nodeConfig = CONFIGURATION[config];
            return (
              <g
                key={i}
                style={{ cursor: nodeConfig.href ? 'pointer' : 'default' }}
                onClick={() => {
                  if (nodeConfig.href) {
                    window.open(nodeConfig.href, '_blank');
                  }
                }}
              >
                <circle
                  id={config}
                  cx="15"
                  cy="15"
                  r="15"
                  transform={`translate(${nodeConfig.circle.x} ${nodeConfig.circle.y})`}
                  fill={nodeConfig.color}
                />
                <text
                  transform={`translate(${nodeConfig.text.x} ${nodeConfig.text.y})`}
                  fill={nodeConfig.color}
                  fontSize="20"
                  fontFamily={theme.fontFamily.basier}
                  letterSpacing="-0.1em"
                >
                  {nodeConfig.text.tspan.map((tspan, i2) => (
                    <tspan key={i2} x={tspan.x} y={tspan.y} fontSize={tspan.fontSize || 20} fill={nodeConfig.color}>
                      {tspan.text}
                    </tspan>
                  ))}
                </text>
              </g>
            );
          })}
        </g>

        {/* FLAG */}
        <g id="ring" transform={FLAG.flag}>
          <RoadmapFlagcon />
        </g>
        <g id="ring" transform={FLAG.shadow}>
          <RoadmapEllipseShadowIcon />
        </g>
      </g>
    </svg>
  );
};

export default XWalletRoadmap2022;
