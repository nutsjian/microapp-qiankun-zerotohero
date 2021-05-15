import request from './utils/request';
import React from 'react';
import { useSelector, Link, useStore, getDvaApp, history } from 'umi';
import { message } from 'antd';
import AppProvider from '@/layouts/AppProvider';

message.config({
    maxCount: 1,
});

let SUB_APPS = [] as any;
window.GLOBAL_EVENT = {} as any;

export const qiankun = request('/api/appList', { useOwnUrl: true }).then((res: any) => {
    console.log('子应用列表：', res);
    const qiankunConfig = {
        apps: [],
        sandbox: true,
        lifeCycles: {
            beforeLoad: (props: any) => {
                // console.log(1111111, props);
            },
            beforeMount: (props: any) => {
                // console.log(2222222, props);
                getDvaApp()._store.dispatch({
                    type: 'mainAppGlobal/setCurrentMountedSubApp',
                    currentMountedSubApp: props.name
                });
            },
            afterMount: (props: any) => {
                // console.log(3333333, props);
            },
            beforeUnmount: (props: any) => {
                // console.log(4444444, props);
                getDvaApp()._store.dispatch({
                    type: 'mainAppGlobal/setCurrentMountedSubApp',
                    currentMountedSubApp: ''
                });
            },
            afterUnmount: (props: any) => {
                // console.log(5555555, props);
            }
        }
    };
    if (res && res.data && res.data.list && res.data.list.length) {
        SUB_APPS = res.data.list;
        qiankunConfig.apps = SUB_APPS.map((item: any) => ({
            ...item,
            props: {}
        }));
    } else {
        message.error('子应用初始化失败');
    }
    return qiankunConfig;
}).catch((error: any) => {
    console.log(error);
    message.error('子应用初始化失败');
});

export function rootContainer(container: any) {
    return (
        <AppProvider subApps={SUB_APPS}>
            {container}
        </AppProvider>
    )
};

export function render(oldRender: Function) {
    if (!Utils.hasBaseUserInfo()) {
        history.replace('/login');
    }
    oldRender();
}
