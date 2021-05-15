import { message } from 'antd';
import { history } from 'umi';
import type { ImmerReducer } from 'umi';

export type GlobalModelState = {
  appCode: string;
  title: string;
  subApps: any[];
  currentMountedSubApp: string;

};

export type GlobalModelType = {
  // namespace 必须和 文件名保持一致
  namespace: 'mainAppGlobal';
  state: GlobalModelState;
  effects: {
    
  };
  reducers: {
    setSubApps: ImmerReducer<GlobalModelState>;
    setCurrentMountedSubApp: ImmerReducer<GlobalModelState>
  };
};

const model: GlobalModelType = {
  namespace: 'mainAppGlobal',
  state: {
    appCode: 'growth',
    title: 'mainApp',
    // 子应用列表
    subApps: [],
    // 当前挂载的子应用
    currentMountedSubApp: '',
  },
  reducers: {
    setSubApps(state, {apps}) {
      state.subApps = apps;
    },
    setCurrentMountedSubApp(state, {currentMountedSubApp}) {
        state.currentMountedSubApp = currentMountedSubApp;
    },
  },
  effects: {
  
  }
}

export default model;