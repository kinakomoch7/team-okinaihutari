import * as core from '@actions/core';
import axios from 'axios';
import { rateDataType } from '../types/RateDataType';

type Props = {
  userName: string;
}

const getRateData = async (props: Props): Promise<rateDataType> => {
  const { userName } = props;

  try {
    const response = await axios.get(`https://atcoder.jp/users/${userName}/history/json`);
    const data = response.data;
    return data;

  } catch (error) {
    core.setFailed('fetch error');
    throw error;
  }
}

export default getRateData;