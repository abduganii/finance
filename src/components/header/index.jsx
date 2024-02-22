import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,

} from '@ant-design/icons';
import { Layout, Button } from 'antd';
import { useEffect, useState } from 'react';
import { BarArr, DateArr, FinaceArr } from './data';
const { Header } = Layout;
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import cls from './header.module.scss'
import paramsToObject from '../../hooks/paramsToObject';

export default function HeaderUI({ setCollapsed, collapsed, colorBgContainer }) {
  const [dateSize, setdateSize] = useState(0)
  const pathname = useLocation()
  const [params, setSearchParams] = useSearchParams()
 
  useEffect(() => {
    if (!params.get("typeIndex")) {
      setSearchParams({ ...paramsToObject(params.entries()),typeIndex: 0,type: FinaceArr?.[0]?.text   })
    }
    if (!params.get("dateIndex")) {
      setSearchParams({ ...paramsToObject(params.entries()),dateIndex: 0,date: DateArr?.[0]?.link   })
   }
  },[pathname])
 
  return (
    <Header
      className={cls.Header}
        style={{
        padding: 0,
        marginBottom:"10px",
        background: colorBgContainer,
        }}
    >
        <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
            fontSize: '16px',
            width: 64,
            height: 64,
        }}
      />
     <div className={cls.Header__side}>
        <div
          style={{
            "width": `calc(100% / ${FinaceArr.length })`,
            "left":`calc((100% / ${FinaceArr.length }) * ${params.get("typeIndex")})`
          }}
          className={cls.Header__side__animation}
        ></div>
        {FinaceArr.map((e,i) => (
          <p
            className={`${cls.Header__side__item} ${params.get("type") == e?.text ? cls.Header__side__itemActive : ""}`}
            key={e?.id}
            onClick={() => {
              setSearchParams({ ...paramsToObject(params.entries()),type: e?.text ,typeIndex: i   })
            }}
          >{e.text}
          </p>
        ))}
    
      </div>
      <div className={cls.Header__side}>
      <div
          style={{
            "width": `calc(100% / ${DateArr.length })`,
            "left":`calc((100% / ${DateArr.length }) * ${params.get("dateIndex")})`
          }}
          className={cls.Header__side__animation}
        ></div>
        {DateArr.map((e,i) => (
          <p
         className={`${cls.Header__side__item} ${params.get("date") == e?.link ? cls.Header__side__itemActive : ""}`}
            key={e?.id}
            onClick={() => {
              setSearchParams({ ...paramsToObject(params.entries()),date: e?.link ,dateIndex: i   })
            }}
          >{e.text}
          </p>
        ))}
       
      </div>
      {pathname.pathname != "/grafik" ? <>

        <div className={cls.Header__side}>
       
          {BarArr.map((e,i) => (
            <Link 
              to={e?.link}
              className={`${cls.Header__side__item}`}
              key={e?.id}
            >
              {e.text}
            </Link>
          ))}
       
          </div>
        {
          pathname.pathname != "/category" &&  pathname.pathname != "/budget"  ?
          <button className={cls.Header__add} onClick={() => setSearchParams({ ...paramsToObject(params.entries()), opneMadal: true })}>
          Добавить
          </button>:""}
        </>:""
       
      }
  </Header> 
  )
}
