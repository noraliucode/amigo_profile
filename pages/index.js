import styled from 'styled-components'
import Head from 'next/head'

const Hello = styled.div`
  padding: 0;
  margin:0;
  width:100%;
  height:100%;
`

export default () => {
  return (<div>
    <Head>
    <style>{`
      html, body{
        font-family:‘Helvetica Neue’, ‘Helvetica’, ‘Arial’, ‘PingFang TC’, ‘微软雅黑‘, ‘Microsoft YaHei’, ‘华文细黑‘, ‘STHeiti’, sans-serif;
        padding:0;
        margin:0;
        background-color: palevioletred;
      }
    `}</style>
    </Head>
  <Hello>
    Yaaaaa Profile, I am coming
  </Hello>
  </div>)
}
