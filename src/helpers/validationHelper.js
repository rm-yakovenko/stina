import * as yup from 'yup';

export const YOUTUBE_REG_EXP =
  /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/;

export const youTubeUrl = yup
  .string()
  .matches(YOUTUBE_REG_EXP, 'Must be a valid YouTube video link')
  .required('Field is required');
