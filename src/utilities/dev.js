export const isDebug = () => process?.env?.NODE_ENV === 'development';

export const getDomain = () =>
  isDebug() ? 'http://localhost:3000' : process?.env?.NEXT_PUBLIC_API_URL;

export const getCMSDomain = () => process?.env?.NEXT_PUBLIC_CMS_URL || '';
export const getStrapiMedia = () => process?.env?.NEXT_PUBLIC_MC_URL || '';

export const getGAID = () => process?.env?.NEXT_PUBLIC_GA_ID || '';
export const getAPIToken = () => process?.env?.NEXT_PUBLIC_API_TOKEN || '';
export const getMsmId = () => process?.env?.NEXT_PUBLIC_MSM_ID || '';
export const getChatID = () => process?.env?.NEXT_PUBLIC_CHAT_ID || '';
export const getBotToken = () => process?.env?.NEXT_PUBLIC_BOT_TOKEN || '';

export const getPlayLink = () => process?.env?.NEXT_PUBLIC_PLAY_LINK || '/ ';
