import { DiscordIcon, GithubIcon, TelegramIcon, TwitterIcon, YoutubeIcon } from '../assets';

export const TWITTER_KADDEX_OFFICIAL = {
  name: '@eckoDAO',
  link: 'https://twitter.com/eckoDAO',
};

export const TWITTER = {
  name: '@eckoWALLET',
  link: 'http://twitter.com/eckoWALLET',
  icon: <TwitterIcon />,
};
export const DISCORD = {
  name: 'Discord',
  link: 'https://discord.gg/runonflux',
  icon: <DiscordIcon />,
};

const GITHUB = {
  name: 'Github',
  link: 'https://github.com/runonflux',
  icon: <GithubIcon />,
};

const TELEGRAM = {
  name: 'Telegram',
  link: 'https://t.me/runonflux',
  icon: <TelegramIcon />,
};
const YOUTUBE = {
  name: 'Youtube',
  link: 'https://www.youtube.com/channel/UCphbdfb1MXYgUPsdhQPcnGw',
  icon: <YoutubeIcon />,
};

export const SOCIAL_MEDIA = [TWITTER, DISCORD, YOUTUBE, TELEGRAM, GITHUB];
