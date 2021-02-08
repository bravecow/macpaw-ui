import { ReactNode } from 'react';

export enum Language {
  DE = 'de',
  EN= 'en',
  ES = 'es',
  FR = 'fr',
  IT = 'it',
  JA = 'ja',
  KO = 'ko',
  NL = 'nl',
  PL = 'pl',
  PT = 'pt',
  RU = 'ru',
  TR = 'tr',
  UK = 'uk',
  ZH = 'zh',
}

export type Error = boolean | string | ReactNode;
