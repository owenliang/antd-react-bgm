import React from "react";

import {Button, Modal} from "antd";

export default class ArticleCreate extends React.Component {
    render() {
        return (
            <Button onClick={()=> {
                const modal = Modal.info({
                    onOk: ()=>{
                        return new Promise((resolve, reject)=>{
                            setTimeout(() => {
                                console.log("提交成功");
                                resolve();
                            }, 2000);
                        });
                    }
                });
                modal.update({
                    title: '新建文章',
                    content: <p>这里可以放任意react组件</p>,
                });
            }}>点击编辑</Button>
        );
    }
}
