import axios from "axios";
import { generalConstants } from '../constants';

export const api = axios.create({
  baseURL: generalConstants.URL_API
});