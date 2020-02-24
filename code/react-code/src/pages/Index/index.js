import React, {Component} from 'react';
import 'pageStyle/index.less';
import CommonLeftMenu from 'component/commonLeftMenu.js';
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }
    render() {
        return (
            <div className='allStock'>
                <CommonLeftMenu />
                <div className='rightContent'>
                    <div className='right'>
                        <div className='content'>
                            <table className='data'>
                                <thead>
                                    <th>供货商</th>
                                    <th>商品种类</th>
                                    <th>商品编号</th>
                                    <th>克重(件/g)</th>
                                    <th>总计件数</th>
                                    <th>总计克重(g)</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>虚拟供应商1</td>
                                        <td>银壶</td>
                                        <td>10_20200220</td>
                                        <td>10g</td>
                                        <td>20</td>
                                        <td>200g</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}