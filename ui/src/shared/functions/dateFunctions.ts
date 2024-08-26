import { EUROPEAN_DATE_FORMAT, US_DATE_FORMAT } from '../constants';

import { format } from 'date-fns';

export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-GB', options).toUpperCase();
};

export const getDayString = (date: Date) => {
  return date.toLocaleDateString('en-US', { weekday: 'long' });
};

export const formatTime = (date: Date) => {
  return date.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const getDualFormatDate = (date: string) => {
  const eurDate = format(date, EUROPEAN_DATE_FORMAT);
  const usDate = format(date, US_DATE_FORMAT);

  return [eurDate, usDate];
};
