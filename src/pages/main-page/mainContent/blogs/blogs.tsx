import blog from './blogs.module.scss'
import {Input, Select} from "antd";
import {SearchOutlined} from "@ant-design/icons";


export const Blogs = () => {
    return (
        <div className={blog.layout}>
            <div className={blog.title}>Blogs</div>
            <div className={blog.searchField}>
                <Input placeholder={'search'} prefix={<SearchOutlined className={blog.anticon}/>}/>
                <Select
                    defaultValue={'123'}
                    className={blog.select}
                        options={[
                            {value: '123', label: 'New blogs first'},
                            {value: 'asc', label: 'From A to Z'},
                            {value: 'desc', label: 'From Z to A'},

                        ]}/>


            </div>

            <div>
                <div>
                    <img src="" alt=""/>
                    <div>title</div>
                    <div>website</div>
                    <div>description</div>
                </div>
                <div>
                    <img src="" alt=""/>
                    <div>title</div>
                    <div>website</div>
                    <div>description</div>
                </div>
                <div>
                    <img src="" alt=""/>
                    <div>title</div>
                    <div>website</div>
                    <div>description</div>
                </div>
                <div>
                    <img src="" alt=""/>
                    <div>title</div>
                    <div>website</div>
                    <div>description</div>
                </div>
            </div>
        </div>
    )
}
